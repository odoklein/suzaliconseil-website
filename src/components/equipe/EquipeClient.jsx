"use client";

import React, { useState, useEffect, useRef } from "react";
import { Linkedin, ArrowRight, Compass, Code2, TrendingUp } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";

/**
 * Pôles de l'équipe.
 * Les membres sans nom propre sont décrits par leur fonction :
 * remplacer `name` par le nom réel dès qu'il est communicable,
 * le monogramme et la mise en page s'adaptent automatiquement.
 */
const POLES = [
  {
    id: "direction",
    label: "Direction",
    icon: Compass,
    tagline: "Vision, stratégie et pilotage global des engagements clients.",
    members: [
      {
        name: "Hichem Hammouche",
        role: "CEO & Fondateur",
        description: "Stratégie, partenariats et direction générale.",
        linkedin: "https://www.linkedin.com/in/hichem-hammouche-ba957238/",
      },
      {
        name: "Direction des Opérations",
        role: "Pilotage & Qualité",
        description: "Cadrage des missions, délais et qualité de service.",
        linkedin: null,
      },
    ],
  },
  {
    id: "tech",
    label: "Pôle Technologie",
    icon: Code2,
    tagline:
      "Développement, automatisation et design des outils qui soutiennent votre croissance.",
    members: [
      {
        name: "Lead Développeur",
        role: "Applications & Plateformes",
        description: "Sites, e-commerce et développement de SuzaLink CRM.",
        linkedin: null,
      },
      {
        name: "Ingénieur Automatisation",
        role: "Intégrations & Data",
        description: "API, workflows et synchronisation de vos outils.",
        linkedin: null,
      },
      {
        name: "Designer Produit",
        role: "UI & Expérience",
        description: "Design system, interfaces et parcours de conversion.",
        linkedin: null,
      },
    ],
  },
  {
    id: "sales",
    label: "Pôle Commercial",
    icon: TrendingUp,
    tagline:
      "Prospection, qualification et suivi des comptes, de la première prise de contact à la fidélisation.",
    members: [
      {
        name: "Business Developer",
        role: "Prospection & Acquisition",
        description: "Ciblage, outbound multicanal et ouverture de comptes.",
        linkedin: null,
      },
      {
        name: "Chargé de Qualification",
        role: "Leads & Rendez-vous",
        description: "Qualification des leads et prise de rendez-vous.",
        linkedin: null,
      },
      {
        name: "Account Manager",
        role: "Suivi & Fidélisation",
        description: "Relation client, reporting et développement du compte.",
        linkedin: null,
      },
    ],
  },
];

const FILTERS = [
  { id: "all", label: "Tous" },
  ...POLES.map((p) => ({ id: p.id, label: p.label })),
];

/** Monogramme : initiales du nom (ou de la fonction). */
function monogram(name) {
  return name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const STATS = [
  { value: 50, suffix: "+", label: "Projets réalisés" },
  { value: 10, suffix: "+", label: "Experts" },
  { value: 4, suffix: "", label: "Années d'expérience" },
];

function useCountUp(end, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, trigger]);
  return count;
}

function StatCard({ value, suffix, label, trigger, index }) {
  const count = useCountUp(value, 2000, trigger);
  return (
    <AnimatedSection delay={index * 150} className="text-center group">
      <div className="font-heading font-extrabold text-5xl md:text-7xl text-[#0d332b] group-hover:text-primary-main transition-colors duration-300">
        {count}
        {suffix}
      </div>
      <p className="text-gray-500 mt-2 font-medium">{label}</p>
    </AnimatedSection>
  );
}

/** Carte membre sobre : monogramme, fonction, une ligne de contexte. */
function MemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-4 rounded-2xl border border-gray-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0d332b]/25 hover:shadow-[0_18px_40px_-24px_rgba(13,51,43,0.35)]"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-heading text-sm font-bold tracking-wide text-[#0d332b] transition-colors duration-300 group-hover:bg-[#0d332b] group-hover:text-[#B0FF5B]">
          {monogram(member.name)}
        </span>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Profil LinkedIn de ${member.name}`}
            className="rounded-lg p-2 text-gray-400 transition-colors duration-300 hover:bg-emerald-50 hover:text-[#0d332b]"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
      </div>

      <div>
        <h3 className="font-heading text-base font-bold leading-tight text-[#0d332b]">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-emerald-700">
          {member.role}
        </p>
      </div>

      <p className="border-t border-gray-100 pt-4 text-sm leading-relaxed text-gray-500">
        {member.description}
      </p>

      {/* Filet d'accent au survol */}
      <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#B0FF5B] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}

/** Bloc d'un pôle : en-tête discret + grille de cartes. */
function PoleBlock({ pole }) {
  const Icon = pole.icon;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mb-8 flex flex-col gap-3 border-b border-gray-100 pb-6 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-4">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-[#0d332b]">
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <h2 className="font-heading text-xl font-bold text-[#0d332b] md:text-2xl">
              {pole.label}
            </h2>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-gray-500">
              {pole.tagline}
            </p>
          </div>
        </div>
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-400">
          {pole.members.length} membres
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {pole.members.map((member, index) => (
          <MemberCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default function EquipeClient() {
  const [department, setDepartment] = useState("all");
  const numbersRef = useRef(null);
  const isNumbersInView = useInView(numbersRef, {
    once: true,
    margin: "-100px",
  });

  const visiblePoles =
    department === "all" ? POLES : POLES.filter((p) => p.id === department);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 1. HERO - Green section */}
      <section className="relative pt-24 md:pt-32 pb-32 md:pb-40 overflow-hidden bg-[#0d332b] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/team.png"
            alt="Équipe Suzali"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d332b]/85 via-[#0d332b]/60 to-[#0d332b]" />
        </div>

        {/* Orbit ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="orbit-ring w-[600px] h-[600px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 border border-white/10 text-white text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#B0FF5B] animate-pulse" />
              Équipe
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Les têtes pensantes de{" "}
              <span className="text-[#B0FF5B]">votre croissance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Chaque membre de notre équipe s&apos;engage à vous accompagner
              avec rigueur et efficacité, pour accélérer vos performances et
              sécuriser vos investissements digitaux.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. TEAM CLUSTERS - White section */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-white text-[#0d332b]">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16">
            {FILTERS.map((d) => (
              <button
                key={d.id}
                onClick={() => setDepartment(d.id)}
                aria-pressed={department === d.id}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  department === d.id
                    ? "bg-[#0d332b] text-white shadow-lg shadow-[#0d332b]/20"
                    : "border border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-[#0d332b]"
                }`}
              >
                {d.label}
              </button>
            ))}
          </AnimatedSection>

          <motion.div layout className="space-y-16 md:space-y-24">
            <AnimatePresence mode="popLayout" initial={false}>
              {visiblePoles.map((pole) => (
                <PoleBlock key={pole.id} pole={pole} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3. THE NUMBERS - White section */}
      <section
        ref={numbersRef}
        className="relative z-10 py-16 md:py-24 px-4 bg-white"
      >
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6">
              En Chiffres
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#0d332b] mb-4">
              Les <span className="text-gradient-premium">chiffres</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Des résultats concrets, une équipe engagée.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {STATS.map((stat, i) => (
              <StatCard
                key={i}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                trigger={isNumbersInView}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. JOIN THE TEAM - Green section */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-[#0d332b] text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#B0FF5B] rounded-full blur-[150px] opacity-[0.06] pointer-events-none" />

        <AnimatedSection className="container mx-auto max-w-3xl">
          <div className="rounded-[32px] p-8 md:p-12 text-center bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 relative z-10">
              Rejoignez l&apos;équipe
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
              Vous partagez notre vision de la croissance ? Nous recrutons des
              profils passionnés en stratégie commerciale, digital et
              opérations.
            </p>
            <a
              href="/carriers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-[#B0FF5B] text-[#0d332b] hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform relative z-10"
            >
              Voir les postes ouverts
              <ArrowRight size={18} />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
