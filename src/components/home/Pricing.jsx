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
    <section className="relative overflow-hidden bg-[#EAF2EE] py-20 md:py-28">
      {/* Ambient decor */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-[#CFE6DA] opacity-55 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-[#B0FF5B] opacity-[0.1] blur-[160px]" />
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.012]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-12 max-w-3xl space-y-4 md:mb-16 md:space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E3FFC4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#315B2A] md:text-sm">
            Tarifs
          </span>
          <h2 className="font-heading text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-[#0D332B] sm:text-5xl md:text-6xl">
            Des budgets clairs,{" "}
            <span className="underline decoration-[#B0FF5B] decoration-[8px] underline-offset-[-4px] [text-decoration-skip-ink:none]">
              dès le départ
            </span>.
          </h2>
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-[#52635F] md:text-xl">
            Testez une cible, remplissez un agenda ou pilotez toute votre
            acquisition : trois points d&apos;entrée, sans engagement caché.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {FEATURED.map((offer, idx) => {
            const isHighlighted = Boolean(offer.highlight);

            return (
              <AnimatedSection
                key={offer.id}
                delay={idx * 40}
                className={`relative flex flex-col rounded-[28px] border border-[#0D332B]/8 p-8 shadow-[0_24px_64px_-50px_rgba(13,51,43,0.68)] transition-[border-color,box-shadow,transform] duration-300 lg:p-9 ${idx === 0 ? "lg:col-span-4" : idx === 1 ? "lg:col-span-5" : "lg:col-span-3"}
                  ${
                    isHighlighted
                      ? "bg-[#E3FFC4] text-[#0D332B] lg:-translate-y-2 hover:lg:-translate-y-3"
                      : "bg-[#FCFDFC] text-[#0D332B] hover:-translate-y-1 hover:border-[#0D332B]/16 hover:shadow-[0_28px_70px_-48px_rgba(13,51,43,0.62)]"
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
                          : "border border-[#0D332B]/16 bg-[#FCFDFC] text-[#0D332B] hover:border-[#0D332B]/38 hover:bg-[#E9FFD2]"
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
        <AnimatedSection delay={120} className="mt-12 text-left md:mt-14">
          <Link
            href="/offres"
            className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#0D332B] px-7 py-3 text-sm font-bold tracking-[-0.01em] text-[#FCFDFC] shadow-[0_14px_32px_-20px_rgba(13,51,43,0.75)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#1A4D43] md:text-base"
          >
            Voir toutes nos offres et tarifs
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <p className="mt-4 max-w-3xl text-sm text-[#65746F]">
            Fichiers B2B, rendez-vous qualifiés, campagnes email et SMS, sites
            web, SEO et automatisation.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
