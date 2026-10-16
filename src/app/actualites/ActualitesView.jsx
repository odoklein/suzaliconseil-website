"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Reveal } from "../../components/kit";
import CoverImage from "./_components/CoverImage";
import ArticleRow, { decodeEntities } from "./_components/ArticleRow";

// Visual for the featured article when it has no cover of its own, or when
// its cover fails to load. Fixed, so the page never changes between renders.
const FEATURED_VISUAL = {
  src: "/images/actualites/dashboard-commercial.png",
  alt: "Dirigeant consultant un tableau de bord commercial interactif avec pipeline, taux de conversion et prévisions de revenus",
};

const CATEGORY_LABEL = { commercial: "Commercial", digital: "Digital" };

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

function rawDate(post) {
  return post.publishedAt || post.createdAt || null;
}

function formatDate(post) {
  const raw = rawDate(post);
  if (!raw) return "";
  return new Date(raw).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function isoDate(post) {
  const raw = rawDate(post);
  return raw ? new Date(raw).toISOString() : undefined;
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

/* The lead article, as an editorial split: the image, then the story. */
function FeaturedArticle({ post }) {
  const category = CATEGORY_LABEL[getTheme(post)];

  return (
    <Reveal>
      <Link
        href={`/actualites/${post.slug}`}
        className="group grid items-center gap-8 rounded-[22px] outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F6F7F4] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16"
      >
        <CoverImage
          src={post.coverImageUrl || FEATURED_VISUAL.src}
          fallbackSrc={FEATURED_VISUAL.src}
          alt={post.coverImageUrl ? post.title || "" : FEATURED_VISUAL.alt}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="aspect-[16/10] rounded-[18px] shadow-[0_50px_90px_-40px_rgba(13,51,43,0.35)]"
        />

        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.75rem] tracking-normal text-[#4E605B]">
            <time dateTime={isoDate(post)}>{formatDate(post)}</time>
            <span aria-hidden="true">·</span>
            <span>{readingTime(post)}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#0D332B]">À la une</span>
          </p>

          <h2 className="mt-5 max-w-[22ch] font-heading text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#0D332B]">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="mt-5 line-clamp-3 max-w-[52ch] text-lg leading-relaxed text-[#4E605B]">
              {decodeEntities(cleanExcerpt(post.excerpt))}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#0D332B]/14 pt-6">
            <span className="inline-flex items-center gap-2 text-[15px] font-semibold tracking-[-0.01em] text-[#0D332B] underline decoration-[#B0FF5B] decoration-[3px] underline-offset-[6px] transition-colors duration-300 group-hover:decoration-[#0D332B]">
              Lire l&apos;article complet
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
            <span className="text-sm font-medium text-[#4E605B]">{category}</span>
          </div>
        </div>
      </Link>
    </Reveal>
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

  const tabs = [
    { key: "all", label: "Tous", count: topicCounts.all },
    { key: "commercial", label: "Commercial", count: topicCounts.commercial },
    { key: "digital", label: "Digital", count: topicCounts.digital },
  ];

  return (
    <div className="w-full bg-[#F6F7F4]">
      <PageHero
        title="Guides et actualités de la prospection B2B"
        breadcrumbs={[{ label: "Actualités", href: "/actualites" }]}
        intro="Décryptages, stratégies et retours d'expérience pour accélérer votre performance commerciale et digitale."
      >
        {!loading && !error && list.length > 0 && (
          <div
            role="group"
            aria-label="Filtrer les articles"
            className="hero-rise mt-10 flex flex-wrap gap-2"
            style={{ "--rise-delay": "420ms" }}
          >
            {tabs.map((tab) => {
              const active = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`inline-flex min-h-11 items-center gap-2.5 rounded-full border px-5 text-sm font-semibold tracking-[-0.01em] outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#B0FF5B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D332B] ${
                    active
                      ? "border-[#B0FF5B] bg-[#B0FF5B] text-[#0D332B]"
                      : "border-white/15 text-[#F7FAF8] hover:border-white/40 hover:bg-white/[0.06]"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`font-mono text-[0.75rem] tabular-nums ${
                      active ? "text-[#0D332B]/70" : "text-[#B9CBC4]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </PageHero>

      <section className="w-full px-4 pb-24 pt-14 sm:px-6 md:pb-32 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div className="flex items-center justify-center gap-3 py-24 text-[15px] text-[#4E605B]" role="status">
              <span
                className="h-4 w-4 animate-spin rounded-full border-2 border-[#0D332B]/15 border-t-[#0D332B]"
                aria-hidden="true"
              />
              Chargement des articles...
            </div>
          ) : error ? (
            <div
              role="alert"
              className="mx-auto max-w-xl rounded-[22px] border border-[#0D332B]/12 bg-[#FCFDFC] p-8 md:p-10"
            >
              <p className="font-heading text-[1.4rem] font-semibold tracking-[-0.03em] text-[#0D332B]">
                Impossible de charger les actualités
              </p>
              <p className="mt-2 font-mono text-[0.8rem] text-[#4E605B]">{error}</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#0D332B] px-6 text-sm font-semibold text-[#F7FAF8] transition-colors duration-300 hover:bg-[#1A4D43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] focus-visible:ring-offset-2"
              >
                Réessayer
              </button>
            </div>
          ) : filtered.length === 0 ? (
            <p className="border-y border-[#0D332B]/14 py-16 text-center text-base text-[#4E605B]">
              Aucune actualité publiée pour le moment.
            </p>
          ) : (
            <>
              {featured?.slug && <FeaturedArticle post={featured} />}

              {rest.length > 0 && (
                <ul className="mt-20 border-t border-[#0D332B]/14 md:mt-28">
                  {rest.map((post, index) => {
                    if (!post.slug) return null;
                    return (
                      <ArticleRow
                        key={post.id || post.slug}
                        href={`/actualites/${post.slug}`}
                        title={post.title}
                        excerpt={cleanExcerpt(post.excerpt)}
                        date={formatDate(post)}
                        dateTime={isoDate(post)}
                        readTime={readingTime(post)}
                        category={CATEGORY_LABEL[getTheme(post)]}
                        index={index}
                      />
                    );
                  })}
                </ul>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
