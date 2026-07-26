"use client";

import { useState } from "react";

import LeadFormModal from "./LeadFormModal";
import {
  Check,
  TrendingUp,
  Sparkles,
  Crown,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const PricingCards = ({ offers }) => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const getCardConfig = (idx) => {
    const configs = [
      {
        badge: {
          bg: "bg-orange-50",
          text: "text-[#FF6A3D]",
          border: "border-orange-100",
        },
        watermark: Rocket,
        accent: "orange",
        cardBg: "bg-white",
        glow: "shadow-orange-500/5",
        iconColor: "text-orange-400",
      },
      {
        badge: {
          bg: "bg-[#FF6A3D]",
          text: "text-white",
          border: "border-[#FF6A3D]",
        },
        watermark: Crown,
        accent: "orange",
        isPopular: true,
        cardBg: "bg-gradient-to-b from-[#FFF8F6] to-white",
        glow: "shadow-[#FF6A3D]/20",
        iconColor: "text-[#FF6A3D]",
      },
      {
        badge: {
          bg: "bg-blue-50",
          text: "text-blue-600",
          border: "border-blue-100",
        },
        watermark: ShieldCheck,
        accent: "blue",
        cardBg: "bg-gradient-to-b from-[#F0F9FF] to-white",
        glow: "shadow-blue-500/5",
        iconColor: "text-blue-500",
      },
    ];
    return configs[idx] || configs[0];
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#F8FAFC]">
      {/* Dynamic Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft Gradient Meshes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-80 pointer-events-none" />

      {/* Large Watermarks */}
      <div className="absolute top-20 -left-10 text-gray-200 opacity-60 rotate-12 pointer-events-none hidden 2xl:block">
        <TrendingUp size={400} strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-20 -right-10 text-gray-200 opacity-60 -rotate-12 pointer-events-none hidden 2xl:block">
        <Sparkles size={350} strokeWidth={0.5} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Label */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white ring-1 ring-gray-200 text-[#0D332B] text-sm font-bold px-6 py-2.5 rounded-full shadow-sm backdrop-blur-sm bg-opacity-80">
            <Sparkles size={16} className="text-[#FF6A3D] animate-pulse" />
            <span className="tracking-wide uppercase text-xs">
              Nos Formules
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {offers.map((offer, idx) => {
            const config = getCardConfig(idx);
            const Watermark = config.watermark;

            return (
              <div
                key={offer.id}
                className={`relative rounded-[40px] p-8 lg:p-10 flex flex-col transition-all duration-500 group overflow-hidden border
                  ${
                    config.isPopular
                      ? `scale-105 z-10 border-[#FF6A3D]/20 shadow-2xl ${config.glow}`
                      : "border-gray-100 hover:border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-2"
                  }
                  ${config.cardBg}
                `}
              >
                {/* Popular Badge */}
                {config.isPopular && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="bg-[#FF6A3D] text-white text-[11px] font-bold px-6 py-1.5 rounded-b-xl shadow-lg shadow-[#FF6A3D]/30 tracking-wider uppercase">
                      Recommandé
                    </div>
                  </div>
                )}

                {/* Top Inner Gradient Overlay */}
                <div
                  className={`absolute top-0 left-0 right-0 h-32 opacity-30 bg-gradient-to-b ${config.accent === "orange" ? "from-orange-100" : "from-blue-100"} to-transparent pointer-events-none`}
                />

                {/* Watermark Icon */}
                <div
                  className={`absolute -right-8 -bottom-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none text-[#0D332B]`}
                >
                  <Watermark size={200} strokeWidth={0.3} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header Section */}
                  <div className={`mb-8 ${config.isPopular ? "mt-4" : ""}`}>
                    <span
                      className={`inline-block font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider border ${config.badge.bg} ${config.badge.text} ${config.badge.border}`}
                    >
                      {offer.name}
                    </span>

                    <div className="mt-6 flex items-baseline gap-2 text-[#0D332B]">
                      <span className="font-heading font-black text-5xl lg:text-6xl tracking-tight">
                        {offer.price}
                      </span>
                      <span className="text-gray-400 font-medium text-lg">
                        /mois
                      </span>
                    </div>

                    <p className="text-gray-500 mt-4 leading-relaxed text-sm lg:text-base min-h-[3rem]">
                      {offer.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-100 mb-8" />

                  {/* Features */}
                  <ul className="space-y-5 mb-10 flex-1">
                    {offer.features &&
                      offer.features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3.5 text-gray-600 group/item"
                        >
                          <div
                            className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${config.isPopular ? "bg-[#FF6A3D]/10" : "bg-gray-100"} group-hover/item:bg-[#FF6A3D] transition-colors duration-300`}
                          >
                            <Check
                              className={`w-3 h-3 ${config.isPopular ? "text-[#FF6A3D]" : "text-gray-500"} group-hover/item:text-white transition-colors`}
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-sm font-medium leading-tight pt-0.5">
                            {feat}
                          </span>
                        </li>
                      ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <button
                      onClick={() => setSelectedOffer(offer)}
                      className={`block w-full py-4 rounded-2xl font-bold text-center text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer
                          ${
                            config.isPopular
                              ? "bg-[#FF6A3D] text-white hover:bg-[#E85A2D] shadow-lg shadow-[#FF6A3D]/30 hover:shadow-xl hover:shadow-[#FF6A3D]/40 scale-100 hover:scale-[1.02]"
                              : "bg-white text-[#0D332B] border-2 border-gray-100 hover:border-[#FF6A3D] hover:text-[#FF6A3D]"
                          }
                        `}
                    >
                      Choisir l&apos;offre
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <LeadFormModal
        offer={selectedOffer}
        isOpen={!!selectedOffer}
        onClose={() => setSelectedOffer(null)}
      />
    </section>
  );
};

export default PricingCards;
