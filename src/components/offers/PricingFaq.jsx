import Link from "next/link";
import { FaqList } from "../kit";
import { TRANSACTIONAL_SERVICES } from "../../lib/transactional-services";
import { GROWTH_STANDARD, VENTE_AU_RDV } from "../../lib/offer-terms";
// Les montants ne figurent volontairement pas dans cette réponse : une FAQ qui cite les prix
// par rendez-vous des deux offres côte à côte les mélange. Chaque prix reste sur la carte de
// son offre, dans le catalogue.

/*
 * Four questions are reused verbatim from the service pages so the pricing
 * page never answers something differently from the page it links to.
 *
 * Two are derived strictly from catalogue data (minimum volumes, billing
 * units) — they restate figures already published on the offers themselves
 * rather than introducing new commercial terms.
 */
const FROM_SERVICES = [
  { service: "externalisee", index: 0, label: "Prospection externalisée" },
  { service: "qualification", index: 1, label: "Qualification de leads B2B" },
  { service: "fichier", index: 1, label: "Fichier de prospection B2B" },
  { service: "externalisee", index: 2, label: "Prospection externalisée" },
];

const DERIVED = [
  {
    question: "Y a-t-il un volume minimum par offre ?",
    answer:
      "Oui, selon l'offre : la Vente au Rendez-Vous porte sur 10 RDV minimum, et la Qualification de Leads sur 100 leads minimum. Les fichiers démarrent à 500 contacts et les campagnes SMS à 1 000 envois.",
    href: "/offres",
    label: "Voir le catalogue",
  },
  {
    question: "Comment sont facturées les différentes offres ?",
    answer:
      `Quatre modes coexistent : un paiement unique (fichiers, packs SMS, projets web), un abonnement mensuel (${GROWTH_STANDARD.name}, avec une part variable par rendez-vous ; pack campagne complet), une facturation à l'usage (Qualification de Leads, ${VENTE_AU_RDV.name}) et le sur-devis pour les dispositifs sur mesure. Le prix exact de chaque offre est affiché, avec son nom, dans le catalogue.`,
    href: "/offres",
    label: "Voir le catalogue",
  },
];

const ENTRIES = [
  ...FROM_SERVICES.map(({ service, index, label }) => {
    const source = TRANSACTIONAL_SERVICES[service];
    const [question, answer] = source.faqs[index];
    return { question, answer, href: source.path, label };
  }),
  ...DERIVED,
];

/* The answer keeps its link to the page it was taken from; the FAQPage
   JSON-LD (emitted by FaqList) carries the plain answer text. */
const ITEMS = ENTRIES.map(({ question, answer, href, label }) => ({
  question,
  answerText: answer,
  answer: (
    <>
      <p>{answer}</p>
      <Link
        href={href === "/offres" ? "/offres#catalogue" : href}
        className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold tracking-[-0.01em] text-[#0D332B] underline decoration-[#0D332B]/25 decoration-[2px] underline-offset-[6px] transition-colors hover:decoration-[#0D332B]"
      >
        {label}
        <span aria-hidden="true">→</span>
      </Link>
    </>
  ),
}));

const PricingFaq = () => (
  <FaqList
    title="Avant de choisir une offre."
    intro="Volumes, facturation, données et démarrage : ce qu'il faut savoir avant d'engager un budget."
    items={ITEMS}
  />
);

export default PricingFaq;
