"use client";

import MagneticButton from "../../ui/MagneticButton";
import {
  PageHero,
  ClosingCta,
  SectionHead,
  LedgerList,
  Marker,
  Reveal,
  MethodRail,
  FigureRow,
} from "../../kit";
import PipelinePanel from "../commercial-shared/PipelinePanel";
import HeroNotes from "../commercial-shared/HeroNotes";

const BREADCRUMBS = [
  { label: "Services", href: "/services" },
  { label: "Prospection commerciale", href: "/services/commercial" },
  { label: "Génération de leads B2B", href: "/services/generation-leads-b2b" },
];

// Offer terms from the catalogue, the same on every commercial page.
const FIGURES = [
  { value: "7 jours", label: "Pour lancer la campagne après validation du ciblage" },
  { value: "4 canaux", label: "Email, LinkedIn, téléphone et SMS dans une séquence" },
  { value: "5 appels", label: "Maximum par lead, sur 10 jours, pour le qualifier" },
  { value: "Hebdo", label: "Reporting et point avec votre account manager" },
];

const LEVERS = [
  {
    title: "Ciblage ICP Granulaire",
    description:
      "Définition précise de votre Ideal Customer Profile : secteur, taille, technologie, budget, signaux d'achat.",
  },
  {
    title: "Sourcing Multicanal Synchronisé",
    description:
      "Cold emailing, LinkedIn Sales Navigator, téléprospection et retargeting publicitaire orchestrés.",
  },
  {
    title: "Qualification BANT Stricte",
    description:
      "Budget, Authority, Need, Timeline : seuls les prospects matures passent à votre équipe commerciale.",
  },
  {
    title: "Objectifs écrits au cadrage",
    description:
      "Volume visé, critères de qualification et rythme de reporting sont fixés ensemble avant le premier envoi, puis revus chaque semaine.",
  },
];

const ENGINE = [
  { title: "Sourcing Data", text: "Base enrichie et vérifiée en temps réel via Sales Intelligence." },
  {
    title: "Multi-Canal",
    text: (
      <>
        Email, LinkedIn et téléphone combinés dans{" "}
        <strong className="font-semibold text-[#F7FAF8]">une même séquence</strong>.
      </>
    ),
  },
  { title: "Qualification", text: "Zéro lead froid. Seuls les décideurs intéressés." },
  { title: "Suivi CRM", text: "Chaque contact et chaque échange tracés dans SuzaLink CRM." },
];

const STEPS = [
  { title: "ICP & Persona", description: "Définition de votre client idéal et segmentation comportementale" },
  { title: "Data Sourcing", description: "Extraction et enrichissement de bases de données B2B qualifiées" },
  { title: "Activation", description: "Lancement des campagnes multicanales synchronisées" },
  { title: "Qualification", description: "Scoring BANT et validation de l'intérêt commercial" },
  { title: "Closing Sync", description: "Transfert CRM et accompagnement de vos commerciaux" },
];

const COMMITMENTS = [
  { value: "7 jours", label: "Lancement", note: "Après validation du ciblage et des messages" },
  { value: "1:1", label: "Account Manager", note: "Expert dédié à votre compte" },
  { value: "7 €", label: "Par lead qualifié", note: "Offre Qualification de leads, dès 100 leads" },
  { value: "Hebdo", label: "Reporting", note: "Volumes, réponses et rendez-vous" },
];

const STRONG = "font-semibold text-[#0D332B]";

export default function LeadGenClient({ children }) {
  return (
    <div className="bg-[#F6F7F4] text-[#0D332B]">
      <PageHero
        title="Agence de génération de leads B2B qualifiés"
        breadcrumbs={BREADCRUMBS}
        intro={
          <p>
            Remplissez votre <strong>pipeline commercial</strong> avec des prospects B2B
            ultra-qualifiés et prêts à acheter. Nous déployons les meilleures stratégies de{" "}
            <strong>sourcing multicanal</strong>, <strong>qualification BANT</strong> et{" "}
            <strong>lead nurturing</strong> pour alimenter vos commerciaux en opportunités réelles.
          </p>
        }
        actions={
          <>
            <MagneticButton href="/contact" variant="primary" className="w-full whitespace-nowrap sm:w-auto">
              Obtenir un audit gratuit
            </MagneticButton>
            <MagneticButton href="#processus" variant="outline-light" className="w-full whitespace-nowrap sm:w-auto">
              Découvrir notre méthode
            </MagneticButton>
          </>
        }
        image="/images/equipeprospection.png"
        imageAlt="Trois membres de l'équipe de prospection dans l'open space, dont un au casque"
        imagePosition="68% center"
      >
        <HeroNotes items={["Conformité RGPD", "Démarrage sous 7 jours", "Sans engagement"]} />
      </PageHero>

      {/* The challenge: four levers as ledger rows, the pipeline they feed beside them. */}
      <section className="bg-[#F6F7F4] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            className="max-w-4xl"
            title={
              <>
                Le Défi de la <Marker>Génération</Marker> de Leads B2B en France
              </>
            }
            intro={
              <>
                Vos commerciaux perdent du temps sur des{" "}
                <strong className={STRONG}>prospects qui n&apos;achèteront pas</strong>. Nous transformons ce temps en{" "}
                <strong className={STRONG}>opportunités commerciales concrètes</strong> grâce à notre
                méthodologie éprouvée de <strong className={STRONG}>lead generation B2B</strong>.
              </>
            }
          />

          <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-12 lg:gap-16">
            <LedgerList items={LEVERS} className="lg:col-span-7" />

            <Reveal variant="focus" className="h-fit lg:sticky lg:top-32 lg:col-span-5">
              <PipelinePanel>
                <ul className="grid gap-x-6 sm:grid-cols-2">
                  {ENGINE.map((item) => (
                    <li key={item.title} className="border-t border-white/12 py-4">
                      <span className="block text-[15px] font-semibold tracking-[-0.01em]">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[13px] leading-relaxed text-[#B9CBC4]">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </PipelinePanel>
            </Reveal>
          </div>

          <FigureRow items={FIGURES} className="mt-16 md:mt-24" />
        </div>
      </section>

      {/* Process: five steps on the rail, the commitments beside them. */}
      <section
        id="processus"
        className="scroll-mt-24 border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            className="max-w-4xl"
            title="Notre Processus de Lead Generation en 5 Étapes"
            intro={
              <>
                Une méthodologie <strong className={STRONG}>data-driven</strong> pour transformer vos
                données en <strong className={STRONG}>contrats signés</strong>.
              </>
            }
          />

          <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-12 lg:gap-16">
            <MethodRail steps={STEPS} ground="bg-[#FCFDFC]" className="lg:col-span-7 lg:pt-3" />
            <FigureRow
              items={COMMITMENTS}
              layout="stack"
              className="h-fit lg:sticky lg:top-32 lg:col-span-5"
            />
          </div>
        </div>
      </section>

      {/* Partie éditoriale longue (méthode, cas d'usage, mesure, FAQ, maillage) : voir ServiceLongForm. */}
      {children}

      <ClosingCta
        title="Prêt à remplir votre pipeline commercial ?"
        intro="Un audit gratuit de votre prospection actuelle : votre cible, vos messages, vos canaux. Vous repartez avec un plan, que vous travailliez avec nous ou non."
        primary={{ label: "Démarrer mon audit gratuit", href: "/contact" }}
        slotLabel="Audit gratuit"
        slotMeta="offert"
      />
    </div>
  );
}
