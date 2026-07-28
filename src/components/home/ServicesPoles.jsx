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
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decor - Animated Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-emerald-50 rounded-full blur-[100px] -translate-y-1/2 opacity-60 pointer-events-none animate-blob-slow" />
      <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-blue-50 rounded-full blur-[100px] opacity-60 pointer-events-none animate-blob-delayed" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,51,43,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,51,43,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6 max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Nos Expertises
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#0D332B] tracking-tight leading-[1.1]">
            Nos Services B2B pour <br className="hidden md:block" />
            Générer des Leads{" "}
            <span className="text-gradient-premium">Qualifiés</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Prospection commerciale, téléprospection et outbound marketing : des
            solutions complètes pour remplir votre pipeline commercial en
            France.
          </p>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* COMMERCIAL COLUMN */}
          <AnimatedSection
            delay={100}
            className="flex flex-col items-center gap-6 md:gap-8"
          >
            {/* Card */}
            <div className="w-full min-h-[480px] md:h-[520px] rounded-[32px] md:rounded-[48px] relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-3 flex flex-col card-glow">
              {/* Background Gradient & Texture */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#66D49C] via-[#3DA876] to-[#1A6D48] z-0 animate-gradient-shift"
                style={{ backgroundSize: "100% 200%" }}
              />

              {/* Animated glow orb */}
              <div className="absolute -right-20 -top-20 w-[300px] h-[300px] bg-white rounded-full blur-[80px] opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none" />

              {/* Watermarks */}
              <div className="absolute -right-10 -top-10 text-white opacity-[0.06] rotate-12 pointer-events-none z-0 hidden sm:block group-hover:opacity-[0.1] transition-opacity duration-500">
                <Handshake size={280} strokeWidth={0.5} />
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex-1 flex flex-col items-center justify-between p-6 md:p-8 py-10 md:py-12 text-center">
                {/* Top Text */}
                <div className="space-y-2 md:space-y-3">
                  <h3 className="font-heading font-bold text-4xl md:text-6xl text-white drop-shadow-md tracking-tight">
                    Commercial
                  </h3>
                  <p className="text-green-50 font-medium text-lg md:text-2xl leading-snug px-2">
                    Une croissance mesurable, <br /> du digital à la vente.
                  </p>
                </div>

                {/* Tags Cloud */}
                <div className="flex flex-wrap justify-center content-end gap-2 md:gap-3 mt-6">
                  {commercialTags.map(([tag, href], idx) => (
                    <Link
                      key={href + tag}
                      href={href}
                      className="tag-interactive bg-white/95 backdrop-blur-sm text-[#1A4D43] font-bold text-xs md:text-base px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow-sm hover:bg-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
              className="group/btn w-full sm:w-auto text-center bg-[#1A4D43] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#0D332B] hover:shadow-2xl transition-all uppercase tracking-wide text-sm md:text-base inline-flex items-center justify-center gap-3 hover:-translate-y-0.5"
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
            delay={300}
            className="flex flex-col items-center gap-6 md:gap-8 mt-8 md:mt-0"
          >
            {/* Card */}
            <div className="w-full min-h-[480px] md:h-[520px] rounded-[32px] md:rounded-[48px] relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-3 flex flex-col card-glow">
              {/* Background Gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#60A5FA] via-[#3B82F6] to-[#1E40AF] z-0 animate-gradient-shift"
                style={{ backgroundSize: "100% 200%", animationDelay: "-4s" }}
              />

              {/* Animated glow orb */}
              <div className="absolute -left-20 -bottom-20 w-[300px] h-[300px] bg-white rounded-full blur-[80px] opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none" />

              {/* Watermarks */}
              <div className="absolute -right-10 -top-10 text-white opacity-[0.06] rotate-12 pointer-events-none z-0 hidden sm:block group-hover:opacity-[0.1] transition-opacity duration-500">
                <Monitor size={280} strokeWidth={0.5} />
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex-1 flex flex-col items-center justify-between p-6 md:p-8 py-10 md:py-12 text-center">
                {/* Top Text */}
                <div className="space-y-2 md:space-y-3">
                  <h3 className="font-heading font-bold text-4xl md:text-6xl text-white drop-shadow-md tracking-tight">
                    Digital
                  </h3>
                  <p className="text-blue-50 font-medium text-lg md:text-2xl leading-snug px-2">
                    Créez une présence digitale qui <br /> attire, engage et
                    convertit.
                  </p>
                </div>

                {/* Tags Cloud */}
                <div className="flex flex-wrap justify-center content-end gap-2 md:gap-3 mt-6">
                  {digitalTags.map(([tag, href], idx) => (
                    <Link
                      key={href + tag}
                      href={href}
                      className="tag-interactive bg-white/95 backdrop-blur-sm text-[#1E40AF] font-bold text-xs md:text-base px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow-sm hover:bg-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
              className="group/btn w-full sm:w-auto text-center bg-[#1E40AF] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#172554] hover:shadow-2xl transition-all uppercase tracking-wide text-sm md:text-base inline-flex items-center justify-center gap-3 hover:-translate-y-0.5"
            >
              Découvrir le service
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={200} className="mt-16 md:mt-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Toutes nos expertises en détail
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
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
                className="rounded-full border border-[#0D332B]/15 bg-white px-5 py-2.5 text-sm font-bold text-[#0D332B] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FF6A3D] hover:text-[#C84B25] hover:shadow-md"
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
