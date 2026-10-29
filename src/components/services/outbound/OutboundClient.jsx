"use client";

import { Check } from "lucide-react";
import MagneticButton from "../../ui/MagneticButton";
import {
  PageHero,
  ClosingCta,
  SectionHead,
  Reveal,
  LedgerList,
  FaqList,
} from "../../kit";
import FigureStrip from "../commercial-b/FigureStrip";
import { MethodSection } from "../../kit";
import { OUTBOUND_FAQ } from "./outbound-faq";

const CONTAINER = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const FIGURES = [
  { value: "2 semaines", label: "De cadrage avant le premier envoi" },
  { value: "4 canaux", label: "Email, LinkedIn, téléphone et SMS dans une séquence" },
  { value: "Écrits", label: "Objectifs fixés au cadrage, revus chaque semaine" },
  { value: "Hebdo", label: "Reporting par segment : ouvertures, réponses, RDV" },
];

const PILLARS = [
  {
    title: "Ciblage Laser B2B",
    description:
      "Sourcing décideurs par secteur d'activité, taille entreprise, technologie utilisée et signaux d'achat.",
  },
  {
    title: "Personnalisation IA",
    description:
      "Variables dynamiques et copywriting adaptatif pour chaque prospect via Sales Intelligence avancée.",
  },
  {
    title: "Délivrabilité Premium",
    description:
      "Warm-up domaines, rotation IP, monitoring SMTP quotidien pour maximiser l'inbox placement.",
  },
  {
    title: "Analytics Temps Réel",
    description:
      "KPIs transparents : taux ouverture, clics, réponses positives et opportunités commerciales générées.",
  },
];

const QUALITIES = [
  { label: "Scalable", desc: "Croissance illimitée" },
  { label: "Précis", desc: "Ciblage ABM" },
  { label: "Direct", desc: "Contact décideurs" },
  { label: "Mesuré", desc: "Indicateurs suivis chaque semaine" },
];

const METRIC_LABELS = {
  open: "Ouverture",
  response: "Réponse",
  accept: "Acceptation",
  conversion: "Conversion",
  deal: "Panier moyen",
};

const CHANNELS = [
  {
    title: "Cold Emailing 2.0",
    subtitle: "Prospection Email Automatisée",
    desc: "Dépassez la simple prospection par email. Nous créons des campagnes d'emailing de masse personnalisées avec un copywriting persuasif qui génère des réponses et des rendez-vous qualifiés.",
    points: [
      "Spintax & Variables dynamiques personnalisées",
      "Séquences de relances automatiques intelligentes",
      "Tracking premium et optimisation anti-spam",
      "A/B testing objets et contenus",
    ],
    tracked: ["open", "response"],
  },
  {
    title: "LinkedIn Automation",
    subtitle: "Social Selling B2B",
    desc: "Transformez LinkedIn en machine de prospection commerciale. Séquences InMail ciblées, connection requests personnalisées et nurturing automatisé pour engager vos prospects B2B.",
    points: [
      "Optimisation profil Sales Navigator",
      "Sourcing décideurs Sales Navigator",
      "Séquences multi-touchpoints synchronisées",
      "Social Selling Score optimization",
    ],
    tracked: ["accept", "response"],
  },
  {
    title: "Account-Based Marketing",
    subtitle: "Stratégie ABM Premium",
    desc: "Le service premium pour les cycles de vente complexes. Nous ciblons spécifiquement vos comptes stratégiques avec du contenu personnalisé et un suivi multi-canal orchestré.",
    points: [
      "IP-Tracking & Retargeting publicitaire",
      "Contenu personnalisé par compte cible",
      "Alignement Marketing-Sales parfait",
      "Intent data & buying signals",
    ],
    tracked: ["conversion", "deal"],
  },
];

const COMMITMENTS = [
  { title: "Cadrage d'abord", desc: "Deux semaines avant le premier envoi" },
  { title: "Conformité RGPD", desc: "Désinscription simple, oppositions appliquées immédiatement" },
  { title: "Objectifs écrits", desc: "Fixés au cadrage, revus chaque semaine" },
  { title: "Reporting hebdomadaire", desc: "Par segment : réponses et rendez-vous" },
];

const PHASES = [
  {
    title: "Cadrage et ICP",
    description:
      "Nous définissons votre profil de client idéal à partir de vos affaires signées, pas d'un persona théorique : secteurs qui achètent vite, tailles d'entreprise où votre offre passe, fonctions qui décident réellement du budget.",
  },
  {
    title: "Construction du fichier",
    description:
      "Sourcing des comptes et des décideurs, vérification des adresses, enrichissement par signaux d'achat. Un fichier de 500 contacts justes vaut mieux que 5 000 approximatifs : la délivrabilité se joue ici.",
  },
  {
    title: "Séquences et lancement",
    description:
      "Rédaction des messages par segment, warm-up des domaines d'envoi, paramétrage des relances. Les campagnes sont actives sous 7 jours une fois le ciblage et les messages validés avec vous.",
  },
  {
    title: "Pilotage et itération",
    description:
      "Revue hebdomadaire des taux de réponse par segment et par message. Ce qui ne convertit pas est réécrit ou coupé ; les rendez-vous qualifiés partent directement dans l'agenda de vos commerciaux.",
  },
];

const COMPLEMENTS = [
  {
    href: "/services/prospection-commerciale-externalisee",
    title: "Prospection commerciale externalisée",
    description: "Quand le besoin porte sur l'équipe, pas sur le canal.",
  },
  {
    href: "/services/fichier-prospection-b2b",
    title: "Fichier de prospection B2B qualifié",
    description: "Si le ciblage est le point faible.",
  },
  {
    href: "/services/campagnes-email-sms-b2b",
    title: "Campagnes email et SMS B2B",
    description: "Pour industrialiser le multicanal.",
  },
  {
    href: "/services/qualification-leads-b2b",
    title: "Qualification de leads B2B",
    description: "Quand les leads arrivent mais ne convertissent pas.",
  },
  {
    href: "/services/prise-rendez-vous-b2b",
    title: "Prise de rendez-vous B2B qualifiés",
    description: "Pour remplir l'agenda de vos commerciaux.",
  },
];

export default function OutboundClient() {
  return (
    <div className="min-h-screen bg-[#F6F7F4] text-[#0D332B]">
      <PageHero
        title="Agence outbound B2B : des rendez-vous avec vos décideurs"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Prospection commerciale", href: "/services/commercial" },
          { label: "Agence outbound B2B", href: "/services/outbound-marketing-b2b" },
        ]}
        intro={
          <p>
            Passez de l&apos;attente passive à la{" "}
            <strong>conquête systématique</strong>. Nous combinons{" "}
            <strong>Sales Intelligence</strong>, automatisation marketing
            avancée, <strong>Account-Based Marketing (ABM)</strong> et
            copywriting persuasif pour remplir votre pipeline de{" "}
            <strong>leads B2B qualifiés</strong>, suivis contact par contact.
          </p>
        }
        meta="Conforme RGPD · Cadrage en deux semaines · Sans engagement"
        image="/images/equipeprospection.png"
        imageAlt="L'équipe de prospection commerciale de Suzali Conseil dans ses bureaux"
        imagePosition="center 42%"
        actions={
          <>
            <MagneticButton href="/contact" variant="primary" className="w-full whitespace-nowrap sm:w-auto">
              Lancer ma stratégie outbound
            </MagneticButton>
            <MagneticButton href="#canaux" variant="outline-light" className="w-full whitespace-nowrap sm:w-auto">
              Explorer nos leviers
            </MagneticButton>
          </>
        }
      />

      <FigureStrip items={FIGURES} />

      {/* L'outbound, la méthode */}
      <section className="bg-[#F6F7F4] py-24 md:py-32">
        <div className={`${CONTAINER} grid gap-14 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-5">
            <SectionHead
              size="md"
              title="L'Outbound Marketing B2B : La Prospection Commerciale Intelligente"
            />
            <Reveal
              as="p"
              delay={140}
              className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[#4E605B] [&_strong]:font-semibold [&_strong]:text-[#0D332B]"
            >
              Le <strong>marketing entrant (inbound)</strong> est saturé. Pour
              dominer votre marché, vous devez maîtriser l&apos;
              <strong>outbound marketing</strong> : ciblage précis via{" "}
              <strong>Account-Based Marketing (ABM)</strong>, prospection
              multi-canal synchronisée et messages hyper-personnalisés grâce à
              la <strong>Sales Intelligence</strong>.
            </Reveal>

            <Reveal delay={220} as="dl" className="mt-10 grid grid-cols-2 border-t border-[#0D332B]/14">
              {QUALITIES.map((q, i) => (
                <div
                  key={q.label}
                  className={`border-b border-[#0D332B]/14 py-5 ${i % 2 === 1 ? "border-l pl-5" : "pr-5"}`}
                >
                  <dt className="font-heading text-[1.3rem] font-semibold tracking-[-0.03em] text-[#0D332B]">
                    {q.label}
                  </dt>
                  <dd className="mt-1 text-sm text-[#4E605B]">{q.desc}</dd>
                </div>
              ))}
            </Reveal>
          </div>

          <LedgerList items={PILLARS} className="lg:col-span-7 lg:mt-3" />
        </div>
      </section>

      {/* Canaux */}
      <section id="canaux" className="scroll-mt-24 bg-[#0D332B] py-24 text-[#F7FAF8] md:py-32">
        <div className={CONTAINER}>
          <SectionHead
            tone="ink"
            className="max-w-4xl"
            title="Nos Canaux d'Activation Outbound Marketing"
            intro={
              <>
                Nous déployons les meilleurs leviers de{" "}
                <strong className="font-semibold text-[#F7FAF8]">Growth Hacking B2B</strong> et de{" "}
                <strong className="font-semibold text-[#F7FAF8]">prospection digitale</strong> pour créer un
                système d&apos;acquisition client prévisible et scalable.
              </>
            }
          />

          <ul className="mt-14 border-t border-white/12 md:mt-20">
            {CHANNELS.map((canal, i) => (
              <Reveal
                as="li"
                key={canal.title}
                delay={i * 80}
                className="grid gap-8 border-b border-white/12 py-10 md:py-14 lg:grid-cols-12 lg:gap-16"
              >
                <div className="lg:col-span-6">
                  <h3 className="font-heading text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#F7FAF8]">
                    {canal.title}
                  </h3>
                  <p className="mt-2 text-base text-[#B9CBC4]">{canal.subtitle}</p>
                  <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-[#CFDDD7] md:text-lg">
                    {canal.desc}
                  </p>
                  <p className="mt-6 font-mono text-[0.78rem] text-[#B9CBC4]">
                    Suivi chaque semaine :{" "}
                    {canal.tracked
                      .map((key) => METRIC_LABELS[key])
                      .join(" · ")}
                  </p>
                </div>
                <ul className="border-t border-white/12 lg:col-span-6 lg:mt-2">
                  {canal.points.map((p) => (
                    <li key={p} className="flex items-start gap-3.5 border-b border-white/12 py-4">
                      <Check size={17} strokeWidth={2.75} aria-hidden="true" className="mt-1 shrink-0 text-[#B0FF5B]" />
                      <span className="text-base leading-relaxed text-[#E4ECE8]">{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>

          <dl className="mt-14 grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
            {COMMITMENTS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 70}
                className="border-t border-white/12 pt-5 sm:pr-6"
              >
                <dt className="text-base font-semibold tracking-[-0.015em] text-[#F7FAF8]">{item.title}</dt>
                <dd className="mt-1.5 text-sm text-[#B9CBC4]">{item.desc}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Déroulé d'une mission — contenu de fond : la page plafonnait à 654 mots
          sur « agence outbound » (85 impressions, position 41,35). */}
      <MethodSection
        ground="bg-[#F6F7F4]"
        title="Comment se déroule une mission outbound"
        intro="La plupart des campagnes outbound échouent avant le premier envoi, sur un ciblage trop large ou un message écrit pour l'émetteur plutôt que pour le lecteur. Notre déroulé consacre donc les deux premières semaines au cadrage, pas à l'envoi."
        steps={PHASES}
      />

      {/* À qui s'adresse l'outbound + prestations complémentaires */}
      <section className="border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
        <div className={CONTAINER}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <SectionHead size="md" className="lg:col-span-5" title="À qui s'adresse l'outbound" />
            <Reveal delay={140} className="max-w-[62ch] space-y-5 text-lg leading-relaxed text-[#4E605B] lg:col-span-7 lg:pt-3">
              <p>
                L&apos;outbound fonctionne quand votre marché est identifiable :
                un nombre fini d&apos;entreprises que vous savez nommer, un
                décideur repérable, un panier moyen qui justifie le coût d&apos;un
                contact direct. C&apos;est le cas des éditeurs de logiciels B2B,
                des ESN, des cabinets de conseil, des industriels et des
                prestataires de services aux entreprises.
              </p>
              <p>
                Il est en revanche le mauvais outil pour un produit à faible
                panier vendu à un marché de masse : le coût par contact ne se
                rentabilise pas. Nous vous le dirons pendant l&apos;audit plutôt
                qu&apos;au troisième mois de campagne.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 md:mt-28">
            <h3 className="font-heading text-[1.4rem] font-semibold tracking-[-0.03em] text-[#0D332B] md:text-[1.6rem]">
              Prestations complémentaires
            </h3>
            <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-[#4E605B] md:text-[17px]">
              L&apos;outbound se combine souvent avec d&apos;autres briques de
              notre accompagnement commercial, selon l&apos;étape où votre
              pipeline se bloque :
            </p>
            <LedgerList items={COMPLEMENTS} className="mt-8" />
          </div>
        </div>
      </section>

      {/* FAQ — le JSON-LD FAQPage correspondant est émis côté serveur dans
          src/app/services/outbound-marketing-b2b/page.jsx, à partir du même
          tableau OUTBOUND_FAQ : FaqList n'en émet donc pas un second. */}
      <FaqList title="Ce qu'on nous demande le plus souvent" jsonLd={false} items={OUTBOUND_FAQ} />

      <ClosingCta
        title="Passez de l'attente à la prospection active"
        intro={
          <>
            Audit gratuit de votre stratégie outbound actuelle + Plan
            d&apos;action personnalisé : cible, messages, canaux et rythme
            d&apos;envoi.
            <span className="mt-5 block font-mono text-[0.8rem] leading-relaxed text-[#B9CBC4]">
              Accompagnement sur mesure · Reporting hebdomadaire · Sans engagement
            </span>
          </>
        }
        primary={{ label: "Démarrer mon audit outbound gratuit", href: "/contact" }}
      />
    </div>
  );
}
