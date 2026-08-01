import EtudesDeCasClient from "../../components/etudes-de-cas/EtudesDeCasClient";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Études de cas : projets commerciaux et digitaux | Suzali Conseil",
  description:
    "Prospection externalisée, plateformes web, automatisation : les missions menées par Suzali Conseil, du contexte aux livrables.",
  path: "/etudes-de-cas",
});

export default function EtudesDeCasPage() {
  return <EtudesDeCasClient />;
}
