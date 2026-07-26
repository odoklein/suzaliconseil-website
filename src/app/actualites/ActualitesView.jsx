"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function getTheme(post) {
  if (post.topic === "digital") return "digital";
  const text = `${(post.title || "").toLowerCase()} ${(typeof post.excerpt === "string" ? post.excerpt.replace(/<[^>]+>/g, " ") : "").toLowerCase()}`;
  if (
    /digital|digitale|web|seo|référencement|transformation digitale|content marketing|numérique|applications|développement d|automatisation|outils numériques|technologies b2b/.test(
      text,
    )
  )
    return "digital";
  return "commercial";
}

function formatDate(post) {
  const raw = post.publishedAt || post.createdAt;
  if (!raw) return "";
  return new Date(raw).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function cleanExcerpt(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/<[^>]+>/g, "")
    .trim()
    .slice(0, 160);
}

function readingTime(post) {
  const text =
    typeof post.excerpt === "string" ? post.excerpt.replace(/<[^>]+>/g, " ") : "";
  const words = text.split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 200)) + " min";
}

function FeaturedCard({ post }) {
  const theme = getTheme(post);
  const isDigital = theme === "digital";

  return (
    <Link
      href={`/actualites/${post.slug}`}
      className="group relative grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 border border-gray-100/80"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
        {post.coverImageUrl ? (
          <Image
            src={post.coverImageUrl}
            alt={post.title || ""}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${isDigital ? "from-[#0c4a6e] via-[#0369a1] to-[#0ea5e9]" : "from-[#0D332B] via-[#1a4d42] to-[#2d7a6a]"}`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

        <div className="absolute top-5 left-5">
          <span
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest backdrop-blur-xl border shadow-lg ${isDigital ? "bg-sky-500/80 text-white border-white/20" : "bg-emerald-600/80 text-white border-white/20"}`}
          >
            {isDigital ? "Digital" : "Commercial"}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 lg:p-12">
        <div className="flex items-center gap-3 text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">
          <time>{formatDate(post)}</time>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{readingTime(post)}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="text-amber-500 font-bold">A la une</span>
        </div>

        <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-4 group-hover:text-[#0D332B] transition-colors">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-gray-500 leading-relaxed text-base mb-8 line-clamp-3">
            {cleanExcerpt(post.excerpt)}
          </p>
        )}

        <div className="flex items-center text-sm font-bold">
          <span
            className={`transition-colors ${isDigital ? "text-sky-600 group-hover:text-sky-700" : "text-[#0D332B] group-hover:text-emerald-700"}`}
          >
            Lire l&apos;article complet
          </span>
          <svg
            className={`w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2 ${isDigital ? "text-sky-600" : "text-[#0D332B]"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function PostCard({ post, index }) {
  const theme = getTheme(post);
  const isDigital = theme === "digital";

  return (
    <Link
      key={post.id || post.slug}
      href={`/actualites/${post.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col h-full border border-gray-100/60"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        {post.coverImageUrl ? (
          <Image
            src={post.coverImageUrl}
            alt={post.title || ""}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${isDigital ? "from-[#0c4a6e] via-[#0369a1] to-[#0ea5e9]" : "from-[#0D332B] via-[#1a4d42] to-[#2d7a6a]"}`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-3.5 left-3.5">
          <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-xl border shadow-sm ${isDigital ? "bg-sky-500/80 text-white border-white/20" : "bg-emerald-600/80 text-white border-white/20"}`}
          >
            {isDigital ? "Digital" : "Commercial"}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2.5 text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-3">
          <time>{formatDate(post)}</time>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{readingTime(post)}</span>
        </div>

        <h3 className="font-heading text-[17px] font-bold text-gray-900 leading-snug mb-2.5 group-hover:text-[#0D332B] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-5 flex-1">
            {cleanExcerpt(post.excerpt)}
          </p>
        )}

        <div className="pt-4 mt-auto border-t border-gray-100/80 flex items-center justify-between">
          <span
            className={`text-sm font-bold transition-colors ${isDigital ? "text-sky-600 group-hover:text-sky-700" : "text-[#0D332B] group-hover:text-emerald-700"}`}
          >
            Lire
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isDigital ? "bg-sky-50 group-hover:bg-sky-100" : "bg-emerald-50 group-hover:bg-emerald-100"}`}
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 ${isDigital ? "text-sky-600" : "text-[#0D332B]"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ActualitesView({ posts: initialPosts = [] }) {
  const initial = Array.isArray(initialPosts) ? initialPosts : [];
  const [list, setList] = useState(initial);
  const [loading, setLoading] = useState(initial.length === 0);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (initial.length > 0) return;
    let cancelled = false;
    fetch("/api/actualites", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const items = Array.isArray(data) ? data : (data?.list ?? []);
        setList(Array.isArray(items) ? items : []);
      })
      .catch((e) => {
        if (!cancelled) setError(e.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [initial.length]);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return list;
    return list.filter((p) => getTheme(p) === activeFilter);
  }, [list, activeFilter]);

  const [featured, ...rest] = filtered;

  const topicCounts = useMemo(() => {
    let digital = 0;
    let commercial = 0;
    for (const p of list) {
      if (getTheme(p) === "digital") digital++;
      else commercial++;
    }
    return { all: list.length, digital, commercial };
  }, [list]);

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA]">
      {/* Hero Header */}
      <header className="relative w-full overflow-hidden bg-[#0D332B] px-4 pt-24 pb-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-40%] left-[-15%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-white/[0.04] to-transparent blur-3xl" />
          <div className="absolute bottom-[-30%] right-[-10%] w-[55%] h-[55%] rounded-full bg-gradient-to-tl from-emerald-400/[0.06] to-transparent blur-3xl" />
          <div className="absolute top-[20%] right-[15%] w-[25%] h-[25%] rounded-full bg-gradient-to-bl from-amber-400/[0.03] to-transparent blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.08] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">
              Blog & Ressources
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
            Actualités{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-lime-300">
              & Insights
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/70 font-light leading-relaxed">
            Décryptages, stratégies et retours d&apos;expérience pour accélérer
            votre performance commerciale et digitale.
          </p>
        </div>
      </header>

      {/* Content Area */}
      <section className="w-full px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          {!loading && !error && list.length > 0 && (
            <div className="flex items-center justify-center mb-10">
              <div className="inline-flex items-center bg-white rounded-2xl shadow-lg shadow-black/[0.04] border border-gray-100 p-1.5 gap-1">
                {[
                  { key: "all", label: "Tous", count: topicCounts.all },
                  {
                    key: "commercial",
                    label: "Commercial",
                    count: topicCounts.commercial,
                  },
                  {
                    key: "digital",
                    label: "Digital",
                    count: topicCounts.digital,
                  },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveFilter(tab.key)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeFilter === tab.key
                        ? "bg-[#0D332B] text-white shadow-md"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                    <span
                      className={`text-[11px] font-bold px-1.5 py-0.5 rounded-md ${
                        activeFilter === tab.key
                          ? "bg-white/20 text-white/90"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {loading ? (
            <div className="w-full py-24 flex flex-col items-center justify-center">
              <div className="relative w-14 h-14 mb-5">
                <div className="absolute inset-0 border-[3px] border-[#0D332B]/10 rounded-full" />
                <div className="absolute inset-0 border-[3px] border-transparent border-t-[#0D332B] rounded-full animate-spin" />
              </div>
              <p className="text-gray-400 font-medium text-sm">
                Chargement des articles...
              </p>
            </div>
          ) : error ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-lg border border-red-100/60 max-w-lg mx-auto">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 text-red-500 mb-5">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Impossible de charger les actualités
              </h3>
              <p className="text-gray-500 text-sm mb-6">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2.5 bg-[#0D332B] text-white rounded-xl hover:bg-[#1a4d42] transition-all font-semibold text-sm shadow-md shadow-[#0D332B]/20"
              >
                Réessayer
              </button>
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-2xl bg-white p-16 text-center shadow-sm border border-gray-100 max-w-lg mx-auto">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gray-50 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-base font-medium">
                Aucune actualité publiée pour le moment.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {featured && <FeaturedCard post={featured} />}

              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {rest.map((post, index) => {
                    if (!post.slug) return null;
                    return (
                      <PostCard
                        key={post.id || post.slug}
                        post={post}
                        index={index}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
