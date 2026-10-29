import { CommercialClientPage } from "../../../components/services/commercial/CommercialClientPage";
import ServiceLongForm from "../../../components/services/ServiceLongForm";
import { COMMERCIAL_CONTENT } from "../../../content/services/commercial";
import JsonLd from "../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../lib/seo";
import { serviceSchema } from "../../../lib/structured-data";

const PAGE = {
  title: "Prospection commerciale B2B en France | Suzali Conseil",
  description:
    "Prospection externalisée, téléprospection, outbound et prise de rendez-vous : une équipe cible, contacte et qualifie vos prospects B2B. Audit gratuit.",
  path: "/services/commercial",
};

export const metadata = createPageMetadata(PAGE);

export default function CommercialPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Solutions de prospection commerciale B2B",
          serviceType: "Prospection commerciale B2B",
          description: PAGE.description,
          path: PAGE.path,
        })}
      />
      <CommercialClientPage>
        <ServiceLongForm content={COMMERCIAL_CONTENT} />
      </CommercialClientPage>
    </>
  );
}
