import SeoAcquisitionClient from "../../../../components/services/digital/seo-acquisition/SeoAcquisitionClient";
import { createPageMetadata } from "../../../../lib/seo";

export const metadata = createPageMetadata({
  title: "SEO et acquisition digitale B2B | Suzali Conseil",
  description:
    "Attirez un trafic qualifié grâce au SEO, au contenu et aux campagnes d’acquisition digitale, avec un pilotage centré sur vos conversions B2B.",
  path: "/services/digital/seo-acquisition",
  theme: "digital",
});

export default function SeoAcquisitionPage() {
  return <SeoAcquisitionClient />;
}
