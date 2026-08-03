"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Layers3,
  PhoneCall,
  Route,
  Workflow,
} from "lucide-react";
import {
  COMMERCIAL_CASES,
  TECH_CASES,
  COUTURE_CASES,
} from "../../lib/case-studies";
import { useBooking } from "../../context/BookingContext";
import AnimatedSection from "../ui/AnimatedSection";
import Breadcrumbs from "../ui/Breadcrumbs";

function StudyDetails({ study, compact = false }) {
  return (
    <details className="group mt-7 border-t border-[#0D332B]/14 pt-5">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 font-bold text-[#0D332B] marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]">
        Voir le contexte et les livrables
        <ChevronDown
          size={19}
          strokeWidth={1.8}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-300 ease-[var(--ease-premium)] group-open:rotate-180"
        />
      </summary>

      <div className="pt-5">
        <h4 className="text-sm font-bold text-[#0D332B]">Point de départ</h4>
        <p className="mt-3 max-w-[68ch] leading-relaxed text-[#52635F]">
          {study.contexte}
        </p>

        <div className={`mt-7 grid gap-7 ${compact ? "" : "md:grid-cols-2"}`}>
          <div>
            <h4 className="text-sm font-bold text-[#0D332B]">
              Démarche menée
            </h4>
            <ul className="mt-4 space-y-3">
              {study.demarche.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#52635F]"
                >
                  <ArrowRight
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#4E8D38]"
                  />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#0D332B]">
              Livrables remis
            </h4>
            <ul className="mt-4 space-y-3">
              {study.livrables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#52635F]"
                >
                  <CheckCircle2
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#4E8D38]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-7 text-sm text-[#65746F]">
          <span className="font-bold text-[#0D332B]">Canaux :</span>{" "}
          {study.canaux.join(", ")}
        </p>
      </div>
    </details>
  );
}

function StudyHeading({ study, titleClassName = "" }) {
  return (
    <>
      <p className="text-sm font-semibold text-[#4E6A62]">{study.sector}</p>
      <h3
        className={`mt-3 text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-[#0D332B] ${titleClassName}`}
      >
        {study.clientLabel}
      </h3>
      <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-[#52635F]">
        {study.summary}
      </p>
      {study.metiers && (
        <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold text-[#3F7131]">
          {study.metiers.map((metier, index) => (
            <span key={metier} className="inline-flex items-center gap-3">
              {index > 0 && <span aria-hidden="true">+</span>}
              {metier}
            </span>
          ))}
        </p>
      )}
    </>
  );
}

function HybridStudy({ study, reverse = false, eager = false }) {
  return (
    <AnimatedSection
      as="article"
      id={study.id}
      className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-[#DDE5E1]">
          <Image
            src={study.image}
            alt={`Projet réalisé pour ${study.clientLabel}`}
            fill
            priority={eager}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] hover:scale-[1.02]"
          />
        </div>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <StudyHeading study={study} titleClassName="sm:text-4xl" />
        <StudyDetails study={study} />
      </div>
    </AnimatedSection>
  );
}

function CommercialStudy({ study, index }) {
  return (
    <AnimatedSection
      as="article"
      id={study.id}
      delay={index * 90}
      className={`scroll-mt-28 rounded-[28px] bg-[#FCFDFC] p-7 shadow-[0_24px_60px_-48px_rgba(13,51,43,0.7)] sm:p-9 ${
        index === 0 ? "lg:mr-12" : "lg:ml-12"
      }`}
    >
      <StudyHeading study={study} />
      <StudyDetails study={study} />
    </AnimatedSection>
  );
}

function DigitalStudy({ study, index }) {
  const wide = index === TECH_CASES.length - 1;

  return (
    <AnimatedSection
      as="article"
      id={study.id}
      delay={index * 80}
      className={`scroll-mt-28 overflow-hidden rounded-[28px] bg-[#F0F3F1] ${
        wide
          ? "lg:col-span-12 lg:grid lg:grid-cols-[1.08fr_0.92fr]"
          : index === 0
            ? "lg:col-span-7"
            : "lg:col-span-5"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[#DDE5E1] ${
          wide ? "min-h-72 lg:min-h-full" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={study.image}
          alt={`Projet réalisé pour ${study.clientLabel}`}
          fill
          sizes={
            wide
              ? "(max-width: 1024px) 100vw, 54vw"
              : index === 0
                ? "(max-width: 1024px) 100vw, 58vw"
                : "(max-width: 1024px) 100vw, 42vw"
          }
          className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] hover:scale-[1.02]"
        />
      </div>
      <div className="p-7 sm:p-9">
        <StudyHeading study={study} titleClassName={wide ? "sm:text-4xl" : ""} />
        <StudyDetails study={study} compact={!wide} />
      </div>
    </AnimatedSection>
  );
}

export default function EtudesDeCasClient() {
  const { openBooking } = useBooking();

  return (
    <div className="min-h-[100dvh] overflow-hidden bg-[#F6F7F4] text-[#0D332B]">
      <section className="pt-16 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Études de cas", href: "/etudes-de-cas" }]}
          />

          <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <div className="hero-rise" style={{ "--rise-delay": "0ms" }}>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#1A4D43] sm:text-sm">
                Études de cas
              </p>
              <h1 className="max-w-[720px] text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[#0D332B] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
                Nos missions, du défi au livrable.
              </h1>
              <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-[#52635F]">
                Découvrez le contexte, les décisions et les livrables de
                missions qui relient acquisition, vente et outils.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#missions"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#0D332B] px-6 py-3 text-sm font-bold text-[#F8FBF9] shadow-[0_12px_30px_-16px_rgba(13,51,43,0.72)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#1A4D43] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
                >
                  Explorer les missions
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#0D332B]/20 bg-[#FCFDFC]/65 px-6 py-3 text-sm font-bold text-[#0D332B] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#0D332B]/40 hover:bg-[#FCFDFC] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
                >
                  Voir nos services
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>

            <figure
              className="hero-rise lg:pl-5"
              style={{ "--rise-delay": "120ms" }}
            >
              <div className="relative aspect-[6/5]">
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-8 z-0 h-[72%] w-[76%] rounded-[28px] bg-[#B0FF5B]"
                />
                <div className="absolute left-0 top-0 z-10 h-[82%] w-[82%] overflow-hidden rounded-[28px] bg-[#DDE5E1] shadow-[0_30px_70px_-38px_rgba(13,51,43,0.52)]">
                  <Image
                    src="/projects/investissementLocatif.png"
                    alt="Projet Investissement Locatif"
                    fill
                    priority
                    sizes="(max-width: 1024px) 88vw, 48vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-20 h-[48%] w-[48%] overflow-hidden rounded-[24px] border-[8px] border-[#F6F7F4] bg-[#DDE5E1] shadow-[0_24px_50px_-28px_rgba(13,51,43,0.58)]">
                  <Image
                    src="/projects/zupdeco.jpg"
                    alt="Projet ZupDeCo"
                    fill
                    sizes="(max-width: 1024px) 48vw, 24vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-sm text-[#5F6F6B]">
                Une campagne et son parcours digital conçus comme un seul
                système.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0D332B]/10 bg-[#FCFDFC]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="font-bold text-[#0D332B]">Explorer par expertise</p>
          <nav
            aria-label="Catégories des études de cas"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            <Link
              href="#missions"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#40524E] transition-colors hover:text-[#0D332B]"
            >
              <Layers3 size={17} aria-hidden="true" />
              Commercial + digital
            </Link>
            <Link
              href="#commercial"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#40524E] transition-colors hover:text-[#0D332B]"
            >
              <PhoneCall size={17} aria-hidden="true" />
              Performance commerciale
            </Link>
            <Link
              href="#digital"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#40524E] transition-colors hover:text-[#0D332B]"
            >
              <Code2 size={17} aria-hidden="true" />
              Produits digitaux
            </Link>
          </nav>
        </div>
      </section>

      <section
        id="missions"
        className="scroll-mt-24 bg-[#F6F7F4] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#E3FFC4] text-[#0D332B]">
              <Layers3 size={24} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <h2 className="mt-7 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Quand les deux expertises se répondent
            </h2>
            <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-[#52635F]">
              Ces missions relient le travail commercial à l&apos;outil, au
              parcours ou à l&apos;automatisation qui permet de le faire durer. Une
              logique au cœur de notre approche{" "}
              <Link
                href="/services"
                className="font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4"
              >
                commerciale et digitale
              </Link>.
            </p>
          </AnimatedSection>

          <div className="mt-14 space-y-20 md:space-y-28">
            {COUTURE_CASES.map((study, index) => (
              <HybridStudy
                key={study.id}
                study={study}
                reverse={index % 2 === 1}
                eager={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="commercial"
        className="scroll-mt-24 bg-[#EAF2EE] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <AnimatedSection className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#DDE5E1]">
                <Image
                  src="/images/equipeprospection.png"
                  alt="Équipe de prospection Suzali Conseil"
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-7 flex items-center gap-3 text-sm font-bold text-[#3F7131]">
                <BriefcaseBusiness size={18} aria-hidden="true" />
                Performance commerciale
              </div>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Ouvrir les bonnes conversations
              </h2>
              <p className="mt-5 max-w-[52ch] leading-relaxed text-[#52635F]">
                Deux missions où la qualité du ciblage, de la qualification et
                de la transmission comptait plus que le volume brut. Découvrez
                aussi notre{" "}
                <Link
                  href="/services/commercial"
                  className="font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4"
                >
                  accompagnement commercial
                </Link>.
              </p>
            </AnimatedSection>

            <div className="space-y-7 lg:pt-24">
              {COMMERCIAL_CASES.map((study, index) => (
                <CommercialStudy
                  key={study.id}
                  study={study}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="digital"
        className="scroll-mt-24 bg-[#FCFDFC] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#E3FFC4] text-[#0D332B]">
              <Workflow size={24} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <h2 className="mt-7 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Des outils qui tiennent l&apos;activité
            </h2>
            <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-[#52635F]">
              Portails, plateformes et tableaux de bord conçus autour du travail
              réel des équipes et de leurs utilisateurs. Retrouvez les expertises
              de notre{" "}
              <Link
                href="/services/digital"
                className="font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4"
              >
                pôle digital
              </Link>.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {TECH_CASES.map((study, index) => (
              <DigitalStudy key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F7F4] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid items-center gap-8 rounded-[28px] bg-[#E3FFC4] p-7 shadow-[0_28px_70px_-48px_rgba(13,51,43,0.75)] sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
            <div>
              <Route size={25} strokeWidth={1.6} aria-hidden="true" />
              <h2 className="mt-5 max-w-[19ch] text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                Votre projet ressemble-t-il à l&apos;un de ces parcours ?
              </h2>
              <p className="mt-4 max-w-[58ch] leading-relaxed text-[#40524E]">
                Nous pouvons cadrer le prochain mouvement, qu&apos;il soit
                commercial, digital ou construit à la jonction des deux.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <button
                type="button"
                onClick={openBooking}
                className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#0D332B] px-6 py-3 text-sm font-bold text-[#F8FBF9] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#1A4D43] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
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
                className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border border-[#0D332B]/24 bg-[#FCFDFC]/60 px-6 py-3 text-sm font-bold text-[#0D332B] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#0D332B]/45 hover:bg-[#FCFDFC] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
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
