import { redirect } from "next/navigation";
import { getPortalClient } from "../../lib/portal-auth";
import PortalShell from "../../components/portal/PortalShell";

export const metadata = {
  title: "Espace client",
  description: "Portail client Suzali Conseil – contacts et rendez-vous.",
  robots: { index: false, follow: false },
};

export default async function PortalLayout({ children }) {
  const client = await getPortalClient();
  const isLoginPage = false; // we check in the child segment

  return (
    <div className="min-h-screen bg-[#0d332b] text-white">
      <PortalShell client={client}>{children}</PortalShell>
    </div>
  );
}
