import SeoAcquisitionClient from "../../../../components/services/digital/seo-acquisition/SeoAcquisitionClient";
import JsonLd from "../../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../../lib/seo";
import { serviceSchema } from "../../../../lib/structured-data";

// Intention principale : « agence acquisition digitale B2B » (plan SEO, phase 4).
const PAGE = {
  title: "Agence d'acquisition digitale B2B et SEO | Suzali Conseil",
  description:
    "Agence d'acquisition digitale B2B : SEO, Google Ads et Social Ads pilotés sur vos conversions, pas sur le trafic. Demandez un audit de votre acquisition.",
  path: "/services/digital/seo-acquisition",
};

export const metadata = createPageMetadata({ ...PAGE, theme: "digital" });

export default function SeoAcquisitionPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Agence d'acquisition digitale B2B",
          serviceType: "Acquisition digitale et SEO",
          description: PAGE.description,
          path: PAGE.path,
        })}
      />
      <SeoAcquisitionClient />
    </>
  );
}
