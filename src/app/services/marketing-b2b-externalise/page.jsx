import TransactionalServicePage from "../../../components/services/TransactionalServicePage";
import { createPageMetadata } from "../../../lib/seo";
import { TRANSACTIONAL_SERVICES } from "../../../lib/transactional-services";

const service = TRANSACTIONAL_SERVICES.marketing;
export const metadata = createPageMetadata(service);

export default function MarketingB2BExternalisePage() {
  return <TransactionalServicePage service={service} />;
}
