import Link from "next/link";
import { Plus } from "lucide-react";
import Reveal from "../home/kit/Reveal";
import SectionHead from "../home/kit/SectionHead";
import JsonLd from "../seo/JsonLd";
import { faqSchema } from "../../lib/structured-data";

/*
 * FaqList - the homepage FAQ, reusable: a sticky heading on the left, native
 * <details> rows on hairlines on the right (opens without JS, animates height
 * where supported via .faq-item). Emits FAQPage JSON-LD unless jsonLd={false}
 * (pass false when the page already ships its own FAQ schema).
 *
 * items: [{ question, answer }] - answer may be a string or a node; JSON-LD
 * needs strings, so pass answerText for node answers.
 */
export default function FaqList({
  title = "Questions fréquentes",
  intro,
  items,
  jsonLd = true,
  contactLink = true,
  className = "",
}) {
  const schema =
    jsonLd &&
    faqSchema(
      items.map(({ question, answer, answerText }) => ({
        question,
        answer: answerText ?? String(answer),
      })),
    );

  return (
    <section className={`border-t border-[#0D332B]/10 bg-[#F6F7F4] py-24 md:py-32 ${className}`}>
      {schema && <JsonLd data={schema} />}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="mb-12 h-fit lg:sticky lg:top-32 lg:col-span-5 lg:mb-0">
            <SectionHead size="md" title={title} intro={intro} introClassName="md:text-lg" />
            {contactLink && (
              <Reveal delay={220} className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-[-0.01em] text-[#0D332B] underline decoration-[#B0FF5B] decoration-[3px] underline-offset-[6px] transition-colors hover:decoration-[#0D332B]"
                >
                  Une autre question ? Écrivez-nous
                </Link>
              </Reveal>
            )}
          </div>

          <div className="border-t border-[#0D332B]/14 lg:col-span-7">
            {items.map(({ question, answer }) => (
              <details key={question} className="faq-item group border-b border-[#0D332B]/14">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] md:py-8 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-heading text-lg font-semibold leading-snug tracking-[-0.025em] text-[#0D332B] md:text-[1.35rem]">
                    {question}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0D332B]/18 transition-[background-color,border-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45 group-open:border-[#B0FF5B] group-open:bg-[#B0FF5B]">
                    <Plus size={16} strokeWidth={2.5} className="text-[#0D332B]" />
                  </span>
                </summary>
                <div className="max-w-[62ch] pb-8 pr-14 text-base leading-relaxed text-[#4E605B] md:text-[17px]">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
