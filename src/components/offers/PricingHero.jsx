import Image from "next/image";
import { ArrowDownRight, CheckCircle2 } from "lucide-react";

/*
 * Objective-first: the old hero asked "Centre de Contact or Solutions
 * Digitales ?", which is the org chart rather than the buyer's question.
 * These chips let someone jump straight to the block matching their goal.
 */
const OBJECTIVES = [
  ["Remplir mon agenda", "#parcours"],
  ["Trouver des contacts", "#catalogue"],
  ["Lancer des campagnes", "#catalogue"],
  ["Construire mon site", "#catalogue"],
];

const OUTCOMES = [
  "Un ciblage B2B adapté à votre marché",
  "Des actions mesurables, de la prospection au suivi",
  "Un interlocuteur pour cadrer et lancer votre projet",
];

const PricingHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#0D332B]/10 bg-[#F6F7F4]">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[#B0FF5B]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-emerald-100 opacity-40 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-24 md:px-6 md:pb-20 md:pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0D332B] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#B0FF5B]">
            Tarifs
          </span>

          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.03] tracking-[-0.03em] text-[#0D332B] sm:text-5xl lg:text-6xl">
            Investissez dans ce qui vous apporte des opportunités concrètes.
          </h1>

          <p className="mt-6 max-w-xl text-base font-medium leading-7 text-[#416058] md:text-lg">
            Prospection commerciale, rendez-vous qualifiés, génération de leads,
            sites web, SEO et automatisation CRM : choisissez le levier qui fait
            avancer votre acquisition et votre conversion.
          </p>

          {/* Price anchor — nobody should have to scroll to learn the entry point */}
          <p className="mt-7 flex flex-wrap items-baseline gap-x-2 text-[#0D332B]">
            <span className="text-sm font-semibold text-[#416058]">
              À partir de
            </span>
            <span className="tabular-figures font-heading text-4xl font-extrabold tracking-[-0.03em]">
              290 €
            </span>
            <span className="text-sm font-semibold text-[#416058]">
              pour tester une cible
            </span>
          </p>

          <ul className="mt-7 grid gap-3 text-sm font-semibold text-[#24463E]">
            {OUTCOMES.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <CheckCircle2
                  size={19}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-[#1A6D48]"
                />
                {outcome}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#parcours"
              className="inline-flex items-center gap-2 rounded-full bg-[#0D332B] px-6 py-3.5 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-[#174A3E] active:scale-[0.98]"
            >
              Voir les offres et tarifs
              <ArrowDownRight size={18} />
            </a>
            <a
              href="#estimateur"
              className="inline-flex items-center gap-2 rounded-full border border-[#0D332B]/15 bg-white px-6 py-3.5 text-sm font-extrabold text-[#0D332B] transition-all hover:-translate-y-0.5 hover:border-[#0D332B]/40"
            >
              Estimer mon budget
            </a>
          </div>

          {/* Objective shortcuts */}
          <div className="mt-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7C9188]">
              Je cherche à
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {OBJECTIVES.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-full border border-[#0D332B]/12 bg-white px-4 py-2 text-sm font-bold text-[#0D332B] transition-all hover:-translate-y-0.5 hover:border-[#1A6D48] hover:text-[#1A6D48]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-[32px] border border-[#0D332B]/10 bg-[#DCE4DD] shadow-[0_22px_55px_rgba(13,51,43,0.12)] sm:min-h-[420px]">
          <Image
            src="/images/pricing-b2b-strategy.png"
            alt="Deux professionnels préparent une stratégie commerciale B2B"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
