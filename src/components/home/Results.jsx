"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";
import AnimatedCounter from "../ui/AnimatedCounter";

const Results = () => {
  const stats = [
    {
      value: "+320%",
      prefix: "+",
      suffix: "%",
      numericValue: "320",
      title: "Taux de réponse en prospection",
      description:
        "Des campagnes pilotées par data qui captent l'attention et remplissent votre agenda commercial.",
      theme: "light",
      size: "large",
      accentColor: "#B0FF5B",
      href: "/services/outbound-marketing-b2b",
    },
    {
      value: "- 60%",
      prefix: "- ",
      suffix: "%",
      numericValue: "60",
      title: "Temps passé sur la qualification",
      description:
        "Des workflows automatisés et des scripts IA qui filtrent vos leads avant même le premier appel.",
      theme: "dark",
      size: "small",
      accentColor: "#B0FF5B",
      href: "/services/qualification-leads-b2b",
    },
    {
      value: "+45%",
      prefix: "+",
      suffix: "%",
      numericValue: "45",
      title: "Conversion des rendez-vous en ventes",
      description:
        "Des séquences de suivi précises et un reporting clair pour transformer vos échanges en revenus.",
      theme: "light",
      size: "small",
      accentColor: "#B0FF5B",
      href: "/services/prise-rendez-vous-b2b",
    },
    {
      value: "-40%",
      prefix: "- ",
      suffix: "%",
      numericValue: "40",
      title: "Coût d'acquisition par lead",
      description:
        "Une stratégie basée sur la donnée et l'itération continue pour maximiser chaque euro investi.",
      theme: "dark",
      size: "large",
      accentColor: "#85C947",
      href: "/services/generation-leads-b2b",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F6F7F4] py-20 md:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-[460px] w-[460px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#E3FFC4] opacity-45 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-12 max-w-3xl space-y-4 md:mb-16 md:space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E3FFC4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#315B2A] md:text-sm">
            Résultats Prouvés
          </span>
          <h2 className="font-heading text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-[#0D332B] sm:text-5xl md:text-6xl">
            Des Résultats Concrets. <br className="hidden md:block" />
            Des Gains{" "}
            <span className="underline decoration-[#B0FF5B] decoration-[8px] underline-offset-[-4px] [text-decoration-skip-ink:none]">
              Réels
            </span>.
          </h2>
          <p className="max-w-[62ch] text-lg font-medium leading-relaxed text-[#52635F] md:text-xl">
            Des améliorations prouvées sur vos taux de conversion, votre
            productivité et vos coûts d&apos;acquisition.
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 40}
              as={Link}
              href={stat.href}
              className={`group relative overflow-hidden rounded-[28px] border border-[#0D332B]/8 p-8 shadow-[0_26px_68px_-50px_rgba(13,51,43,0.72)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#0D332B]/16 hover:shadow-[0_30px_72px_-48px_rgba(13,51,43,0.64)] md:p-10
                ${stat.size === "large" ? "lg:col-span-2 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12" : "lg:col-span-1 flex flex-col justify-between"}
                ${
                  stat.theme === "dark"
                    ? "bg-[#0D332B] text-white"
                    : "bg-[#EAF2EE] text-[#0D332B]"
                }
              `}
            >
              {/* Affordance: this card leads somewhere */}
              <span
                className={`absolute right-6 top-6 z-20 flex h-10 w-10 -translate-y-1 items-center justify-center rounded-full opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:right-8 md:top-8 ${
                  stat.theme === "dark"
                    ? "bg-white/10 text-white"
                    : "bg-white/70 text-[#0D332B]"
                }`}
              >
                <ArrowUpRight size={18} />
              </span>

              {/* Hover glow effect */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-[0.08] blur-[60px]"
                style={{ background: stat.accentColor }}
              />

              {/* Subtle pattern */}
              <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.012]" />

              {/* Stat Value - Animated Counter */}
              <div
                className={`font-heading font-extrabold tracking-tight leading-none shrink-0 relative z-10
                 ${stat.size === "large" ? "text-6xl sm:text-7xl md:text-8xl" : "text-5xl md:text-6xl mb-4 md:mb-6"}
              `}
              >
                <AnimatedCounter
                  value={stat.numericValue}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2500}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center h-full text-center md:text-left relative z-10">
                <h3
                  className={`font-bold font-heading mb-3 md:mb-4 leading-tight
                  ${stat.size === "large" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}
                  ${stat.theme === "dark" ? "text-gray-100" : "text-[#0D332B]"}
                `}
                >
                  {stat.title}
                </h3>
                <p
                  className={`text-base md:text-xl leading-relaxed
                   ${stat.theme === "dark" ? "text-[#DDE8E3]" : "text-[#405A53]"}
                `}
                >
                  {stat.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-1 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.accentColor}, transparent)`,
                }}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
