import MarqueBlancheClient from "../../../components/services/marque-blanche/MarqueBlancheClient";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Force de vente externalisée B2B | Suzali Conseil",
  description:
    "Confiez votre closing et votre force de vente à une équipe dédiée qui représente votre marque, suit les opportunités et structure le passage à l’achat.",
  path: "/services/vente-marque-blanche",
});

export default function VenteMarqueBlanchePage() {
  return <MarqueBlancheClient />;
}
