import Link from "next/link";
import { Plus } from "lucide-react";
import { TRANSACTIONAL_SERVICES } from "../../lib/transactional-services";

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
      "Quatre modes coexistent : un paiement unique (fichiers, packs SMS, projets web), un abonnement mensuel (Growth Standard, pack campagne complet), une facturation à l'usage (7 € par lead qualifié, 55 € ou 150 € par rendez-vous selon l'offre) et le sur-devis pour les dispositifs sur mesure.",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ENTRIES.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const PricingFaq = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-50 opacity-60 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="mb-12 h-fit space-y-6 text-center lg:sticky lg:top-32 lg:col-span-5 lg:mb-0 lg:text-left">
            <span className="inline-flex items-center rounded-full bg-[#EAF7E4] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1A6D48]">
              Questions fréquentes
            </span>
            <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0D332B] md:text-5xl">
              Avant de choisir <br className="hidden sm:block" />
              une offre.
            </h2>
            <p className="mx-auto max-w-md text-base leading-7 text-[#416058] lg:mx-0">
              Volumes, facturation, données et démarrage : ce qu&apos;il faut
              savoir avant d&apos;engager un budget.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#0D332B] decoration-[#B0FF5B] decoration-2 underline-offset-4 hover:underline"
              >
                Une autre question ? Écrivez-nous
              </Link>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {ENTRIES.map(({ question, answer, href, label }) => (
              <details
                key={question}
                className="group rounded-2xl border border-[#0D332B]/10 bg-white shadow-sm transition-all duration-300 hover:border-[#0D332B]/20 hover:shadow-md open:shadow-lg"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 md:p-7 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-heading text-base font-extrabold leading-snug tracking-[-0.01em] text-[#0D332B] md:text-lg">
                    {question}
                  </h3>
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF7E4] transition-transform duration-300 group-open:rotate-45">
                    <Plus size={16} strokeWidth={2.5} className="text-[#1A6D48]" />
                  </span>
                </summary>

                <div className="-mt-1 px-6 pb-6 md:px-7 md:pb-7">
                  <p className="max-w-[62ch] text-sm leading-relaxed text-[#416058] md:text-base">
                    {answer}
                  </p>
                  <Link
                    href={href}
                    className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#1A6D48] underline-offset-4 hover:underline"
                  >
                    {label}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover/link:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
