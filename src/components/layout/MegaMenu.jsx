"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Handshake,
  Monitor,
} from "lucide-react";

const POLES = [
  {
    slug: "commercial",
    icon: Handshake,
    label: "Performance commerciale",
    description: "Créer des opportunités et les convertir en rendez-vous.",
  },
  {
    slug: "digital",
    icon: Monitor,
    label: "Stratégie digitale",
    description: "Construire la visibilité, les parcours et les outils.",
  },
];

export default function MegaMenu({ id, services, isOpen, onClose }) {
  const poles = POLES.map((pole) => ({
    ...pole,
    service: services.find((service) => service.slug === pole.slug),
  })).filter((pole) => pole.service);

  if (poles.length === 0) return null;

  return (
    <div
      id={id}
      inert={!isOpen || undefined}
      className="pointer-events-none fixed left-0 top-[72px] z-50 flex w-full justify-center px-4 pb-6"
    >
      <div
        className={`t-dropdown t-stagger pointer-events-none w-full max-w-6xl overflow-hidden rounded-[28px] border border-[#0D332B]/10 bg-[#FCFDFC]/98 p-4 shadow-[0_34px_90px_-38px_rgba(13,51,43,0.55)] backdrop-blur-2xl ${
          isOpen ? "is-open is-shown" : ""
        }`}
      >
        <div className="grid md:grid-cols-2">
          {poles.map((pole, poleIndex) => {
            const Icon = pole.icon;
            const href = `/services/${pole.slug}`;

            return (
              <section
                key={pole.slug}
                aria-label={pole.label}
                className={`t-stagger-line p-4 sm:p-5 ${
                  poleIndex > 0
                    ? "border-t border-[#0D332B]/10 md:border-l md:border-t-0"
                    : ""
                }`}
                style={{ "--i": poleIndex }}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#E3FFC4] text-[#0D332B]">
                    <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <div>
                    <Link
                      href={href}
                      onClick={onClose}
                      className="nav-focus group inline-flex items-center gap-2 text-xl font-bold tracking-[-0.025em] text-[#0D332B]"
                    >
                      {pole.label}
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                    <p className="mt-1 max-w-[42ch] text-sm leading-relaxed text-[#65746F]">
                      {pole.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 grid gap-1 sm:grid-cols-2">
                  {pole.service.subServices.map((sub, index) => (
                    <li key={sub.slug ?? index}>
                      <Link
                        href={sub.href || href}
                        onClick={onClose}
                        className="nav-focus group flex min-h-12 items-center justify-between gap-3 rounded-[14px] px-3 py-2.5 text-sm font-semibold leading-snug text-[#314640] transition-colors duration-300 hover:bg-[#E9FFD2] hover:text-[#0D332B]"
                      >
                        {sub.title}
                        <ArrowRight
                          size={15}
                          aria-hidden="true"
                          className="shrink-0 text-[#4E8D38] transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div
          className="t-stagger-line flex flex-col gap-3 border-t border-[#0D332B]/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
          style={{ "--i": poles.length }}
        >
          <p className="text-sm text-[#65746F]">
            Besoin de relier plusieurs expertises dans une même mission ?
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/services"
              onClick={onClose}
              className="nav-focus text-sm font-bold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4"
            >
              Tous les services
            </Link>
            <Link
              href="/etudes-de-cas"
              onClick={onClose}
              className="nav-focus text-sm font-bold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4"
            >
              Voir les études de cas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
