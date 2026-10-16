import { DigitalClientPage } from "../../../components/services/digital/DigitalClientPage";
import JsonLd from "../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../lib/seo";
import { serviceSchema } from "../../../lib/structured-data";

const PAGE = {
  title: "Agence digitale B2B : web, SEO et IA | Suzali Conseil",
  description:
    "Agence digitale B2B : stratégie, sites web, SEO, Google Ads et automatisation IA pour attirer des prospects qualifiés et convertir. Planifiez un appel.",
  path: "/services/digital",
};

export const metadata = createPageMetadata({ ...PAGE, theme: "digital" });

export default function DigitalPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Agence digitale B2B",
          serviceType: "Marketing digital B2B",
          description: PAGE.description,
          path: PAGE.path,
        })}
      />
      <DigitalClientPage />
    </>
  );
}
