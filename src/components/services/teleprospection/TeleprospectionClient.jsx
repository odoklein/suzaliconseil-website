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
import { GROWTH_STANDARD } from "../../../lib/offer-terms";
import HeroNotes from "../commercial-shared/HeroNotes";

const BREADCRUMBS = [
  { label: "Services", href: "/services" },
  { label: "Prospection commerciale", href: "/services/commercial" },
  { label: "Téléprospection B2B", href: "/services/teleprospection-b2b" },
];

// What a client can check in the contract and the first weeks, shared with
// the other commercial pages (see the offers catalogue).
const FIGURES = [
  { value: "7 jours", label: "Pour lancer les appels après validation du ciblage" },
  {
    value: GROWTH_STANDARD.perRdv,
    label: `Par rendez-vous validé et honoré, en plus de ${GROWTH_STANDARD.monthly} par mois (offre ${GROWTH_STANDARD.name})`,
  },
  { value: "1 brief", label: "Écrit avant chaque rendez-vous posé" },
  { value: "Hebdo", label: "Reporting des appels, contacts et rendez-vous" },
];

const BENEFITS = [
  {
    title: "Gain de Temps Radical",
    description:
      "Vos closers ne perdent plus de temps à qualifier. Ils entrent en scène uniquement sur des prospects chauds avec un besoin identifié et un budget validé.",
    meta: "Prospects qualifiés avant transfert",
  },
  {
    title: "Expertise Passage de Barrage",
    description:
      "Nous maîtrisons l'art de contourner les filtres et secrétariats pour parler directement aux décideurs.",
    meta: "Accès direct aux décideurs",
  },
  {
    title: "Data Enrichment CRM",
    description:
      "Chaque appel enrichit votre CRM : noms, emails directs, projets en cours, technologies utilisées et organigramme décisionnel complet.",
    meta: "CRM enrichi à chaque appel",
  },
];

const STEPS = [
  {
    title: "Ciblage & Persona",
    description:
      "Identification fine de votre interlocuteur idéal : secteur d'activité, taille critique, tech-stack utilisé et signaux d'achat.",
  },
  {
    title: "Scripts Dynamiques",
    description:
      "Pas de lecture robotique. Un argumentaire fluide basé sur l'empathie, l'écoute active et la création de valeur immédiate.",
  },
  {
    title: "Qualification BANT Stricte",
    description:
      "Budget, Autorité, Besoin, Timeline. Un rendez-vous n'est fixé que si le prospect est mature et prêt à avancer.",
  },
  {
    title: "Briefing de Passation",
    description:
      "Vous recevez un résumé complet (contexte, besoins, objections levées) avant chaque rendez-vous fixé dans votre agenda.",
  },
];

const CAPABILITIES = [
  { title: "Agents Dédiés", text: "Formés à votre proposition de valeur unique" },
  { title: "Passage de Barrages", text: "Le bon interlocuteur, pas le standard" },
  { title: "Agenda Synchronisé", text: "Briefing transmis automatiquement via votre CRM" },
  { title: "Performance Tracking", text: "Dashboard temps réel : appels, contacts, RDV fixés" },
];

export default function TeleprospectionClient() {
  return (
    <div className="bg-[#F6F7F4] text-[#0D332B]">
      <PageHero
        title="Agence de téléprospection B2B en France"
        breadcrumbs={BREADCRUMBS}
        intro={
          <p>
            Transformez le téléphone en <strong>levier de croissance immédiat</strong>. Nos{" "}
            <strong>Business Developers experts</strong>{" "}
            gèrent le passage de barrage, la détection
            d&apos;opportunités et la <strong>qualification BANT</strong>{" "}
            pour remplir l&apos;agenda
            de vos commerciaux avec des rendez-vous ultra-qualifiés.
          </p>
        }
        actions={
          <>
            <MagneticButton href="/contact" variant="primary" className="w-full whitespace-nowrap sm:w-auto">
              Lancer ma campagne d&apos;appels
            </MagneticButton>
            <MagneticButton href="#methode" variant="outline-light" className="w-full whitespace-nowrap sm:w-auto">
              Découvrir notre méthode
            </MagneticButton>
          </>
        }
        image="/images/hero-office.webp"
        imageAlt="Open space lumineux avec postes de travail et vue sur la ville"
      >
        <HeroNotes
          items={["Conformité RGPD", "Démarrage sous 7 jours", "Sans engagement"]}
        />
      </PageHero>

      {/* Why: the three benefits as ledger rows, the figures kept modest below. */}
      <section className="bg-[#F6F7F4] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            className="max-w-4xl"
            title={
              <>
                L&apos;Art de la Prospection <Marker>Téléphonique</Marker> B2B
              </>
            }
            intro={
              <>
                Externaliser votre <strong className="font-semibold text-[#0D332B]">téléprospection</strong>{" "}
                n&apos;est pas seulement une question d&apos;appels, c&apos;est une question d&apos;
                <strong className="font-semibold text-[#0D332B]">image de marque</strong> et de{" "}
                <strong className="font-semibold text-[#0D332B]">détection fine des besoins</strong>.
              </>
            }
          />
          <LedgerList items={BENEFITS} className="mt-14 md:mt-20" />
          <FigureRow items={FIGURES} className="mt-16 md:mt-24" />
        </div>
      </section>

      {/* Method: the four steps on the rail, the pipeline they feed beside them. */}
      <section
        id="methode"
        className="scroll-mt-24 border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead className="max-w-4xl" title="Une Méthode Centrée sur la Qualité" />

          <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-12 lg:gap-16">
            <MethodRail steps={STEPS} ground="bg-[#FCFDFC]" className="lg:col-span-7 lg:pt-3" />

            <Reveal variant="focus" className="h-fit lg:sticky lg:top-32 lg:col-span-5">
              <PipelinePanel>
                <ul className="grid gap-x-6 sm:grid-cols-2">
                  {CAPABILITIES.map((item) => (
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
        </div>
      </section>

      <ClosingCta
        title="Prêt à remplir l'agenda de vos commerciaux ?"
        intro={
          <>
            Nos campagnes de <strong className="font-semibold text-[#F7FAF8]">téléprospection B2B</strong>{" "}
            démarrent sous 7 jours après validation du ciblage, dans le respect du RGPD.
            <span className="mt-5 block font-mono text-[0.8rem] tracking-normal text-[#B9CBC4]">
              Briefing avant chaque RDV · Reporting hebdomadaire · Sans engagement
            </span>
          </>
        }
        primary={{ label: "Demander mon audit gratuit", href: "/contact" }}
        slotLabel="Audit gratuit"
        slotMeta="sans engagement"
      />
    </div>
  );
}
