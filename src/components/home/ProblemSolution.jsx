"use client";

import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import Reveal from "./kit/Reveal";
import SectionHead from "./kit/SectionHead";
import ParallaxImage from "./kit/ParallaxImage";

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

/* One problem and its answer on the same line; the answer lights up as the
   row reaches the middle of the screen. */
function PairRow({ problem, solution }) {
  const ref = useRef(null);
  const active = useInView(ref, { once: true, margin: "0px 0px -42% 0px" });

  return (
    <li
      ref={ref}
      className="grid grid-cols-1 gap-3 border-t border-white/12 py-6 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1.15fr)] md:items-center md:gap-6 md:py-7"
    >
      <span className="flex items-start gap-3 text-[15px] leading-snug text-[#8FA59E] md:text-base">
        <X size={16} strokeWidth={2.5} className="mt-1 shrink-0 text-[#6F8780]" aria-hidden="true" />
        {problem}
      </span>
      <span
        className={`hidden h-px w-full origin-left bg-[#B0FF5B] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:block ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
        aria-hidden="true"
      />
      <span
        className={`flex items-start gap-3 text-base font-semibold leading-snug tracking-[-0.015em] transition-colors duration-700 md:text-lg ${
          active ? "text-[#F7FAF8]" : "text-[#F7FAF8]/60"
        }`}
      >
        <span
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-700 ${
            active ? "bg-[#B0FF5B] text-[#0D332B]" : "bg-white/10 text-[#F7FAF8]/50"
          }`}
          aria-hidden="true"
        >
          <Check size={14} strokeWidth={3} />
        </span>
        {solution}
      </span>
    </li>
  );
}

const ProblemSolution = () => {
  return (
    <section className="bg-[#0D332B] py-24 text-[#F7FAF8] md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHead
              tone="ink"
              title={
                <>
                  Une équipe qui vous comprend{" "}
                  <span className="text-[#8FB5AA]">vous accompagne, et vous fait grandir.</span>
                </>
              }
              intro="Notre équipe réunit stratégie, design et technologie pour aider les entreprises à grandir plus vite et plus intelligemment."
            />
            <Reveal delay={220} className="mt-9">
              <Link
                href="/services/commercial"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold tracking-[-0.01em] text-[#F7FAF8] transition-colors duration-300 hover:border-[#B0FF5B] hover:bg-white/5"
              >
                Découvrir notre accompagnement
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Reveal variant="focus" delay={120} className="lg:col-span-5">
            <ParallaxImage
              src="/images/equipeweb.png"
              alt="L'équipe Suzali Conseil dans ses bureaux"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/3] w-full rounded-[22px]"
              imgClassName="object-[50%_45%]"
            />
          </Reveal>
        </div>

        <div className="mt-20 md:mt-28">
          <div className="hidden grid-cols-[minmax(0,1fr)_3rem_minmax(0,1.15fr)] gap-6 pb-5 md:grid">
            <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-[#8FA59E]">
              Sans notre équipe
            </h3>
            <span />
            <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-[#B0FF5B]">
              Avec Notre équipe
            </h3>
          </div>
          <h3 className="pb-4 font-heading text-xl font-semibold tracking-[-0.03em] md:hidden">
            <span className="text-[#8FA59E]">Sans notre équipe</span>
            <span className="text-[#F7FAF8]/40"> / </span>
            <span className="text-[#B0FF5B]">Avec Notre équipe</span>
          </h3>
          <ul className="border-b border-white/12">
            {problems.map((problem, i) => (
              <PairRow key={problem} problem={problem} solution={solutions[i]} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
