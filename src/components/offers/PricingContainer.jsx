"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  Database,
  Headphones,
  Mail,
  Monitor,
  PhoneCall,
  Plus,
  Radio,
  Send,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import LeadModal from "./LeadModal";
import EstimateBar from "./EstimateBar";
import { OFFER_CATEGORIES, getOfferCount } from "../../lib/offers-catalog";
import { CADENCE_LABEL, getPricing } from "../../lib/offers-pricing-meta";

const SECTION_ICONS = {
  rdv: PhoneCall,
  files: Database,
  "sms-email": Send,
  "digital-grid": Monitor,
};

const OFFER_ICONS = [Target, Zap, Mail, Radio, BarChart3, Headphones];

/* Cadence chip colours — lime family throughout; orange stays reserved for
   the "Recommandé" ribbon so it keeps its signal value. */
const CADENCE_STYLE = {
  "one-shot": "bg-[#EAF7E4] text-[#1A6D48]",
  monthly: "bg-[#E3F2FD] text-[#1155CC]",
  usage: "bg-[#F3EDFB] text-[#6B3FA0]",
  quote: "bg-[#F1F3F2] text-[#546A62]",
};

export default function PricingContainer() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("contact");
  const [selectedSectionId, setSelectedSectionId] = useState("all");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [estimateIds, setEstimateIds] = useState([]);
  const reduceMotion = useReducedMotion();

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

  return (
    <div className="w-full">
      {/* ---------------------------------------------------------------- */}
      {/* Segmented control                                                */}
      {/* ---------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center rounded-full bg-[#EAF7E4] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1A6D48]">
            Construisez votre dispositif
          </span>
          <h2 className="max-w-2xl font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0D332B] md:text-5xl">
            Choisissez ce que vous voulez obtenir, pas seulement une prestation.
          </h2>
          <p className="max-w-[62ch] text-base leading-7 text-[#416058]">
            Comparez les offres selon votre objectif : générer des leads B2B,
            obtenir des rendez-vous, convertir plus de trafic ou structurer
            votre écosystème digital.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Catégories d'offres"
          className="mx-auto mt-9 flex w-full max-w-xl rounded-full border border-[#0D332B]/10 bg-white p-1.5 shadow-[0_10px_30px_rgba(13,51,43,0.06)]"
        >
          {OFFER_CATEGORIES.map((category) => {
            const isActive = selectedCategory.id === category.id;
            const Icon = category.id === "contact" ? Headphones : Monitor;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryChange(category.id)}
                className="relative flex-1 rounded-full px-3 py-3 text-sm font-extrabold transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="category-pill"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32 }
                    }
                    className="absolute inset-0 rounded-full bg-[#0D332B]"
                  />
                )}
                <span
                  className={`relative z-10 flex items-center justify-center gap-2 ${
                    isActive ? "text-white" : "text-[#416058]"
                  }`}
                >
                  <Icon size={17} strokeWidth={2.2} />
                  {category.label}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      isActive
                        ? "bg-white/15 text-[#B0FF5B]"
                        : "bg-[#F1F3F2] text-[#7C9188]"
                    }`}
                  >
                    {getOfferCount(category.id)}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Section filters */}
        <div
          className="mt-6 flex justify-start gap-2 overflow-x-auto pb-2 md:justify-center"
          aria-label="Filtrer les offres"
        >
          <button
            type="button"
            onClick={() => setSelectedSectionId("all")}
            aria-pressed={selectedSectionId === "all"}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-all active:scale-[0.98] ${
              selectedSectionId === "all"
                ? "border-[#1A6D48] bg-[#EAF7E4] text-[#1A6D48]"
                : "border-[#0D332B]/10 bg-white text-[#416058] hover:border-[#1A6D48]/50"
            }`}
          >
            Toutes les offres
          </button>
          {selectedCategory.sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setSelectedSectionId(section.id)}
              aria-pressed={selectedSectionId === section.id}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-all active:scale-[0.98] ${
                selectedSectionId === section.id
                  ? "border-[#1A6D48] bg-[#EAF7E4] text-[#1A6D48]"
                  : "border-[#0D332B]/10 bg-white text-[#416058] hover:border-[#1A6D48]/50"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Catalogue                                                        */}
      {/* ---------------------------------------------------------------- */}
      <div className="mx-auto mt-12 max-w-7xl px-4 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory.id}-${selectedSectionId}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="space-y-16"
          >
            {visibleSections.map((section) => {
              const SectionIcon = SECTION_ICONS[section.id] || Sparkles;

              return (
                <section key={section.id} className="scroll-mt-24">
                  <div className="mb-7 max-w-3xl">
                    <div className="flex items-center gap-3 text-[#1A6D48]">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF7E4]">
                        <SectionIcon size={18} strokeWidth={2} />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em]">
                        {section.eyebrow}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-2xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0D332B] md:text-4xl">
                      {section.title}
                    </h3>
                    <p className="mt-3 max-w-[62ch] text-base leading-7 text-[#416058]">
                      {section.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {section.offers.map((offer, index) => {
                      const OfferIcon = OFFER_ICONS[index % OFFER_ICONS.length];
                      const pricing = getPricing(offer.id);
                      const isQuote = pricing.cadence === "quote";
                      const isSelected = estimateIds.includes(offer.id);

                      return (
                        <motion.article
                          key={offer.id}
                          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.15 }}
                          transition={{
                            duration: 0.28,
                            delay: reduceMotion ? 0 : index * 0.04,
                          }}
                          className={`flex flex-col rounded-[28px] border bg-white p-6 transition-all duration-300 ${
                            isSelected
                              ? "border-[#1A6D48] shadow-[0_18px_40px_-18px_rgba(26,109,72,0.45)]"
                              : offer.highlight
                                ? "border-[#FF6A3D]/40 shadow-[0_12px_30px_rgba(13,51,43,0.07)]"
                                : "border-[#0D332B]/10 shadow-[0_12px_30px_rgba(13,51,43,0.05)] hover:border-[#0D332B]/25"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span
                              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                                offer.highlight
                                  ? "bg-[#0D332B] text-[#B0FF5B]"
                                  : "bg-[#EFF3F0] text-[#0D332B]"
                              }`}
                            >
                              <OfferIcon size={20} strokeWidth={2} />
                            </span>

                            <div className="flex flex-wrap items-center justify-end gap-1.5">
                              {/* Unit chip — makes the six pricing units legible */}
                              <span
                                className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${CADENCE_STYLE[pricing.cadence]}`}
                              >
                                {CADENCE_LABEL[pricing.cadence]}
                              </span>
                              {offer.tag && (
                                <span className="rounded-full bg-[#FF6A3D] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                                  {offer.tag}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="mt-6">
                            <h4 className="font-heading text-xl font-extrabold leading-tight tracking-[-0.015em] text-[#0D332B]">
                              {offer.name}
                            </h4>
                            <p className="mt-3 text-sm leading-6 text-[#416058]">
                              {offer.description}
                            </p>
                          </div>

                          <div className="mt-6 border-t border-[#0D332B]/10 pt-5">
                            {!isQuote && (
                              <p className="text-xs font-bold text-[#7C9188]">
                                À partir de
                              </p>
                            )}
                            <div className="mt-1 flex flex-wrap items-end gap-x-2 gap-y-1">
                              <span className="tabular-figures font-heading text-3xl font-extrabold tracking-[-0.03em] text-[#0D332B]">
                                {offer.price}
                              </span>
                              <span className="pb-1 text-sm font-semibold text-[#416058]">
                                {offer.billing}
                              </span>
                            </div>
                            {offer.subscription && (
                              <p className="mt-3 rounded-xl bg-[#EAF7E4] px-3 py-2 text-xs font-bold leading-5 text-[#1A6D48]">
                                {offer.subscription}
                              </p>
                            )}
                          </div>

                          <div className="mt-5 flex-1">
                            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0D332B]">
                              Ce que vous obtenez
                            </p>
                            <ul className="mt-3 space-y-2.5">
                              {offer.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-start gap-3 text-sm leading-5 text-[#416058]"
                                >
                                  <Check
                                    size={16}
                                    className="mt-0.5 shrink-0 text-[#1A6D48]"
                                    strokeWidth={2.6}
                                  />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Estimator toggle */}
                          <button
                            type="button"
                            onClick={() => toggleEstimate(offer.id)}
                            aria-pressed={isSelected}
                            className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition-all active:scale-[0.98] ${
                              isSelected
                                ? "border-[#1A6D48] bg-[#EAF7E4] text-[#1A6D48]"
                                : "border-[#0D332B]/12 bg-white text-[#416058] hover:border-[#1A6D48]/60 hover:text-[#1A6D48]"
                            }`}
                          >
                            {isSelected ? (
                              <>
                                <Check size={16} strokeWidth={2.6} />
                                Ajouté à l&apos;estimation
                              </>
                            ) : (
                              <>
                                <Plus size={16} strokeWidth={2.6} />
                                Ajouter à mon estimation
                              </>
                            )}
                          </button>

                          {/* CTA split by intent */}
                          <button
                            type="button"
                            onClick={() => setSelectedOffer(offer)}
                            className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-extrabold transition-all active:scale-[0.98] ${
                              offer.highlight
                                ? "bg-[#0D332B] text-white hover:bg-[#174A3E]"
                                : "bg-[#B0FF5B] text-[#0D332B] hover:bg-[#9BEA45]"
                            }`}
                          >
                            {isQuote ? "Demander un devis" : "Démarrer"}
                            <ArrowRight size={17} />
                          </button>

                          {offer.serviceHref && (
                            <Link
                              href={offer.serviceHref}
                              className="mt-3 text-center text-sm font-bold text-[#416058] underline decoration-[#1A6D48]/40 underline-offset-4 transition-colors hover:text-[#1A6D48]"
                            >
                              Voir le détail du service
                            </Link>
                          )}
                        </motion.article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
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
        onClose={() => setSelectedOffer(null)}
        offer={selectedOffer || {}}
      />
    </div>
  );
}
