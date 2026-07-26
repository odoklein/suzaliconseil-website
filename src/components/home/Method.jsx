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
    icon: "🎯",
  },
  {
    number: "2",
    title: "Stratégie & Plan d'Action",
    description:
      "Définir une stratégie multicanale sur mesure afin de générer rapidement des leads qualifiés.",
    icon: "📋",
  },
  {
    number: "3",
    title: "Exécution & Suivi",
    description:
      "Déployer et piloter vos campagnes en temps réel via SuzaLink CRM pour un suivi transparent.",
    icon: "🚀",
  },
  {
    number: "4",
    title: "Optimisation Continue",
    description:
      "Analyser les données, ajuster les actions et automatiser ce qui fonctionne pour maximiser vos résultats.",
    icon: "📈",
  },
];

const Method = () => {
  const { openBooking } = useBooking();

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-50 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <AnimatedSection className="text-center mb-12 md:mb-20 px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6">
            Notre Processus
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-dark mb-4 md:mb-6 tracking-tight">
            Notre <span className="text-gradient-premium">méthode</span>
          </h2>
          <p className="text-base md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Chez Suzali Conseil, chaque projet suit une méthode claire — testée
            sur des centaines de campagnes B2B. Un process transparent, pensé
            pour transformer vos objectifs en résultats.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <AnimatedSection
              key={step.number}
              delay={idx * 150}
              className={`group relative bg-primary-dark rounded-suzali p-6 md:p-8 text-white hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 md:hover:-translate-y-3 overflow-hidden ${idx < steps.length - 1 ? "step-connector" : ""}`}
            >
              {/* Large Number Background Opacity */}
              <div className="absolute top-0 right-0 p-4 md:p-8 font-heading font-bold text-7xl md:text-9xl leading-none text-white opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-500">
                {step.number}
              </div>

              {/* Animated gradient border on hover */}
              <div
                className="absolute inset-0 rounded-suzali opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(176,255,91,0.15), transparent, rgba(176,255,91,0.1))",
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Number Box with glow */}
                <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-accent-lime rounded-xl flex items-center justify-center text-accent-lime font-bold text-lg md:text-xl mb-4 md:mb-6 font-heading group-hover:bg-accent-lime/10 group-hover:shadow-[0_0_20px_rgba(176,255,91,0.2)] transition-all duration-500">
                  {step.number}
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-heading text-white group-hover:text-[#B0FF5B] transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-xs md:text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Bottom Gradient Line Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-lime to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA below method */}
        <AnimatedSection delay={600} className="text-center mt-12 md:mt-16">
          <MagneticButton
            onClick={openBooking}
            variant="primary"
            className="inline-flex items-center gap-3"
          >
            Démarrons ensemble
            <ArrowRight size={20} />
          </MagneticButton>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Method;
