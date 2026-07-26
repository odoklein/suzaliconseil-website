"use client";

import React from "react";
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
      accentColor: "#60A5FA",
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
      accentColor: "#FF6B2C",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Résultats Prouvés
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#0D332B] tracking-tight leading-tight md:leading-none">
            Des Résultats Concrets. <br className="hidden md:block" />
            Des Gains <span className="text-gradient-premium">Réels</span>.
          </h2>
          <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
            Des améliorations prouvées sur vos taux de conversion, votre
            productivité et vos coûts d&apos;acquisition.
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 150}
              className={`rounded-[32px] md:rounded-[40px] p-8 md:p-12 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden group
                ${stat.size === "large" ? "lg:col-span-2 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12" : "lg:col-span-1 flex flex-col justify-between"}
                ${
                  stat.theme === "dark"
                    ? "bg-[#0D332B] text-white"
                    : "bg-[#D5F5F0] text-[#0D332B]"
                }
              `}
            >
              {/* Hover glow effect */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ background: stat.accentColor }}
              />

              {/* Subtle pattern */}
              <div className="absolute inset-0 bg-dots opacity-[0.02] pointer-events-none" />

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
                  ${stat.size === "large" ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}
                  ${stat.theme === "dark" ? "text-gray-100" : "text-[#0D332B]"}
                `}
                >
                  {stat.title}
                </h3>
                <p
                  className={`text-base md:text-xl leading-relaxed
                   ${stat.theme === "dark" ? "text-gray-300" : "text-[#1A4D43]/80"}
                `}
                >
                  {stat.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
