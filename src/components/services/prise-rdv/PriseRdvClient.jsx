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
import { VENTE_AU_RDV } from "../../../lib/offer-terms";

const BREADCRUMBS = [
  { label: "Services", href: "/services" },
  { label: "Prospection commerciale", href: "/services/commercial" },
  { label: "Prise de rendez-vous B2B", href: "/services/prise-rendez-vous-b2b" },
];

const BENEFITS = [
  {
    title: "Décideurs Ciblés",
    description:
      "Nous identifions les interlocuteurs clés (C-Level, VP, Directeurs) ayant le pouvoir de signature et le budget décisionnel.",
    meta: "C-Level · Contacts directs",
  },
  {
    title: "Qualification BANT",
    description:
      "Budget, Autorité, Besoin, Timeline. Chaque rendez-vous est passé au crible de notre méthodologie de qualification stricte.",
    meta: "Budget · Autorité · Besoin · Délai",
  },
  {
    title: "Sync Agenda & CRM",
    description:
      "Nous gérons les créneaux directement dans votre calendrier (Google, Outlook) avec briefing complet transmis via votre CRM.",
    meta: "Auto · Synchronisation",
  },
  {
    title: "Payé au rendez-vous",
    // TODO SUZALI : confirmer si une absence du prospect est facturée sur l'offre Vente au
    // Rendez-Vous (la promesse « une absence n'est pas facturée » vaut pour Growth Standard).
    description: `Vos commerciaux se concentrent sur le closing. Offre ${VENTE_AU_RDV.name} : ${VENTE_AU_RDV.setup} de mise en place, puis ${VENTE_AU_RDV.perRdv} par rendez-vous.`,
    meta: `${VENTE_AU_RDV.name} · ${VENTE_AU_RDV.perRdv} par RDV`,
  },
];

const STEPS = [
  {
    title: "Ciblage Stratégique ICP",
    description:
      "Définition précise du profil client idéal (Ideal Customer Profile) : secteur, taille, budget, technologie, signaux d'achat. Sourcing des contacts qualifiés via Sales Intelligence.",
  },
  {
    title: "Approche Multicanal Synchronisée",
    description:
      "Email personnalisé, LinkedIn Social Selling et téléphone orchestrés pour engager le prospect de manière non-intrusive et professionnelle.",
  },
  {
    title: "Audit de l'Intérêt & BANT",
    description:
      "Validation du besoin réel, de la maturité du projet et des critères BANT (Budget, Autorité, Need, Timeline) lors d'un pré-appel de qualification.",
  },
  {
    title: "Fixation RDV & Briefing Complet",
    description:
      "Le rendez-vous est posé dans votre agenda. Vous recevez un briefing détaillé sur le prospect : contexte, besoins, objections levées, opportunités identifiées.",
  },
];

// Offer terms (see "Vente au Rendez-Vous" in the catalogue), not outcomes.
const OUTCOMES = [
  { value: "10 RDV", label: "Minimum par campagne" },
  {
    value: VENTE_AU_RDV.perRdv,
    label: `Par rendez-vous, après ${VENTE_AU_RDV.setup} de mise en place (offre ${VENTE_AU_RDV.name})`,
  },
];

const STRONG = "font-semibold text-[#0D332B]";

export default function PriseRdvClient() {
  return (
    <div className="bg-[#F6F7F4] text-[#0D332B]">
      <PageHero
        title="Prise de rendez-vous B2B qualifiés"
        breadcrumbs={BREADCRUMBS}
        intro={
          <p>
            Remplissez votre <strong>agenda commercial</strong> avec des opportunités
            ultra-qualifiées. Nous identifions les <strong>décideurs B2B</strong>, validons leur
            intérêt et fixons des rendez-vous stratégiques pour vos équipes de vente.{" "}
            <strong>Qualification BANT stricte</strong>, synchronisation CRM et un briefing avant
            chaque rendez-vous.
          </p>
        }
        actions={
          <>
            <MagneticButton href="/contact" variant="primary" className="w-full whitespace-nowrap sm:w-auto">
              Remplir mon agenda commercial
            </MagneticButton>
            <MagneticButton href="#processus" variant="outline-light" className="w-full whitespace-nowrap sm:w-auto">
              Découvrir notre méthode
            </MagneticButton>
          </>
        }
        image="/images/pricing-b2b-strategy.png"
        imageAlt="Deux consultants analysent des graphiques autour d'un ordinateur portable"
      >
        <HeroNotes items={["Qualification BANT", "Briefing avant chaque RDV", "Sync CRM automatique"]} />
      </PageHero>

      {/* Benefits: four ledger rows, each with its figure as a data line. */}
      <section className="bg-[#F6F7F4] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            className="max-w-4xl"
            title={
              <>
                Un Agenda <Marker>Maîtrisé</Marker>, des Ventes Accélérées
              </>
            }
            intro={
              <>
                Nous appliquons les{" "}
                <strong className={STRONG}>critères de qualification les plus stricts</strong> pour vous
                garantir des échanges à <strong className={STRONG}>haute valeur ajoutée</strong>.
              </>
            }
          />
          <LedgerList items={BENEFITS} className="mt-14 md:mt-20" />
        </div>
      </section>

      {/* Process: four steps on the rail, the agenda they fill beside them. */}
      <section
        id="processus"
        className="scroll-mt-24 border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead className="max-w-4xl" title="Notre Processus de Qualification en 4 Étapes" />

          <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-12 lg:gap-16">
            <MethodRail steps={STEPS} ground="bg-[#FCFDFC]" className="lg:col-span-7 lg:pt-3" />

            <Reveal variant="focus" className="h-fit lg:sticky lg:top-32 lg:col-span-5">
              <PipelinePanel>
                <h3 className="font-heading text-[1.5rem] font-semibold leading-tight tracking-[-0.03em]">
                  Vos commerciaux ne prospectent plus
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#B9CBC4]">
                  Nous trouvons, qualifions et posons le rendez-vous. Votre équipe reçoit le
                  briefing et n&apos;a plus qu&apos;à{" "}
                  <strong className="font-semibold text-[#F7FAF8]">mener l&apos;échange</strong>.
                </p>
                <FigureRow items={OUTCOMES} tone="ink" className="mt-6" />
              </PipelinePanel>
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta
        title="Des rendez-vous qualifiés, payés au rendez-vous"
        intro={
          <span className="block font-mono text-[0.85rem] tracking-normal md:text-[0.9rem]">
            Ciblage ICP · Qualification BANT · Sync CRM · Offre {VENTE_AU_RDV.name} :{" "}
            {VENTE_AU_RDV.line}
          </span>
        }
        primary={{ label: "Démarrer ma prise de RDV", href: "/contact" }}
        slotLabel="Prise de RDV"
        slotMeta="sans engagement"
      />
    </div>
  );
}
