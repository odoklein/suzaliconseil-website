import TransactionalServicePage from "../../../components/services/TransactionalServicePage";
import { createPageMetadata } from "../../../lib/seo";
import { TRANSACTIONAL_SERVICES } from "../../../lib/transactional-services";

const service = TRANSACTIONAL_SERVICES.externalisee;
export const metadata = createPageMetadata(service);

export default function ProspectionExternaliseePage() {
  return <TransactionalServicePage service={service} />;
}
