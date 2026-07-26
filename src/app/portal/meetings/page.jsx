import { redirect } from "next/navigation";
import { getPortalClient } from "../../../lib/portal-auth";
import { getPortalMeetings } from "../../../lib/portal-data";
import PortalMeetingsClient from "../../../components/portal/PortalMeetingsClient";

export const metadata = {
  title: "Rendez-vous | Espace client",
  description: "Rendez-vous planifiés.",
  robots: { index: false, follow: false },
};

export default async function PortalMeetingsPage({ searchParams }) {
  const client = await getPortalClient();
  if (!client) redirect("/portal/login");

  const status = searchParams?.status?.toString() || null;
  const meetings = await getPortalMeetings(client.id, { status });

  return (
    <div className="p-8">
      <PortalMeetingsClient initialMeetings={meetings} statusFilter={status} />
    </div>
  );
}
