import { ServicesHub } from "../../components/services/ServicesHub";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Services de croissance B2B en France | Suzali Conseil",
  description:
    "Découvrez nos services de prospection commerciale, génération de leads, stratégie digitale, création web, SEO et automatisation pour entreprises B2B.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesHub />;
}
