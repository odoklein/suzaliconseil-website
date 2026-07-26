import DeveloppementAutoClient from "../../../../components/services/digital/developpement-auto/DeveloppementAutoClient";
import { createPageMetadata } from "../../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Développement et automatisation IA | Suzali Conseil",
  description:
    "Développez vos outils métier, intégrations et automatisations IA pour fiabiliser vos processus, gagner du temps et soutenir votre croissance.",
  path: "/services/digital/developpement-automatisation",
  theme: "digital",
});

export default function DeveloppementAutomatisationPage() {
  return <DeveloppementAutoClient />;
}
