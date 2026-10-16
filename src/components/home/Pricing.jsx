import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import Marker from "./kit/Marker";
import Reveal from "./kit/Reveal";
import SectionHead from "./kit/SectionHead";
import { getOffersByIds } from "../../lib/offers-catalog";
import { serviceLabel } from "../../lib/article-services";

/*
 * Three entry-level price points lifted straight from the offer catalogue,
 * ordered low → high so the page shows an affordable starting point before
 * the retainer. Editing a price in offers-catalog.js updates this section too.
 * They sit on one sheet, separated by hairlines, so they read as one menu
 * rather than three competing cards; the recommended offer is the inked column.
 */
const FEATURED = getOffersByIds([
  "file-starter-500",
  "contact-vente-rdv",
  "contact-growth-standard",
]);

const Pricing = () => {
  return (
    <section className="bg-[#F6F7F4] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHead
            className="lg:col-span-7"
            title={
              <>
                Des budgets clairs, <Marker>dès le départ</Marker>.
              </>
            }
          />
          <Reveal
            as="p"
            delay={160}
            className="max-w-[44ch] text-lg leading-relaxed text-[#4E605B] lg:col-span-5 lg:pb-2"
          >
            Testez une cible, remplissez un agenda ou pilotez toute votre
            acquisition : trois points d&apos;entrée, sans engagement caché.
          </Reveal>
        </div>

        <Reveal
          variant="focus"
          className="mt-14 grid grid-cols-1 overflow-hidden rounded-[22px] bg-[#FCFDFC] ring-1 ring-[#0D332B]/10 md:mt-20 lg:grid-cols-3"
        >
          {FEATURED.map((offer, idx) => {
            const inked = Boolean(offer.highlight);

            return (
              <article
                key={offer.id}
                className={`relative flex flex-col p-8 lg:p-10 ${
                  inked
                    ? "bg-[#0D332B] text-[#F7FAF8]"
                    : `text-[#0D332B] ${idx > 0 ? "border-t border-[#0D332B]/10 lg:border-l lg:border-t-0" : ""}`
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em]">{offer.name}</h3>
                  {inked && offer.tag && (
                    <span className="chip-status shrink-0" data-step="2">
                      {offer.tag}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-8 font-heading text-[clamp(3rem,4.6vw,4.25rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums ${
                    inked ? "text-[#F7FAF8]" : "text-[#0D332B]"
                  }`}
                >
                  {offer.price}
                </p>
                {offer.billing && (
                  <p className={`mt-3 font-mono text-[13px] ${inked ? "text-[#B9CBC4]" : "text-[#4E605B]"}`}>
                    {offer.billing}
                  </p>
                )}

                <p className={`mt-6 text-[15px] leading-relaxed ${inked ? "text-[#CFDDD7]" : "text-[#4E605B]"}`}>
                  {offer.description}
                </p>

                <ul className={`mt-8 flex-1 border-t pt-6 ${inked ? "border-white/12" : "border-[#0D332B]/10"}`}>
                  {offer.features?.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 py-2">
                      <Check
                        size={16}
                        strokeWidth={2.75}
                        aria-hidden="true"
                        className={`mt-0.5 shrink-0 ${inked ? "text-[#B0FF5B]" : "text-[#4E8D38]"}`}
                      />
                      <span className={`text-[15px] leading-snug ${inked ? "text-[#E4ECE8]" : "text-[#2C4640]"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {offer.serviceHref && (
                  <Link
                    href={offer.serviceHref}
                    className={`group/btn mt-10 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-semibold leading-snug tracking-[-0.01em] transition-colors duration-300 ${
                      inked
                        ? "bg-[#B0FF5B] text-[#0D332B] hover:bg-[#C8FF8D]"
                        : "border border-[#0D332B]/20 text-[#0D332B] hover:border-[#0D332B] hover:bg-[#0D332B] hover:text-[#F7FAF8]"
                    }`}
                  >
                    {serviceLabel(offer.serviceHref)}
                    <ArrowRight size={16} aria-hidden="true" className="shrink-0 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                )}
              </article>
            );
          })}
        </Reveal>

        <Reveal delay={120} className="mt-12 flex flex-col gap-4 md:mt-14 md:flex-row md:items-center md:gap-8">
          <Link
            href="/offres"
            className="group inline-flex min-h-12 items-center gap-3 self-start rounded-full bg-[#0D332B] px-7 py-3 text-sm font-semibold tracking-[-0.01em] text-[#F7FAF8] transition-colors duration-300 hover:bg-[#1A4D43] md:text-base"
          >
            Voir toutes nos offres et tarifs
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
          <p className="max-w-3xl text-sm text-[#4E605B]">
            Fichiers B2B, rendez-vous qualifiés, campagnes email et SMS, sites
            web, SEO et automatisation.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
