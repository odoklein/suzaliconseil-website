"use client";

import React from "react";
import Link from "next/link";
import { Monitor, Handshake, CheckCircle2, ArrowRight } from "lucide-react";

/* One card definition, two poles. The two branches used to be copy-pasted,
   which is how the digital column ended up with a different check-icon
   treatment than the commercial one. */
const POLES = [
  {
    slug: "commercial",
    icon: Handshake,
    tag: "Performance",
    accentText: "text-[var(--color-primary-dark)]",
    accentTag: "bg-[var(--color-commercial-bg)] text-[var(--color-primary-main)]",
    accentIcon: "text-[var(--color-primary-dark)]",
    accentIconHover:
      "group-hover:bg-[var(--color-primary-dark)] group-hover:text-[var(--color-accent-lime)]",
    accentCheck: "text-[var(--color-primary-main)]",
    accentWash: "from-[var(--color-commercial-bg)]",
    accentRule: "decoration-[var(--color-accent-lime)]",
    accentShadow: "hover:shadow-[0_20px_60px_-15px_rgba(13,51,43,0.3)]",
  },
  {
    slug: "digital",
    icon: Monitor,
    tag: "Visibilité",
    accentText: "text-[var(--color-digital-text)]",
    accentTag: "bg-[var(--color-digital-bg)] text-[var(--color-digital-text)]",
    accentIcon: "text-[var(--color-digital-text)]",
    accentIconHover:
      "group-hover:bg-[var(--color-digital-text)] group-hover:text-white",
    accentCheck: "text-[var(--color-digital-text)]",
    accentWash: "from-[var(--color-digital-bg)]",
    accentRule: "decoration-[var(--color-digital-text)]",
    accentShadow: "hover:shadow-[0_20px_60px_-15px_rgba(17,85,204,0.28)]",
  },
];

const MegaMenu = ({ id, services, isOpen, onClose }) => {
  const poles = POLES.map((pole) => ({
    ...pole,
    service: services.find((s) => s.slug === pole.slug),
  })).filter((pole) => pole.service);

  if (poles.length === 0) return null;

  return (
    <div
      id={id}
      /* Kept in the DOM so the panel can animate out. `inert` is what keeps
         its 14 links out of the tab order while it is invisible. */
      inert={!isOpen || undefined}
      className="fixed top-20 left-0 w-full flex justify-center z-50 pb-8 pointer-events-none"
    >
      {/* The animated surface is the card row, not the full-width frame, so the
          empty gutters never swallow clicks on the page behind it. */}
      <div
        className={`t-dropdown t-stagger w-[95vw] max-w-5xl flex flex-col md:flex-row gap-6 p-4 ${
          isOpen ? "is-open is-shown" : ""
        }`}
      >
        {poles.map((pole, poleIndex) => {
          const Icon = pole.icon;
          const { service } = pole;
          const href = `/services/${pole.slug}`;

          return (
            <section
              key={pole.slug}
              aria-label={`Pôle ${service.title}`}
              className={`t-stagger-line flex-1 bg-white rounded-3xl p-8 shadow-2xl ${pole.accentShadow} transition-shadow duration-[var(--dropdown-open-dur)] ease-[cubic-bezier(0.22,1,0.36,1)] group ring-1 ring-black/5 relative overflow-hidden`}
              style={{ "--i": poleIndex }}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br ${pole.accentWash} via-white to-white`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <span
                    className={`p-4 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 ${pole.accentIcon} ${pole.accentIconHover} transition-colors duration-[var(--dropdown-open-dur)]`}
                  >
                    <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span
                    className={`${pole.accentTag} text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
                  >
                    {pole.tag}
                  </span>
                </div>

                <h2 className="text-2xl font-bold font-heading tracking-tight mb-6">
                  <Link
                    href={href}
                    onClick={onClose}
                    className={`nav-focus ${pole.accentText} hover:underline underline-offset-4 ${pole.accentRule} decoration-2`}
                  >
                    {service.title}
                  </Link>
                </h2>

                <ul className="space-y-1 mb-8 flex-1">
                  {service.subServices.map((sub, index) => (
                    <li key={sub.slug ?? index}>
                      <Link
                        href={sub.href || href}
                        onClick={onClose}
                        className="nav-focus flex items-start gap-3 p-3 -mx-3 rounded-xl transition-colors duration-[var(--dropdown-close-dur)] hover:bg-[var(--color-primary-dark)]/5"
                      >
                        <CheckCircle2
                          size={16}
                          aria-hidden="true"
                          className={`${pole.accentCheck} mt-0.5 shrink-0`}
                        />
                        <span className="block">
                          <span
                            className={`block font-bold ${pole.accentText} text-sm leading-tight mb-0.5`}
                          >
                            {sub.title}
                          </span>
                          <span className="block text-xs text-[var(--color-text-muted)] leading-snug">
                            {sub.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={href}
                  onClick={onClose}
                  className={`nav-focus inline-flex items-center gap-2 text-sm font-bold ${pole.accentText} uppercase tracking-wider hover:underline underline-offset-4 decoration-2 ${pole.accentRule} group/cta`}
                >
                  Explorer le pôle
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-[var(--dropdown-open-dur)] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-1"
                  />
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;
