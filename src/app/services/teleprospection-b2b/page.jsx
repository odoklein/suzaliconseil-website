import TeleprospectionClient from "../../../components/services/teleprospection/TeleprospectionClient";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Agence de téléprospection B2B | Suzali Conseil",
  description: "Obtenez plus de rendez-vous qualifiés grâce à une téléprospection B2B menée par des commerciaux formés à votre offre et vos cibles.",
  path: "/services/teleprospection-b2b",
});

export default function TeleprospectionB2BPage() {
  return <TeleprospectionClient />;
}
