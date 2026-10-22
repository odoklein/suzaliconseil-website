import { ServicesHub } from "../../components/services/ServicesHub";
import JsonLd from "../../components/seo/JsonLd";
import { createPageMetadata, SITE_URL } from "../../lib/seo";
import { serviceSchema } from "../../lib/structured-data";

const PAGE = {
  title: "Services B2B : prospection et digital | Suzali Conseil",
  description:
    "Prospection B2B, prise de rendez-vous, génération de leads, sites web, SEO et automatisation, pilotés par une seule équipe. Planifiez un appel de cadrage.",
  path: "/services",
};

export const metadata = createPageMetadata({
  ...PAGE,
  keywords: [
    "services croissance B2B",
    "prospection commerciale externalisée",
    "génération de leads B2B",
    "prise de rendez-vous B2B",
    "stratégie digitale B2B",
    "agence digitale B2B",
    "automatisation CRM",
  ],
});

// Le FAQPage est émis par la FAQ affichée (ServicesHub > FaqList).
const servicesSchema = {
  ...serviceSchema({
    name: "Services de prospection commerciale et digitale B2B",
    serviceType: "Prospection commerciale et marketing digital B2B",
    description: PAGE.description,
    path: PAGE.path,
  }),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Expertises commerciales et digitales",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Prospection commerciale B2B",
        url: `${SITE_URL}/services/commercial`,
      },
      {
        "@type": "OfferCatalog",
        name: "Agence digitale B2B",
        url: `${SITE_URL}/services/digital`,
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <ServicesHub />
    </>
  );
}
