import PriseRdvClient from "../../../components/services/prise-rdv/PriseRdvClient";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Rendez-vous commerciaux B2B qualifiés | Suzali Conseil",
  description: "Remplissez l’agenda de vos commerciaux avec des rendez-vous B2B qualifiés, obtenus auprès des bons décideurs et synchronisés à votre CRM.",
  path: "/services/prise-rendez-vous-b2b",
});

export default function PriseRdvB2BPage() {
  return <PriseRdvClient />;
}
