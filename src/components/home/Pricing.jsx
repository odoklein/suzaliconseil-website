"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";
import { getOffersByIds } from "../../lib/offers-catalog";

/*
 * Three entry-level price points lifted straight from the offer catalogue,
 * ordered low → high so the page shows an affordable starting point before
 * the retainer. Editing a price in offers-catalog.js updates this section too.
 */
const FEATURED = getOffersByIds([
  "file-starter-500",
  "contact-vente-rdv",
  "contact-growth-standard",
]);

const Pricing = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0D332B] relative overflow-hidden">
      {/* Ambient decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1A6D48] rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#B0FF5B] rounded-full blur-[180px] opacity-[0.06] pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#B0FF5B] text-xs md:text-sm font-semibold tracking-wide uppercase">
            Tarifs
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-6xl text-white tracking-tight leading-[1.1]">
            Des budgets clairs,{" "}
            <span className="text-gradient-lime">dès le départ</span>.
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Testez une cible, remplissez un agenda ou pilotez toute votre
            acquisition : trois points d&apos;entrée, sans engagement caché.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {FEATURED.map((offer, idx) => {
            const isHighlighted = Boolean(offer.highlight);

            return (
              <AnimatedSection
                key={offer.id}
                delay={idx * 150}
                className={`relative flex flex-col rounded-[32px] p-8 lg:p-10 transition-all duration-500
                  ${
                    isHighlighted
                      ? "bg-[#B0FF5B] text-[#0D332B] shadow-2xl shadow-[#B0FF5B]/10 md:-translate-y-3 hover:md:-translate-y-4"
                      : "bg-white text-[#0D332B] shadow-lg hover:shadow-2xl hover:-translate-y-1"
                  }
                `}
              >
                {/* Recommended ribbon */}
                {isHighlighted && offer.tag && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="bg-[#0D332B] text-[#B0FF5B] text-[11px] font-bold px-5 py-1.5 rounded-b-xl tracking-wider uppercase">
                      {offer.tag}
                    </div>
                  </div>
                )}

                <div className={isHighlighted ? "mt-4" : ""}>
                  <h3 className="font-heading font-bold text-xl md:text-2xl tracking-tight text-[#0D332B]">
                    {offer.name}
                  </h3>

                  <div className="mt-5 flex flex-wrap items-baseline gap-x-2">
                    <span className="tabular-figures font-heading font-extrabold text-4xl lg:text-5xl tracking-tight text-[#0D332B]">
                      {offer.price}
                    </span>
                    {offer.billing && (
                      <span
                        className={`font-medium text-sm ${
                          isHighlighted ? "text-[#0D332B]/60" : "text-gray-400"
                        }`}
                      >
                        {offer.billing}
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      isHighlighted ? "text-[#0D332B]/75" : "text-gray-500"
                    }`}
                  >
                    {offer.description}
                  </p>
                </div>

                <div
                  className={`h-px my-8 ${
                    isHighlighted ? "bg-[#0D332B]/15" : "bg-gray-100"
                  }`}
                />

                {/* Features */}
                <ul className="space-y-4 flex-1">
                  {offer.features?.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          isHighlighted ? "bg-[#0D332B]/10" : "bg-emerald-50"
                        }`}
                      >
                        <Check
                          size={12}
                          strokeWidth={3}
                          className="text-[#0D332B]"
                        />
                      </span>
                      <span
                        className={`text-sm font-medium leading-snug ${
                          isHighlighted ? "text-[#0D332B]/90" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA — deep-links to the matching service page */}
                {offer.serviceHref && (
                  <Link
                    href={offer.serviceHref}
                    className={`group/btn mt-10 inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300
                      ${
                        isHighlighted
                          ? "bg-[#0D332B] text-white hover:bg-[#174A3E]"
                          : "bg-white text-[#0D332B] border-2 border-gray-100 hover:border-[#FF6A3D] hover:text-[#C84B25]"
                      }
                    `}
                  >
                    En savoir plus
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                )}
              </AnimatedSection>
            );
          })}
        </div>

        {/* Catalogue link */}
        <AnimatedSection delay={450} className="mt-12 md:mt-16 text-center">
          <Link
            href="/offres"
            className="group inline-flex items-center gap-3 rounded-full bg-[#B0FF5B] px-8 py-4 text-sm md:text-base font-bold uppercase tracking-wide text-[#0D332B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_30px_rgba(176,255,91,0.25)]"
          >
            Voir toutes nos offres et tarifs
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <p className="mt-4 text-sm text-white/50">
            Fichiers B2B, rendez-vous qualifiés, campagnes email et SMS, sites
            web, SEO et automatisation.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
