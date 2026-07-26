import { DigitalClientPage } from "../../../components/services/digital/DigitalClientPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Agence digitale B2B en France | Suzali Conseil",
  description: "Stratégie digitale, sites web, SEO et automatisation : des solutions sur mesure pour développer votre visibilité et votre activité.",
  path: "/services/digital",
});

export default function DigitalPage() {
  return <DigitalClientPage />;
}
