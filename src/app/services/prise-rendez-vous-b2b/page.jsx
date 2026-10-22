import PriseRdvClient from "../../../components/services/prise-rdv/PriseRdvClient";
import JsonLd from "../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../lib/seo";
import { serviceSchema } from "../../../lib/structured-data";

const PAGE = {
  title: "Prise de rendez-vous B2B qualifiés | Suzali Conseil",
  description:
    "Prise de rendez-vous B2B : nous joignons vos décideurs, qualifions leur besoin et posons le rendez-vous dans votre agenda avec un briefing. Parlons-en.",
  path: "/services/prise-rendez-vous-b2b",
};

export const metadata = createPageMetadata(PAGE);

export default function PriseRdvB2BPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Prise de rendez-vous B2B qualifiés",
          serviceType: "Prise de rendez-vous B2B",
          description: PAGE.description,
          path: PAGE.path,
        })}
      />
      <PriseRdvClient />
    </>
  );
}
