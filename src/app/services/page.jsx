import { ServicesHub } from "../../components/services/ServicesHub";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Services de croissance B2B en France | Suzali Conseil",
  description:
    "Prospection B2B, prise de rendez-vous, stratégie digitale, sites web, SEO, branding et automatisation réunis dans un accompagnement pilotable.",
  path: "/services",
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

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Services de croissance B2B",
      provider: {
        "@type": "Organization",
        name: "Suzali Conseil",
        url: "https://suzaliconseil.com",
      },
      areaServed: {
        "@type": "Country",
        name: "France",
      },
      url: "https://suzaliconseil.com/services",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Expertises commerciales et digitales",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Performance commerciale",
            url: "https://suzaliconseil.com/services/commercial",
          },
          {
            "@type": "OfferCatalog",
            name: "Stratégie digitale",
            url: "https://suzaliconseil.com/services/digital",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Par quel service commencer si le besoin touche plusieurs sujets ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un échange de cadrage permet de réunir les expertises commerciales et digitales autour d'un même plan d'action.",
          },
        },
        {
          "@type": "Question",
          name: "Suzali Conseil peut-il prendre en charge l'exécution ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. Suzali Conseil peut opérer la prospection externalisée, renforcer la force de vente ou livrer un dispositif digital complet.",
          },
        },
        {
          "@type": "Question",
          name: "Suzali Conseil intervient-il sur des missions ponctuelles ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. Un audit, une landing page, un fichier qualifié, une campagne ou une automatisation peuvent être engagés séparément.",
          },
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesHub />
    </>
  );
}
