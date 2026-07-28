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
    <section className="py-20 md:py-32 bg-[#0D332B] overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#1A6D48] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B0FF5B] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* LEFT COLUMN: Text + Team Image */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Text Content */}
            <AnimatedSection className="space-y-4 md:space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#B0FF5B] text-xs md:text-sm font-semibold tracking-wide uppercase">
                Notre Approche
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-6xl text-white leading-[1.1] tracking-tight">
                Une équipe qui vous comprend <br className="hidden sm:block" />
                <span className="text-white/40">
                  vous accompagne, et vous fait grandir.
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
                Notre équipe réunit stratégie, design et technologie pour aider
                les entreprises à grandir plus vite et plus intelligemment.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/commercial"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-[#B0FF5B] hover:bg-[#B0FF5B] hover:text-[#0D332B]"
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
            <AnimatedSection delay={200}>
              <div className="relative w-full aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/team.png"
                  alt="L'équipe Suzali Conseil"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D332B]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN: Comparison Card */}
          <AnimatedSection delay={300}>
            <div className="bg-[#12463A] rounded-[32px] md:rounded-[40px] overflow-hidden flex flex-col sm:flex-row lg:flex-row shadow-2xl ring-1 ring-white/10 min-h-fit transition-all duration-500 ease-out hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] hover:ring-white/20 group">
              {/* SIDE A: "Sans notre équipe" (Problems) */}
              <div className="flex-1 p-8 md:p-10 flex flex-col gap-6 md:gap-8 bg-[#12463A] text-white border-b sm:border-b-0 sm:border-r border-white/10 relative overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 bg-dots opacity-[0.02] pointer-events-none" />

                <h3 className="font-heading text-2xl md:text-3xl text-red-400 flex items-center gap-3 relative z-10">
                  <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <X size={16} className="text-red-400" strokeWidth={3} />
                  </span>
                  Sans notre équipe
                </h3>
                <ul className="space-y-4 md:space-y-6 relative z-10">
                  {problems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="mt-1 min-w-[20px]">
                        <X
                          size={16}
                          className="text-red-400/60"
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className="text-sm md:text-base font-medium leading-snug text-white/75 group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SIDE B: "Avec Notre équipe" (Solutions) */}
              <div className="flex-1 p-8 md:p-10 flex flex-col gap-6 md:gap-8 bg-[#B0FF5B] text-[#0D332B] relative overflow-hidden">
                {/* Animated shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

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
                      className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-300"
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
