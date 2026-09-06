import OutboundClient from "../../../components/services/outbound/OutboundClient";
import { OUTBOUND_FAQ } from "../../../components/services/outbound/outbound-faq";
import { createPageMetadata, SITE_URL } from "../../../lib/seo";

const PATH = "/services/outbound-marketing-b2b";

export const metadata = createPageMetadata({
  title: "Agence outbound marketing B2B | Suzali Conseil",
  description: "Agence outbound B2B : cold email, LinkedIn et ABM opérés pour vous, du ciblage des décideurs aux rendez-vous qualifiés. Campagnes actives sous 7 jours.",
  path: PATH,
});

// FAQPage émis côté serveur à partir du même tableau que le rendu visible, pour
// que le balisage ne puisse pas décrire des questions absentes de la page.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}${PATH}#faq`,
  mainEntity: OUTBOUND_FAQ.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function OutboundMarketingB2BPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <OutboundClient />
    </>
  );
}
