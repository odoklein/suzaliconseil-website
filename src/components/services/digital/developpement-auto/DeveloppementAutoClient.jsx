"use client";

import DevHero from "./DevHero";
import DevSolutions from "./DevSolutions";
import DevMethodology from "./DevMethodology";
import { ClosingCta } from "../../../kit";

export default function DeveloppementAutoClient() {
  return (
    <div className="w-full bg-[#F6F7F4]">
      <DevHero />
      <DevSolutions />
      <DevMethodology />
      <ClosingCta
        title="Prêt à passer au stade supérieur ?"
        intro="Discutez faisabilité technique avec notre CTO. Nous transformons vos contraintes métiers en opportunités digitales."
        primary={{ label: "Consultation technique offerte", href: "/contact" }}
        slotLabel="Consultation technique"
        slotMeta="offerte"
      />
    </div>
  );
}
