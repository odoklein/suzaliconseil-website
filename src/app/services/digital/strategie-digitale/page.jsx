import StrategieDigitaleClient from "../../../../components/services/digital/strategie/StrategieDigitaleClient";
import ServiceLongForm from "../../../../components/services/ServiceLongForm";
import { STRATEGIE_DIGITALE_CONTENT } from "../../../../content/services/digital-long-forms";
import JsonLd from "../../../../components/seo/JsonLd";
import { createPageMetadata } from "../../../../lib/seo";
import { serviceSchema } from "../../../../lib/structured-data";

const PAGE = {
  title: "Conseil en stratégie marketing digitale B2B | Suzali Conseil",
  description:
    "Conseil en stratégie digitale B2B : audit, feuille de route priorisée et indicateurs clairs pour piloter votre acquisition. Demandez un diagnostic offert.",
  path: "/services/digital/strategie-digitale",
};

export const metadata = createPageMetadata({ ...PAGE, theme: "digital" });

export default function StrategieDigitalePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Conseil en stratégie marketing digitale B2B",
          serviceType: "Conseil en stratégie digitale",
          description: PAGE.description,
          path: PAGE.path,
        })}
      />
      <StrategieDigitaleClient>
        <ServiceLongForm content={STRATEGIE_DIGITALE_CONTENT} />
      </StrategieDigitaleClient>
    </>
  );
}
