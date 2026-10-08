import ProspectionExternaliseePage from "../../../components/services/externalisee/ProspectionExternaliseePage";
import { createPageMetadata } from "../../../lib/seo";
import { TRANSACTIONAL_SERVICES } from "../../../lib/transactional-services";

const service = TRANSACTIONAL_SERVICES.externalisee;
export const metadata = createPageMetadata(service);

export default function ProspectionExternaliseeRoute() {
  return <ProspectionExternaliseePage service={service} />;
}
