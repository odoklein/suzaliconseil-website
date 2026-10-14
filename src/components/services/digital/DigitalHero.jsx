"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "../../kit";
import MagneticButton from "../../ui/MagneticButton";
import { useBooking } from "../../../context/BookingContext";

export function DigitalHero() {
  const { openBooking } = useBooking();

  return (
    <PageHero
      title="Le digital qui soutient votre croissance B2B."
      intro="Stratégie, sites web, acquisition et automatisation pour faire de chaque point de contact un levier de croissance."
      image="/images/equipeweb.png"
      imageAlt="L'équipe digitale de Suzali Conseil au travail"
      imagePosition="68% center"
      actions={
        <>
          <MagneticButton onClick={openBooking} variant="primary" className="w-full sm:w-auto">
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              Planifier un appel
              <ArrowRight size={18} aria-hidden="true" />
            </span>
          </MagneticButton>
          <MagneticButton href="#expertises" variant="outline-light" className="w-full sm:w-auto">
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              Voir nos expertises
              <ArrowUpRight size={17} aria-hidden="true" />
            </span>
          </MagneticButton>
        </>
      }
    />
  );
}
