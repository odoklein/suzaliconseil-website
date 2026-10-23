"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { useBooking } from "../../context/BookingContext";
import MagneticButton from "../ui/MagneticButton";
import {
  ClosingCta,
  FaqList,
  LedgerList,
  Marker,
  PageHero,
  Reveal,
  SectionHead,
  MethodRail,
} from "../kit";

const GOALS = [
  {
    title: "Générer des opportunités",
    description: "Ciblage, données et campagnes multicanales.",
    href: "/services/generation-leads-b2b",
  },
  {
    title: "Obtenir des rendez-vous",
    description: "Prospection, qualification et prise d'agenda.",
    href: "/services/prise-rendez-vous-b2b",
  },
  {
    title: "Renforcer votre présence digitale",
    description: "Stratégie, marque, acquisition et expérience.",
    href: "/services/digital/strategie-digitale",
  },
  {
    title: "Automatiser vos opérations",
    description: "Outils, CRM et workflows adaptés à vos équipes.",
    href: "/services/digital/developpement-automatisation",
  },
];

const COMMERCIAL_GROUPS = [
  {
    title: "Construire le pipeline",
    description:
      "Nous définissons les bons comptes, les bons interlocuteurs et les séquences capables d'ouvrir la conversation.",
    links: [
      [
        "Prospection commerciale externalisée",
        "/services/prospection-commerciale-externalisee",
      ],
      ["Génération de leads B2B", "/services/generation-leads-b2b"],
      ["Agence de génération de leads à Paris", "/services/agence-generation-de-leads-paris"],
      ["Fichier de prospection B2B", "/services/fichier-prospection-b2b"],
    ],
  },
  {
    title: "Transformer l'intérêt en rendez-vous",
    description:
      "Nos équipes contactent, qualifient et préparent chaque échange pour que vos commerciaux se concentrent sur la vente.",
    links: [
      ["Téléprospection B2B", "/services/teleprospection-b2b"],
      ["Prise de rendez-vous B2B", "/services/prise-rendez-vous-b2b"],
      ["Qualification de leads B2B", "/services/qualification-leads-b2b"],
    ],
  },
  {
    title: "Déployer à plus grande échelle",
    description:
      "Nous combinons canaux, outils et ressources commerciales pour accélérer sans alourdir votre structure interne.",
    links: [
      ["Outbound marketing B2B", "/services/outbound-marketing-b2b"],
      ["Marketing B2B externalisé", "/services/marketing-b2b-externalise"],
      ["Campagnes email et SMS B2B", "/services/campagnes-email-sms-b2b"],
      ["Force de vente en marque blanche", "/services/vente-marque-blanche"],
    ],
  },
];

const DIGITAL_SERVICES = [
  {
    title: "Stratégie digitale",
    description:
      "Prioriser les canaux, les messages et les investissements autour d'objectifs business clairs.",
    href: "/services/digital/strategie-digitale",
  },
  {
    title: "Sites web et e-commerce",
    description:
      "Concevoir des expériences rapides, accessibles et pensées pour guider chaque visiteur vers l'action.",
    href: "/services/digital/sites-web-ecommerce",
  },
  {
    title: "SEO et acquisition",
    description:
      "Créer une acquisition durable avec le référencement naturel, le contenu et les campagnes payantes.",
    href: "/services/digital/seo-acquisition",
  },
  {
    title: "Branding et identité",
    description:
      "Clarifier votre positionnement et bâtir une identité cohérente sur tous les points de contact.",
    href: "/services/digital/branding-identite",
  },
  {
    title: "Développement et automatisation",
    description:
      "Connecter vos outils, automatiser les tâches répétitives et créer les applications qui manquent à vos opérations.",
    href: "/services/digital/developpement-automatisation",
  },
];

const METHOD = [
  {
    title: "Cadrer le besoin",
    description:
      "Nous partons de votre objectif, de vos contraintes et de ce qui existe déjà avant de proposer une solution.",
  },
  {
    title: "Composer la bonne équipe",
    description:
      "Stratégie, prospection, design ou développement : les expertises sont réunies selon la mission, pas selon un catalogue figé.",
  },
  {
    title: "Déployer rapidement",
    description:
      "Un premier périmètre concret permet de tester les messages, les canaux ou le produit sans immobiliser votre organisation.",
  },
  {
    title: "Piloter et améliorer",
    description:
      "Vous gardez une vue claire sur les actions, les retours terrain et les prochaines décisions à prendre.",
  },
];

const VALUE_POINTS = [
  "Un interlocuteur qui comprend l'ensemble du parcours",
  "Des spécialistes mobilisés selon le besoin réel",
  "Des livrables et un pilotage partagés avec vos équipes",
];

/* Inline links on paper: ink text, lime underline (actionable), ink on hover. */
const INLINE_LINK =
  "font-semibold text-[#0D332B] underline decoration-[#B0FF5B] decoration-[3px] underline-offset-4 transition-colors hover:decoration-[#0D332B]";

// answerText : la réponse en texte brut pour le JSON-LD FAQPage, identique à
// la réponse affichée (liens mis à part).
const FAQ = [
  {
    question: "Par quel service commencer si le besoin touche plusieurs sujets ?",
    answerText:
      "Commencez par un échange de cadrage. Nous pouvons ensuite associer le pôle commercial et le conseil en stratégie digitale autour d'un même plan d'action.",
    answer: (
      <p>
        Commencez par un échange de cadrage. Nous pouvons ensuite associer le{" "}
        <Link href="/services/commercial" className={INLINE_LINK}>
          pôle commercial
        </Link>{" "}
        et le{" "}
        <Link href="/services/digital/strategie-digitale" className={INLINE_LINK}>
          conseil en stratégie digitale
        </Link>{" "}
        autour d&apos;un même plan d&apos;action.
      </p>
    ),
  },
  {
    question: "Pouvez-vous prendre en charge l'exécution ?",
    answerText:
      "Oui. Nous pouvons opérer votre prospection externalisée, renforcer votre force de vente ou livrer un dispositif digital complet.",
    answer: (
      <p>
        Oui. Nous pouvons opérer votre{" "}
        <Link href="/services/prospection-commerciale-externalisee" className={INLINE_LINK}>
          prospection externalisée
        </Link>
        , renforcer votre force de vente ou livrer un dispositif digital complet.
      </p>
    ),
  },
  {
    question: "Comment suivons-nous l'avancement ?",
    answerText:
      "Le rythme, les livrables et les indicateurs sont définis au démarrage. Vous disposez ensuite de points réguliers et d'une vue partagée sur les actions en cours.",
    answer: (
      <p>
        Le rythme, les livrables et les indicateurs sont définis au démarrage. Vous
        disposez ensuite de points réguliers et d&apos;une vue partagée sur les
        actions en cours.
      </p>
    ),
  },
  {
    question: "Intervenez-vous aussi sur une mission ponctuelle ?",
    answerText:
      "Oui. Audit, landing page, fichier qualifié, campagne ou automatisation peuvent être engagés séparément. La page Offres et tarifs présente les principaux formats.",
    answer: (
      <p>
        Oui. Audit, landing page, fichier qualifié, campagne ou automatisation
        peuvent être engagés séparément. La page{" "}
        <Link href="/offres" className={INLINE_LINK}>
          Offres et tarifs
        </Link>{" "}
        présente les principaux formats.
      </p>
    ),
  },
  {
    question: "Où voir des missions déjà réalisées ?",
    answerText:
      "Nos études de cas détaillent le contexte, la démarche et les livrables de missions commerciales, digitales et mixtes.",
    answer: (
      <p>
        Nos{" "}
        <Link href="/etudes-de-cas" className={INLINE_LINK}>
          études de cas
        </Link>{" "}
        détaillent le contexte, la démarche et les livrables de missions
        commerciales, digitales et mixtes.
      </p>
    ),
  },
];

export function ServicesHub() {
  const { openBooking } = useBooking();

  return (
    <div className="w-full overflow-x-clip bg-[#F6F7F4] text-[#0D332B]">
      <PageHero
        title="Services B2B : prospection commerciale et digital"
        intro="Nous alignons acquisition, vente, expérience et outils pour transformer vos objectifs B2B en actions pilotables."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
        actions={
          <>
            <MagneticButton onClick={openBooking} variant="primary" className="w-full whitespace-nowrap sm:w-auto">
              Planifier un appel
            </MagneticButton>
            <MagneticButton href="/offres" variant="outline-light" className="w-full whitespace-nowrap sm:w-auto">
              Voir les offres
            </MagneticButton>
          </>
        }
        image="/images/services-growth-system.webp"
        imageAlt="Composition architecturale représentant deux expertises qui convergent vers une trajectoire commune"
        imageCaption="Deux expertises coordonnées autour d'un même objectif."
      />

      {/* Goals: the four ways in, as ledger rows. */}
      <section aria-labelledby="goal-heading" className="bg-[#F6F7F4] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            size="md"
            className="max-w-4xl"
            title={<span id="goal-heading">Quel résultat cherchez-vous en priorité ?</span>}
          />
          <LedgerList items={GOALS} className="mt-12 md:mt-16" />
        </div>
      </section>

      {/* The commercial pole: the page's one ink chapter, as on the homepage. */}
      <section id="commercial" className="scroll-mt-24 bg-[#0D332B] py-24 text-[#F7FAF8] md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="h-fit lg:sticky lg:top-32 lg:col-span-5">
            <SectionHead
              tone="ink"
              size="md"
              title="Faire avancer votre pipeline"
              intro="Du ciblage au rendez-vous qualifié, notre pôle commercial prend en charge tout ou partie de votre prospection B2B."
            />
            <Reveal delay={220} className="mt-10">
              <MagneticButton href="/services/commercial" variant="primary" className="w-full whitespace-nowrap sm:w-auto">
                Explorer le pôle commercial
              </MagneticButton>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {COMMERCIAL_GROUPS.map((group, index) => (
              <Reveal
                key={group.title}
                delay={index * 90}
                className="border-t border-white/12 pb-12 pt-8 last:pb-0 md:pt-10"
              >
                <h3 className="font-heading text-[1.45rem] font-semibold leading-tight tracking-[-0.03em] text-[#F7FAF8] md:text-[1.75rem]">
                  {group.title}
                </h3>
                <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-[#B9CBC4] md:text-[17px]">
                  {group.description}
                </p>
                <ul className="mt-7">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="ledger-row on-ink group flex min-h-12 items-center justify-between gap-4 border-t border-white/12 px-1 py-3.5 text-base font-semibold tracking-[-0.015em] text-[#F7FAF8] outline-none focus-visible:ring-2 focus-visible:ring-[#B0FF5B] md:text-[17px]"
                      >
                        {label}
                        <ArrowUpRight
                          size={18}
                          aria-hidden="true"
                          className="shrink-0 text-[#B0FF5B] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* One mission across both poles. */}
      <section id="cas-concret" className="scroll-mt-24 bg-[#FCFDFC] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal variant="focus" className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#1A4D43] shadow-[0_50px_90px_-40px_rgba(13,51,43,0.35)]">
              <Image
                src="/projects/investissementLocatif.png"
                alt="Interface du parcours de réservation réalisé pour Investissement Locatif"
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <SectionHead
              size="md"
              title="Une mission, plusieurs expertises"
              intro="Pour Investissement Locatif, nous avons relié la téléprospection à un parcours de réservation en ligne. Le discours commercial et l'expérience digitale ont été conçus comme un seul parcours."
              introClassName="md:text-lg"
            />
            <Reveal as="ul" delay={200} className="mt-8 border-t border-[#0D332B]/14">
              {VALUE_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 border-b border-[#0D332B]/14 py-4 text-base leading-relaxed text-[#0D332B]"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B0FF5B]">
                    <Check size={14} strokeWidth={2.5} aria-hidden="true" className="text-[#0D332B]" />
                  </span>
                  {point}
                </li>
              ))}
            </Reveal>
            <Reveal delay={260} className="mt-10">
              <MagneticButton href="/etudes-de-cas" variant="ink" className="w-full whitespace-nowrap sm:w-auto">
                Voir les études de cas
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The digital pole, as ledger rows. */}
      <section
        id="digital"
        className="scroll-mt-24 border-t border-[#0D332B]/10 bg-[#F6F7F4] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHead
              className="lg:col-span-8"
              title={
                <>
                  Construire un digital <Marker>utile</Marker>
                </>
              }
              intro="Nous concevons les stratégies, identités, contenus et outils qui rendent votre acquisition plus lisible et vos opérations plus fluides."
            />
            <Reveal delay={200} className="lg:col-span-4 lg:justify-self-end lg:pb-2">
              <MagneticButton href="/services/digital" variant="ink" className="w-full whitespace-nowrap sm:w-auto">
                Explorer le pôle digital
              </MagneticButton>
            </Reveal>
          </div>
          <LedgerList items={DIGITAL_SERVICES} className="mt-14 md:mt-20" />
        </div>
      </section>

      {/* Method: the homepage rail. */}
      <section
        id="methode"
        className="scroll-mt-24 border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="h-fit lg:sticky lg:top-32 lg:col-span-5">
              <SectionHead
                size="md"
                title="De la première question au déploiement"
                intro={
                  <>
                    Notre méthode reste simple : comprendre, réunir les bonnes
                    compétences, agir puis apprendre du terrain. Vous pouvez aussi
                    consulter nos{" "}
                    <Link href="/offres" className={INLINE_LINK}>
                      offres
                    </Link>{" "}
                    ou rencontrer{" "}
                    <Link href="/equipe" className={INLINE_LINK}>
                      l&apos;équipe Suzali
                    </Link>
                    .
                  </>
                }
              />
            </div>
            <div className="lg:col-span-7">
              <MethodRail steps={METHOD} ground="bg-[#FCFDFC]" />
            </div>
          </div>
        </div>
      </section>

      {/* FaqList émet le FAQPage à partir des questions affichées (answerText). */}
      <div id="faq" className="scroll-mt-24">
        <FaqList
          intro="Vous hésitez entre plusieurs accompagnements ? Ces réponses vous aideront à choisir un premier point d'entrée."
          items={FAQ}
        />
      </div>

      <ClosingCta
        id="prochaine-etape"
        title="Quel levier faut-il activer en premier ?"
        intro="En 30 minutes, nous clarifions le besoin, les priorités et le format d'accompagnement le plus pertinent."
        secondary={{ label: "Voir les offres", href: "/offres" }}
      />
    </div>
  );
}
