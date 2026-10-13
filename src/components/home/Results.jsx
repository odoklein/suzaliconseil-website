import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./kit/Reveal";
import SectionHead from "./kit/SectionHead";

const stats = [
  {
    prefix: "+",
    suffix: "%",
    numericValue: "320",
    title: "Taux de réponse en prospection",
    description:
      "Des campagnes pilotées par data qui captent l'attention et remplissent votre agenda commercial.",
    href: "/services/outbound-marketing-b2b",
  },
  {
    prefix: "- ",
    suffix: "%",
    numericValue: "60",
    title: "Temps passé sur la qualification",
    description:
      "Des workflows automatisés et des scripts IA qui filtrent vos leads avant même le premier appel.",
    href: "/services/qualification-leads-b2b",
  },
  {
    prefix: "+",
    suffix: "%",
    numericValue: "45",
    title: "Conversion des rendez-vous en ventes",
    description:
      "Des séquences de suivi précises et un reporting clair pour transformer vos échanges en revenus.",
    href: "/services/prise-rendez-vous-b2b",
  },
  {
    prefix: "- ",
    suffix: "%",
    numericValue: "40",
    title: "Coût d'acquisition par lead",
    description:
      "Une stratégie basée sur la donnée et l'itération continue pour maximiser chaque euro investi.",
    href: "/services/generation-leads-b2b",
  },
];

/* Results read as a ledger, one line per gain, instead of a bento of tiles. */
const Results = () => {
  return (
    <section className="bg-[#07221D] py-24 text-[#F7FAF8] md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          tone="ink"
          className="max-w-4xl"
          title={
            <>
              Des Résultats Concrets. Des Gains Réels.
            </>
          }
          intro="Des améliorations prouvées sur vos taux de conversion, votre productivité et vos coûts d'acquisition."
        />

        <ul className="mt-16 border-b border-white/12 md:mt-20">
          {stats.map((stat, idx) => (
            <Reveal as="li" key={stat.href} delay={idx * 70}>
              <Link
                href={stat.href}
                className="ledger-row on-ink group grid grid-cols-1 items-baseline gap-4 border-t border-white/12 px-1 py-9 outline-none focus-visible:ring-2 focus-visible:ring-[#B0FF5B] md:grid-cols-[minmax(19rem,auto)_minmax(0,1fr)_minmax(0,1.1fr)_2.5rem] md:gap-10 md:py-11"
              >
                <span className="font-heading text-[clamp(3.4rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.05em] text-[#F7FAF8] tabular-nums">
                  {stat.prefix.trim() === "-" ? "−" : stat.prefix}
                  {stat.numericValue}
                  {stat.suffix}
                </span>
                <h3 className="font-heading text-2xl font-semibold leading-tight tracking-[-0.035em] md:text-[1.75rem]">
                  {stat.title}
                </h3>
                <p className="max-w-[44ch] text-base leading-relaxed text-[#B9CBC4] md:text-lg">
                  {stat.description}
                </p>
                <ArrowUpRight
                  size={22}
                  aria-hidden="true"
                  className="hidden self-center text-[#B0FF5B] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:block"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Results;
