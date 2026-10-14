import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./kit/Reveal";
import SectionHead from "./kit/SectionHead";

// Commitments a client can check in the first month, taken from the offers
// themselves (delays, pricing, reporting) rather than unmeasured percentages.
const stats = [
  {
    figure: "7 jours",
    title: "Du ciblage validé aux premiers appels",
    description:
      "Le fichier, les scripts et les séquences sont validés avec vous, puis la campagne démarre dans la semaine.",
    href: "/services/prospection-commerciale-externalisee",
  },
  {
    figure: "150 €",
    title: "Par rendez-vous validé et honoré",
    description:
      "La part variable ne suit que les rendez-vous réellement tenus. Un prospect qui ne se présente pas n'est pas facturé.",
    href: "/services/prise-rendez-vous-b2b",
  },
  {
    figure: "4 canaux",
    title: "Dans une même séquence",
    description:
      "Téléphone, email, SMS et LinkedIn pilotés ensemble, et suivis contact par contact dans SuzaLink CRM.",
    href: "/services/outbound-marketing-b2b",
  },
  {
    figure: "Hebdo",
    title: "Un point et un reporting chaque semaine",
    description:
      "Appels passés, contacts joints, rendez-vous posés, objections entendues : votre account manager vous les présente.",
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
              Ce que vous pouvez vérifier dès le premier mois.
            </>
          }
          intro="Pas de pourcentage impossible à contrôler : un délai, un prix et un suivi écrits dans chaque mission."
        />

        <ul className="mt-16 border-b border-white/12 md:mt-20">
          {stats.map((stat, idx) => (
            <Reveal as="li" key={stat.href} delay={idx * 70}>
              <Link
                href={stat.href}
                className="ledger-row on-ink group grid grid-cols-1 items-baseline gap-4 border-t border-white/12 px-1 py-9 outline-none focus-visible:ring-2 focus-visible:ring-[#B0FF5B] md:grid-cols-[minmax(19rem,auto)_minmax(0,1fr)_minmax(0,1.1fr)_2.5rem] md:gap-10 md:py-11"
              >
                <span className="font-heading text-[clamp(2.8rem,5vw,4.6rem)] font-semibold leading-none tracking-[-0.05em] text-[#F7FAF8] tabular-nums">
                  {stat.figure}
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
