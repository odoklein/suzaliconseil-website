import { redirect } from "next/navigation";
import { getPortalClient } from "../../../lib/portal-auth";
import { getPortalContacts } from "../../../lib/portal-data";
import PortalContactsClient from "../../../components/portal/PortalContactsClient";

export const metadata = {
  title: "Contacts SDR | Espace client",
  description: "Contacts prospectés par le SDR.",
  robots: { index: false, follow: false },
};

export default async function PortalContactsPage({ searchParams }) {
  const client = await getPortalClient();
  if (!client) redirect("/portal/login");

  const status = searchParams?.status?.toString() || null;
  const search = searchParams?.q?.toString() || null;
  const contacts = await getPortalContacts(client.id, { status, search });

  return (
    <div className="p-8">
      <PortalContactsClient
        initialContacts={contacts}
        clientId={client.id}
        statusFilter={status}
        searchQuery={search}
      />
    </div>
  );
}
