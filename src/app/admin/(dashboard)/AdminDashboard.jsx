"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  updateSettings,
  togglePublish,
  deletePost,
  triggerGenerate,
  createManualPost,
  updatePostSeo,
  updateLeadStatus,
  updateContactStatus,
} from "./actions";

const STATUS_LABELS = {
  new: "Nouveau",
  contacted: "Contacté",
  closed: "Clôturé",
};

const STATUS_STYLES = {
  new: "border-amber-200 text-amber-700 bg-amber-50",
  contacted: "border-sky-200 text-sky-700 bg-sky-50",
  closed: "border-emerald-200 text-emerald-700 bg-emerald-50",
};

function StatusSelect({ id, idField, status, action }) {
  const [loading, setLoading] = useState(false);
  return (
    <form
      action={async (formData) => {
        setLoading(true);
        await action(formData);
        setLoading(false);
      }}
    >
      <input type="hidden" name={idField} value={id} />
      <select
        name="status"
        defaultValue={status || "new"}
        disabled={loading}
        onChange={(e) => e.target.form.requestSubmit()}
        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg border outline-none cursor-pointer disabled:opacity-50 ${STATUS_STYLES[status || "new"]}`}
      >
        {Object.entries(STATUS_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </form>
  );
}

function EmptyState({ text }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
      <p className="text-gray-400 font-medium">{text}</p>
    </div>
  );
}

function StatCard({ label, value, icon, accent = "emerald" }) {
  const accents = {
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    sky: "bg-sky-50 text-sky-600 border-sky-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    violet: "bg-violet-50 text-violet-600 border-violet-100",
  };
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center border ${accents[accent]}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-2xl font-extrabold text-gray-900 leading-none">
          {value}
        </p>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function AdminDashboard({
  settings,
  posts,
  leads = [],
  contacts = [],
  pagination,
  currentFilters,
}) {
  const router = useRouter();
  const [generating, setGenerating] = useState(false);
  const [message, setMessage] = useState("");
  const [manualMessage, setManualMessage] = useState("");
  const [manualLoading, setManualLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("list");

  const s = settings || {
    frequencyPerWeek: "3",
    tone: "expert",
    autoPublish: "true",
    lastRunAt: null,
  };

  async function handleGenerate() {
    setGenerating(true);
    setMessage("");
    try {
      const res = await triggerGenerate();
      if (res && res.error) {
        setMessage("Erreur : " + res.error);
      } else {
        setMessage("Article généré avec succès.");
      }
    } catch (e) {
      setMessage("Erreur : " + (e.message || "échec"));
    }
    setGenerating(false);
  }

  const handleFilter = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const params = new URLSearchParams(window.location.search);
    params.set("page", "1");
    if (formData.get("source") && formData.get("source") !== "all")
      params.set("source", formData.get("source"));
    else params.delete("source");
    if (formData.get("topic") && formData.get("topic") !== "all")
      params.set("topic", formData.get("topic"));
    else params.delete("topic");
    if (formData.get("startDate"))
      params.set("startDate", formData.get("startDate"));
    else params.delete("startDate");
    if (formData.get("endDate"))
      params.set("endDate", formData.get("endDate"));
    else params.delete("endDate");
    router.push(`?${params.toString()}`);
  };

  const goToPage = (p) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", p.toString());
    router.push(`?${params.toString()}`);
  };

  const publishedCount = posts.filter((p) => p.publishedAt).length;
  const draftCount = posts.filter((p) => !p.publishedAt).length;
  const digitalCount = posts.filter((p) => p.topic === "digital").length;
  const commercialCount = posts.filter((p) => p.topic !== "digital").length;

  const tabs = [
    {
      key: "list",
      label: "Articles",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      key: "leads",
      label: "Leads & Contacts",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      key: "generation",
      label: "Génération",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Gérez vos articles, filtrez et générez du contenu.
          </p>
        </div>
        <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-100 p-1 gap-0.5">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.key
                  ? "bg-[#0D332B] text-white shadow-md"
                  : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label="Total articles"
          value={pagination?.totalItems ?? posts.length}
          accent="emerald"
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          }
        />
        <StatCard
          label="Publiés"
          value={publishedCount}
          accent="sky"
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          }
        />
        <StatCard
          label="Brouillons"
          value={draftCount}
          accent="amber"
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          }
        />
        <StatCard
          label="Digital / Commercial"
          value={`${digitalCount} / ${commercialCount}`}
          accent="violet"
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          }
        />
      </div>

      {/* Tab: Articles */}
      {activeTab === "list" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* Filters */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-base text-gray-900 mb-4 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filtres
            </h2>
            <form
              onSubmit={handleFilter}
              className="flex flex-wrap gap-4 items-end"
            >
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Source
                </label>
                <select
                  name="source"
                  defaultValue={currentFilters?.source || "all"}
                  className="border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm bg-white min-w-[130px] focus:ring-2 focus:ring-[#0D332B]/20 focus:border-[#0D332B] outline-none transition-all"
                >
                  <option value="all">Tout</option>
                  <option value="manual">Manuel</option>
                  <option value="auto">IA / Auto</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Thème
                </label>
                <select
                  name="topic"
                  defaultValue={currentFilters?.topic || "all"}
                  className="border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm bg-white min-w-[130px] focus:ring-2 focus:ring-[#0D332B]/20 focus:border-[#0D332B] outline-none transition-all"
                >
                  <option value="all">Tout</option>
                  <option value="commercial">Commercial</option>
                  <option value="digital">Digital</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  De
                </label>
                <input
                  type="date"
                  name="startDate"
                  defaultValue={currentFilters?.startDate}
                  className="border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#0D332B]/20 focus:border-[#0D332B] outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  À
                </label>
                <input
                  type="date"
                  name="endDate"
                  defaultValue={currentFilters?.endDate}
                  className="border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#0D332B]/20 focus:border-[#0D332B] outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#0D332B] text-white rounded-xl text-sm hover:bg-[#1a4d42] font-semibold transition-all shadow-sm"
              >
                Appliquer
              </button>
              <button
                type="button"
                onClick={() => router.push("?")}
                className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm hover:bg-gray-50 font-semibold transition-all text-gray-500"
              >
                Réinitialiser
              </button>
            </form>
          </section>

          {/* Post List */}
          <section className="space-y-4">
            {posts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gray-50 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-gray-300"
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
                <p className="text-gray-400 font-medium">
                  Aucun article pour le moment.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="px-6 py-5 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg border ${
                            post.topic === "digital"
                              ? "text-sky-600 bg-sky-50 border-sky-100"
                              : "text-emerald-700 bg-emerald-50 border-emerald-100"
                          }`}
                        >
                          {post.topic === "digital" ? "Digital" : "Commercial"}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-gray-50 text-gray-400 border border-gray-100">
                          {post.source === "auto" ? "IA" : "Manuel"}
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg border ${
                            post.publishedAt
                              ? "bg-green-50 text-green-600 border-green-100"
                              : "bg-amber-50 text-amber-600 border-amber-100"
                          }`}
                        >
                          {post.publishedAt ? "En ligne" : "Brouillon"}
                        </span>
                      </div>

                      <h3 className="font-heading text-base font-bold text-gray-900 leading-snug truncate">
                        {post.title}
                      </h3>

                      <p className="text-xs text-gray-400">
                        {post.publishedAt
                          ? `Publié le ${new Date(post.publishedAt).toLocaleDateString("fr-FR")} à ${new Date(post.publishedAt).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`
                          : `Créé le ${new Date(post.createdAt).toLocaleDateString("fr-FR")}`}
                      </p>
                      <details className="pt-2">
                        <summary className="cursor-pointer text-xs font-bold text-emerald-700">
                          Modifier les métadonnées SEO
                        </summary>
                        <form
                          action={updatePostSeo}
                          className="mt-3 grid max-w-2xl gap-3"
                        >
                          <input type="hidden" name="postId" value={post.id} />
                          <label className="grid gap-1 text-xs font-semibold text-gray-500">
                            Titre SEO (42 caractères maximum)
                            <input
                              name="seoTitle"
                              maxLength={42}
                              defaultValue={post.seoTitle || ""}
                              className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900"
                            />
                          </label>
                          <label className="grid gap-1 text-xs font-semibold text-gray-500">
                            Description SEO (130 à 160 caractères)
                            <textarea
                              name="seoDescription"
                              minLength={130}
                              maxLength={160}
                              defaultValue={post.seoDescription || ""}
                              rows={3}
                              className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900"
                            />
                          </label>
                          <button className="w-fit rounded-lg bg-[#0D332B] px-4 py-2 text-xs font-bold text-white">
                            Enregistrer le SEO
                          </button>
                        </form>
                      </details>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <TogglePublishButton
                        postId={post.id}
                        published={!!post.publishedAt}
                      />
                      <DeleteButton postId={post.id} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-gray-400 font-medium">
                  Page {pagination.currentPage} / {pagination.totalPages}{" "}
                  <span className="text-gray-300">
                    ({pagination.totalItems} articles)
                  </span>
                </span>
                <div className="flex gap-2">
                  <button
                    disabled={pagination.currentPage <= 1}
                    onClick={() => goToPage(pagination.currentPage - 1)}
                    className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white transition-all text-gray-600"
                  >
                    Précédent
                  </button>
                  <button
                    disabled={pagination.currentPage >= pagination.totalPages}
                    onClick={() => goToPage(pagination.currentPage + 1)}
                    className="px-4 py-2 bg-[#0D332B] text-white rounded-xl text-sm font-semibold hover:bg-[#1a4d42] disabled:opacity-40 transition-all shadow-sm"
                  >
                    Suivant
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {/* Tab: Leads & Contacts */}
      {activeTab === "leads" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              label="Total Leads"
              value={leads.length}
              accent="amber"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
            />
            <StatCard
              label="Nouveaux"
              value={leads.filter((l) => l.status === "new" || !l.status).length}
              accent="sky"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <StatCard
              label="Total Contacts"
              value={contacts.length}
              accent="emerald"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <StatCard
              label="Contacts non lus"
              value={contacts.filter((c) => c.status === "new" || !c.status).length}
              accent="violet"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              }
            />
          </div>

          {/* Leads Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-base text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Leads ({leads.length})
            </h2>
            {leads.length === 0 ? (
              <EmptyState text="Aucun lead pour le moment." />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Nom</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Téléphone</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Offre</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-3 px-4 font-medium text-gray-900">{lead.fullName}</td>
                        <td className="py-3 px-4">
                          <a href={`mailto:${lead.email}`} className="text-[#0D332B] hover:underline">{lead.email}</a>
                        </td>
                        <td className="py-3 px-4 text-gray-500">{lead.phone || "-"}</td>
                        <td className="py-3 px-4">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-100">
                            {lead.offerName || lead.offerId || "-"}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-500 max-w-[200px] truncate" title={lead.message}>{lead.message || "-"}</td>
                        <td className="py-3 px-4">
                          <StatusSelect id={lead.id} idField="leadId" status={lead.status} action={updateLeadStatus} />
                        </td>
                        <td className="py-3 px-4 text-xs text-gray-400">
                          {new Date(lead.createdAt).toLocaleDateString("fr-FR")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* Contacts Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-base text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Messages de contact ({contacts.length})
            </h2>
            {contacts.length === 0 ? (
              <EmptyState text="Aucun message de contact pour le moment." />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Nom</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Sujet</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {contacts.map((contact) => (
                      <tr key={contact.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-3 px-4 font-medium text-gray-900">{contact.fullName}</td>
                        <td className="py-3 px-4">
                          <a href={`mailto:${contact.email}`} className="text-[#0D332B] hover:underline">{contact.email}</a>
                        </td>
                        <td className="py-3 px-4 text-gray-500">{contact.subject || "-"}</td>
                        <td className="py-3 px-4 text-gray-500 max-w-[250px] truncate" title={contact.message}>{contact.message}</td>
                        <td className="py-3 px-4">
                          <StatusSelect id={contact.id} idField="contactId" status={contact.status} action={updateContactStatus} />
                        </td>
                        <td className="py-3 px-4 text-xs text-gray-400">
                          {new Date(contact.createdAt).toLocaleDateString("fr-FR")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      )}

      {/* Tab: Generation */}
      {activeTab === "generation" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* Settings */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Paramètres de génération
            </h2>
            <p className="text-sm text-gray-400 mb-5">
              Configurez la fréquence, le ton et la publication automatique.
            </p>
            <form action={updateSettings} className="space-y-5 max-w-md">
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Fréquence (articles/semaine)
                </label>
                <select
                  name="frequencyPerWeek"
                  defaultValue={s.frequencyPerWeek}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#0D332B]/20 focus:border-[#0D332B] outline-none transition-all"
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Ton
                </label>
                <select
                  name="tone"
                  defaultValue={s.tone}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#0D332B]/20 focus:border-[#0D332B] outline-none transition-all"
                >
                  <option value="expert">Expert</option>
                  <option value="accessible">Accessible</option>
                  <option value="professional">Professionnel</option>
                </select>
              </div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="autoPublish"
                  value="true"
                  defaultChecked={s.autoPublish === "true"}
                  className="w-4 h-4 rounded border-gray-300 text-[#0D332B] focus:ring-[#0D332B]/30"
                />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  Publication automatique après génération
                </span>
              </label>
              {s.lastRunAt && (
                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Dernière exécution :{" "}
                  {new Date(s.lastRunAt).toLocaleString("fr-FR")}
                </p>
              )}
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#0D332B] text-white rounded-xl text-sm hover:bg-[#1a4d42] font-semibold transition-all shadow-sm"
              >
                Enregistrer
              </button>
            </form>
          </section>

          {/* Auto Generation */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Génération automatique (Gemini)
            </h2>
            <p className="text-sm text-gray-400 mb-5">
              Génère un article SEO optimisé avec image de couverture et
              l&apos;enregistre en base.
            </p>
            <button
              type="button"
              onClick={handleGenerate}
              disabled={generating}
              className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-50 font-semibold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              {generating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Génération en cours...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Générer un article
                </>
              )}
            </button>
            {message && (
              <p
                className={`mt-3 text-sm font-medium ${message.startsWith("Erreur") ? "text-red-600" : "text-emerald-600"}`}
              >
                {message}
              </p>
            )}
          </section>

          {/* Manual Post */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-base text-gray-900 mb-1 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Article manuel
            </h2>
            <p className="text-sm text-gray-400 mb-5">
              Créez un article à la main. L&apos;image de couverture peut être
              générée par IA.
            </p>
            <form
              action={async (formData) => {
                setManualLoading(true);
                setManualMessage("");
                try {
                  const result = await createManualPost(formData);
                  if (result.ok) {
                    setManualMessage(result.message || "Article créé.");
                  } else {
                    setManualMessage(result.error || "Erreur");
                  }
                } catch (e) {
                  setManualMessage("Erreur : " + (e.message || "échec"));
                }
                setManualLoading(false);
              }}
              className="space-y-5 max-w-2xl"
            >
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Titre *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#0D332B]/20 focus:border-[#0D332B] outline-none transition-all"
                  placeholder="Titre de l'article"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Extrait (optionnel)
                </label>
                <input
                  type="text"
                  name="excerpt"
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#0D332B]/20 focus:border-[#0D332B] outline-none transition-all"
                  placeholder="Meta description / accroche"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Titre SEO (42 caractères maximum)
                </label>
                <input
                  type="text"
                  name="seoTitle"
                  maxLength={42}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#0D332B]/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Description SEO (130 à 160 caractères)
                </label>
                <textarea
                  name="seoDescription"
                  minLength={130}
                  maxLength={160}
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#0D332B]/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Contenu (HTML) *
                </label>
                <textarea
                  name="content"
                  required
                  rows={8}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 font-mono text-sm focus:ring-2 focus:ring-[#0D332B]/20 focus:border-[#0D332B] outline-none transition-all resize-y"
                  placeholder="<p>Paragraphe...</p><h2>Sous-titre</h2><p>...</p>"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Thème
                </label>
                <select
                  name="topic"
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#0D332B]/20 focus:border-[#0D332B] outline-none transition-all"
                >
                  <option value="commercial">Commercial (vert)</option>
                  <option value="digital">Digital (bleu)</option>
                </select>
              </div>
              <div className="flex flex-wrap gap-5">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="generateImage"
                    value="true"
                    defaultChecked
                    className="w-4 h-4 rounded border-gray-300 text-[#0D332B] focus:ring-[#0D332B]/30"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    Générer l&apos;image de couverture (IA)
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="publishNow"
                    value="true"
                    className="w-4 h-4 rounded border-gray-300 text-[#0D332B] focus:ring-[#0D332B]/30"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    Publier immédiatement
                  </span>
                </label>
              </div>
              <button
                type="submit"
                disabled={manualLoading}
                className="px-6 py-3 bg-[#0D332B] text-white rounded-xl text-sm hover:bg-[#1a4d42] font-semibold transition-all shadow-sm disabled:opacity-50 flex items-center gap-2"
              >
                {manualLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Création en cours...
                  </>
                ) : (
                  "Créer l'article"
                )}
              </button>
              {manualMessage && (
                <p
                  className={`text-sm font-medium ${manualMessage.startsWith("Erreur") ? "text-red-600" : "text-emerald-600"}`}
                >
                  {manualMessage}
                </p>
              )}
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

function TogglePublishButton({ postId, published }) {
  const [loading, setLoading] = useState(false);
  const newPublish = !published;
  return (
    <form
      action={async (formData) => {
        setLoading(true);
        await togglePublish(formData);
        setLoading(false);
      }}
    >
      <input type="hidden" name="postId" value={postId} />
      <input
        type="hidden"
        name="publish"
        value={newPublish ? "true" : "false"}
      />
      <button
        type="submit"
        disabled={loading}
        className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all disabled:opacity-50 ${
          published
            ? "border-amber-200 text-amber-700 bg-amber-50 hover:bg-amber-100"
            : "border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100"
        }`}
      >
        {loading ? "..." : published ? "Dépublier" : "Publier"}
      </button>
    </form>
  );
}

function DeleteButton({ postId }) {
  const [loading, setLoading] = useState(false);

  return (
    <form
      action={async (formData) => {
        if (
          !confirm(
            "Voulez-vous vraiment SUPPRIMER cet article ? Cette action est irréversible.",
          )
        )
          return;
        setLoading(true);
        await deletePost(formData);
        setLoading(false);
      }}
    >
      <input type="hidden" name="postId" value={postId} />
      <button
        type="submit"
        disabled={loading}
        className="w-8 h-8 flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg disabled:opacity-50 transition-all"
        title="Supprimer définitivement"
      >
        {loading ? (
          <div className="w-3.5 h-3.5 border-2 border-red-300 border-t-red-600 rounded-full animate-spin" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
        )}
      </button>
    </form>
  );
}
