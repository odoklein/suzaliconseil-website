import DeveloppementAutoClient from "../../../../components/services/digital/developpement-auto/DeveloppementAutoClient";
import ServiceLongForm from "../../../../components/services/ServiceLongForm";
import { AUTOMATISATION_CONTENT } from "../../../../content/services/digital-long-forms";
import JsonLd from "../../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../../lib/seo";
import { serviceSchema } from "../../../../lib/structured-data";

const PAGE = {
  title: "Développement et automatisation IA | Suzali Conseil",
  description:
    "Développement web et automatisation IA sur mesure : outils métier, intégrations CRM et workflows qui fiabilisent vos processus. Parlons de votre projet.",
  path: "/services/digital/developpement-automatisation",
};

export const metadata = createPageMetadata({ ...PAGE, theme: "digital" });

export default function DeveloppementAutomatisationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Développement web et automatisation IA sur mesure",
          serviceType: "Développement et automatisation",
          description: PAGE.description,
          path: PAGE.path,
        })}
      />
      <DeveloppementAutoClient>
        <ServiceLongForm content={AUTOMATISATION_CONTENT} />
      </DeveloppementAutoClient>
    </>
  );
}
