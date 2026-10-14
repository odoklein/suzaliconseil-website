"use client";

import { useState } from "react";
import { Linkedin } from "lucide-react";
import { PageHero, ClosingCta, SectionHead, Reveal } from "../kit";

/**
 * Pôles de l'équipe.
 * Les membres sans nom propre sont décrits par leur fonction :
 * remplacer `name` par le nom réel dès qu'il est communicable,
 * la ligne du registre s'adapte automatiquement.
 */
const POLES = [
  {
    id: "direction",
    label: "Équipe de Direction",
    filterLabel: "Direction",
    tagline:
      "La direction de Suzali Conseil définit la stratégie de l'entreprise, pilote l'excellence opérationnelle et veille à la réussite des projets ainsi qu'à la satisfaction durable de nos clients.",
    members: [
      {
        name: "Hichem Hammouche",
        role: "Président-Directeur Général (CEO) & Fondateur",
        focus: ["Vision stratégique", "Innovation", "Développement"],
        description:
          "Définit la vision de l'entreprise, pilote sa stratégie de croissance et développe les partenariats clés. Il veille à l'innovation, à la qualité des services et au développement durable de Suzali Conseil.",
        linkedin: "https://www.linkedin.com/in/hichem-hammouche-ba957238/",
      },
      {
        name: "Direction des Opérations",
        role: "Excellence Opérationnelle & Pilotage des Projets",
        description:
          "Supervise l'ensemble des opérations afin de garantir le respect des délais, la qualité des livrables et la coordination des équipes. Assure l'amélioration continue des processus et la satisfaction des clients.",
        linkedin: null,
      },
    ],
  },
  {
    id: "tech",
    label: "Pôle Technologie",
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
  ...POLES.map((p) => ({ id: p.id, label: p.filterLabel ?? p.label })),
];

// Facts a visitor can check: the roster below, the two pôles, the registry
// (Suzali Conseil was created on 08/10/2025).
const STATS = [
  { value: "8", suffix: "", label: "Métiers présentés sur cette page" },
  { value: "2", suffix: "", label: "Pôles, commercial et digital" },
  { value: "2025", suffix: "", label: "Création du cabinet, à Paris" },
];

/* One member, one hairline row: name and role, then what they hold. */
function MemberRow({ member, index }) {
  return (
    <Reveal
      as="li"
      delay={Math.min(index, 4) * 60}
      className="grid gap-3 border-b border-[#0D332B]/14 px-1 py-7 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)_2.75rem] md:items-baseline md:gap-10 md:px-3 md:py-8"
    >
      <div className="min-w-0">
        <h3 className="font-heading text-[1.3rem] font-semibold leading-tight tracking-[-0.03em] text-[#0D332B] md:text-[1.5rem]">
          {member.name}
        </h3>
        <p className="mt-1.5 text-[15px] font-medium leading-snug text-[#0D332B]/80">
          {member.role}
        </p>
        {member.focus && (
          <p className="mt-3 font-mono text-[0.75rem] tracking-normal text-[#4E605B]/90">
            {member.focus.join(" · ")}
          </p>
        )}
      </div>

      <p className="max-w-[60ch] text-[15px] leading-relaxed text-[#4E605B] md:text-base">
        {member.description}
      </p>

      <div className="md:justify-self-end">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Profil LinkedIn de ${member.name}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0D332B]/18 text-[#0D332B] transition-colors duration-300 hover:border-[#0D332B] hover:bg-[#0D332B] hover:text-[#F7FAF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] focus-visible:ring-offset-2"
          >
            <Linkedin size={17} aria-hidden="true" />
          </a>
        )}
      </div>
    </Reveal>
  );
}

/* A pôle: its name and mission on the left, the roster on the right. */
function PoleBlock({ pole }) {
  return (
    <section
      aria-labelledby={`pole-${pole.id}`}
      className="grid gap-8 lg:grid-cols-12 lg:gap-16"
    >
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <Reveal
            as="h2"
            variant="mask"
            id={`pole-${pole.id}`}
            className="font-heading text-[clamp(1.9rem,3.2vw,2.75rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#0D332B]"
          >
            {pole.label}
          </Reveal>
          <Reveal as="p" delay={120} className="mt-4 max-w-[46ch] text-base leading-relaxed text-[#4E605B]">
            {pole.tagline}
          </Reveal>
          <p className="mt-5 font-mono text-[0.75rem] tracking-normal text-[#4E605B]/90">
            {pole.members.length} membres
          </p>
        </div>
      </div>

      <ul className="border-t border-[#0D332B]/14 lg:col-span-8">
        {pole.members.map((member, index) => (
          <MemberRow key={member.name} member={member} index={index} />
        ))}
      </ul>
    </section>
  );
}

export default function EquipeClient() {
  const [department, setDepartment] = useState("all");

  const visiblePoles =
    department === "all" ? POLES : POLES.filter((p) => p.id === department);

  return (
    <main className="w-full bg-[#F6F7F4] text-[#0D332B]">
      <PageHero
        title="Les têtes pensantes de votre croissance"
        intro="Chaque membre de notre équipe s'engage à vous accompagner avec rigueur et efficacité, pour accélérer vos performances et sécuriser vos investissements digitaux."
        size="xl"
      />

      {/* The roster, filterable by pôle. */}
      <section className="bg-[#F6F7F4] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            role="group"
            aria-label="Filtrer par pôle"
            className="flex flex-wrap gap-2 border-b border-[#0D332B]/10 pb-8"
          >
            {FILTERS.map((d) => {
              const active = department === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDepartment(d.id)}
                  aria-pressed={active}
                  className={`min-h-11 rounded-full px-5 text-sm font-semibold tracking-[-0.01em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] focus-visible:ring-offset-2 ${
                    active
                      ? "bg-[#0D332B] text-[#F7FAF8]"
                      : "border border-[#0D332B]/16 text-[#4E605B] hover:border-[#0D332B]/40 hover:text-[#0D332B]"
                  }`}
                >
                  {d.label}
                </button>
              );
            })}
          </div>

          <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
            {visiblePoles.map((pole) => (
              <PoleBlock key={pole.id} pole={pole} />
            ))}
          </div>
        </div>
      </section>

      {/* The numbers: ink on paper, tabular, modest. */}
      <section className="border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <SectionHead
              size="md"
              className="lg:col-span-5"
              title="L'équipe en bref"
              intro="Une équipe resserrée, deux métiers sous le même toit."
            />

            <ul className="grid border-t border-[#0D332B]/14 sm:grid-cols-3 lg:col-span-7">
              {STATS.map((stat, i) => (
                <Reveal
                  as="li"
                  key={stat.label}
                  delay={i * 80}
                  className="border-b border-[#0D332B]/14 py-8 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:py-10"
                >
                  <p className="font-heading text-[clamp(3rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.05em] text-[#0D332B] tabular-nums">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-3 text-[15px] font-medium text-[#4E605B]">{stat.label}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ClosingCta
        title="Rejoignez l'équipe"
        intro="Vous partagez notre vision de la croissance ? Nous recrutons des profils passionnés en stratégie commerciale, digital et opérations."
        primary={{ label: "Voir les postes ouverts", href: "/carriers" }}
        slotLabel="Candidature"
        slotMeta="sous 5 jours ouvrés"
      />
    </main>
  );
}
