"use client";

import BrandingHero from "./BrandingHero";
import BrandingServices from "./BrandingServices";
import BrandingPhilosophy from "./BrandingPhilosophy";
import { ClosingCta } from "../../../kit";

export default function BrandingClient({ children }) {
  return (
    <div className="w-full bg-[#F6F7F4]">
      <BrandingHero />
      <BrandingServices />
      <BrandingPhilosophy />
      {/* Partie éditoriale longue (voir ServiceLongForm) */}
      {children}

      <ClosingCta
        title="Révélez le potentiel de votre marque"
        intro="Votre image actuelle reflète-t-elle vraiment la qualité de vos services ? Si la réponse est non, parlons-en."
        primary={{ label: "Booking direction artistique", href: "/contact" }}
        slotLabel="Direction artistique"
        slotMeta="sur rendez-vous"
      />
    </div>
  );
}
