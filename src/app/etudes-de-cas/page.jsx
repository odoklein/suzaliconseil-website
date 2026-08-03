import EtudesDeCasClient from "../../components/etudes-de-cas/EtudesDeCasClient";
import { createPageMetadata } from "../../lib/seo";
import { CASE_STUDIES } from "../../lib/case-studies";

export const metadata = createPageMetadata({
  title: "Études de cas : projets commerciaux et digitaux | Suzali Conseil",
  description:
    "Découvrez le contexte, la démarche et les livrables de missions de prospection, développement web et automatisation menées par Suzali Conseil.",
  path: "/etudes-de-cas",
  keywords: [
    "études de cas B2B",
    "prospection commerciale externalisée",
    "projet développement web",
    "automatisation CRM",
    "agence croissance B2B",
  ],
});

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Études de cas Suzali Conseil",
  itemListElement: CASE_STUDIES.map((study, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://suzaliconseil.com/etudes-de-cas#${study.id}`,
    item: {
      "@type": "CreativeWork",
      name: study.clientLabel,
      description: study.summary,
    },
  })),
};

export default function EtudesDeCasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />
      <EtudesDeCasClient />
    </>
  );
}
