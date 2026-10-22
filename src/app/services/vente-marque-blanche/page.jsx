import MarqueBlancheClient from "../../../components/services/marque-blanche/MarqueBlancheClient";
import JsonLd from "../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../lib/seo";
import { serviceSchema } from "../../../lib/structured-data";

const PAGE = {
  title: "Force de vente externalisée B2B en France | Suzali Conseil",
  description:
    "Force de vente externalisée en marque blanche : une équipe dédiée vend en votre nom, suit vos opportunités et conclut vos ventes B2B. Parlons-en.",
  path: "/services/vente-marque-blanche",
};

export const metadata = createPageMetadata(PAGE);

export default function VenteMarqueBlanchePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Force de vente externalisée en marque blanche",
          serviceType: "Force de vente externalisée B2B",
          description: PAGE.description,
          path: PAGE.path,
        })}
      />
      <MarqueBlancheClient />
    </>
  );
}
