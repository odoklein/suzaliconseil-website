import EquipeClient from "../../components/equipe/EquipeClient";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({ title: "Équipe commerciale et digitale | Suzali Conseil", description: "Découvrez l’équipe Suzali Conseil : des expertises commerciales, digitales et créatives réunies pour accompagner votre croissance.", path: "/equipe" });

export default function TeamPage() {
  return <EquipeClient />;
}
