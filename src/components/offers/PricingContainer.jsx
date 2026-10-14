"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LeadModal from "./LeadModal";
import EstimateBar from "./EstimateBar";
import { Reveal, SectionHead } from "../kit";
import useSafeReducedMotion from "../../lib/useSafeReducedMotion";
import { OFFER_CATEGORIES, getOfferCount } from "../../lib/offers-catalog";
import { CADENCE_LABEL, getPricing } from "../../lib/offers-pricing-meta";

/*
 * The catalogue as a price ledger: one hairline row per offer, grouped by
 * section. Inside each section the highlighted offer is the inked row (the
 * homepage's "inked column", turned sideways), so the eye lands on one offer
 * per section instead of a wall of identical cards. Lime stays on the
 * actionable: the inked row's main button and the active estimate toggles.
 */
export default function PricingContainer() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("contact");
  const [selectedSectionId, setSelectedSectionId] = useState("all");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [estimateIds, setEstimateIds] = useState([]);
  const reduceMotion = useSafeReducedMotion();

  const selectedCategory = useMemo(
    () =>
      OFFER_CATEGORIES.find((category) => category.id === selectedCategoryId) ||
      OFFER_CATEGORIES[0],
    [selectedCategoryId],
  );

  const visibleSections = useMemo(() => {
    if (selectedSectionId === "all") return selectedCategory.sections;
    return selectedCategory.sections.filter(
      (section) => section.id === selectedSectionId,
    );
  }, [selectedCategory, selectedSectionId]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setSelectedSectionId("all");
  };

  const toggleEstimate = useCallback((offerId) => {
    setEstimateIds((current) =>
      current.includes(offerId)
        ? current.filter((id) => id !== offerId)
        : [...current, offerId],
    );
  }, []);

  const closeLead = useCallback(() => setSelectedOffer(null), []);

  const filters = [
    { id: "all", title: "Toutes les offres" },
    ...selectedCategory.sections.map(({ id, title }) => ({ id, title })),
  ];

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          title="Choisissez ce que vous voulez obtenir, pas seulement une prestation."
          intro="Comparez les offres selon votre objectif : générer des leads B2B, obtenir des rendez-vous, convertir plus de trafic ou structurer votre écosystème digital."
          size="md"
          className="max-w-4xl"
        />

        {/* Category switch + section filter */}
        <Reveal
          delay={200}
          className="mt-14 flex flex-col gap-5 border-b border-[#0D332B]/12 pb-5 md:mt-16 lg:flex-row lg:items-center lg:justify-between"
        >
          <div
            role="tablist"
            aria-label="Catégories d'offres"
            className="flex w-full rounded-full border border-[#0D332B]/14 bg-[#F6F7F4] p-1 sm:w-auto"
          >
            {OFFER_CATEGORIES.map((category) => {
              const isActive = selectedCategory.id === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-semibold tracking-[-0.01em] transition-colors duration-300 sm:flex-none sm:px-5 ${
                    isActive
                      ? "bg-[#0D332B] text-[#F7FAF8]"
                      : "text-[#4E605B] hover:text-[#0D332B]"
                  }`}
                >
                  {category.label}
                  <span
                    className={`font-mono text-[11px] tabular-nums ${
                      isActive ? "text-[#B9CBC4]" : "text-[#4E605B]/80"
                    }`}
                  >
                    {getOfferCount(category.id)}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="-mx-4 flex gap-1 overflow-x-auto px-4 sm:mx-0 sm:px-0"
            role="group"
            aria-label="Filtrer les offres"
          >
            {filters.map((filter) => {
              const isActive = selectedSectionId === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setSelectedSectionId(filter.id)}
                  aria-pressed={isActive}
                  className={`min-h-11 shrink-0 whitespace-nowrap px-3 text-sm font-semibold tracking-[-0.01em] underline-offset-[7px] transition-colors duration-300 ${
                    isActive
                      ? "text-[#0D332B] underline decoration-[#B0FF5B] decoration-[3px]"
                      : "text-[#4E605B] hover:text-[#0D332B]"
                  }`}
                >
                  {filter.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Catalogue */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${selectedCategory.id}-${selectedSectionId}`}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {visibleSections.map((section) => (
              <section key={section.id} className="mt-16 scroll-mt-24 md:mt-20">
                <div className="grid gap-4 lg:grid-cols-12 lg:items-end lg:gap-8">
                  <h3 className="font-heading text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#0D332B] lg:col-span-5">
                    {section.title}
                  </h3>
                  <p className="max-w-[58ch] text-base leading-relaxed text-[#4E605B] lg:col-span-7">
                    {section.description}
                  </p>
                </div>

                <ul className="mt-8 border-t border-[#0D332B]/14">
                  {section.offers.map((offer) => (
                    <OfferRow
                      key={offer.id}
                      offer={offer}
                      isSelected={estimateIds.includes(offer.id)}
                      onToggle={toggleEstimate}
                      onRequest={setSelectedOffer}
                    />
                  ))}
                </ul>
              </section>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <EstimateBar
        offerIds={estimateIds}
        onRemove={toggleEstimate}
        onClear={() => setEstimateIds([])}
        onRequest={setSelectedOffer}
      />

      <LeadModal
        isOpen={!!selectedOffer}
        onClose={closeLead}
        offer={selectedOffer || {}}
      />
    </div>
  );
}

function OfferRow({ offer, isSelected, onToggle, onRequest }) {
  const pricing = getPricing(offer.id);
  const isQuote = pricing.cadence === "quote";
  const inked = Boolean(offer.highlight);

  const muted = inked ? "text-[#B9CBC4]" : "text-[#4E605B]";
  const strong = inked ? "text-[#F7FAF8]" : "text-[#0D332B]";

  return (
    <li
      className={
        inked
          ? "my-4 rounded-[22px] bg-[#0D332B] shadow-[0_50px_90px_-50px_rgba(13,51,43,0.55)]"
          : "border-b border-[#0D332B]/14"
      }
    >
      <article
        className={`grid gap-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-10 ${
          inked ? "p-6 sm:p-8 lg:p-10" : "px-1 py-8 md:px-3 md:py-10"
        }`}
      >
        {/* Name, unit, pitch */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h4 className={`font-heading text-[1.45rem] font-semibold leading-tight tracking-[-0.03em] md:text-[1.6rem] ${strong}`}>
              {offer.name}
            </h4>
            {offer.tag && (
              <span className="chip-status" data-step={inked ? "2" : "1"}>
                {offer.tag}
              </span>
            )}
          </div>
          <p className={`mt-2 font-mono text-[12px] ${muted}`}>{CADENCE_LABEL[pricing.cadence]}</p>
          <p className={`mt-4 max-w-[46ch] text-[15px] leading-relaxed ${inked ? "text-[#CFDDD7]" : "text-[#4E605B]"}`}>
            {offer.description}
          </p>
          {offer.serviceHref && (
            <Link
              href={offer.serviceHref}
              className={`group/link mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold tracking-[-0.01em] underline decoration-[2px] underline-offset-[6px] transition-colors ${
                inked
                  ? "text-[#F7FAF8] decoration-[#B0FF5B]/60 hover:decoration-[#B0FF5B]"
                  : "text-[#0D332B] decoration-[#0D332B]/25 hover:decoration-[#0D332B]"
              }`}
            >
              Voir le détail du service
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className={`transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 ${
                  inked ? "text-[#B0FF5B]" : ""
                }`}
              />
            </Link>
          )}
        </div>

        {/* What you get */}
        <div className="min-w-0">
          <p className={`text-sm font-semibold ${strong}`}>Ce que vous obtenez</p>
          <ul className="mt-2">
            {offer.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 py-1.5">
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
        </div>

        {/* Price and actions */}
        <div className={`flex min-w-0 flex-col border-t pt-6 lg:border-t-0 lg:pt-0 ${inked ? "border-white/12" : "border-[#0D332B]/10"}`}>
          {!isQuote && <p className={`text-sm ${muted}`}>À partir de</p>}
          <p className={`mt-1 font-heading text-[clamp(2.4rem,3.6vw,3.2rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums ${strong}`}>
            {offer.price}
          </p>
          <p className={`mt-3 font-mono text-[13px] leading-snug tabular-nums ${muted}`}>{offer.billing}</p>
          {offer.subscription && (
            <p className={`mt-1.5 font-mono text-[12px] leading-snug tabular-nums ${muted}`}>
              {offer.subscription}
            </p>
          )}

          <div className="mt-7 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => onRequest(offer)}
              className={`group/btn inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[-0.01em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                inked
                  ? "bg-[#B0FF5B] text-[#0D332B] hover:bg-[#C8FF8D] focus-visible:ring-[#B0FF5B] focus-visible:ring-offset-[#0D332B]"
                  : "bg-[#0D332B] text-[#F7FAF8] hover:bg-[#1A4D43] focus-visible:ring-[#0D332B]"
              }`}
            >
              {isQuote ? "Demander un devis" : "Démarrer"}
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1" />
            </button>

            {/* Estimator toggle */}
            <button
              type="button"
              onClick={() => onToggle(offer.id)}
              aria-pressed={isSelected}
              className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                inked
                  ? isSelected
                    ? "border-[#B0FF5B]/50 bg-[#B0FF5B]/15 text-[#B0FF5B]"
                    : "border-white/25 text-[#F7FAF8] hover:border-white/50 hover:bg-white/10"
                  : isSelected
                    ? "border-[#0D332B] bg-[#E3FFC4] text-[#0D332B]"
                    : "border-[#0D332B]/20 text-[#0D332B] hover:border-[#0D332B]/50 hover:bg-[#F6F7F4]"
              }`}
            >
              {isSelected ? (
                <>
                  <Check size={16} strokeWidth={2.75} aria-hidden="true" />
                  Ajouté à l&apos;estimation
                </>
              ) : (
                <>
                  <Plus size={16} strokeWidth={2.5} aria-hidden="true" />
                  Ajouter à mon estimation
                </>
              )}
            </button>
          </div>
        </div>
      </article>
    </li>
  );
}
