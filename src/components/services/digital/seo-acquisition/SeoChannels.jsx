import { LedgerList, Marker, SectionHead } from "../../../kit";

const CHANNELS = [
  {
    title: "SEO Technique & Sémantique",
    description:
      "Audit complet : maillage interne, vitesse de chargement, cocons sémantiques. Nous rendons votre site irrésistible pour Google.",
    meta: "Top 3 Google",
  },
  {
    title: "Google Ads (SEA) Haute Perf",
    description:
      "Campagnes Search, Display et Shopping ultra-ciblées. Gestion des enchères et A/B testing quotidien pour réduire votre CPC.",
    meta: "Leads Immédiats",
  },
  {
    title: "Social Ads (Meta & LinkedIn)",
    description:
      "Ciblage démographique et comportemental précis. Retargeting dynamique pour convertir les visiteurs indécis.",
    meta: "Notoriété & Leads",
  },
  {
    title: "Content Marketing 2.0",
    description:
      "Stratégie éditoriale qui positionne votre marque en leader d'opinion. Articles de blog, livres blancs, études de cas.",
    meta: "Autorité",
  },
  {
    title: "Netlinking & E-Réputation",
    description:
      "Acquisition de backlinks de haute autorité via des partenariats médias et presse digitale.",
    meta: "Confiance",
  },
  {
    title: "Conversion (CRO) & Data",
    description:
      "Analyse des parcours utilisateurs (Heatmaps, GA4) pour transformer chaque visiteur en prospect qualifié.",
    meta: "Conversion Max",
  },
];

export default function SeoChannels() {
  return (
    <section id="canaux" className="scroll-mt-24 bg-[#F6F7F4] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          size="md"
          className="max-w-4xl"
          title={
            <>
              Être visible n&apos;est pas une option, c&apos;est une nécessité{" "}
              <Marker>vitale</Marker>
            </>
          }
          intro={
            <>
              93% des expériences en ligne commencent par un moteur de recherche.{" "}
              <strong className="font-semibold text-[#0D332B]">
                Si vous n&apos;êtes pas en première page, vous n&apos;existez pas.
              </strong>
            </>
          }
        />

        <LedgerList items={CHANNELS} className="mt-16 md:mt-20" />
      </div>
    </section>
  );
}
