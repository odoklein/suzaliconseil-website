"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import {
  COMMERCIAL_CASES,
  TECH_CASES,
  COUTURE_CASES,
} from "../../lib/case-studies";
import MagneticButton from "../ui/MagneticButton";
import { PageHero, ClosingCta, SectionHead, Reveal } from "../kit";

const EXPERTISES = [
  { label: "Commercial + digital", href: "#missions" },
  { label: "Performance commerciale", href: "#commercial" },
  { label: "Produits digitaux", href: "#digital" },
];

/* Tone helpers: every case can sit on paper or on ink. */
const TONES = {
  paper: {
    title: "text-[#0D332B]",
    body: "text-[#4E605B]",
    meta: "text-[#4E605B]/90",
    hair: "border-[#0D332B]/14",
    strong: "text-[#0D332B]",
    check: "text-[#0D332B]",
    toggle:
      "border-[#0D332B]/18 group-open:border-[#B0FF5B] group-open:bg-[#B0FF5B] text-[#0D332B]",
    ring: "focus-visible:ring-[#0D332B]",
  },
  ink: {
    title: "text-[#F7FAF8]",
    body: "text-[#B9CBC4]",
    meta: "text-[#B9CBC4]/80",
    hair: "border-white/12",
    strong: "text-[#F7FAF8]",
    check: "text-[#B0FF5B]",
    toggle:
      "border-white/20 text-[#F7FAF8] group-open:border-[#B0FF5B] group-open:bg-[#B0FF5B] group-open:text-[#0D332B]",
    ring: "focus-visible:ring-[#B0FF5B]",
  },
};

const INLINE_LINK =
  "font-semibold underline decoration-[#B0FF5B] decoration-[3px] underline-offset-[5px] transition-colors";

/* The accordion: context, approach and deliverables, opened on demand. */
function StudyDetails({ study, compact = false, tone = "paper" }) {
  const t = TONES[tone];

  return (
    <details className={`faq-item group mt-8 border-t ${t.hair}`}>
      <summary
        className={`flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 py-4 text-[15px] font-semibold tracking-[-0.01em] outline-none focus-visible:ring-2 ${t.ring} ${t.strong} [&::-webkit-details-marker]:hidden`}
      >
        Voir le contexte et les livrables
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45 ${t.toggle}`}
        >
          <Plus size={16} strokeWidth={2.5} aria-hidden="true" />
        </span>
      </summary>

      <div className="pb-2 pt-3">
        <h4 className={`text-sm font-semibold ${t.strong}`}>Point de départ</h4>
        <p className={`mt-3 max-w-[65ch] leading-relaxed ${t.body}`}>
          {study.contexte}
        </p>

        <div className={`mt-8 grid gap-8 ${compact ? "" : "md:grid-cols-2"}`}>
          <div>
            <h4 className={`text-sm font-semibold ${t.strong}`}>Démarche menée</h4>
            <ul className={`mt-4 border-t ${t.hair}`}>
              {study.demarche.map((step) => (
                <li
                  key={step}
                  className={`flex items-start gap-3 border-b ${t.hair} py-3 text-[15px] leading-relaxed ${t.body}`}
                >
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                    className={`mt-1 shrink-0 ${t.strong}`}
                  />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`text-sm font-semibold ${t.strong}`}>Livrables remis</h4>
            <ul className={`mt-4 border-t ${t.hair}`}>
              {study.livrables.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 border-b ${t.hair} py-3 text-[15px] leading-relaxed ${t.body}`}
                >
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    aria-hidden="true"
                    className={`mt-1 shrink-0 ${t.check}`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={`mt-7 font-mono text-[0.78rem] tracking-normal ${t.meta}`}>
          <span className={`font-sans text-sm font-semibold ${t.strong}`}>Canaux :</span>{" "}
          {study.canaux.join(" · ")}
        </p>
      </div>
    </details>
  );
}

function StudyHeading({ study, tone = "paper", large = false }) {
  const t = TONES[tone];

  return (
    <>
      <p className={`font-mono text-xs tracking-normal ${t.meta}`}>{study.sector}</p>
      <h3
        className={`mt-3 font-heading font-semibold leading-[1.02] tracking-[-0.035em] ${t.title} ${
          large ? "text-[clamp(1.9rem,3.2vw,2.75rem)]" : "text-[1.6rem] md:text-[1.9rem]"
        }`}
      >
        {study.clientLabel}
      </h3>
      <p className={`mt-4 max-w-[58ch] text-lg leading-relaxed ${t.body}`}>
        {study.summary}
      </p>
      {study.metiers && (
        <p
          className={`mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold ${t.strong}`}
        >
          {study.metiers.map((metier, index) => (
            <span key={metier} className="inline-flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden="true" className={t.meta}>
                  +
                </span>
              )}
              {metier}
            </span>
          ))}
        </p>
      )}
    </>
  );
}

function StudyImage({ study, sizes, eager = false, className = "aspect-[16/10]" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[18px] bg-[#1A4D43] shadow-[0_50px_90px_-40px_rgba(13,51,43,0.35)] ${className}`}
    >
      <Image
        src={study.image}
        alt={`Projet réalisé pour ${study.clientLabel}`}
        fill
        priority={eager}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

/* Missions that joined both trades: an editorial spread, image and story. */
function HybridStudy({ study, reverse = false, eager = false }) {
  return (
    <Reveal
      as="article"
      id={study.id}
      className="scroll-mt-28 grid items-start gap-8 lg:grid-cols-2 lg:gap-16"
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <StudyImage
          study={study}
          eager={eager}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className={`min-w-0 lg:pt-2 ${reverse ? "lg:order-1" : ""}`}>
        <StudyHeading study={study} large />
        <StudyDetails study={study} />
      </div>
    </Reveal>
  );
}

/* Commercial missions read as rows drawn on the ink chapter. */
function CommercialStudy({ study, index }) {
  return (
    <Reveal
      as="article"
      id={study.id}
      delay={index * 90}
      className="scroll-mt-28 border-b border-white/12 py-10 md:py-12"
    >
      <StudyHeading study={study} tone="ink" />
      <StudyDetails study={study} tone="ink" />
    </Reveal>
  );
}

/* Digital products: project imagery over its story, as on the homepage. */
function DigitalStudy({ study, index }) {
  const wide = index === TECH_CASES.length - 1;

  return (
    <Reveal
      as="article"
      id={study.id}
      delay={wide ? 0 : index * 80}
      className={`scroll-mt-28 min-w-0 ${
        wide
          ? "lg:col-span-12 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-16 lg:border-t lg:border-[#0D332B]/14 lg:pt-16"
          : index === 0
            ? "lg:col-span-7"
            : "lg:col-span-5"
      }`}
    >
      <StudyImage
        study={study}
        className={wide ? "aspect-[16/10] lg:aspect-[4/3]" : "aspect-[16/10]"}
        sizes={
          wide
            ? "(max-width: 1024px) 100vw, 54vw"
            : index === 0
              ? "(max-width: 1024px) 100vw, 58vw"
              : "(max-width: 1024px) 100vw, 42vw"
        }
      />
      <div className={wide ? "mt-7 min-w-0 lg:mt-0 lg:pt-2" : "mt-7 min-w-0"}>
        <StudyHeading study={study} large={wide} />
        <StudyDetails study={study} compact={!wide} />
      </div>
    </Reveal>
  );
}

export default function EtudesDeCasClient() {
  return (
    <div className="w-full bg-[#F6F7F4] text-[#0D332B]">
      <PageHero
        title="Études de cas : nos missions B2B, du défi au livrable"
        intro="Découvrez le contexte, les décisions et les livrables de missions qui relient acquisition, vente et outils."
        breadcrumbs={[{ label: "Études de cas", href: "/etudes-de-cas" }]}
        actions={
          <>
            <MagneticButton href="#missions" variant="primary" className="w-full whitespace-nowrap sm:w-auto">
              Explorer les missions
            </MagneticButton>
            <MagneticButton href="/services" variant="outline-light" className="w-full whitespace-nowrap sm:w-auto">
              Voir nos services
            </MagneticButton>
          </>
        }
        image="/projects/investissementLocatif.png"
        imageAlt="Aperçu du projet Investissement Locatif mené par Suzali Conseil"
        imagePosition="top"
        imageCaption="Une campagne et son parcours digital conçus comme un seul système."
        align="start"
      />

      {/* Expertise index: a hairline strip of anchors. */}
      <nav
        aria-label="Catégories des études de cas"
        className="border-y border-[#0D332B]/10 bg-[#FCFDFC]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 sm:px-6 md:flex-row md:items-center md:gap-10 lg:px-8">
          <p className="text-sm font-semibold text-[#0D332B]">Explorer par expertise</p>
          <ul className="flex flex-wrap gap-x-7 gap-y-1">
            {EXPERTISES.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#4E605B] underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors hover:text-[#0D332B] hover:decoration-[#B0FF5B]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Both trades in one mission. */}
      <section id="missions" className="scroll-mt-24 bg-[#F6F7F4] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            className="max-w-4xl"
            title="Quand les deux expertises se répondent"
            intro={
              <>
                Ces missions relient le travail commercial à l&apos;outil, au
                parcours ou à l&apos;automatisation qui permet de le faire durer.
                Une logique au cœur de notre approche{" "}
                <Link href="/services" className={`${INLINE_LINK} text-[#0D332B] hover:decoration-[#0D332B]`}>
                  commerciale et digitale
                </Link>
                .
              </>
            }
          />

          <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
            {COUTURE_CASES.map((study, index) => (
              <HybridStudy
                key={study.id}
                study={study}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial performance: the one ink chapter mid-page. */}
      <section id="commercial" className="scroll-mt-24 bg-[#0D332B] py-24 text-[#F7FAF8] md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal variant="focus">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#1A4D43] shadow-[0_50px_90px_-40px_rgba(0,0,0,0.6)] lg:aspect-[4/5]">
                  <Image
                    src="/images/equipeprospection.png"
                    alt="Équipe de prospection Suzali Conseil"
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <div className="min-w-0">
              <SectionHead
                tone="ink"
                size="md"
                title="Ouvrir les bonnes conversations"
                intro={
                  <>
                    Deux missions où la qualité du ciblage, de la qualification
                    et de la transmission comptait plus que le volume brut.
                    Découvrez aussi notre{" "}
                    <Link
                      href="/services/commercial"
                      className={`${INLINE_LINK} text-[#F7FAF8] hover:decoration-[#F7FAF8]`}
                    >
                      accompagnement commercial
                    </Link>
                    .
                  </>
                }
              />

              <div className="mt-12 border-t border-white/12 md:mt-14">
                {COMMERCIAL_CASES.map((study, index) => (
                  <CommercialStudy key={study.id} study={study} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital products. */}
      <section id="digital" className="scroll-mt-24 bg-[#FCFDFC] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            className="max-w-4xl"
            title="Des outils qui tiennent l'activité"
            intro={
              <>
                Portails, plateformes et tableaux de bord conçus autour du
                travail réel des équipes et de leurs utilisateurs. Retrouvez les
                expertises de notre{" "}
                <Link href="/services/digital" className={`${INLINE_LINK} text-[#0D332B] hover:decoration-[#0D332B]`}>
                  pôle digital
                </Link>
                .
              </>
            }
          />

          <div className="mt-16 grid gap-x-10 gap-y-16 md:mt-20 lg:grid-cols-12 lg:gap-y-20">
            {TECH_CASES.map((study, index) => (
              <DigitalStudy key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        title="Votre projet ressemble‑t‑il à l'un de ces parcours ?"
        intro="Nous pouvons cadrer le prochain mouvement, qu'il soit commercial, digital ou construit à la jonction des deux."
        secondary={{ label: "Voir les offres", href: "/offres" }}
      />
    </div>
  );
}
