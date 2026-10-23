import SitesWebClient from "../../../../components/services/digital/sites-web/SitesWebClient";
import ServiceLongForm from "../../../../components/services/ServiceLongForm";
import { SITES_WEB_CONTENT } from "../../../../content/services/digital-long-forms";
import JsonLd from "../../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../../lib/seo";
import { serviceSchema } from "../../../../lib/structured-data";

const PAGE = {
  title: "Création de sites web et e-commerce B2B | Suzali Conseil",
  description:
    "Création de sites web et e-commerce B2B rapides, accessibles et pensés pour convertir, avec un SEO intégré dès la maquette. Estimez le prix de votre site.",
  path: "/services/digital/sites-web-ecommerce",
};

export const metadata = createPageMetadata({ ...PAGE, theme: "digital" });

export default function SitesWebEcommercePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Création de sites web et e-commerce B2B",
          serviceType: "Création de site web",
          description: PAGE.description,
          path: PAGE.path,
        })}
      />
      <SitesWebClient>
        <ServiceLongForm content={SITES_WEB_CONTENT} />
      </SitesWebClient>
    </>
  );
}
