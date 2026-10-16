import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import Reveal from "./kit/Reveal";
import SectionHead from "./kit/SectionHead";
import { TRANSACTIONAL_SERVICES } from "../../lib/transactional-services";
import { faqSchema } from "../../lib/structured-data";
import JsonLd from "../seo/JsonLd";

/*
 * Questions are pulled from the service pages themselves so the homepage and
 * the detail pages never answer the same question two different ways.
 * Each entry carries the link back to the page it came from, which is the most
 * natural internal-linking surface on the page.
 */
const SELECTED = [
  { service: "externalisee", index: 0, label: "Prospection externalisée" },
  { service: "externalisee", index: 1, label: "Prospection externalisée" },
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

const Faq = () => {
  return (
    <section className="border-t border-[#0D332B]/10 bg-[#F6F7F4] py-24 md:py-32">
      <JsonLd data={faqSchema(ENTRIES, "/")} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="mb-12 h-fit lg:sticky lg:top-32 lg:col-span-5 lg:mb-0">
            <SectionHead
              size="md"
              title={
                <>
                  Ce que les équipes nous demandent le plus.
                </>
              }
              intro="Les réponses aux questions qui reviennent avant chaque démarrage de mission."
              introClassName="md:text-lg"
            />
            <Reveal delay={220} className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-[-0.01em] text-[#0D332B] underline decoration-[#B0FF5B] decoration-[3px] underline-offset-[6px] transition-colors hover:decoration-[#0D332B]"
              >
                Une autre question ? Écrivez-nous
              </Link>
            </Reveal>
          </div>

          {/* Accordion — native <details>, so it opens without JavaScript */}
          <div className="border-t border-[#0D332B]/14 lg:col-span-7">
            {ENTRIES.map(({ question, answer, href, label }) => (
              <details key={question} className="faq-item group border-b border-[#0D332B]/14">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] md:py-8 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-heading text-lg font-semibold leading-snug tracking-[-0.025em] text-[#0D332B] transition-colors md:text-[1.35rem]">
                    {question}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0D332B]/18 transition-[background-color,border-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45 group-open:border-[#B0FF5B] group-open:bg-[#B0FF5B]">
                    <Plus size={16} strokeWidth={2.5} className="text-[#0D332B]" />
                  </span>
                </summary>

                <div className="pb-8 pr-14">
                  <p className="max-w-[62ch] text-base leading-relaxed text-[#4E605B] md:text-[17px]">{answer}</p>
                  <Link
                    href={href}
                    className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D332B] underline decoration-[#B0FF5B] decoration-[3px] underline-offset-[6px]"
                  >
                    {label}
                    <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover/link:translate-x-0.5" />
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
