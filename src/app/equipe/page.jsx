import EquipeClient from "../../components/equipe/EquipeClient";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Notre équipe commerciale et digitale | Suzali Conseil",
  description:
    "Découvrez l'équipe Suzali Conseil : direction, prospection, digital et technologie réunis pour accompagner votre croissance B2B. Rencontrez-nous.",
  path: "/equipe",
});

export default function TeamPage() {
  return <EquipeClient />;
}
