"use client";

import { ClosingCta } from "../../kit";
import { useBooking } from "../../../context/BookingContext";
import { DigitalBento } from "./DigitalBento";
import { DigitalHero } from "./DigitalHero";
import { DigitalProcess } from "./DigitalProcess";
import { DigitalTechStack } from "./DigitalTechStack";

export function DigitalClientPage({ children }) {
  const { openBooking } = useBooking();

  return (
    <main className="min-h-[100dvh] w-full max-w-[100vw] overflow-x-clip bg-[#F6F7F4] text-[#0D332B]">
      <DigitalHero />
      <DigitalTechStack />
      <DigitalBento />
      <DigitalProcess />

      {/* Partie éditoriale longue (voir ServiceLongForm) */}
      {children}

      <ClosingCta
        title="Donnez une direction claire à votre prochain projet digital."
        intro="Découvrez les formats d'accompagnement adaptés à votre objectif, à votre équipe et à votre niveau de maturité."
        primary={{ label: "Voir les offres", href: "/offres" }}
        secondary={{ label: "Planifier un appel", onClick: openBooking }}
      />
    </main>
  );
}
