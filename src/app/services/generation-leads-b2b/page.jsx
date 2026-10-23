import LeadGenClient from "../../../components/services/lead-gen/LeadGenClient";
import ServiceLongForm from "../../../components/services/ServiceLongForm";
import { GENERATION_LEADS_CONTENT } from "../../../content/services/generation-leads-b2b";
import JsonLd from "../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../lib/seo";
import { serviceSchema } from "../../../lib/structured-data";

const PAGE = {
  title: "Agence de génération de leads B2B | Suzali Conseil",
  description:
    "Agence de génération de leads B2B : ciblage ICP, prospection multicanale et qualification BANT pour alimenter vos commerciaux. Demandez un audit gratuit.",
  path: "/services/generation-leads-b2b",
};

export const metadata = createPageMetadata(PAGE);

export default function GenerationLeadsB2BPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Agence de génération de leads B2B qualifiés",
          serviceType: "Génération de leads B2B",
          description: PAGE.description,
          path: PAGE.path,
        })}
      />
      <LeadGenClient>
        <ServiceLongForm content={GENERATION_LEADS_CONTENT} />
      </LeadGenClient>
    </>
  );
}
