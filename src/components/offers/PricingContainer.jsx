"use client";

import { useMemo, useState } from "react";
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
  Radio,
  Send,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import LeadModal from "./LeadModal";
import { OFFER_CATEGORIES, getOfferCount } from "../../lib/offers-catalog";

const SECTION_ICONS = {
  rdv: PhoneCall,
  files: Database,
  "sms-email": Send,
  "digital-grid": Monitor,
};

const OFFER_ICONS = [Target, Zap, Mail, Radio, BarChart3, Headphones];

const categoryOutcomes = {
  contact: [
    "Une campagne de prospection commerciale prête à activer",
    "Des contacts B2B ciblés et enrichis pour vos équipes",
    "Des rendez-vous qualifiés et un suivi de performance clair",
  ],
  digital: [
    "Un parcours digital construit pour transformer vos visiteurs",
    "Un site web, une landing page ou un e-commerce aligné à votre offre",
    "Des données CRM et des automatisations plus simples à exploiter",
  ],
};

export default function PricingContainer() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("contact");
  const [selectedSectionId, setSelectedSectionId] = useState("all");
  const [selectedOffer, setSelectedOffer] = useState(null);
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

  return (
    <div className="w-full">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.72fr_1.28fr] lg:px-6">
        <div className="lg:pt-3">
          <p className="text-sm font-bold text-[#C84B25]">Construisez votre dispositif</p>
          <h2 className="mt-3 max-w-lg text-3xl font-black leading-tight tracking-tight text-[#0D332B] md:text-5xl">
            Choisissez ce que vous voulez obtenir, pas seulement une prestation.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#416058]">
            Comparez les offres selon votre objectif : générer des leads B2B,
            obtenir des rendez-vous, convertir plus de trafic ou structurer votre
            écosystème digital.
          </p>

          <div className="mt-8 border-l-2 border-[#FF6A3D] pl-5">
            <p className="text-sm font-black text-[#0D332B]">Vous repartez avec</p>
            <ul className="mt-4 space-y-3">
              {categoryOutcomes[selectedCategory.id].map((outcome) => (
                <li key={outcome} className="flex gap-3 text-sm leading-6 text-[#416058]">
                  <Check size={17} strokeWidth={2.5} className="mt-1 shrink-0 text-[#FF6A3D]" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {OFFER_CATEGORIES.map((category) => {
            const isActive = selectedCategory.id === category.id;
            const Icon = category.id === "contact" ? Headphones : Monitor;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                aria-pressed={isActive}
                className={`group min-h-[230px] rounded-xl border p-6 text-left transition-colors active:scale-[0.98] ${
                  isActive
                    ? "border-[#FF6A3D] bg-[#FFF4EF] shadow-[0_16px_38px_rgba(255,106,61,0.12)]"
                    : "border-[#0D332B]/10 bg-white hover:border-[#0D332B]/30"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-lg ${isActive ? "bg-[#FF6A3D] text-white" : "bg-[#E8EEEA] text-[#0D332B]"}`}>
                    <Icon size={21} strokeWidth={2} />
                  </span>
                  <span className="text-xs font-bold text-[#416058]">
                    {getOfferCount(category.id)} offres
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-black leading-tight text-[#0D332B]">
                  {category.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#416058]">{category.summary}</p>
                <span className={`mt-6 inline-flex items-center gap-2 text-sm font-black ${isActive ? "text-[#C84B25]" : "text-[#0D332B]"}`}>
                  Explorer ces offres <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 lg:px-6">
        <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Filtrer les offres">
          <button
            type="button"
            onClick={() => setSelectedSectionId("all")}
            className={`shrink-0 rounded-lg border px-4 py-2.5 text-sm font-bold transition-colors active:scale-[0.98] ${selectedSectionId === "all" ? "border-[#0D332B] bg-[#0D332B] text-white" : "border-[#0D332B]/10 bg-white text-[#416058] hover:border-[#FF6A3D]"}`}
          >
            Toutes les offres
          </button>
          {selectedCategory.sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setSelectedSectionId(section.id)}
              className={`shrink-0 rounded-lg border px-4 py-2.5 text-sm font-bold transition-colors active:scale-[0.98] ${selectedSectionId === section.id ? "border-[#0D332B] bg-[#0D332B] text-white" : "border-[#0D332B]/10 bg-white text-[#416058] hover:border-[#FF6A3D]"}`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 lg:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory.id}-${selectedSectionId}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="space-y-14"
          >
            {visibleSections.map((section) => {
              const SectionIcon = SECTION_ICONS[section.id] || Sparkles;

              return (
                <section key={section.id} className="scroll-mt-24">
                  <div className="mb-6 max-w-3xl">
                    <div className="flex items-center gap-3 text-[#C84B25]">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF0EA]">
                        <SectionIcon size={18} strokeWidth={2} />
                      </span>
                      <span className="text-sm font-bold">{section.eyebrow}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-black leading-tight text-[#0D332B] md:text-4xl">{section.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#416058]">{section.description}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {section.offers.map((offer, index) => {
                      const OfferIcon = OFFER_ICONS[index % OFFER_ICONS.length];

                      return (
                        <motion.article
                          key={offer.id}
                          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.15 }}
                          transition={{ duration: 0.28, delay: reduceMotion ? 0 : index * 0.04 }}
                          className={`flex min-h-[440px] flex-col rounded-xl border bg-white p-6 shadow-[0_12px_30px_rgba(13,51,43,0.06)] ${offer.highlight ? "border-[#FF6A3D]" : "border-[#0D332B]/10"}`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <span className={`flex h-11 w-11 items-center justify-center rounded-lg ${offer.highlight ? "bg-[#FF6A3D] text-white" : "bg-[#E8EEEA] text-[#0D332B]"}`}>
                              <OfferIcon size={20} strokeWidth={2} />
                            </span>
                            {offer.tag && <span className="rounded-md bg-[#0D332B] px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-white">{offer.tag}</span>}
                          </div>

                          <div className="mt-7">
                            <h4 className="text-xl font-black leading-tight text-[#0D332B]">{offer.name}</h4>
                            <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#416058]">{offer.description}</p>
                          </div>

                          <div className="mt-6 border-t border-[#0D332B]/10 pt-5">
                            <p className="text-xs font-bold text-[#416058]">À partir de</p>
                            <div className="mt-1 flex flex-wrap items-end gap-x-2 gap-y-1">
                              <span className="text-3xl font-black tracking-tight text-[#0D332B]">{offer.price}</span>
                              <span className="pb-1 text-sm font-semibold text-[#416058]">{offer.billing}</span>
                            </div>
                            {offer.subscription && <p className="mt-3 rounded-lg bg-[#FFF4EF] px-3 py-2 text-xs font-bold leading-5 text-[#9D3B20]">{offer.subscription}</p>}
                          </div>

                          <div className="mt-5">
                            <p className="text-xs font-black uppercase tracking-wide text-[#0D332B]">Ce que vous obtenez</p>
                            <ul className="mt-3 space-y-3">
                              {offer.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm leading-5 text-[#416058]">
                                  <Check size={17} className="mt-0.5 shrink-0 text-[#FF6A3D]" strokeWidth={2.4} />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button
                            type="button"
                            onClick={() => setSelectedOffer(offer)}
                            className={`mt-auto flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-black transition-colors active:scale-[0.98] ${offer.highlight ? "bg-[#FF6A3D] text-white hover:bg-[#E85A2D]" : "border border-[#0D332B]/15 bg-white text-[#0D332B] hover:border-[#FF6A3D] hover:text-[#C84B25]"}`}
                          >
                            Échanger sur cette offre
                            <ArrowRight size={17} />
                          </button>
                          {offer.serviceHref && (
                            <Link
                              href={offer.serviceHref}
                              className="mt-3 text-center text-sm font-bold text-[#416058] underline decoration-[#FF6A3D]/40 underline-offset-4 hover:text-[#C84B25]"
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

      <LeadModal isOpen={!!selectedOffer} onClose={() => setSelectedOffer(null)} offer={selectedOffer || {}} />
    </div>
  );
}
