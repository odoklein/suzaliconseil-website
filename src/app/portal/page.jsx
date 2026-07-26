import { redirect } from "next/navigation";
import Link from "next/link";
import { getPortalClient } from "../../lib/portal-auth";
import { getPortalStats } from "../../lib/portal-data";
import { Users, Calendar, Phone, ArrowRight } from "lucide-react";

export default async function PortalDashboardPage() {
  const client = await getPortalClient();
  if (!client) redirect("/portal/login");

  const stats = await getPortalStats(client.id);

  const cards = [
    {
      label: "Contacts contactés par le SDR",
      value: stats.totalContacts,
      href: "/portal/contacts",
      icon: Users,
      color: "bg-white/10",
    },
    {
      label: "En attente (contactés)",
      value: stats.contacted,
      sub: "RDV à planifier",
      href: "/portal/contacts?status=contacted",
      icon: Phone,
      color: "bg-[#1a4d43]",
    },
    {
      label: "RDV planifiés",
      value: stats.meetingScheduled,
      href: "/portal/contacts?status=meeting_scheduled",
      icon: Calendar,
      color: "bg-[#b0ff5b]/20",
    },
    {
      label: "Rendez-vous cette semaine",
      value: stats.meetingsThisWeek,
      href: "/portal/meetings",
      icon: Calendar,
      color: "bg-white/10",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-white mb-1">
          Tableau de bord
        </h2>
        <p className="text-white/60 text-sm mb-8">
          Vue d&apos;ensemble de l&apos;activité SDR et des rendez-vous.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map(({ label, value, sub, href, icon: Icon, color }) => (
            <Link
              key={href}
              href={href}
              className={`${color} border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors group`}
            >
              <div className="flex items-start justify-between mb-4">
                <Icon className="text-white/70 group-hover:text-[#b0ff5b]" size={24} />
                <ArrowRight size={18} className="text-white/40 group-hover:text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-white/70 text-sm">{label}</div>
              {sub && <div className="text-white/50 text-xs mt-1">{sub}</div>}
            </Link>
          ))}
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="font-heading font-bold text-lg text-white mb-4">
            Accès rapide
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/portal/contacts"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/15 font-medium"
            >
              <Users size={18} />
              Voir tous les contacts
            </Link>
            <Link
              href="/portal/meetings"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/15 font-medium"
            >
              <Calendar size={18} />
              Voir les rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
