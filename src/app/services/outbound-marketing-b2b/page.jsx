import OutboundClient from "../../../components/services/outbound/OutboundClient";
import { OUTBOUND_FAQ } from "../../../components/services/outbound/outbound-faq";
import JsonLd from "../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../lib/seo";
import { faqSchema, serviceSchema } from "../../../lib/structured-data";

// Intention principale : « agence outbound » (requête la plus vue du cluster).
const PAGE = {
  title: "Agence outbound B2B : rendez-vous qualifiés | Suzali Conseil",
  description:
    "Agence outbound B2B : cold email, LinkedIn et ABM opérés pour vous, du ciblage des décideurs aux rendez-vous qualifiés. Campagnes actives sous 7 jours.",
  path: "/services/outbound-marketing-b2b",
};

export const metadata = createPageMetadata(PAGE);

export default function OutboundMarketingB2BPage() {
  return (
    <>
      {/* FAQPage émis côté serveur à partir du même tableau que le rendu
          visible, pour que le balisage ne puisse pas décrire des questions
          absentes de la page. */}
      <JsonLd
        data={[
          serviceSchema({
            name: "Agence outbound B2B",
            serviceType: "Outbound marketing B2B",
            description: PAGE.description,
            path: PAGE.path,
          }),
          faqSchema(OUTBOUND_FAQ, PAGE.path),
        ]}
      />
      <OutboundClient />
    </>
  );
}
