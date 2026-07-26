import TransactionalServicePage from "../../../components/services/TransactionalServicePage";
import { createPageMetadata } from "../../../lib/seo";
import { TRANSACTIONAL_SERVICES } from "../../../lib/transactional-services";

const service = TRANSACTIONAL_SERVICES.fichier;
export const metadata = createPageMetadata(service);

export default function FichierProspectionPage() {
  return <TransactionalServicePage service={service} />;
}
