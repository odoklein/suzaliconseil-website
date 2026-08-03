"use client";

import React from "react";
import Link from "next/link";
import { Handshake, Monitor, ArrowRight } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const ServicesPoles = () => {
  const commercialTags = [
    ["Génération de leads B2B", "/services/generation-leads-b2b"],
    ["Téléprospection", "/services/teleprospection-b2b"],
    ["Prise de rendez-vous qualifiés", "/services/prise-rendez-vous-b2b"],
    ["Prospection commerciale", "/services/prospection-commerciale-externalisee"],
    ["Outbound marketing", "/services/outbound-marketing-b2b"],
    ["Cold emailing", "/services/campagnes-email-sms-b2b"],
  ];

  const digitalTags = [
    ["E-commerce", "/services/digital/sites-web-ecommerce"],
    ["Stratégie digitale", "/services/digital/strategie-digitale"],
    ["Google Ads & Social Ads", "/services/digital/seo-acquisition"],
    ["Automatisation", "/services/digital/developpement-automatisation"],
    ["Référencement naturel (SEO)", "/services/digital/seo-acquisition"],
    ["IA Personnalisée", "/services/digital/developpement-automatisation"],
  ];

  return (
    <section className="relative overflow-hidden bg-[#FCFDFC] py-20 md:py-28">
      {/* Background Decor - Animated Blobs */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[260px] w-[460px] -translate-y-1/2 rounded-full bg-[#E3FFC4] opacity-35 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-28 h-[320px] w-[320px] rounded-full bg-[#D7EEE4] opacity-45 blur-[120px]" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,51,43,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,51,43,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-12 max-w-3xl space-y-4 md:mb-16 md:space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E3FFC4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#315B2A] md:text-sm">
            Nos Expertises
          </span>
          <h2 className="font-heading text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-[#0D332B] sm:text-5xl md:text-6xl">
            Nos Services B2B pour <br className="hidden" />
            Générer des Leads{" "}
            <span className="underline decoration-[#B0FF5B] decoration-[8px] underline-offset-[-4px] [text-decoration-skip-ink:none]">
              Qualifiés
            </span>
          </h2>
          <p className="max-w-[62ch] text-lg font-medium leading-relaxed text-[#52635F] md:text-xl">
            Prospection commerciale, téléprospection et outbound marketing : des
            solutions complètes pour remplir votre pipeline commercial en
            France.
          </p>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">
          {/* COMMERCIAL COLUMN */}
          <AnimatedSection
            delay={40}
            className="flex flex-col items-stretch gap-5 md:col-span-7"
          >
            {/* Card */}
            <div className="group relative flex min-h-[440px] w-full flex-col overflow-hidden rounded-[28px] border border-[#0D332B]/8 bg-[#D7EEE4] shadow-[0_28px_70px_-50px_rgba(13,51,43,0.72)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#0D332B]/16 hover:shadow-[0_32px_76px_-48px_rgba(13,51,43,0.65)] md:min-h-[500px]">
              {/* Background Gradient & Texture */}
              <div
                className="absolute inset-0 z-0 bg-gradient-to-br from-[#EAF6F0] via-[#D7EEE4] to-[#BFDCCF]"
                style={{ backgroundSize: "100% 200%" }}
              />

              {/* Animated glow orb */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#B0FF5B] opacity-[0.2] blur-[90px]" />

              {/* Watermarks */}
              <div className="pointer-events-none absolute -right-10 -top-10 z-0 hidden rotate-12 text-[#0D332B] opacity-[0.055] transition-opacity duration-300 group-hover:opacity-[0.08] sm:block">
                <Handshake size={280} strokeWidth={0.5} />
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-1 flex-col items-start justify-between p-7 text-left md:p-10">
                {/* Top Text */}
                <div className="space-y-2 md:space-y-3">
                  <h3 className="font-heading text-4xl font-bold tracking-[-0.04em] text-[#0D332B] md:text-6xl">
                    Commercial
                  </h3>
                  <p className="text-lg font-medium leading-snug text-[#405A53] md:text-2xl">
                    Une croissance mesurable, <br /> du digital à la vente.
                  </p>
                </div>

                {/* Tags Cloud */}
                <div className="mt-6 flex flex-wrap content-end justify-start gap-2 md:gap-3">
                  {commercialTags.map(([tag, href], idx) => (
                    <Link
                      key={href + tag}
                      href={href}
                      className="tag-interactive rounded-full border border-[#0D332B]/10 bg-[#FCFDFC]/82 px-4 py-2 text-xs font-bold text-[#173D35] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#0D332B]/22 hover:bg-[#FCFDFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D332B] md:px-5 md:py-2.5 md:text-sm"
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/services/commercial"
              className="group/btn inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#0D332B] px-7 py-3 text-center text-sm font-bold tracking-[-0.01em] text-[#FCFDFC] shadow-[0_14px_32px_-20px_rgba(13,51,43,0.75)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#1A4D43] sm:w-auto"
            >
              Découvrir le service
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>

          {/* DIGITAL COLUMN */}
          <AnimatedSection
            delay={80}
            className="flex flex-col items-stretch gap-5 md:col-span-5"
          >
            {/* Card */}
            <div className="group relative flex min-h-[440px] w-full flex-col overflow-hidden rounded-[28px] border border-[#0D332B]/8 bg-[#E3FFC4] shadow-[0_28px_70px_-50px_rgba(13,51,43,0.72)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#0D332B]/16 hover:shadow-[0_32px_76px_-48px_rgba(13,51,43,0.65)] md:min-h-[500px]">
              {/* Background Gradient */}
              <div
                className="absolute inset-0 z-0 bg-gradient-to-br from-[#F2FFE4] via-[#E3FFC4] to-[#C8F89A]"
                style={{ backgroundSize: "100% 200%", animationDelay: "-4s" }}
              />

              {/* Animated glow orb */}
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#FCFDFC] opacity-45 blur-[90px]" />

              {/* Watermarks */}
              <div className="pointer-events-none absolute -right-10 -top-10 z-0 hidden rotate-12 text-[#0D332B] opacity-[0.055] transition-opacity duration-300 group-hover:opacity-[0.08] sm:block">
                <Monitor size={280} strokeWidth={0.5} />
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-1 flex-col items-start justify-between p-7 text-left md:p-10">
                {/* Top Text */}
                <div className="space-y-2 md:space-y-3">
                  <h3 className="font-heading text-4xl font-bold tracking-[-0.04em] text-[#0D332B] md:text-6xl">
                    Digital
                  </h3>
                  <p className="text-lg font-medium leading-snug text-[#405A53] md:text-2xl">
                    Créez une présence digitale qui <br /> attire, engage et
                    convertit.
                  </p>
                </div>

                {/* Tags Cloud */}
                <div className="mt-6 flex flex-wrap content-end justify-start gap-2 md:gap-3">
                  {digitalTags.map(([tag, href], idx) => (
                    <Link
                      key={href + tag}
                      href={href}
                      className="tag-interactive rounded-full border border-[#0D332B]/10 bg-[#FCFDFC]/70 px-4 py-2 text-xs font-bold text-[#173D35] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#0D332B]/22 hover:bg-[#FCFDFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D332B] md:px-5 md:py-2.5 md:text-sm"
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/services/digital"
              className="group/btn inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#0D332B] px-7 py-3 text-center text-sm font-bold tracking-[-0.01em] text-[#FCFDFC] shadow-[0_14px_32px_-20px_rgba(13,51,43,0.75)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#1A4D43] sm:w-auto"
            >
              Découvrir le service
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={40} className="mt-16 border-t border-[#0D332B]/12 pt-9 md:mt-20">
          <p className="text-left text-xs font-bold uppercase tracking-[0.16em] text-[#65746F]">
            Toutes nos expertises en détail
          </p>
          <div className="mt-6 flex flex-wrap justify-start gap-3">
            {[
              ["Agence de prospection B2B", "/services/commercial"],
              ["Prospection externalisée", "/services/prospection-commerciale-externalisee"],
              ["Génération de leads", "/services/generation-leads-b2b"],
              ["Téléprospection B2B", "/services/teleprospection-b2b"],
              ["Prise de rendez-vous", "/services/prise-rendez-vous-b2b"],
              ["Qualification de leads", "/services/qualification-leads-b2b"],
              ["Fichier de prospection B2B", "/services/fichier-prospection-b2b"],
              ["Campagnes email et SMS", "/services/campagnes-email-sms-b2b"],
              ["Outbound marketing B2B", "/services/outbound-marketing-b2b"],
              ["Force de vente externalisée", "/services/vente-marque-blanche"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="rounded-full border border-[#0D332B]/14 bg-[#FCFDFC] px-5 py-2.5 text-sm font-bold text-[#0D332B] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#4E8D38] hover:bg-[#E9FFD2]"
              >
                {label}
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesPoles;
