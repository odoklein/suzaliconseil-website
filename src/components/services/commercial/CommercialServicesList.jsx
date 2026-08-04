"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Handshake,
  Mail,
  PhoneCall,
  Target,
  Users,
} from "lucide-react";
import AnimatedSection from "../../ui/AnimatedSection";

const services = [
  {
    id: "externalized",
    title: "Prospection commerciale externalisée",
    subtitle: "Une équipe dédiée",
    href: "/services/prospection-commerciale-externalisee",
    description:
      "Déléguez le ciblage, les prises de contact, la qualification et le reporting à une équipe intégrée à votre dispositif commercial.",
    features: [
      "Onboarding et ciblage ICP",
      "Prospection multicanale",
      "Qualification structurée",
      "Passage de relais CRM",
    ],
    icon: Handshake,
  },
  {
    id: "lead-gen",
    title: "Génération de Leads B2B",
    subtitle: "Alimentez votre pipeline",
    href: "/services/generation-leads-b2b",
    description:
      "Nous identifions et qualifions vos futurs clients idéaux grâce à des stratégies de sourcing B2B multi-canaux (LinkedIn, Bases de données, Scraping éthique). Recevez des leads chauds prêts à être convertis par votre équipe.",
    features: [
      "Sourcing B2B ciblé",
      "Enrichissement de données",
      "Qualification des prospects",
      "Scoring prédictif",
    ],
    icon: Target,
  },
  {
    id: "telepro",
    title: "Téléprospection B2B",
    subtitle: "Des agendas remplis",
    href: "/services/teleprospection-b2b",
    description:
      "Nos Business Developers expérimentés prennent contact avec vos cibles décisionnaires pour décrocher des rendez-vous qualifiés. Une prospection commerciale B2B transparente et performante.",
    features: [
      "Cold Calling expert",
      "Qualification téléphonique",
      "Gestion d'agenda CRM",
      "Relance systématique",
    ],
    icon: PhoneCall,
  },
  {
    id: "rdv",
    title: "Prise de Rendez-vous B2B",
    subtitle: "Qualification & Closing",
    href: "/services/prise-rendez-vous-b2b",
    description:
      "Nous qualifions vos opportunités selon la méthode BANT et fixons les rendez-vous directement dans votre agenda. Maximisez le temps de vos closers.",
    features: [
      "Qualification BANT",
      "Sécurisation de créneaux",
      "Rappels automatiques",
      "Briefing avant-vente",
    ],
    icon: CheckCircle2,
  },
  {
    id: "outbound",
    title: "Outbound Marketing B2B",
    subtitle: "Acquisition Proactive",
    href: "/services/outbound-marketing-b2b",
    description:
      "Dominez votre marché avec des campagnes de Cold Email et LinkedIn Automation. Une approche data-driven pour générer un flux constant de leads.",
    features: [
      "Séquences multicanales",
      "Copywriting A/B testé",
      "Social Selling",
      "Tracking de conversion",
    ],
    icon: Mail,
  },
  {
    id: "closing",
    title: "Vente Marque Blanche",
    subtitle: "Closing & Négociation",
    href: "/services/vente-marque-blanche",
    description:
      "Vous avez le produit, nous avons les vendeurs. Nos experts en closing prennent le relais pour transformer vos opportunités en contrats signés, en votre nom.",
    features: [
      "Force de vente supplétive",
      "Cycle de vente complet",
      "Négociation commerciale",
      "Signature de contrats",
    ],
    icon: Users,
  },
  {
    id: "white-label",
    title: "Vente en Marque Blanche",
    subtitle: "Scalez votre closing",
    href: "/services/vente-marque-blanche",
    description:
      "Déléguez votre closing et votre développement commercial à des experts. Nous agissons en votre nom, avec vos outils, pour transformer vos opportunités en contrats signés sans frais fixes.",
    features: [
      "Closing externalisé confidentiel",
      "Account Management dédié",
      "Intégration CRM totale",
      " Reporting de performance",
    ],
    icon: Handshake,
  },
  {
    id: "prospect-file",
    title: "Fichier de prospection B2B",
    subtitle: "Data ciblée",
    href: "/services/fichier-prospection-b2b",
    description:
      "Alimentez vos campagnes avec une base de contacts ciblée, enrichie, vérifiée et préparée pour votre CRM.",
    features: [
      "Ciblage ICP",
      "Données enrichies",
      "Contrôle qualité",
      "Livraison CSV ou Excel",
    ],
    icon: Target,
  },
  {
    id: "lead-qualification",
    title: "Qualification de leads B2B",
    subtitle: "Scoring commercial",
    href: "/services/qualification-leads-b2b",
    description:
      "Faites contacter et scorer vos leads avant leur transmission afin que vos vendeurs priorisent les opportunités utiles.",
    features: [
      "Appels et relances",
      "Grille de qualification",
      "Notes détaillées",
      "Handoff CRM",
    ],
    icon: CheckCircle2,
  },
  {
    id: "email-sms",
    title: "Campagnes email et SMS B2B",
    subtitle: "Activation multicanale",
    href: "/services/campagnes-email-sms-b2b",
    description:
      "Activez vos segments avec des séquences email et SMS adaptées, des relances ciblées et un suivi de campagne clair.",
    features: ["Segmentation", "Copywriting", "Séquences de relance", "Reporting"],
    icon: Mail,
  },
];

const spanClasses = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

export function CommercialServicesList() {
  return (
    <section
      id="services"
      aria-labelledby="commercial-services-heading"
      className="scroll-mt-24 bg-[#F6F7F4] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl">
          <h2
            id="commercial-services-heading"
            className="font-heading text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-[#0D332B] sm:text-5xl lg:text-[3.6rem]"
          >
            Nos solutions de prospection B2B
          </h2>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-[#52635F]">
            Une gamme complète de solutions pour couvrir l&apos;intégralité de
            votre cycle de vente.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const tinted = index % 4 === 1 || index % 4 === 2;

            return (
              <AnimatedSection
                as="article"
                key={service.id}
                delay={(index % 2) * 80}
                className={`${spanClasses[index % spanClasses.length]} group flex min-h-full flex-col rounded-[28px] border border-[#0D332B]/10 ${
                  tinted ? "bg-[#EAF1ED]" : "bg-[#FCFDFC]"
                } p-6 transition-[border-color,box-shadow,transform] duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-[#4E8D38]/35 hover:shadow-[0_24px_55px_-40px_rgba(13,51,43,0.78)] sm:p-8`}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#E3FFC4] text-[#0D332B] transition-transform duration-300 ease-[var(--ease-premium)] group-hover:-translate-y-0.5 group-hover:rotate-[-2deg]">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm font-semibold text-[#4E6A62]">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="mt-7 max-w-[22ch] font-heading text-2xl font-bold leading-tight tracking-[-0.025em] text-[#0D332B] sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-[66ch] leading-relaxed text-[#52635F]">
                  {service.description}
                </p>

                <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed text-[#314640]"
                    >
                      <CheckCircle2
                        size={16}
                        strokeWidth={1.9}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-[#4E8D38]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  aria-label={`En savoir plus sur ${service.title}`}
                  className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 whitespace-nowrap font-bold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#3F7131] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
                >
                  En savoir plus
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.9}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
