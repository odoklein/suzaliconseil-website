"use client";

import { FileCog, Megaphone, Target, Trophy } from "lucide-react";
import AnimatedSection from "../../ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Immersion & Ciblage",
    description:
      "Nous analysons votre marché, affinons votre ICP (Ideal Customer Profile) et construisons des fichiers de prospection ultra-qualifiés.",
    icon: Target,
  },
  {
    number: "02",
    title: "Setup Commercial",
    description:
      "Création des scripts de vente, configuration du CRM et mise en place des outils d'automation pour un lancement efficace.",
    icon: FileCog,
  },
  {
    number: "03",
    title: "Chasse & Prospection",
    description:
      "Nos Business Developers contactent vos prospects (Appels, Emails, LinkedIn) pour décrocher des opportunités et qualifier les leads.",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Closing & Scale",
    description:
      "Transformation des leads en clients signés, analyse des KPI et montée en puissance des campagnes pour maximiser le CA.",
    icon: Trophy,
  },
];

export function CommercialProcess() {
  return (
    <section
      aria-labelledby="commercial-process-heading"
      className="bg-[#F6F7F4] px-3 py-10 sm:px-4 sm:py-14 lg:px-5 lg:py-20"
    >
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[28px] border border-[#0D332B]/10 bg-[#E8EFEB]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20 lg:px-10 lg:py-24">
          <AnimatedSection className="self-start lg:sticky lg:top-28">
            <h2
              id="commercial-process-heading"
              className="font-heading text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-[#0D332B] sm:text-5xl"
            >
              Notre méthode de prospection B2B
            </h2>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-[#52635F]">
              Une approche structurée et éprouvée pour garantir des résultats
              concrets.
            </p>
          </AnimatedSection>

          <div className="border-t border-[#0D332B]/14">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <AnimatedSection
                  key={step.number}
                  delay={index * 70}
                  className="group grid gap-5 border-b border-[#0D332B]/14 py-8 sm:grid-cols-[auto_1fr] sm:gap-7 sm:py-10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#FCFDFC] text-[#0D332B] shadow-[0_12px_28px_-22px_rgba(13,51,43,0.8)] transition-[background-color,transform] duration-300 ease-[var(--ease-premium)] group-hover:-translate-y-0.5 group-hover:bg-[#E3FFC4]">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <h3 className="font-heading text-2xl font-bold tracking-[-0.025em] text-[#0D332B]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[62ch] leading-relaxed text-[#52635F]">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
