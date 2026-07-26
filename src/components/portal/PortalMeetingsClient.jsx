"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Calendar, Video } from "lucide-react";

const STATUS_LABELS = {
  scheduled: "Planifié",
  completed: "Terminé",
  cancelled: "Annulé",
  no_show: "Absent",
};

const STATUS_COLORS = {
  scheduled: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  completed: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  cancelled: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  no_show: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default function PortalMeetingsClient({ initialMeetings, statusFilter }) {
  const router = useRouter();
  const [status, setStatus] = React.useState(statusFilter || "");

  const handleFilter = () => {
    if (status) router.push(`/portal/meetings?status=${status}`);
    else router.push("/portal/meetings");
  };

  const meetings = initialMeetings;
  const upcoming = meetings.filter(
    (m) => m.status === "scheduled" && new Date(m.scheduledAt) >= new Date()
  );
  const past = meetings.filter(
    (m) => m.status !== "scheduled" || new Date(m.scheduledAt) < new Date()
  );
  const showSections = !statusFilter;

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-heading font-bold text-2xl text-white mb-1">
        Rendez-vous
      </h2>
      <p className="text-white/60 text-sm mb-8">
        Tous les rendez-vous planifiés avec notre équipe.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#b0ff5b]/50"
        >
          <option value="">Tous</option>
          {Object.entries(STATUS_LABELS).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={handleFilter}
          className="px-5 py-2.5 rounded-xl bg-[#b0ff5b] text-[#0d332b] font-bold hover:bg-[#a0eb50]"
        >
          Filtrer
        </button>
      </div>

      {showSections && upcoming.length > 0 && (
        <section className="mb-10">
          <h3 className="text-white/80 font-semibold mb-4 flex items-center gap-2">
            <Calendar size={18} />
            À venir
          </h3>
          <div className="space-y-4">
            {upcoming.map((m) => (
              <MeetingCard key={m.id} meeting={m} />
            ))}
          </div>
        </section>
      )}

      <section>
        {showSections && upcoming.length > 0 && (
          <h3 className="text-white/80 font-semibold mb-4">Historique</h3>
        )}
        <div className="space-y-4">
          {(statusFilter ? meetings : showSections ? past : meetings).map((m) => (
            <MeetingCard key={m.id} meeting={m} />
          ))}
        </div>
        {meetings.length === 0 && (
          <p className="text-white/50 py-8 text-center">
            Aucun rendez-vous pour le moment.
          </p>
        )}
      </section>
    </div>
  );
}

function MeetingCard({ meeting }) {
  const date = new Date(meeting.scheduledAt);
  const isUpcoming =
    meeting.status === "scheduled" && date >= new Date();

  return (
    <div
      className={`rounded-2xl border p-6 ${
        isUpcoming
          ? "bg-white/10 border-[#b0ff5b]/30"
          : "bg-white/5 border-white/10"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold text-white text-lg">{meeting.title}</h4>
          <p className="text-white/60 text-sm mt-1">
            {date.toLocaleDateString("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          {meeting.notes && (
            <p className="text-white/50 text-sm mt-2">{meeting.notes}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium border ${STATUS_COLORS[meeting.status] || "bg-white/10 text-white/70"}`}
          >
            {STATUS_LABELS[meeting.status] || meeting.status}
          </span>
          {meeting.meetingUrl && isUpcoming && (
            <a
              href={meeting.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#b0ff5b] text-[#0d332b] font-medium hover:bg-[#a0eb50]"
            >
              <Video size={16} />
              Rejoindre
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

