import StrategieDigitaleClient from "../../../../components/services/digital/strategie/StrategieDigitaleClient";
import { createPageMetadata } from "../../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Stratégie marketing digitale B2B | Suzali Conseil",
  description:
    "Structurez votre stratégie digitale B2B avec un audit, une feuille de route priorisée et des indicateurs clairs pour piloter votre acquisition.",
  path: "/services/digital/strategie-digitale",
  theme: "digital",
});

export default function StrategieDigitalePage() {
  return <StrategieDigitaleClient />;
}
