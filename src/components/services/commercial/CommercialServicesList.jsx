"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  PhoneCall,
  Target,
  Mail,
  CheckCircle2,
  ArrowRight,
  Handshake,
} from "lucide-react";

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
    features: ["Ciblage ICP", "Données enrichies", "Contrôle qualité", "Livraison CSV ou Excel"],
    icon: Target,
  },
  {
    id: "lead-qualification",
    title: "Qualification de leads B2B",
    subtitle: "Scoring commercial",
    href: "/services/qualification-leads-b2b",
    description:
      "Faites contacter et scorer vos leads avant leur transmission afin que vos vendeurs priorisent les opportunités utiles.",
    features: ["Appels et relances", "Grille de qualification", "Notes détaillées", "Handoff CRM"],
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

export function CommercialServicesList() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Nos Solutions de{" "}
            <span className="text-emerald-700">Prospection B2B</span>
          </motion.h2>
          <p className="text-xl text-slate-500">
            Une gamme complète de solutions pour couvrir l&apos;intégralité de
            votre cycle de vente.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className={`group flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-16 items-center border-b border-slate-100 pb-16 last:border-0`}
            >
              {/* Icon / Visual Side */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="bg-emerald-50 rounded-[2rem] p-8 md:p-12 transition-all duration-300 group-hover:bg-emerald-100/50 group-hover:scale-[1.02]">
                  <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-600/20">
                    <service.icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-emerald-950 mb-2">
                    {service.title}
                  </h3>
                  <div className="font-medium text-emerald-700/80 uppercase tracking-widest text-sm">
                    {service.subtitle}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/3 pt-4">
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="flex items-center gap-2 text-emerald-700 font-bold hover:gap-4 transition-all group-hover:text-emerald-800"
                >
                  En savoir plus <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
