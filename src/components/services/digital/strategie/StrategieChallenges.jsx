"use client";

import { Marker, Reveal, SectionHead } from "../../../kit";

const pillars = [
  {
    title: "Diagnostic & Audit 360",
    desc: "Nous identifions précisément vos freins à la croissance (dette technique, UX défaillante, acquisition coûteuse) pour les éliminer.",
    key: "Clarté",
  },
  {
    title: "Feuille de Route Opérationnelle",
    desc: "Pas de slides inutiles. Un plan d'action priorisé (Quick Wins vs Projets de Fond) aligné sur vos objectifs business.",
    key: "Direction",
  },
  {
    title: "Direction Digitale Externalisée",
    desc: "Nos experts seniors pilotent votre transformation. Nous devenons votre Chief Digital Officer (CDO) à la demande.",
    key: "Pilotage",
  },
];

export default function StrategieChallenges() {
  return (
    <section className="bg-[#FCFDFC] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          size="md"
          className="max-w-[54rem]"
          title={
            <>
              Le digital n&apos;est plus une option, c&apos;est une bataille de{" "}
              <Marker>vitesse</Marker>
            </>
          }
        />
        <Reveal
          as="p"
          delay={140}
          className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[#4E605B] md:text-xl"
        >
          La plupart des entreprises échouent leur transformation car elles
          isolent les leviers (un site par ci, du SEO par là).{" "}
          <strong className="font-semibold text-[#0D332B]">
            Sans vision unifiée, vous brûlez votre budget.
          </strong>
        </Reveal>

        <ul className="mt-14 border-t border-[#0D332B]/14 md:mt-20">
          {pillars.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 60}
              className="grid gap-3 border-b border-[#0D332B]/14 px-1 py-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-10 md:px-3 md:py-9"
            >
              <h3 className="font-heading text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] text-[#0D332B] md:text-[1.7rem]">
                {item.title}
              </h3>
              <div>
                <p className="max-w-[56ch] text-[15px] leading-relaxed text-[#4E605B] md:text-base">
                  {item.desc}
                </p>
                <p className="mt-3 font-mono text-[0.75rem] tracking-normal text-[#4E605B]/90">
                  Objectif : {item.key}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
