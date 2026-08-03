"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const ProblemSolution = () => {
  const problems = [
    "Difficulté à aligner marketing, ventes et opérations",
    "Perte de temps avec des outils dispersés",
    "Plusieurs prestataires sans cohérence",
    "Actions sans stratégie claire",
    "Énergie et budget gaspillés",
    "Communication floue et lente",
    "Décisions prises sans données fiables",
    "Difficulté à fidéliser vos clients",
  ];

  const solutions = [
    "Des experts qui unifient stratégie, exécution et performance",
    "Un écosystème intégré : CRM, automatisation et reporting synchronisés",
    "Une seule équipe, une seule vision, des résultats mesurables",
    "Une feuille de route précise et orientée ROI",
    "Une croissance durable, pilotée par des spécialistes expérimentés",
    "Une collaboration fluide, réactive et transparente",
    "Des choix guidés par l'analyse et la performance en temps réel",
    "Des expériences clients cohérentes et durables à chaque point de contact",
  ];

  return (
    <section className="relative overflow-hidden bg-[#EAF2EE] py-20 md:py-28">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CFE6DA] opacity-55 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#B0FF5B] opacity-[0.1] blur-[160px]" />
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.012]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 md:gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT COLUMN: Text + Team Image */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Text Content */}
            <AnimatedSection className="space-y-4 md:space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E3FFC4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#315B2A] md:text-sm">
                Notre Approche
              </span>
              <h2 className="font-heading text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-[#0D332B] sm:text-5xl md:text-6xl">
                Une équipe qui vous comprend <br className="hidden sm:block" />
                <span className="text-[#557069]">
                  vous accompagne, et vous fait grandir.
                </span>
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-[#52635F] md:text-lg">
                Notre équipe réunit stratégie, design et technologie pour aider
                les entreprises à grandir plus vite et plus intelligemment.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/commercial"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-[#0D332B]/20 bg-[#FCFDFC]/60 px-6 py-3 text-sm font-bold tracking-[-0.01em] text-[#0D332B] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#0D332B]/38 hover:bg-[#FCFDFC]"
                >
                  Découvrir notre accompagnement
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </AnimatedSection>

            {/* Team Image */}
            <AnimatedSection delay={40}>
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[28px] shadow-[0_28px_70px_-46px_rgba(13,51,43,0.65)]">
                <Image
                  src="/images/team.png"
                  alt="L'équipe Suzali Conseil"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D332B]/18 via-transparent to-transparent opacity-60" />
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN: Comparison Card */}
          <AnimatedSection delay={80}>
            <div className="group flex min-h-fit flex-col overflow-hidden rounded-[28px] border border-[#0D332B]/10 bg-[#FCFDFC] shadow-[0_30px_80px_-52px_rgba(13,51,43,0.7)] transition-[border-color,box-shadow] duration-300 hover:border-[#0D332B]/16 hover:shadow-[0_34px_82px_-50px_rgba(13,51,43,0.62)] sm:flex-row lg:flex-row">
              {/* SIDE A: "Sans notre équipe" (Problems) */}
              <div className="relative flex flex-1 flex-col gap-6 overflow-hidden border-b border-[#0D332B]/10 bg-[#F2F4F2] p-7 text-[#0D332B] sm:border-b-0 sm:border-r md:gap-8 md:p-9">
                {/* Subtle pattern */}
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.012]" />

                <h3 className="relative z-10 flex items-center gap-3 font-heading text-2xl text-[#314640] md:text-3xl">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D332B]/8">
                    <X size={16} className="text-[#65746F]" strokeWidth={2.5} />
                  </span>
                  Sans notre équipe
                </h3>
                <ul className="space-y-4 md:space-y-6 relative z-10">
                  {problems.map((item, idx) => (
                    <li
                      key={idx}
                      className="group/item flex items-start gap-4"
                    >
                      <div className="mt-1 min-w-[20px]">
                        <X
                          size={16}
                          className="text-[#71817C]"
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className="text-sm font-medium leading-snug text-[#52635F] md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SIDE B: "Avec Notre équipe" (Solutions) */}
              <div className="relative flex flex-1 flex-col gap-6 overflow-hidden bg-[#E3FFC4] p-7 text-[#0D332B] md:gap-8 md:p-9">
                {/* Animated shimmer on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-[#B0FF5B]/20" />

                <h3 className="font-heading text-2xl md:text-3xl text-[#0D332B] flex items-center gap-3 relative z-10">
                  <span className="w-8 h-8 rounded-full bg-[#0D332B]/10 flex items-center justify-center">
                    <Check
                      size={16}
                      className="text-[#0D332B]"
                      strokeWidth={3}
                    />
                  </span>
                  Avec Notre équipe
                </h3>
                <ul className="space-y-4 md:space-y-6 relative z-10">
                  {solutions.map((item, idx) => (
                    <li
                      key={idx}
                      className="group/item flex items-start gap-4"
                    >
                      <div className="mt-1 min-w-[20px]">
                        <Check
                          size={16}
                          className="text-[#0D332B]"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-sm md:text-base font-bold leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
