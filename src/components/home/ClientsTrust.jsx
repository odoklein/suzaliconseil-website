"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const ClientsTrust = () => {
  const caseStudies = [
    {
      company: "Investissement Locatif",
      service: "Vente d'Appartements Luxe",
      stat: "+250%",
      statPrefix: "+",
      statSuffix: "%",
      statNum: "250",
      description: "de rendez-vous qualifiés générés en 3 mois",
      bgImage:
        "/images/investissementlocatif.png",
      href: "/services/prise-rendez-vous-b2b",
    },
    {
      company: "Velis Conseil",
      service: "Prospection B2B Réseaux Ultra-ciblés",
      stat: "35 RDV",
      description: "générés à partir de 1000 prospects ciblés",
      bgImage:
        "/images/velis.png",
      href: "/services/prospection-commerciale-externalisee",
    },
    {
      company: "ZUP&CO",
      service: "Automatisation SAS pour l'engagement étudiant",
      stat: "92%",
      description:
        "taux d'ouverture des communications et une gestion des sessions entièrement simplifiée.",
      bgImage:
        "/images/zupdeco.png",
      href: "/services/digital/developpement-automatisation",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[200px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Title */}
        <AnimatedSection className="text-center mb-12 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-dark tracking-tight mb-4">
            Ils nous font{" "}
            <span className="text-gradient-premium">confiance</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Des entreprises ambitieuses qui ont transformé leur croissance avec
            Suzali Conseil.
          </p>
        </AnimatedSection>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 200}
              as={Link}
              href={study.href}
              className="group relative rounded-[32px] md:rounded-[40px] overflow-hidden min-h-[480px] md:h-[540px] bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-3 flex flex-col"
            >
              {/* Background Image */}
              <Image
                src={study.bgImage}
                alt={study.company}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000"
              />

              {/* Gradient Overlay - darker at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Top Gradient for header readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-60" />

              {/* Content */}
              <div className="relative h-full flex-1 flex flex-col justify-between p-8 md:p-10 text-white z-10">
                {/* Top: Company & Service */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-white/20 transition-colors duration-300">
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-md shadow-inner" />
                    </div>
                    <span className="text-base md:text-lg font-bold tracking-tight text-white drop-shadow-md">
                      {study.company}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/90 bg-white/20 backdrop-blur-md border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm">
                      {study.service}
                    </p>
                    <span className="shrink-0 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={18} className="text-white" />
                    </span>
                  </div>
                </div>

                {/* Bottom: Stats */}
                <div className="space-y-3 md:space-y-4">
                  <div className="font-heading font-extrabold text-5xl md:text-7xl leading-none text-white drop-shadow-lg tracking-tighter">
                    {study.stat}
                  </div>
                  <p className="text-base md:text-lg text-gray-100 font-medium leading-snug drop-shadow-md max-w-[95%] border-l-2 border-accent-lime pl-4">
                    {study.description}
                  </p>
                </div>
              </div>

              {/* Hover highlight effect */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/15 rounded-[32px] md:rounded-[40px] transition-all duration-500 pointer-events-none" />

              {/* Hover glow at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B0FF5B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsTrust;
