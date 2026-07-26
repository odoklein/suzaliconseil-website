import ContactClient from "./ContactClient";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({ title: "Contact agence de prospection B2B | Suzali Conseil", description: "Échangez avec Suzali Conseil sur vos objectifs de prospection B2B, de génération de leads, de performance commerciale ou de stratégie digitale.", path: "/contact" });

export default function ContactPage() {
  return <ContactClient />;
}
