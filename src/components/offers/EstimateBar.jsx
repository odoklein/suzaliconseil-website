"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronUp, X } from "lucide-react";
import { buildEstimate, formatEuros } from "../../lib/offers-pricing-meta";

/**
 * Sticky estimate bar.
 *
 * Deliberately does NOT collapse everything into one headline number: a
 * 7 €/lead, a 599 € setup and a 1 590 €/mois are three different commitments,
 * and adding them would produce a figure that means nothing. The breakdown
 * mirrors how the quote is actually structured.
 */
export default function EstimateBar({ offerIds, onRemove, onClear, onRequest }) {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const estimate = useMemo(() => buildEstimate(offerIds), [offerIds]);
  const count = offerIds.length;

  const handleRequest = () => {
    // Feeds the existing lead flow with the whole selection in one go,
    // instead of one modal per offer.
    onRequest({
      id: "estimation-personnalisee",
      name: `Estimation personnalisée (${count} offre${count > 1 ? "s" : ""})`,
      price: "",
      billing: "",
      description: estimate.offers.map((offer) => offer.name).join(" + "),
      features: estimate.offers.map(
        (offer) => `${offer.name} — ${offer.price} ${offer.billing}`.trim(),
      ),
    });
  };

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.aside
          id="estimateur"
          initial={reduceMotion ? false : { y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? undefined : { y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 34 }}
          className="fixed inset-x-0 bottom-0 z-[9990] px-3 pb-3 md:px-6 md:pb-6"
          aria-label="Votre estimation"
        >
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[26px] border border-white/10 bg-[#0D332B] shadow-[0_30px_70px_-20px_rgba(13,51,43,0.65)]">
            {/* Expanded detail */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden border-b border-white/10"
                >
                  <div className="max-h-[40vh] space-y-2 overflow-y-auto p-5 md:p-6">
                    {estimate.offers.map((offer) => (
                      <div
                        key={offer.id}
                        className="flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-white">
                            {offer.name}
                          </p>
                          <p className="tabular-figures mt-0.5 text-xs font-semibold text-white/50">
                            {offer.price} {offer.billing}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(offer.id)}
                          aria-label={`Retirer ${offer.name} de l'estimation`}
                          className="shrink-0 rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}

                    {estimate.usage.length > 0 && (
                      <div className="rounded-xl border border-[#B0FF5B]/20 bg-[#B0FF5B]/5 px-4 py-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#B0FF5B]">
                          Facturé à l&apos;usage
                        </p>
                        <ul className="mt-2 space-y-1">
                          {estimate.usage.map((item, index) => (
                            <li
                              key={`${item.offerName}-${index}`}
                              className="tabular-figures text-xs font-semibold text-white/70"
                            >
                              {formatEuros(item.amount)} {item.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Summary row */}
            <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between md:p-5">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen((value) => !value)}
                  aria-expanded={isOpen}
                  className="flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-white/20"
                >
                  {count} offre{count > 1 ? "s" : ""}
                  <ChevronUp
                    size={15}
                    className={`transition-transform duration-300 ${isOpen ? "" : "rotate-180"}`}
                  />
                </button>

                <div
                  className="flex flex-wrap items-baseline gap-x-5 gap-y-1"
                  aria-live="polite"
                >
                  {estimate.oneShot > 0 && (
                    <span className="flex items-baseline gap-1.5">
                      <span className="tabular-figures font-heading text-2xl font-extrabold tracking-[-0.02em] text-[#B0FF5B]">
                        {formatEuros(estimate.oneShot)}
                      </span>
                      <span className="text-xs font-semibold text-white/50">
                        au lancement
                      </span>
                    </span>
                  )}
                  {estimate.monthly > 0 && (
                    <span className="flex items-baseline gap-1.5">
                      <span className="tabular-figures font-heading text-2xl font-extrabold tracking-[-0.02em] text-white">
                        {formatEuros(estimate.monthly)}
                      </span>
                      <span className="text-xs font-semibold text-white/50">
                        /mois
                      </span>
                    </span>
                  )}
                  {estimate.usage.length > 0 && (
                    <span className="text-xs font-semibold text-white/50">
                      + facturation à l&apos;usage
                    </span>
                  )}
                  {estimate.quoteCount > 0 && (
                    <span className="text-xs font-semibold text-white/50">
                      + {estimate.quoteCount} sur devis
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClear}
                  className="rounded-xl px-3 py-2 text-xs font-bold text-white/50 transition-colors hover:text-white"
                >
                  Vider
                </button>
                <button
                  type="button"
                  onClick={handleRequest}
                  className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#B0FF5B] px-5 py-3.5 text-sm font-extrabold text-[#0D332B] transition-all hover:bg-white active:scale-[0.98] md:flex-none"
                >
                  Recevoir mon estimation
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
