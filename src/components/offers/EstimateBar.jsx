"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useSafeReducedMotion from "../../lib/useSafeReducedMotion";
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
  const reduceMotion = useSafeReducedMotion();

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
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-[9990] px-3 pb-3 md:px-6 md:pb-6"
          aria-label="Votre estimation"
        >
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[22px] border border-white/12 bg-[#0D332B] shadow-[0_40px_80px_-30px_rgba(13,51,43,0.7)]">
            {/* Expanded detail */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden border-b border-white/12"
                >
                  <div data-lenis-prevent className="max-h-[40vh] overflow-y-auto px-5 py-3 md:px-6">
                    {estimate.offers.map((offer) => (
                      <div
                        key={offer.id}
                        className="flex items-center justify-between gap-4 border-b border-white/12 py-3"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-[#F7FAF8]">
                            {offer.name}
                          </p>
                          <p className="mt-0.5 font-mono text-xs tabular-nums text-[#B9CBC4]">
                            {offer.price} {offer.billing}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(offer.id)}
                          aria-label={`Retirer ${offer.name} de l'estimation`}
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#B9CBC4] transition-colors hover:bg-white/10 hover:text-[#F7FAF8]"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}

                    {estimate.usage.length > 0 && (
                      <div className="py-3">
                        <p className="text-sm font-semibold text-[#F7FAF8]">
                          Facturé à l&apos;usage
                        </p>
                        <ul className="mt-2 space-y-1">
                          {estimate.usage.map((item, index) => (
                            <li
                              key={`${item.offerName}-${index}`}
                              className="font-mono text-xs tabular-nums text-[#B9CBC4]"
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
                  className="flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-white/20 px-4 text-xs font-semibold text-[#F7FAF8] transition-colors hover:border-white/40 hover:bg-white/10"
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
                      <span className="font-heading text-2xl font-semibold tracking-[-0.04em] tabular-nums text-[#F7FAF8]">
                        {formatEuros(estimate.oneShot)}
                      </span>
                      <span className="text-xs text-[#B9CBC4]">
                        au lancement
                      </span>
                    </span>
                  )}
                  {estimate.monthly > 0 && (
                    <span className="flex items-baseline gap-1.5">
                      <span className="font-heading text-2xl font-semibold tracking-[-0.04em] tabular-nums text-[#F7FAF8]">
                        {formatEuros(estimate.monthly)}
                      </span>
                      <span className="text-xs text-[#B9CBC4]">
                        /mois
                      </span>
                    </span>
                  )}
                  {estimate.usage.length > 0 && (
                    <span className="text-xs text-[#B9CBC4]">
                      + facturation à l&apos;usage
                    </span>
                  )}
                  {estimate.quoteCount > 0 && (
                    <span className="text-xs text-[#B9CBC4]">
                      + {estimate.quoteCount} sur devis
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClear}
                  className="min-h-11 rounded-full px-4 text-xs font-semibold text-[#B9CBC4] transition-colors hover:text-[#F7FAF8]"
                >
                  Vider
                </button>
                <button
                  type="button"
                  onClick={handleRequest}
                  className="group flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#B0FF5B] px-6 py-3 text-sm font-semibold tracking-[-0.01em] text-[#0D332B] transition-colors duration-300 hover:bg-[#C8FF8D] md:flex-none"
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
