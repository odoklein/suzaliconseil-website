import CarriersClient from "./CarriersClient";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({ title: "Carrières commerciales et digitales | Suzali Conseil", description: "Rejoignez Suzali Conseil et contribuez à des missions de prospection B2B, de stratégie commerciale et de transformation digitale pour nos clients.", path: "/carriers" });

export default function CarriersPage() {
  return <CarriersClient />;
}
