"use client";

import { CheckCircle2 } from "lucide-react";
import { Reveal, SectionHead } from "../../../kit";
import { DigitalProcess } from "../DigitalProcess";

const pillars = [
  "Alignement Sales/Marketing",
  "Optimisation Taux Conversion",
  "Automatisation Processus",
];

const steps = [
  {
    title: "Audit de Maturité & Concurrentiel",
    description:
      "Analyse technique, UX, SEO et positionnement marché. Où êtes-vous vs vos concurrents ?",
  },
  {
    title: "Définition du Cap Stratégique",
    description:
      "Choix des leviers (Acquisition, Fidélisation, Branding) et définition des KPIs critiques.",
  },
  {
    title: "Roadmap de Transformation",
    description:
      "Planification des chantiers techniques et marketing. Budgétisation précise et priorisation.",
  },
  {
    title: "Exécution & Accompagnement",
    description:
      "Pilotage des agences ou de vos équipes internes. Reporting mensuel et ajustements.",
  },
];

/* Data steering (ink chapter), then the four-step method on the rail. */
export default function StrategieMethodology() {
  return (
    <>
      <section className="bg-[#0D332B] py-24 text-[#F7FAF8] md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <SectionHead tone="ink" size="md" title="Pilotage par la Data" />
            <Reveal
              as="p"
              delay={140}
              className="mt-6 max-w-[52ch] text-lg leading-relaxed text-[#B9CBC4] md:text-xl"
            >
              L&apos;intuition ne suffit plus. Notre méthodologie{" "}
              <strong className="font-semibold text-[#F7FAF8]">Data-Marketing</strong>{" "}
              garantit que chaque euro investi sert vos objectifs de marge et de
              volume.
            </Reveal>
          </div>

          <ul className="border-t border-white/12 lg:col-span-5">
            {pillars.map((text, i) => (
              <Reveal
                as="li"
                key={text}
                delay={200 + i * 80}
                className="flex items-center justify-between gap-6 border-b border-white/12 px-1 py-5 md:py-6"
              >
                <span className="text-lg font-semibold tracking-[-0.02em] text-[#F7FAF8]">{text}</span>
                <CheckCircle2 size={20} className="shrink-0 text-[#B0FF5B]" aria-hidden="true" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <DigitalProcess
        id="methodologie"
        title="De l'Audit à la Performance"
        intro="Notre approche structure votre transformation en 4 étapes clés, garantissant sécurité et rapidité d'exécution."
        steps={steps}
      />
    </>
  );
}
