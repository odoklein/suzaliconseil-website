import Link from "next/link";
import { Plus } from "lucide-react";
import { TRANSACTIONAL_SERVICES } from "../../lib/transactional-services";

/*
 * Questions are pulled from the service pages themselves so the homepage and
 * the detail pages never answer the same question two different ways.
 * Each entry carries the link back to the page it came from, which is the most
 * natural internal-linking surface on the page.
 */
const SELECTED = [
  { service: "externalisee", index: 0, label: "Prospection externalisée" },
  { service: "externalisee", index: 1, label: "Outbound marketing B2B" },
  { service: "qualification", index: 0, label: "Qualification de leads B2B" },
  { service: "fichier", index: 1, label: "Fichier de prospection B2B" },
  { service: "campagnes", index: 2, label: "Campagnes email et SMS B2B" },
  { service: "fichier", index: 2, label: "Fichier de prospection B2B" },
];

const ENTRIES = SELECTED.map(({ service, index, label }) => {
  const source = TRANSACTIONAL_SERVICES[service];
  const [question, answer] = source.faqs[index];
  return { question, answer, href: source.path, label };
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ENTRIES.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const Faq = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFDFC] py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Background decor */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[460px] w-[460px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#E3FFC4] opacity-35 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Sticky heading — breaks the centred-header rhythm of the page */}
          <div className="mb-12 h-fit space-y-6 text-left lg:sticky lg:top-28 lg:col-span-5 lg:mb-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E3FFC4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#315B2A] md:text-sm">
              Questions fréquentes
            </span>
            <h2 className="font-heading text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-[#0D332B] sm:text-5xl">
              Ce que les équipes <br className="hidden sm:block" />
              nous demandent{" "}
              <span className="underline decoration-[#B0FF5B] decoration-[8px] underline-offset-[-4px] [text-decoration-skip-ink:none]">
                le plus
              </span>.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-[#52635F] md:text-lg">
              Les réponses aux questions qui reviennent avant chaque
              démarrage de mission.
            </p>
            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-bold tracking-[-0.01em] text-[#0D332B] underline decoration-2 decoration-[#85C947] underline-offset-4"
              >
                Une autre question ? Écrivez-nous
              </Link>
            </div>
          </div>

          {/* Accordion — native <details>, so it opens without JavaScript */}
          <div className="border-t border-[#0D332B]/14 lg:col-span-7">
            {ENTRIES.map(({ question, answer, href, label }) => (
              <details
                key={question}
                className="group border-b border-[#0D332B]/14 bg-transparent transition-colors duration-300 hover:bg-[#F6F8F6] open:bg-[#F0F5F1]"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 p-6 md:p-7 list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-heading font-bold text-base md:text-lg text-[#0D332B] leading-snug">
                    {question}
                  </h3>
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E3FFC4] transition-transform duration-300 group-open:rotate-45">
                    <Plus size={16} strokeWidth={2.5} className="text-[#0D332B]" />
                  </span>
                </summary>

                <div className="px-6 md:px-7 pb-6 md:pb-7 -mt-1">
                  <p className="text-sm leading-relaxed text-[#52635F] md:text-base">
                    {answer}
                  </p>
                  <Link
                    href={href}
                    className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#315B2A] underline decoration-[#85C947] decoration-2 underline-offset-4"
                  >
                    {label}
                    <span aria-hidden="true" className="transition-transform group-hover/link:translate-x-0.5">
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

export default Faq;
