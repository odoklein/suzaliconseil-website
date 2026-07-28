import PricingHero from "../../components/offers/PricingHero";
import Parcours from "../../components/offers/Parcours";
import PricingContainer from "../../components/offers/PricingContainer";
import ComparisonTable from "../../components/offers/ComparisonTable";
import ClientLogos from "../../components/home/ClientLogos";
import PricingFaq from "../../components/offers/PricingFaq";
import PricingCta from "../../components/offers/PricingCta";
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

export default function OffresPage() {
  /*
   * Guided → modular → compare → prove → reassure → close.
   * The three parcours answer "I know my objective, not the product"; the
   * catalogue serves buyers who already know what they want; the estimator
   * (inside PricingContainer) serves those building a budget.
   */
  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F7F4] text-[#0D332B]">
      <PricingHero />
      <Parcours />

      <section
        id="catalogue"
        className="scroll-mt-24 bg-[#F6F7F4] py-16 md:py-24"
      >
        <PricingContainer />
      </section>

      <ComparisonTable />
      <ClientLogos />
      <PricingFaq />
      <PricingCta />
    </main>
  );
}
