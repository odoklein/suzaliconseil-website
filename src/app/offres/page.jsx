import { Check } from "lucide-react";
import Parcours from "../../components/offers/Parcours";
import PricingContainer from "../../components/offers/PricingContainer";
import ComparisonTable from "../../components/offers/ComparisonTable";
import ClientLogos from "../../components/home/ClientLogos";
import PricingFaq from "../../components/offers/PricingFaq";
import MagneticButton from "../../components/ui/MagneticButton";
import { PageHero, ClosingCta } from "../../components/kit";
import { createPageMetadata } from "../../lib/seo";
import { FILE_STARTER_OFFER } from "../../lib/transactional-services";

export const metadata = createPageMetadata({
  title: "Tarifs de prospection et services B2B | Suzali Conseil",
  description:
    `Tarifs de prospection B2B : fichiers dès ${FILE_STARTER_OFFER.price}, rendez-vous qualifiés, génération de leads, site web, SEO et automatisation. Estimez votre budget en ligne.`,
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

const OUTCOMES = [
  "Un ciblage B2B adapté à votre marché",
  "Des actions mesurables, de la prospection au suivi",
  "Un interlocuteur pour cadrer et lancer votre projet",
];

export default function OffresPage() {
  /*
   * Guided → modular → compare → prove → reassure → close.
   * The three parcours answer "I know my objective, not the product"; the
   * catalogue serves buyers who already know what they want; the estimator
   * (inside PricingContainer) serves those building a budget.
   */
  return (
    <main className="min-h-screen overflow-x-clip bg-[#F6F7F4] text-[#0D332B]">
      <PageHero
        title="Nos offres et tarifs de prospection B2B"
        breadcrumbs={[{ label: "Offres et tarifs", href: "/offres" }]}
        intro="Prospection commerciale, rendez-vous qualifiés, génération de leads, sites web, SEO et automatisation CRM : choisissez le levier qui fait avancer votre acquisition et votre conversion."
        meta={
          <span className="tabular-nums">
            À partir de <span className="text-[#F7FAF8]">290 €</span> pour tester une cible
          </span>
        }
        actions={
          <>
            <MagneticButton href="#parcours" variant="primary" className="w-full sm:w-auto">
              Voir les offres et tarifs
            </MagneticButton>
            <MagneticButton href="#catalogue" variant="outline-light" className="w-full sm:w-auto">
              Estimer mon budget
            </MagneticButton>
          </>
        }
        image="/images/pricing-b2b-strategy.png"
        imageAlt="Deux professionnels préparent une stratégie commerciale B2B"
        align="center"
      >
        <ul
          className="hero-focus mt-10 max-w-[36rem] border-t border-white/12"
          style={{ "--rise-delay": "640ms" }}
        >
          {OUTCOMES.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-3 border-b border-white/12 px-1 py-3.5 text-[15px] text-[#E4ECE8]"
            >
              <Check
                size={16}
                strokeWidth={2.75}
                aria-hidden="true"
                className="mt-1 shrink-0 text-[#B0FF5B]"
              />
              {outcome}
            </li>
          ))}
        </ul>
      </PageHero>

      <Parcours />

      <section
        id="catalogue"
        className="scroll-mt-24 border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32"
      >
        <PricingContainer />
      </section>

      <ComparisonTable />
      <ClientLogos />
      <PricingFaq />

      <ClosingCta
        title="Un doute sur l'offre la plus adaptée ?"
        intro="Décrivez votre cible et votre objectif. Nous vous indiquons le dispositif pertinent et son budget, sans engagement."
        primary={{ label: "Parler à un expert", href: "/contact" }}
        secondary={{ label: "Voir nos services", href: "/services/commercial" }}
      />
    </main>
  );
}
