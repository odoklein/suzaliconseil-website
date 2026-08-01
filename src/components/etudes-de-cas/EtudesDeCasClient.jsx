"use client";

/*
  DIRECTION CONTRACT — /etudes-de-cas

  THESIS: Suzali tient deux métiers sous une enseigne ; la page EST ce diptyque,
    et les missions qui ont mobilisé les deux vivent sur la couture entre les
    territoires. Refuse la grille filtrée de cartes identiques, défaut de la
    catégorie, qui range les deux métiers dans des silos interchangeables.
  OWN-WORLD: monde Suzali existant, inchangé. Territoire commercial sur vert
    profond #0d332b, territoire technologie sur #f9fafb, couture lime #b0ff5b
    en encre unique de la jointure. Plus Jakarta Sans, rayon 24px.
  STORY: le visiteur voit d'abord que le cabinet fait les deux, rejoint son
    métier, lit une démarche sans chiffre inventé, et repart vers l'audit.
  FIRST VIEWPORT: la couture descend au centre, le titre l'enjambe, les deux
    territoires se nomment de part et d'autre ; l'action primaire en bas du bloc.
  FORM: diptyque à couture, candidat 4 de la liste structurelle, clé fe5c8741.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the
    finish review, the verdict, and DESIGN.md.
*/

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  COMMERCIAL_CASES,
  TECH_CASES,
  COUTURE_CASES,
} from "../../lib/case-studies";

/* Chevron used by the accordion — symmetric about the 16x16 viewBox centre so
   the scaleY flip lands exactly on the "^". */
function AccChevron() {
  return (
    <span className="t-acc-chevron">
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <path
          d="M4 6.5L8 10.5L12 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function LearnChevron() {
  return (
    <span className="t-learn-chevron">
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <path
          className="t-learn-arm t-learn-arm-top"
          d="M6 4L10 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          className="t-learn-arm t-learn-arm-bot"
          d="M10 8L6 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/**
 * Un cas. `tone` porte le territoire : "dark" (commercial), "light" (tech),
 * "seam" (bande pleine largeur). Pas de carte : le bloc se pose directement
 * sur le sol du territoire.
 */
function CaseStudy({ study, tone, index }) {
  const [open, setOpen] = useState(false);
  const panelId = `case-panel-${study.id}`;

  const dark = tone === "dark";
  const seam = tone === "seam";

  /* Sur le sol vert, le texte secondaire se teinte depuis la teinte du sol
     plutôt que de virer au gris neutre. */
  const heading = dark ? "text-white" : "text-[#0d332b]";
  const body = dark ? "text-[#c5d8d1]" : "text-gray-600";
  const meta = dark ? "text-[#8fa8a0]" : "text-gray-500";
  const rule = dark ? "border-white/15" : "border-gray-200";
  const accent = dark ? "text-[#B0FF5B]" : "text-emerald-700";
  const chipBg = dark
    ? "bg-white/10 text-[#dbe9e3]"
    : "bg-emerald-50 text-emerald-800";

  return (
    <article
      className={`t-acc ${seam ? "lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start" : ""}`}
      data-open={open ? "true" : "false"}
    >
      {study.image && (
        <div
          className={`relative overflow-hidden rounded-suzali ${
            seam ? "lg:col-span-5 aspect-[16/10]" : "aspect-[16/10]"
          } mb-7`}
        >
          <Image
            src={study.image}
            alt={`Projet réalisé pour ${study.clientLabel}`}
            fill
            sizes={
              seam
                ? "(min-width: 1024px) 40vw, 100vw"
                : "(min-width: 1024px) 42vw, 100vw"
            }
            className="object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      )}

      <div className={seam ? "lg:col-span-7" : ""}>
        <h3
          className={`font-heading text-2xl font-bold leading-tight md:text-3xl ${heading}`}
        >
          {study.clientLabel}
        </h3>

        <p className={`mt-2 text-sm ${meta}`}>{study.sector}</p>

        <p className={`mt-5 text-lg leading-relaxed ${body}`}>
          {study.summary}
        </p>

        {study.metiers && (
          <p className={`mt-5 flex flex-wrap items-center gap-2 text-sm ${meta}`}>
            {study.metiers.map((m, i) => (
              <React.Fragment key={m}>
                {i > 0 && (
                  <span aria-hidden="true" className={accent}>
                    +
                  </span>
                )}
                <span className={`${accent} font-semibold`}>{m}</span>
              </React.Fragment>
            ))}
          </p>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className={`t-acc-head t-learn mt-6 inline-flex items-center gap-2 rounded-lg text-sm font-bold ${
            dark ? "text-white" : "text-[#0d332b]"
          } transition-opacity duration-200 hover:opacity-70`}
        >
          {open ? "Replier le cas" : "Lire la démarche"}
          <AccChevron />
        </button>

        <div id={panelId} className="t-acc-panel" role="region">
          <div className="t-acc-panel-inner">
            <div className={`mt-7 border-t pt-7 ${rule}`}>
              <h4 className={`font-heading text-sm font-bold ${heading}`}>
                Le contexte
              </h4>
              <p className={`mt-3 max-w-[68ch] leading-relaxed ${body}`}>
                {study.contexte}
              </p>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h4 className={`font-heading text-sm font-bold ${heading}`}>
                    Ce que nous avons fait
                  </h4>
                  <ul className="mt-3 space-y-3">
                    {study.demarche.map((step) => (
                      <li
                        key={step}
                        className={`flex gap-3 text-sm leading-relaxed ${body}`}
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-px w-4 shrink-0 ${
                            dark ? "bg-[#B0FF5B]" : "bg-emerald-600"
                          }`}
                        />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`font-heading text-sm font-bold ${heading}`}>
                    Ce que le client a reçu
                  </h4>
                  <ul className="mt-3 space-y-3">
                    {study.livrables.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-3 text-sm leading-relaxed ${body}`}
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-px w-4 shrink-0 ${
                            dark ? "bg-[#B0FF5B]" : "bg-emerald-600"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-8 flex flex-wrap gap-2">
                {study.canaux.map((c) => (
                  <span
                    key={c}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${chipBg}`}
                  >
                    {c}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function EtudesDeCasClient() {
  const [heroShown, setHeroShown] = useState(false);
  const seamRef = useRef(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  /* La couture est le moment orchestré de la page : une seule ligne qui se
     dessine du haut vers le bas au rythme du scroll. */
  const onScroll = useCallback(() => {
    const el = seamRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const progress =
      total <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / total));
    el.style.setProperty("--seam-progress", String(progress));
  }, []);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [onScroll]);

  return (
    <main className="min-h-screen bg-white">
      {/* ─── L'ouverture : la couture naît ici ─────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d332b] pt-28 pb-24 md:pt-36 md:pb-32">
        {/* La couture naît ici, en filet, avant que les deux sols ne s'ouvrent. */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent to-[#B0FF5B]/50 lg:block"
        />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div
            className={`t-stagger mx-auto max-w-3xl text-center ${
              heroShown ? "is-shown" : ""
            }`}
          >
            <h1 className="t-stagger-line t-stagger-line--1 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Deux métiers,
              <br />
              un seul cabinet.
            </h1>
            <p className="t-stagger-line t-stagger-line--2 mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#c5d8d1]">
              À gauche, ce que nous vendons pour nos clients. À droite, ce que
              nous construisons pour eux. Au milieu, les missions où les deux se
              sont rejoints — et c&apos;est là que ce cabinet se distingue.
            </p>
            <p className="t-stagger-line t-stagger-line--3 mt-9">
              <Link
                href="/contact"
                className="t-learn inline-flex items-center gap-2 rounded-full bg-[#B0FF5B] px-7 py-3.5 font-bold text-[#0d332b] transition-colors duration-300 hover:bg-white"
              >
                Parler de votre projet
                <LearnChevron />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ─── Le diptyque ────────────────────────────────────────────────── */}
      <div ref={seamRef} className="relative">
        {/* Les deux sols, en pleine largeur de fenêtre au-delà du conteneur */}
        <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[#0d332b]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f9fafb]" />
        </div>

        {/* La couture, qui se dessine au scroll */}
        <div
          aria-hidden="true"
          className="seam-line absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-[#B0FF5B] via-[#B0FF5B]/60 to-transparent lg:block"
        />

        <div className="relative z-10">
          {/* Chaque territoire porte son propre sol : en dessous de lg les
              deux moitiés disparaissent et les bandes s'empilent. */}
          <div className="lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-2 lg:px-4">
            {/* Territoire gauche : commercial */}
            <div className="bg-[#0d332b] px-4 py-14 lg:bg-transparent lg:px-0 lg:pr-16">
              <div className="lg:text-right">
                <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
                  Commercial
                </h2>
                <p className="mt-3 max-w-sm text-[#8fa8a0] lg:ml-auto">
                  Prospection, qualification et rendez-vous. Nous vendons à la
                  place de nos clients, avec leur voix.
                </p>
              </div>

              <div className="mt-16 space-y-20 pb-6">
                {COMMERCIAL_CASES.map((study, i) => (
                  <CaseStudy
                    key={study.id}
                    study={study}
                    tone="dark"
                    index={i}
                  />
                ))}
              </div>
            </div>

            {/* Territoire droit : technologie */}
            <div className="bg-[#f9fafb] px-4 py-14 lg:bg-transparent lg:px-0 lg:pl-16 lg:pt-40">
              <h2 className="font-heading text-2xl font-bold text-[#0d332b] md:text-3xl">
                Technologie
              </h2>
              <p className="mt-3 max-w-sm text-gray-600">
                Plateformes, tableaux de bord et automatisation. Nous
                construisons l&apos;outil qui tient l&apos;activité.
              </p>

              <div className="mt-16 space-y-20 pb-6">
                {TECH_CASES.map((study, i) => (
                  <CaseStudy
                    key={study.id}
                    study={study}
                    tone="light"
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ─── La couture : les cas qui ont mobilisé les deux ─────────── */}
          <div className="relative bg-[#0d332b] py-20 md:py-28">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B0FF5B] to-transparent"
            />
            <div className="container mx-auto max-w-5xl px-4">
              <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                Là où les deux métiers se rejoignent
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#c5d8d1]">
                Sur ces missions, la campagne commerciale et l&apos;outil qui la
                reçoit ont été conçus par la même équipe. C&apos;est la seule
                partie de ce catalogue qu&apos;un prestataire d&apos;un seul des
                deux métiers ne peut pas présenter.
              </p>

              <div className="mt-16 space-y-20">
                {COUTURE_CASES.map((study, i) => (
                  <CaseStudy
                    key={study.id}
                    study={study}
                    tone="seam"
                    index={i}
                  />
                ))}
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B0FF5B] to-transparent"
            />
          </div>
        </div>
      </div>

      {/* ─── La fermeture ───────────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-[#0d332b] md:text-4xl">
            Votre projet appartient à quel côté&nbsp;?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            La plupart des nôtres commencent d&apos;un côté et finissent au
            milieu. Dites-nous où vous en êtes, nous vous dirons ce que nous
            ferions.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="t-learn inline-flex items-center gap-2 rounded-full bg-[#0d332b] px-7 py-3.5 font-bold text-white transition-colors duration-300 hover:bg-[#1a4d43]"
            >
              Demander un audit gratuit
              <LearnChevron />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 font-bold text-[#0d332b] transition-colors duration-300 hover:border-[#0d332b]"
            >
              Voir nos services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
