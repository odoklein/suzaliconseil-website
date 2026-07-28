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
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Background decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2 opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Sticky heading — breaks the centred-header rhythm of the page */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-semibold tracking-wide uppercase">
              Questions fréquentes
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0D332B] tracking-tight leading-[1.1]">
              Ce que les équipes <br className="hidden sm:block" />
              nous demandent{" "}
              <span className="text-gradient-premium">le plus</span>.
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Les réponses aux questions qui reviennent avant chaque
              démarrage de mission.
            </p>
            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0D332B] underline-offset-4 decoration-2 decoration-[#B0FF5B] hover:underline"
              >
                Une autre question ? Écrivez-nous
              </Link>
            </div>
          </div>

          {/* Accordion — native <details>, so it opens without JavaScript */}
          <div className="lg:col-span-7 space-y-4">
            {ENTRIES.map(({ question, answer, href, label }) => (
              <details
                key={question}
                className="group rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-gray-200 hover:shadow-md open:border-[#0D332B]/15 open:shadow-lg"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 p-6 md:p-7 list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-heading font-bold text-base md:text-lg text-[#0D332B] leading-snug">
                    {question}
                  </h3>
                  <span className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                    <Plus size={16} strokeWidth={2.5} className="text-[#1A6D48]" />
                  </span>
                </summary>

                <div className="px-6 md:px-7 pb-6 md:pb-7 -mt-1">
                  <p className="text-sm md:text-base leading-relaxed text-gray-600">
                    {answer}
                  </p>
                  <Link
                    href={href}
                    className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#1A6D48] underline-offset-4 hover:underline"
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
