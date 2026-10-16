import TeleprospectionClient from "../../../components/services/teleprospection/TeleprospectionClient";
import JsonLd from "../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../lib/seo";
import { serviceSchema } from "../../../lib/structured-data";

const PAGE = {
  title: "Agence de téléprospection B2B en France | Suzali Conseil",
  description:
    "Agence de téléprospection B2B : des commerciaux formés à votre offre appellent vos cibles et posent des rendez-vous qualifiés. Lancement sous 7 jours.",
  path: "/services/teleprospection-b2b",
};

export const metadata = createPageMetadata(PAGE);

export default function TeleprospectionB2BPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Agence de téléprospection B2B",
          serviceType: "Téléprospection B2B",
          description: PAGE.description,
          path: PAGE.path,
        })}
      />
      <TeleprospectionClient />
    </>
  );
}
