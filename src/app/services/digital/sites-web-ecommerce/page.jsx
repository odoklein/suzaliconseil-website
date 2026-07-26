import SitesWebClient from "../../../../components/services/digital/sites-web/SitesWebClient";
import { createPageMetadata } from "../../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Agence web et e-commerce B2B | Suzali Conseil",
  description:
    "Créez un site web ou e-commerce rapide, accessible et pensé pour convertir, avec une architecture adaptée à votre activité et à vos clients B2B.",
  path: "/services/digital/sites-web-ecommerce",
  theme: "digital",
});

export default function SitesWebEcommercePage() {
  return <SitesWebClient />;
}
