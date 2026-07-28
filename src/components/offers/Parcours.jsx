import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PARCOURS, resolveParcours, getPricing, CADENCE_LABEL } from "../../lib/offers-pricing-meta";

const RESOLVED = PARCOURS.map(resolveParcours);

/*
 * Three recommended routes, composed from real catalogue offers.
 * This is the layer that answers "I know my objective, not the product" —
 * the largest gap in the previous page, where 18 equally-weighted cards left
 * the visitor to work out the mapping themselves.
 */
const Parcours = () => {
  return (
    <section
      id="parcours"
      className="scroll-mt-24 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#EAF7E4] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1A6D48]">
            Parcours recommandés
          </span>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0D332B] md:text-5xl">
            Trois façons de démarrer,
            <br className="hidden sm:block" /> selon votre objectif.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#416058] md:text-lg">
            Chaque parcours combine des offres du catalogue. Vous pouvez le
            prendre tel quel ou composer le vôtre plus bas.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {RESOLVED.map((parcours) => {
            const isHighlighted = Boolean(parcours.highlight);

            return (
              <article
                key={parcours.id}
                className={`relative flex flex-col rounded-[32px] p-8 transition-all duration-500 lg:p-9 ${
                  isHighlighted
                    ? "bg-[#0D332B] text-white shadow-[0_30px_70px_-25px_rgba(13,51,43,0.5)] md:-translate-y-4"
                    : "border border-[#0D332B]/10 bg-white text-[#0D332B] shadow-[0_12px_30px_rgba(13,51,43,0.06)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(13,51,43,0.25)]"
                }`}
              >
                {isHighlighted && parcours.tag && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <span className="rounded-b-xl bg-[#FF6A3D] px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                      {parcours.tag}
                    </span>
                  </div>
                )}

                <div className={isHighlighted ? "mt-4" : ""}>
                  <p
                    className={`text-[11px] font-bold uppercase tracking-[0.16em] ${
                      isHighlighted ? "text-[#B0FF5B]" : "text-[#1A6D48]"
                    }`}
                  >
                    {parcours.objective}
                  </p>
                  <h3
                    className={`mt-3 font-heading text-2xl font-extrabold tracking-[-0.02em] ${
                      isHighlighted ? "text-white" : "text-[#0D332B]"
                    }`}
                  >
                    {parcours.name}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-6 ${
                      isHighlighted ? "text-white/65" : "text-[#416058]"
                    }`}
                  >
                    {parcours.tagline}
                  </p>
                </div>

                {/* Entry price, read from the catalogue */}
                <div
                  className={`mt-7 border-t pt-6 ${
                    isHighlighted ? "border-white/15" : "border-[#0D332B]/10"
                  }`}
                >
                  <p
                    className={`text-xs font-bold ${
                      isHighlighted ? "text-white/50" : "text-[#7C9188]"
                    }`}
                  >
                    À partir de
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
                    <span
                      className={`tabular-figures font-heading text-5xl font-extrabold tracking-[-0.03em] ${
                        isHighlighted ? "text-[#B0FF5B]" : "text-[#0D332B]"
                      }`}
                    >
                      {parcours.entryPrice}
                    </span>
                    {parcours.entryBilling && (
                      <span
                        className={`text-sm font-semibold ${
                          isHighlighted ? "text-white/55" : "text-[#416058]"
                        }`}
                      >
                        {parcours.entryBilling}
                      </span>
                    )}
                  </div>
                </div>

                {/* Composition */}
                <div className="mt-7 flex-1">
                  <p
                    className={`text-[11px] font-bold uppercase tracking-[0.14em] ${
                      isHighlighted ? "text-white/60" : "text-[#0D332B]"
                    }`}
                  >
                    Ce parcours combine
                  </p>
                  <ul className="mt-4 space-y-4">
                    {parcours.offers.map((offer) => {
                      const pricing = getPricing(offer.id);

                      return (
                        <li key={offer.id} className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              isHighlighted ? "bg-[#B0FF5B]/15" : "bg-[#EAF7E4]"
                            }`}
                          >
                            <Check
                              size={12}
                              strokeWidth={3}
                              className={
                                isHighlighted ? "text-[#B0FF5B]" : "text-[#1A6D48]"
                              }
                            />
                          </span>
                          <span className="min-w-0">
                            <span
                              className={`block text-sm font-bold leading-snug ${
                                isHighlighted ? "text-white" : "text-[#0D332B]"
                              }`}
                            >
                              {offer.name}
                            </span>
                            <span
                              className={`mt-0.5 block text-xs font-semibold ${
                                isHighlighted ? "text-white/50" : "text-[#7C9188]"
                              }`}
                            >
                              {offer.price} {offer.billing} ·{" "}
                              {CADENCE_LABEL[pricing.cadence]}
                            </span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <Link
                  href={parcours.primaryHref}
                  className={`group mt-9 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-extrabold transition-all active:scale-[0.98] ${
                    isHighlighted
                      ? "bg-[#B0FF5B] text-[#0D332B] hover:bg-white"
                      : "border border-[#0D332B]/15 bg-white text-[#0D332B] hover:border-[#1A6D48] hover:text-[#1A6D48]"
                  }`}
                >
                  Découvrir ce parcours
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Parcours;
