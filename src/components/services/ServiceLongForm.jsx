import Link from "next/link";
import { FaqList, LedgerList, SectionHead } from "../kit";

/*
 * ServiceLongForm : la partie éditoriale longue d'une page service (méthode, cas
 * d'usage, mesure, conformité, FAQ, maillage interne). Le contenu vient d'un module
 * de src/content/services/ ; la mise en page reprend la grammaire du kit du site
 * (SectionHead, LedgerList, FaqList). Composant serveur : tout le texte est dans le
 * HTML rendu, y compris les liens internes et la FAQ (avec son balisage FAQPage).
 *
 * content = {
 *   sections: [{ title, paragraphs?: Parts[], items?: [{ title, text: Parts }], closing?: Parts[] }],
 *   faqTitle?, faqs: [[question, answer: Parts]],
 *   related: { services: [[href, label, description?]], articles: [[href, label, description?]] },
 * }
 * « Parts » = une chaîne, ou un tableau mêlant chaînes et liens { href, text }.
 */

const LINK_CLASS =
  "font-semibold text-[#0D332B] underline decoration-[#B0FF5B] decoration-[3px] underline-offset-[5px] transition-colors hover:decoration-[#0D332B]";

/** Texte brut d'un « Parts » (pour le JSON-LD de la FAQ). */
export const plain = (parts) =>
  (Array.isArray(parts) ? parts : [parts]).map((p) => (typeof p === "string" ? p : p.text)).join("");

export function Rich({ parts }) {
  const list = Array.isArray(parts) ? parts : [parts];
  return list.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : (
      <Link key={i} href={part.href} className={LINK_CLASS}>
        {part.text}
      </Link>
    ),
  );
}

const PROSE = "max-w-[64ch] text-[17px] leading-[1.75] text-[#4E605B] md:text-lg";

export default function ServiceLongForm({ content }) {
  const { sections = [], faqs = [], faqTitle, related } = content;

  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`border-t border-[#0D332B]/10 py-20 md:py-28 ${index % 2 === 0 ? "bg-[#FCFDFC]" : "bg-[#F6F7F4]"}`}
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <SectionHead
              size="md"
              title={section.title}
              className="h-fit lg:sticky lg:top-32 lg:col-span-5"
            />
            <div className="lg:col-span-7 lg:mt-3">
              {section.paragraphs?.map((paragraph, i) => (
                <p key={i} className={`${PROSE} ${i > 0 ? "mt-6" : ""}`}>
                  <Rich parts={paragraph} />
                </p>
              ))}

              {section.items && (
                <ul className={`${section.paragraphs ? "mt-10" : ""} border-t border-[#0D332B]/14`}>
                  {section.items.map((item) => (
                    <li key={item.title} className="border-b border-[#0D332B]/14 py-6">
                      <h3 className="font-heading text-[1.2rem] font-semibold leading-snug tracking-[-0.025em] text-[#0D332B] md:text-[1.35rem]">
                        {item.title}
                      </h3>
                      <p className={`${PROSE} mt-2`}>
                        <Rich parts={item.text} />
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {section.closing?.map((paragraph, i) => (
                <p key={i} className={`${PROSE} mt-8`}>
                  <Rich parts={paragraph} />
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {faqs.length > 0 && (
        <FaqList
          title={faqTitle}
          items={faqs.map(([question, answer]) => ({
            question,
            answer: <Rich parts={answer} />,
            answerText: plain(answer),
          }))}
        />
      )}

      {related && (
        <section className="border-t border-[#0D332B]/10 bg-[#FCFDFC] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {related.services?.length > 0 && (
              <>
                <SectionHead size="md" title="Services associés" />
                <LedgerList
                  className="mt-12 md:mt-16"
                  items={related.services.map(([href, title, description]) => ({ href, title, description }))}
                />
              </>
            )}
            {related.articles?.length > 0 && (
              <div className={related.services?.length ? "mt-20 md:mt-28" : ""}>
                <SectionHead size="md" title="Pour aller plus loin" />
                <LedgerList
                  className="mt-12 md:mt-16"
                  items={related.articles.map(([href, title, description]) => ({ href, title, description }))}
                />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
