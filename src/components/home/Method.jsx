"use client";

import React from "react";
import AnimatedSection from "../ui/AnimatedSection";
import MagneticButton from "../ui/MagneticButton";
import { useBooking } from "../../context/BookingContext";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Analyse & Ciblage",
    description:
      "Comprendre votre activité, vos offres et vos clients idéaux pour poser des bases solides avant toute action.",
  },
  {
    number: "2",
    title: "Stratégie & Plan d'Action",
    description:
      "Définir une stratégie multicanale sur mesure afin de générer rapidement des leads qualifiés.",
  },
  {
    number: "3",
    title: "Exécution & Suivi",
    description:
      "Déployer et piloter vos campagnes en temps réel via SuzaLink CRM pour un suivi transparent.",
  },
  {
    number: "4",
    title: "Optimisation Continue",
    description:
      "Analyser les données, ajuster les actions et automatiser ce qui fonctionne pour maximiser vos résultats.",
  },
];

const Method = () => {
  const { openBooking } = useBooking();

  return (
    <section className="relative overflow-hidden bg-[#FCFDFC] py-20 md:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-0 top-0 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E3FFC4] opacity-35 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#D7EEE4] opacity-55 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 max-w-3xl md:mb-16">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E3FFC4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#315B2A] md:text-sm">
            Notre Processus
          </span>
          <h2 className="mb-4 font-heading text-4xl font-bold tracking-[-0.04em] text-primary-dark sm:text-5xl md:mb-6 lg:text-6xl">
            Notre{" "}
            <span className="underline decoration-[#B0FF5B] decoration-[8px] underline-offset-[-4px] [text-decoration-skip-ink:none]">
              méthode
            </span>
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-text-muted md:text-xl">
            Chez Suzali Conseil, chaque projet suit une méthode claire — testée
            sur des centaines de campagnes B2B. Un process transparent, pensé
            pour transformer vos objectifs en résultats.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {steps.map((step, idx) => (
            <AnimatedSection
              key={step.number}
              delay={idx * 40}
              className={`group relative overflow-hidden rounded-[28px] border border-[#0D332B]/8 p-7 text-[#0D332B] shadow-[0_24px_58px_-48px_rgba(13,51,43,0.7)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#0D332B]/16 hover:shadow-[0_28px_64px_-46px_rgba(13,51,43,0.62)] md:p-9 ${idx === 0 || idx === 3 ? "bg-[#E3FFC4] lg:col-span-5" : "bg-[#F0F3F1] lg:col-span-7"}`}
            >
              {/* Large Number Background Opacity */}
              <div className="pointer-events-none absolute right-0 top-0 select-none p-4 font-heading text-7xl font-bold leading-none text-[#0D332B] opacity-[0.035] transition-opacity duration-300 group-hover:opacity-[0.06] md:p-8 md:text-9xl">
                {step.number}
              </div>

              {/* Animated gradient border on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(176,255,91,0.15), transparent, rgba(176,255,91,0.1))",
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Number Box with glow */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#0D332B] font-heading text-lg font-bold text-[#B0FF5B] transition-transform duration-300 group-hover:-translate-y-0.5 md:h-14 md:w-14 md:text-xl">
                  {step.number}
                </div>

                <h3 className="mb-3 font-heading text-xl font-bold text-[#0D332B] md:mb-4 md:text-2xl">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#52635F] md:text-base">
                  {step.description}
                </p>
              </div>

              {/* Bottom Gradient Line Effect */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#B0FF5B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA below method */}
        <AnimatedSection delay={120} className="mt-12 text-left md:mt-14">
          <MagneticButton
            onClick={openBooking}
            variant="primary"
            className="inline-flex items-center gap-3"
          >
            Audit gratuit de prospection
            <ArrowRight size={20} />
          </MagneticButton>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Method;
