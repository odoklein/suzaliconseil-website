import BrandingClient from "../../../../components/services/digital/branding/BrandingClient";
import JsonLd from "../../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../../lib/seo";
import { serviceSchema } from "../../../../lib/structured-data";

const PAGE = {
  title: "Branding et identité visuelle B2B | Suzali Conseil",
  description:
    "Branding B2B : logo, charte graphique et plateforme de marque cohérents sur tous vos supports commerciaux. Donnez à votre marque l'image qu'elle mérite.",
  path: "/services/digital/branding-identite",
};

export const metadata = createPageMetadata({ ...PAGE, theme: "digital" });

export default function BrandingIdentitePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Branding et identité visuelle B2B",
          serviceType: "Identité visuelle",
          description: PAGE.description,
          path: PAGE.path,
        })}
      />
      <BrandingClient />
    </>
  );
}
