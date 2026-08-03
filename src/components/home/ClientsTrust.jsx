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
    <section className="relative overflow-hidden bg-[#FCFDFC] py-20 md:py-28">
      {/* Background decor */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E3FFC4] opacity-20 blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <AnimatedSection className="mb-12 max-w-3xl md:mb-16">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E3FFC4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#315B2A] md:text-sm">
            Témoignages
          </span>
          <h2 className="mb-4 font-heading text-4xl font-bold tracking-[-0.04em] text-primary-dark sm:text-5xl lg:text-6xl">
            Ils nous font{" "}
            <span className="underline decoration-[#B0FF5B] decoration-[8px] underline-offset-[-4px] [text-decoration-skip-ink:none]">
              confiance
            </span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-[#52635F] md:text-xl">
            Des entreprises ambitieuses qui ont transformé leur croissance avec
            Suzali Conseil.
          </p>
        </AnimatedSection>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {caseStudies.map((study, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 40}
              as={Link}
              href={study.href}
              className={`group relative flex min-h-[460px] flex-col overflow-hidden rounded-[28px] bg-[#0D332B] shadow-[0_28px_72px_-46px_rgba(13,51,43,0.72)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_34px_78px_-44px_rgba(13,51,43,0.7)] md:h-[520px] ${idx === 0 ? "lg:col-span-5" : idx === 1 ? "lg:col-span-7" : "lg:col-span-12 lg:h-[440px]"}`}
            >
              {/* Background Image */}
              <Image
                src={study.bgImage}
                alt={study.company}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-90 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
              />

              {/* Gradient Overlay - darker at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Top Gradient for header readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-60" />

              {/* Content */}
              <div className="relative h-full flex-1 flex flex-col justify-between p-8 md:p-10 text-white z-10">
                {/* Top: Company & Service */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#B0FF5B] shadow-sm md:h-10 md:w-10">
                      <div className="h-4 w-4 rounded-[4px] bg-[#0D332B] md:h-5 md:w-5" />
                    </div>
                    <span className="text-base md:text-lg font-bold tracking-tight text-white drop-shadow-md">
                      {study.company}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <p className="max-w-[80%] border-l-2 border-[#B0FF5B] pl-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white/90 md:text-xs">
                      {study.service}
                    </p>
                    <span className="flex h-10 w-10 shrink-0 -translate-y-1 items-center justify-center rounded-full border border-white/20 bg-white/12 opacity-0 backdrop-blur-md transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
              <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/0 transition-colors duration-300 group-hover:border-white/18" />

              {/* Hover glow at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B0FF5B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsTrust;
