import TransactionalServicePage from "../../../components/services/TransactionalServicePage";
import { createPageMetadata } from "../../../lib/seo";
import { TRANSACTIONAL_SERVICES } from "../../../lib/transactional-services";

const service = TRANSACTIONAL_SERVICES.qualification;
export const metadata = createPageMetadata(service);

export default function QualificationLeadsPage() {
  return <TransactionalServicePage service={service} />;
}
