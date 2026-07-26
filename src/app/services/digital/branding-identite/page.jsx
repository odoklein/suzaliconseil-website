import BrandingClient from "../../../../components/services/digital/branding/BrandingClient";
import { createPageMetadata } from "../../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Branding et identité visuelle B2B | Suzali Conseil",
  description:
    "Clarifiez votre marque B2B avec une identité visuelle cohérente, un logo professionnel et une charte adaptée à tous vos supports commerciaux.",
  path: "/services/digital/branding-identite",
  theme: "digital",
});

export default function BrandingIdentitePage() {
  return <BrandingClient />;
}
