"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Compass,
  Globe2,
  Handshake,
  Layers3,
  Monitor,
  PenTool,
  PhoneCall,
  Rocket,
  Search,
  Send,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { useBooking } from "../../context/BookingContext";
import AnimatedSection from "../ui/AnimatedSection";
import Breadcrumbs from "../ui/Breadcrumbs";

const GOALS = [
  {
    title: "Générer des opportunités",
    description: "Ciblage, données et campagnes multicanales.",
    href: "/services/generation-leads-b2b",
    icon: Target,
  },
  {
    title: "Obtenir des rendez-vous",
    description: "Prospection, qualification et prise d'agenda.",
    href: "/services/prise-rendez-vous-b2b",
    icon: PhoneCall,
  },
  {
    title: "Renforcer votre présence digitale",
    description: "Stratégie, marque, acquisition et expérience.",
    href: "/services/digital/strategie-digitale",
    icon: Globe2,
  },
  {
    title: "Automatiser vos opérations",
    description: "Outils, CRM et workflows adaptés à vos équipes.",
    href: "/services/digital/developpement-automatisation",
    icon: Workflow,
  },
];

const COMMERCIAL_GROUPS = [
  {
    title: "Construire le pipeline",
    description:
      "Nous définissons les bons comptes, les bons interlocuteurs et les séquences capables d'ouvrir la conversation.",
    icon: Target,
    links: [
      [
        "Prospection commerciale externalisée",
        "/services/prospection-commerciale-externalisee",
      ],
      ["Génération de leads B2B", "/services/generation-leads-b2b"],
      ["Fichier de prospection B2B", "/services/fichier-prospection-b2b"],
    ],
  },
  {
    title: "Transformer l'intérêt en rendez-vous",
    description:
      "Nos équipes contactent, qualifient et préparent chaque échange pour que vos commerciaux se concentrent sur la vente.",
    icon: PhoneCall,
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
    icon: Send,
    links: [
      ["Outbound marketing B2B", "/services/outbound-marketing-b2b"],
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
    icon: Compass,
  },
  {
    title: "Sites web et e-commerce",
    description:
      "Concevoir des expériences rapides, accessibles et pensées pour guider chaque visiteur vers l'action.",
    href: "/services/digital/sites-web-ecommerce",
    icon: Code2,
  },
  {
    title: "SEO et acquisition",
    description:
      "Créer une acquisition durable avec le référencement naturel, le contenu et les campagnes payantes.",
    href: "/services/digital/seo-acquisition",
    icon: Search,
  },
  {
    title: "Branding et identité",
    description:
      "Clarifier votre positionnement et bâtir une identité cohérente sur tous les points de contact.",
    href: "/services/digital/branding-identite",
    icon: PenTool,
  },
  {
    title: "Développement et automatisation",
    description:
      "Connecter vos outils, automatiser les tâches répétitives et créer les applications qui manquent à vos opérations.",
    href: "/services/digital/developpement-automatisation",
    icon: Workflow,
  },
];

const METHOD = [
  {
    title: "Cadrer le besoin",
    description:
      "Nous partons de votre objectif, de vos contraintes et de ce qui existe déjà avant de proposer une solution.",
    icon: Compass,
  },
  {
    title: "Composer la bonne équipe",
    description:
      "Stratégie, prospection, design ou développement : les expertises sont réunies selon la mission, pas selon un catalogue figé.",
    icon: Users,
  },
  {
    title: "Déployer rapidement",
    description:
      "Un premier périmètre concret permet de tester les messages, les canaux ou le produit sans immobiliser votre organisation.",
    icon: Rocket,
  },
  {
    title: "Piloter et améliorer",
    description:
      "Vous gardez une vue claire sur les actions, les retours terrain et les prochaines décisions à prendre.",
    icon: BarChart3,
  },
];

const VALUE_POINTS = [
  "Un interlocuteur qui comprend l'ensemble du parcours",
  "Des spécialistes mobilisés selon le besoin réel",
  "Des livrables et un pilotage partagés avec vos équipes",
];

export function ServicesHub() {
  const { openBooking } = useBooking();

  return (
    <div className="min-h-[100dvh] overflow-hidden bg-[#F6F7F4] text-[#0D332B]">
      <section className="pt-24 pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <div className="hero-rise" style={{ "--rise-delay": "0ms" }}>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#1A4D43] sm:text-sm">
                Performance commerciale + stratégie digitale
              </p>
              <h1 className="max-w-[720px] text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[#0D332B] sm:text-5xl lg:text-[3.35rem] xl:text-[3.8rem]">
                Commercial et digital. Une croissance{" "}
                <span className="underline decoration-[#B0FF5B] decoration-[0.16em] underline-offset-[0.08em]">
                  mieux alignée.
                </span>
              </h1>
              <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[#40524E]">
                Nous alignons acquisition, vente, expérience et outils pour
                transformer vos objectifs B2B en actions pilotables.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={openBooking}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#0D332B] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_-16px_rgba(13,51,43,0.72)] transition-[background-color,transform,box-shadow] duration-300 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:bg-[#1A4D43] hover:shadow-[0_16px_34px_-16px_rgba(13,51,43,0.78)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
                >
                  Planifier un appel
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
                <Link
                  href="/offres"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#0D332B]/20 bg-white/60 px-6 py-3 text-sm font-bold text-[#0D332B] transition-[background-color,border-color,transform] duration-300 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:border-[#0D332B]/40 hover:bg-white active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
                >
                  Voir les offres
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>

            <figure
              className="hero-rise lg:pl-3"
              style={{ "--rise-delay": "120ms" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#E5E9E7] shadow-[0_30px_70px_-38px_rgba(13,51,43,0.5)]">
                <Image
                  src="/images/services-growth-system.webp"
                  alt="Composition architecturale représentant deux expertises qui convergent vers une trajectoire commune"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-[#5F6F6B]">
                Deux expertises coordonnées autour d&apos;un même objectif.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="goal-heading"
        className="border-y border-[#0D332B]/10 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 id="goal-heading" className="text-xl font-bold tracking-tight">
            Quel résultat cherchez-vous en priorité ?
          </h2>
          <div className="mt-6 grid gap-px overflow-hidden rounded-[24px] bg-[#0D332B]/10 sm:grid-cols-2 lg:grid-cols-4">
            {GOALS.map((goal) => (
              <Link
                key={goal.href}
                href={goal.href}
                className="group flex min-h-40 flex-col bg-[#F6F7F4] p-5 transition-colors duration-300 hover:bg-[#ECF3EF] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0D332B]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#E3FFC4] text-[#0D332B] transition-transform duration-300 group-hover:-translate-y-0.5">
                  <goal.icon
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-8 flex items-start justify-between gap-4 font-bold leading-snug">
                  {goal.title}
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
                <span className="mt-2 text-sm leading-relaxed text-[#5F6F6B]">
                  {goal.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="commercial"
        className="scroll-mt-24 bg-[#EAF2EE] py-20 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
          <AnimatedSection className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#0D332B] text-[#B0FF5B]">
              <Handshake size={25} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <h2 className="mt-7 max-w-[10ch] text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Faire avancer votre pipeline
            </h2>
            <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-[#40524E] md:text-lg">
              Du ciblage au rendez-vous qualifié, notre pôle commercial prend
              en charge tout ou partie de votre prospection B2B.
            </p>
            <Link
              href="/services/commercial"
              className="group mt-7 inline-flex items-center gap-2 font-bold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4 transition-colors hover:text-[#1A4D43] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
            >
              Explorer le pôle commercial
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </AnimatedSection>

          <div>
            {COMMERCIAL_GROUPS.map((group, index) => (
              <AnimatedSection
                key={group.title}
                delay={index * 90}
                className="grid gap-5 border-t border-[#0D332B]/16 py-8 first:pt-0 first:border-t-0 md:grid-cols-[auto_1fr] md:gap-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-[#0D332B] shadow-[0_10px_24px_-18px_rgba(13,51,43,0.65)]">
                  <group.icon
                    size={21}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.025em]">
                    {group.title}
                  </h3>
                  <p className="mt-3 max-w-[62ch] leading-relaxed text-[#52635F]">
                    {group.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.links.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#0D332B]/14 bg-white/65 px-4 py-2 text-sm font-semibold text-[#173D35] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#0D332B]/32 hover:bg-white active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D332B]"
                      >
                        {label}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="cas-concret" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:px-8">
          <AnimatedSection>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-[#DDE5E1]">
              <Image
                src="/projects/investissementLocatif.png"
                alt="Interface du parcours de réservation réalisé pour Investissement Locatif"
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] hover:scale-[1.02]"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#E3FFC4] text-[#0D332B]">
              <Layers3 size={24} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Une mission, plusieurs expertises
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#52635F]">
              Pour Investissement Locatif, nous avons relié la
              téléprospection à un parcours de réservation en ligne. Le discours
              commercial et l&apos;expérience digitale ont été conçus comme un seul
              parcours.
            </p>
            <div className="mt-7 space-y-3">
              {VALUE_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#3F7D33]"
                  />
                  <span className="leading-relaxed text-[#314640]">{point}</span>
                </div>
              ))}
            </div>
            <Link
              href="/etudes-de-cas"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D332B] px-5 py-3 text-sm font-bold text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#1A4D43] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
            >
              Voir les études de cas
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section
        id="digital"
        className="scroll-mt-24 bg-[#EEF1EF] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#E3FFC4] text-[#0D332B] shadow-[0_10px_24px_-18px_rgba(13,51,43,0.65)]">
              <Monitor size={25} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <h2 className="mt-7 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Construire un digital utile
            </h2>
            <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-[#52635F]">
              Nous concevons les stratégies, identités, contenus et outils qui
              rendent votre acquisition plus lisible et vos opérations plus
              fluides.
            </p>
            <Link
              href="/services/digital"
              className="group mt-7 inline-flex items-center gap-2 font-bold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4 transition-colors hover:text-[#1A4D43] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
            >
              Explorer le pôle digital
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </AnimatedSection>

          <div className="mt-12 border-t border-[#0D332B]/18">
            {DIGITAL_SERVICES.map((service, index) => (
              <AnimatedSection
                key={service.href}
                delay={index * 70}
                as={Link}
                href={service.href}
                className="group grid gap-4 border-b border-[#0D332B]/14 py-7 transition-[background-color,padding] duration-300 hover:bg-white/55 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0D332B] md:grid-cols-[64px_0.8fr_1.25fr_auto] md:items-center md:gap-6 md:px-4 md:hover:px-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#E3FFC4] text-[#0D332B] shadow-[0_10px_24px_-18px_rgba(13,51,43,0.65)]">
                  <service.icon
                    size={21}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold tracking-[-0.02em] md:text-2xl">
                  {service.title}
                </h3>
                <p className="max-w-[58ch] leading-relaxed text-[#52635F]">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold md:justify-self-end">
                  Découvrir
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="methode" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              De la première question au déploiement
            </h2>
            <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-[#52635F]">
              Notre méthode reste simple : comprendre, réunir les bonnes
              compétences, agir puis apprendre du terrain. Vous pouvez aussi
              consulter nos <Link href="/offres" className="font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4">offres</Link> ou rencontrer <Link href="/equipe" className="font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4">l&apos;équipe Suzali</Link>.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {METHOD.map((item, index) => (
              <AnimatedSection
                key={item.title}
                delay={index * 90}
                className="border-t border-[#0D332B]/20 pt-6 lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#E3FFC4] text-[#0D332B]">
                  <item.icon
                    size={20}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-8 text-xl font-bold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5F6F6B]">
                  {item.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-[#F6F7F4] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
          <AnimatedSection className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Questions fréquentes
            </h2>
            <p className="mt-5 max-w-[46ch] leading-relaxed text-[#52635F]">
              Vous hésitez entre plusieurs accompagnements ? Ces réponses vous
              aideront à choisir un premier point d&apos;entrée.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="border-t border-[#0D332B]/18">
              <details className="group border-b border-[#0D332B]/14 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold marker:content-none">
                  Par quel service commencer si le besoin touche plusieurs sujets ?
                  <span className="text-2xl font-medium transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-[66ch] pt-4 leading-relaxed text-[#52635F]">
                  Commencez par un échange de cadrage. Nous pouvons ensuite
                  associer le <Link href="/services/commercial" className="font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4">pôle commercial</Link> et le <Link href="/services/digital/strategie-digitale" className="font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4">conseil en stratégie digitale</Link> autour d&apos;un même plan d&apos;action.
                </p>
              </details>

              <details className="group border-b border-[#0D332B]/14 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold marker:content-none">
                  Pouvez-vous prendre en charge l&apos;exécution ?
                  <span className="text-2xl font-medium transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-[66ch] pt-4 leading-relaxed text-[#52635F]">
                  Oui. Nous pouvons opérer votre <Link href="/services/prospection-commerciale-externalisee" className="font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4">prospection externalisée</Link>, renforcer votre force de vente ou livrer un dispositif digital complet.
                </p>
              </details>

              <details className="group border-b border-[#0D332B]/14 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold marker:content-none">
                  Comment suivons-nous l&apos;avancement ?
                  <span className="text-2xl font-medium transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-[66ch] pt-4 leading-relaxed text-[#52635F]">
                  Le rythme, les livrables et les indicateurs sont définis au
                  démarrage. Vous disposez ensuite de points réguliers et d&apos;une
                  vue partagée sur les actions en cours.
                </p>
              </details>

              <details className="group border-b border-[#0D332B]/14 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold marker:content-none">
                  Intervenez-vous aussi sur une mission ponctuelle ?
                  <span className="text-2xl font-medium transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-[66ch] pt-4 leading-relaxed text-[#52635F]">
                  Oui. Audit, landing page, fichier qualifié, campagne ou
                  automatisation peuvent être engagés séparément. La page <Link href="/offres" className="font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4">Offres et tarifs</Link> présente les principaux formats.
                </p>
              </details>

              <details className="group border-b border-[#0D332B]/14 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold marker:content-none">
                  Où voir des missions déjà réalisées ?
                  <span className="text-2xl font-medium transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-[66ch] pt-4 leading-relaxed text-[#52635F]">
                  Nos <Link href="/etudes-de-cas" className="font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4">études de cas</Link> détaillent le contexte, la démarche et les livrables de missions commerciales, digitales et mixtes.
                </p>
              </details>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="prochaine-etape" className="scroll-mt-24 bg-[#F6F7F4] pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid items-center gap-8 rounded-[28px] bg-[#E6FFC8] p-7 shadow-[0_26px_70px_-48px_rgba(13,51,43,0.75)] sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
            <div>
              <h2 className="max-w-[19ch] text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                Quel levier faut-il activer en premier ?
              </h2>
              <p className="mt-4 max-w-[58ch] leading-relaxed text-[#40524E]">
                En 30 minutes, nous clarifions le besoin, les priorités et le
                format d&apos;accompagnement le plus pertinent.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <button
                type="button"
                onClick={openBooking}
                className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#0D332B] px-6 py-3 text-sm font-bold text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#1A4D43] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
              >
                Planifier un appel
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <Link
                href="/offres"
                className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border border-[#0D332B]/24 bg-white/55 px-6 py-3 text-sm font-bold text-[#0D332B] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#0D332B]/45 hover:bg-white active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
              >
                Voir les offres
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
