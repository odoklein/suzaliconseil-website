import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Marker, Reveal, SectionHead } from "../kit";
import { PARCOURS, resolveParcours, getPricing, CADENCE_LABEL } from "../../lib/offers-pricing-meta";

const RESOLVED = PARCOURS.map(resolveParcours);

/*
 * Three recommended routes, composed from real catalogue offers.
 * This is the layer that answers "I know my objective, not the product".
 * Drawn in the homepage pricing grammar: one sheet split by hairlines, the
 * most-chosen route as the inked column, prices as large tabular figures.
 */
const Parcours = () => {
  return (
    <section id="parcours" className="scroll-mt-24 bg-[#F6F7F4] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHead
            className="lg:col-span-7"
            title={
              <>
                Trois façons de démarrer, selon <Marker>votre objectif</Marker>.
              </>
            }
          />
          <Reveal
            as="p"
            delay={160}
            className="max-w-[44ch] text-lg leading-relaxed text-[#4E605B] lg:col-span-5 lg:pb-2"
          >
            Chaque parcours combine des offres du catalogue. Vous pouvez le
            prendre tel quel ou composer le vôtre plus bas.
          </Reveal>
        </div>

        <Reveal
          variant="focus"
          className="mt-14 grid grid-cols-1 overflow-hidden rounded-[22px] bg-[#FCFDFC] ring-1 ring-[#0D332B]/10 md:mt-20 lg:grid-cols-3"
        >
          {RESOLVED.map((parcours, idx) => {
            const inked = Boolean(parcours.highlight);

            return (
              <article
                key={parcours.id}
                className={`relative flex flex-col p-7 sm:p-8 lg:p-10 ${
                  inked
                    ? "bg-[#0D332B] text-[#F7FAF8]"
                    : `text-[#0D332B] ${idx > 0 ? "border-t border-[#0D332B]/10 lg:border-l lg:border-t-0" : ""}`
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em]">
                    {parcours.name}
                  </h3>
                  {inked && parcours.tag && (
                    <span className="chip-status shrink-0" data-step="2">
                      {parcours.tag}
                    </span>
                  )}
                </div>
                <p className={`mt-2 text-base font-medium ${inked ? "text-[#F7FAF8]" : "text-[#0D332B]"}`}>
                  {parcours.objective}
                </p>
                <p className={`mt-3 text-[15px] leading-relaxed ${inked ? "text-[#CFDDD7]" : "text-[#4E605B]"}`}>
                  {parcours.tagline}
                </p>

                {/* Entry price, read from the catalogue */}
                <p className={`mt-8 text-sm ${inked ? "text-[#B9CBC4]" : "text-[#4E605B]"}`}>À partir de</p>
                <p className="mt-1 font-heading text-[clamp(3rem,4.6vw,4.25rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums">
                  {parcours.entryPrice}
                </p>
                {parcours.entryBilling && (
                  <p className={`mt-3 font-mono text-[13px] ${inked ? "text-[#B9CBC4]" : "text-[#4E605B]"}`}>
                    {parcours.entryBilling}
                  </p>
                )}

                {/* Composition */}
                <div className={`mt-8 flex-1 border-t pt-6 ${inked ? "border-white/12" : "border-[#0D332B]/10"}`}>
                  <p className={`text-sm font-semibold ${inked ? "text-[#F7FAF8]" : "text-[#0D332B]"}`}>
                    Ce parcours combine
                  </p>
                  <ul className="mt-2">
                    {parcours.offers.map((offer) => {
                      const pricing = getPricing(offer.id);

                      return (
                        <li key={offer.id} className="flex items-start gap-3 py-2.5">
                          <Check
                            size={16}
                            strokeWidth={2.75}
                            aria-hidden="true"
                            className={`mt-1 shrink-0 ${inked ? "text-[#B0FF5B]" : "text-[#4E8D38]"}`}
                          />
                          <span className="min-w-0">
                            <span
                              className={`block text-[15px] font-semibold leading-snug ${
                                inked ? "text-[#F7FAF8]" : "text-[#0D332B]"
                              }`}
                            >
                              {offer.name}
                            </span>
                            <span
                              className={`mt-1 block font-mono text-[12px] leading-snug tabular-nums ${
                                inked ? "text-[#B9CBC4]" : "text-[#4E605B]"
                              }`}
                            >
                              {offer.price} {offer.billing} · {CADENCE_LABEL[pricing.cadence]}
                            </span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <Link
                  href={parcours.primaryHref}
                  className={`group/btn mt-10 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                    inked
                      ? "bg-[#B0FF5B] text-[#0D332B] hover:bg-[#C8FF8D]"
                      : "border border-[#0D332B]/20 text-[#0D332B] hover:border-[#0D332B] hover:bg-[#0D332B] hover:text-[#F7FAF8]"
                  }`}
                >
                  Découvrir ce parcours
                  <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default Parcours;
