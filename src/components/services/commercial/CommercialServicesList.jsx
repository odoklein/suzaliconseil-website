"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHead } from "../../kit";

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
      "Suivi des comptes existants",
      "Intégration CRM totale",
      "Reporting de performance",
    ],
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
  },
  {
    id: "email-sms",
    title: "Campagnes email et SMS B2B",
    subtitle: "Activation multicanale",
    href: "/services/campagnes-email-sms-b2b",
    description:
      "Activez vos segments avec des séquences email et SMS adaptées, des relances ciblées et un suivi de campagne clair.",
    features: ["Segmentation", "Copywriting", "Séquences de relance", "Reporting"],
  },
];

export function CommercialServicesList() {
  return (
    <section
      id="services"
      aria-labelledby="commercial-services-heading"
      className="scroll-mt-24 border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          className="max-w-4xl"
          title={<span id="commercial-services-heading">Nos solutions de prospection B2B</span>}
          intro="Une gamme complète de solutions pour couvrir l'intégralité de votre cycle de vente."
        />

        {/* One hairline row per solution: the whole row links to its page. */}
        <ul className="mt-14 border-t border-[#0D332B]/14 md:mt-20">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={Math.min(i, 5) * 60}>
              <Link
                href={service.href}
                className="ledger-row group flex items-start justify-between gap-6 border-b border-[#0D332B]/14 px-1 py-7 outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] md:px-3 md:py-9"
              >
                <div className="grid min-w-0 flex-1 gap-3 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10">
                  <div className="min-w-0">
                    <h3 className="font-heading text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] text-[#0D332B] md:text-[1.6rem]">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-[#4E605B]">{service.subtitle}</p>
                  </div>
                  <div className="min-w-0">
                    <p className="max-w-[60ch] text-[15px] leading-relaxed text-[#4E605B] md:text-base">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[0.75rem] tracking-normal text-[#4E605B]/90">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-[#0D332B]/40" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ArrowUpRight
                  size={22}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#0D332B] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
