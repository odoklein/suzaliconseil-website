"use client";

import React from "react";
import Link from "next/link";
import { Handshake, Monitor, ArrowRight, CheckCircle2 } from "lucide-react";
import { useBooking } from "../../context/BookingContext";
import AnimatedSection from "../ui/AnimatedSection";
import MagneticButton from "../ui/MagneticButton";

/* ── Static data hoisted outside component (rendering-hoist-jsx) ── */
const SERVICES = [
  {
    slug: "commercial",
    title: "Pôle Performance Commerciale",
    description:
      "Optimisez votre force de vente et boostez votre chiffre d'affaires grâce à nos solutions d'audit, de formation et d'externalisation.",
    icon: Handshake,
    color: "text-[#0D332B]",
    bgHover: "group-hover:bg-[#0D332B]",
    textHover: "group-hover:text-[#B0FF5B]",
    gradient: "from-[#0D332B] to-[#1A6D48]",
    features: [
      "Audit & Stratégie Commerciale",
      "Formation & Coaching",
      "Externalisation Commerciale",
      "Génération de Leads",
    ],
  },
  {
    slug: "digital",
    title: "Pôle Stratégie Digitale",
    description:
      "Transformez votre présence en ligne en véritable levier de croissance avec nos experts en développement web et marketing digital.",
    icon: Monitor,
    color: "text-[#1155CC]",
    bgHover: "group-hover:bg-[#1155CC]",
    textHover: "group-hover:text-white",
    gradient: "from-[#1155CC] to-[#60A5FA]",
    features: [
      "Création de Sites Web & App",
      "Référencement Naturel (SEO)",
      "Publicité en Ligne (Ads)",
      "Design & UX/UI",
    ],
  },
];

const COMMERCIAL_LINKS = [
  ["Prospection commerciale externalisée", "/services/prospection-commerciale-externalisee"],
  ["Génération de leads B2B", "/services/generation-leads-b2b"],
  ["Téléprospection B2B", "/services/teleprospection-b2b"],
  ["Prise de rendez-vous B2B", "/services/prise-rendez-vous-b2b"],
  ["Outbound marketing B2B", "/services/outbound-marketing-b2b"],
  ["Force de vente externalisée", "/services/vente-marque-blanche"],
  ["Fichier de prospection B2B", "/services/fichier-prospection-b2b"],
  ["Qualification de leads B2B", "/services/qualification-leads-b2b"],
  ["Campagnes email et SMS B2B", "/services/campagnes-email-sms-b2b"],
];

const DIGITAL_LINKS = [
  ["Stratégie digitale B2B", "/services/digital/strategie-digitale"],
  ["Sites web et e-commerce", "/services/digital/sites-web-ecommerce"],
  ["SEO et acquisition", "/services/digital/seo-acquisition"],
  ["Branding et identité", "/services/digital/branding-identite"],
  ["Développement et automatisation", "/services/digital/developpement-automatisation"],
];

import Breadcrumbs from "../ui/Breadcrumbs";

export function ServicesHub() {
  const { openBooking } = useBooking();

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pt-28 pb-12 font-sans">
      <div className="container mx-auto px-4 max-w-6xl relative z-20">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      </div>
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6">
            Nos Expertises
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D332B] mb-6 tracking-tight">
            Nos Domaines d&apos;
            <span className="text-gradient-premium">Expertise</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Suzali Conseil accompagne votre croissance à travers deux pôles
            complémentaires : l&apos;excellence commerciale et l&apos;innovation
            digitale.
          </p>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.slug} delay={index * 200}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-3 block h-full border border-slate-100/80 card-glow"
              >
                <div className="p-8 md:p-12 h-full flex flex-col relative">
                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                  />

                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div
                      className={`p-5 rounded-2xl shadow-sm bg-slate-50 ring-1 ring-black/5 transition-all duration-300 ${service.color} ${service.bgHover} ${service.textHover} group-hover:shadow-lg group-hover:scale-105`}
                    >
                      <service.icon size={40} strokeWidth={1.5} />
                    </div>
                    <div className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider group-hover:bg-primary-dark group-hover:text-white transition-colors duration-300">
                      Découvrir
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold font-heading mb-4 text-slate-900 group-hover:text-primary-main transition-colors relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8 flex-1 relative z-10">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 group/feature hover:translate-x-1 transition-transform duration-200"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-primary-main mt-0.5 shrink-0"
                        />
                        <span className="text-sm font-medium text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mt-auto relative z-10">
                    <span className="relative">
                      En savoir plus
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-main group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mb-20 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <h2 className="font-heading text-3xl font-bold text-[#0D332B]">
            Tous nos services
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Accédez directement à l’accompagnement qui correspond à votre objectif
            commercial ou digital.
          </p>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-emerald-800">Prospection commerciale</h3>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {COMMERCIAL_LINKS.map(([label, href]) => (
                  <Link key={href} href={href} className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-800">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-800">Stratégie digitale</h3>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {DIGITAL_LINKS.map(([label, href]) => (
                  <Link key={href} href={href} className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-800">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={400}>
          <div className="max-w-4xl mx-auto bg-[#0D332B] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl group">
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Besoin d&apos;un accompagnement sur mesure ?
              </h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
                Discutons de vos objectifs et définissons ensemble la stratégie
                gagnante pour votre entreprise.
              </p>
              <MagneticButton
                onClick={openBooking}
                variant="lime"
                className="inline-flex items-center gap-2"
              >
                Planifier un premier échange
                <ArrowRight size={20} />
              </MagneticButton>
            </div>

            {/* Decorative gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#B0FF5B]/10 rounded-full blur-3xl group-hover:bg-[#B0FF5B]/20 transition-colors duration-700" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#1155CC]/20 rounded-full blur-3xl" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
