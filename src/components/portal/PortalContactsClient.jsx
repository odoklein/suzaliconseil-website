"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, User, Mail, Building2, Phone, Calendar } from "lucide-react";

const STATUS_LABELS = {
  contacted: "Contacté",
  meeting_scheduled: "RDV planifié",
  qualified: "Qualifié",
  closed_won: "Gagné",
  closed_lost: "Perdu",
};

const STATUS_COLORS = {
  contacted: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  meeting_scheduled: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  qualified: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  closed_won: "bg-green-500/20 text-green-300 border-green-500/30",
  closed_lost: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

export default function PortalContactsClient({
  initialContacts,
  statusFilter,
  searchQuery,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchQuery || "");
  const [status, setStatus] = useState(statusFilter || "");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search.trim()) params.set("q", search.trim());
    if (status) params.set("status", status);
    router.push(`/portal/contacts${params.toString() ? `?${params}` : ""}`);
  };

  const contacts = initialContacts;

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-heading font-bold text-2xl text-white mb-1">
        Contacts SDR
      </h2>
      <p className="text-white/60 text-sm mb-8">
        Prospects contactés par notre équipe pour votre compte.
      </p>

      <form onSubmit={handleSearch} className="flex flex-wrap gap-4 mb-8">
        <div className="relative flex-1 min-w-[200px]">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
            size={20}
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher (nom, email, société…)"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#b0ff5b]/50"
          />
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#b0ff5b]/50"
        >
          <option value="">Tous les statuts</option>
          {Object.entries(STATUS_LABELS).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-[#b0ff5b] text-[#0d332b] font-bold hover:bg-[#a0eb50]"
        >
          Filtrer
        </button>
      </form>

      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="px-6 py-4 text-white/70 font-semibold text-sm">Contact</th>
                <th className="px-6 py-4 text-white/70 font-semibold text-sm">Société</th>
                <th className="px-6 py-4 text-white/70 font-semibold text-sm">Statut</th>
                <th className="px-6 py-4 text-white/70 font-semibold text-sm">Contacté le</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-white/50">
                    Aucun contact pour le moment.
                  </td>
                </tr>
              ) : (
                contacts.map((c) => (
                  <tr
                    key={c.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80">
                          <User size={18} />
                        </div>
                        <div>
                          <div className="font-medium text-white">{c.fullName}</div>
                          <div className="flex items-center gap-1.5 text-white/60 text-sm">
                            <Mail size={12} />
                            {c.email}
                          </div>
                          {c.phone && (
                            <div className="flex items-center gap-1.5 text-white/50 text-sm">
                              <Phone size={12} />
                              {c.phone}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {c.company ? (
                        <span className="flex items-center gap-1.5 text-white/80">
                          <Building2 size={14} />
                          {c.company}
                        </span>
                      ) : (
                        <span className="text-white/40">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium border ${STATUS_COLORS[c.status] || "bg-white/10 text-white/70"}`}
                      >
                        {STATUS_LABELS[c.status] || c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/60 text-sm">
                      {c.contactedAt
                        ? new Date(c.contactedAt).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "—"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
