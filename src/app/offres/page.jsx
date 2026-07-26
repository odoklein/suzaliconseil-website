import Image from "next/image";
import { ArrowDownRight, CheckCircle2 } from "lucide-react";
import PricingContainer from "../../components/offers/PricingContainer";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Tarifs de prospection et services B2B | Suzali Conseil",
  description:
    "Comparez nos offres de prospection commerciale B2B, prise de rendez-vous qualifiés, génération de leads, site web, SEO, CRM et automatisation.",
  path: "/offres",
  keywords: [
    "tarif prospection B2B",
    "génération de leads B2B",
    "prise de rendez-vous qualifiés",
    "téléprospection B2B",
    "agence digitale",
    "création site web",
    "SEO",
    "automatisation CRM",
  ],
});

const outcomes = [
  "Un ciblage B2B adapté à votre marché",
  "Des actions mesurables, de la prospection au suivi",
  "Un interlocuteur pour cadrer et lancer votre projet",
];

export default function OffresPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F7F4] text-[#0D332B]">
      <section className="relative border-b border-[#0D332B]/10 bg-[#F6F7F4]">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[#FF6A3D]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-24 md:px-6 md:pb-16 md:pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
          <div>
            <p className="mb-5 text-sm font-bold text-[#C84B25]">
              Des offres pensées pour la croissance B2B
            </p>
            <h1 className="max-w-3xl font-heading text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
              Investissez dans ce qui vous apporte des opportunités concrètes.
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-[#416058] md:text-lg">
              Prospection commerciale, rendez-vous qualifiés, génération de leads,
              sites web, SEO et automatisation CRM : choisissez le levier qui fait
              avancer votre acquisition et votre conversion.
            </p>

            <ul className="mt-8 grid gap-3 text-sm font-semibold text-[#24463E]">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-[#FF6A3D]"
                  />
                  {outcome}
                </li>
              ))}
            </ul>

            <a
              href="#catalogue-offres"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0D332B] px-5 py-3 text-sm font-black text-white transition-transform hover:bg-[#174A3E] active:scale-[0.98]"
            >
              Voir les offres et tarifs
              <ArrowDownRight size={18} />
            </a>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-[#0D332B]/10 bg-[#DCE4DD] shadow-[0_22px_55px_rgba(13,51,43,0.12)] sm:min-h-[390px]">
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

      <section id="catalogue-offres" className="scroll-mt-24 py-12 md:py-16">
        <PricingContainer />
      </section>
    </main>
  );
}
