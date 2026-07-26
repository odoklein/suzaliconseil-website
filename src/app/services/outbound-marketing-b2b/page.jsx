import OutboundClient from "../../../components/services/outbound/OutboundClient";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Agence outbound marketing B2B | Suzali Conseil",
  description: "Déployez une prospection B2B multicanale, du cold email à LinkedIn, pour créer un flux régulier d’opportunités qualifiées et mesurables.",
  path: "/services/outbound-marketing-b2b",
});

export default function OutboundMarketingB2BPage() {
  return <OutboundClient />;
}
