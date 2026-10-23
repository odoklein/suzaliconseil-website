"use client";

import SeoHero from "./SeoHero";
import SeoChannels from "./SeoChannels";
import SeoResults from "./SeoResults";
import { ClosingCta } from "../../../kit";

export default function SeoAcquisitionClient({ children }) {
  return (
    <div className="w-full bg-[#F6F7F4]">
      <SeoHero />
      <SeoChannels />
      <SeoResults />
      {/* Partie éditoriale longue (voir ServiceLongForm) */}
      {children}

      <ClosingCta
        title="Combien de clients perdez-vous chaque jour ?"
        intro="Demandez votre audit de visibilité gratuit. Nous analysons votre site et celui de vos concurrents."
        primary={{ label: "Obtenir mon audit gratuit", href: "/contact" }}
        slotLabel="Audit de visibilité"
        slotMeta="gratuit"
      />
    </div>
  );
}
