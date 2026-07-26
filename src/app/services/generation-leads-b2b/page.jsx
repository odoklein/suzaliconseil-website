import LeadGenClient from "../../../components/services/lead-gen/LeadGenClient";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Agence de génération de leads B2B | Suzali Conseil",
  description: "Identifiez et qualifiez les bons prospects B2B grâce à une prospection multicanale pilotée par vos objectifs, votre marché et votre cycle de vente.",
  path: "/services/generation-leads-b2b",
});

export default function GenerationLeadsB2BPage() {
  return <LeadGenClient />;
}
