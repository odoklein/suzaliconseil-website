import { CommercialClientPage } from "../../../components/services/commercial/CommercialClientPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Prospection Commerciale B2B en France | Suzali",
  description: "Confiez votre prospection B2B à une équipe qui cible, contacte et qualifie vos futurs clients pour créer des opportunités commerciales.",
  path: "/services/commercial",
});

export default function CommercialPage() {
  return <CommercialClientPage />;
}
