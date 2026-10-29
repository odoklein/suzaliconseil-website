"use client";

import { Check } from "lucide-react";
import MagneticButton from "../../ui/MagneticButton";
import { PageHero, ClosingCta, SectionHead, Reveal, LedgerList } from "../../kit";
import FigureStrip from "../commercial-b/FigureStrip";

const CONTAINER = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const FIGURES = [
  { value: "Votre nom", label: "Nos commerciaux se présentent sous votre marque" },
  { value: "Vos outils", label: "Votre CRM, vos scripts, vos conditions de vente" },
  { value: "Vos règles", label: "Périmètre, remises et conditions écrits avant le démarrage" },
  { value: "Hebdo", label: "Reporting des échanges, devis et signatures" },
];

const PRINCIPLES = [
  {
    title: "Votre Identité de Marque",
    description: "Nous utilisons vos adresses emails, votre CRM et votre identité de marque.",
  },
  {
    title: "Experts en Closing",
    description: "Nos commerciaux sont formés aux cycles de vente longs et complexes.",
  },
  {
    title: "Scalabilité Immédiate",
    description: "Augmentez ou réduisez votre force de frappe selon votre saisonnalité.",
  },
  {
    title: "Contrôle Qualité",
    description: "Reporting hebdomadaire détaillé des échanges, devis et signatures.",
  },
];

const SOLUTIONS = [
  {
    title: "Closing Externalisé",
    desc: "Confiez-nous vos leads qualifiés. Nous gérons la négociation et le closing final pour transformer l'opportunité en vente.",
    points: ["Négociation expert B2B", "Gestion des contrats", "Closing haute performance"],
  },
  {
    title: "Account Management",
    desc: "Fidélisez et développez votre portefeuille clients existant grâce à une gestion de compte proactive et orientée upselling.",
    points: ["Suivi client régulier", "Détection d'opportunités", "Réduction du churn"],
  },
  {
    title: "Débordement Commercial",
    desc: "Besoin de renfort ponctuel ? Nous absorbons vos pics d'activité pour ne laisser passer aucune opportunité.",
    points: ["Formation à votre offre", "Démarrage rapide", "Flexibilité contractuelle"],
  },
];

export default function MarqueBlancheClient({ children }) {
  return (
    <div className="min-h-screen bg-[#F6F7F4] text-[#0D332B]">
      <PageHero
        title="Force de vente externalisée en marque blanche"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Prospection commerciale", href: "/services/commercial" },
          { label: "Force de vente externalisée", href: "/services/vente-marque-blanche" },
        ]}
        intro="Déléguez votre closing à des professionnels de la vente. Nous agissons en votre nom, avec vos outils, pour transformer vos opportunités en contrats signés."
        image="/images/equipeprospection.png"
        imageAlt="L'équipe de prospection commerciale de Suzali Conseil dans ses bureaux"
        imagePosition="center 42%"
        actions={
          <MagneticButton href="/contact" variant="primary" className="w-full whitespace-nowrap sm:w-auto">
            Externaliser mes ventes
          </MagneticButton>
        }
      />

      <FigureStrip items={FIGURES} />

      {/* Le principe */}
      <section className="mt-10 bg-[#0D332B] py-24 text-[#F7FAF8] md:mt-14 md:py-32">
        <div className={`${CONTAINER} grid gap-14 lg:grid-cols-12 lg:gap-16`}>
          <SectionHead
            tone="ink"
            size="md"
            className="lg:col-span-5"
            title="Votre Force de Vente Supplétive"
            intro="Le « White Label Selling » vous permet de scaler vos ventes instantanément sans les coûts fixes d'une équipe interne."
            introClassName="md:text-lg"
          />
          <LedgerList tone="ink" items={PRINCIPLES} className="lg:col-span-7 lg:mt-3" />
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[#FCFDFC] py-24 md:py-32">
        <div className={CONTAINER}>
          <SectionHead
            className="max-w-4xl"
            title="Nos Solutions de Vente Outsourcée"
            intro="Une approche sur mesure pour s'intégrer parfaitement à vos processus de vente actuels."
          />

          <ul className="mt-14 border-t border-[#0D332B]/14 md:mt-20">
            {SOLUTIONS.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 80}
                className="grid gap-8 border-b border-[#0D332B]/14 py-10 md:py-14 lg:grid-cols-12 lg:gap-16"
              >
                <div className="lg:col-span-6">
                  <h3 className="font-heading text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0D332B]">
                    {s.title}
                  </h3>
                  <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-[#4E605B] md:text-lg">
                    {s.desc}
                  </p>
                </div>
                <ul className="border-t border-[#0D332B]/14 lg:col-span-6 lg:mt-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3.5 border-b border-[#0D332B]/14 py-4">
                      <Check size={17} strokeWidth={2.75} aria-hidden="true" className="mt-1 shrink-0 text-[#4E8D38]" />
                      <span className="text-base leading-relaxed text-[#2C4640]">{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Partie éditoriale longue (voir ServiceLongForm) */}
      {children}

      <ClosingCta
        title="Scalez votre vente sans limites."
        intro={
          <span className="font-mono text-[0.85rem] leading-relaxed">
            Confidentialité · Vos outils et votre CRM · Sans engagement
          </span>
        }
        primary={{ label: "Démarrer mon partenariat", href: "/contact" }}
      />
    </div>
  );
}
