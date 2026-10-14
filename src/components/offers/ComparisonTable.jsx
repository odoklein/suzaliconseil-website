"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { Reveal, SectionHead } from "../kit";
import { PARCOURS, resolveParcours, CADENCE_LABEL, getPricing } from "../../lib/offers-pricing-meta";

const RESOLVED = PARCOURS.map(resolveParcours);

/* Rows are derived from catalogue data — nothing is asserted that the
   offers themselves do not already state. */
const ROWS = [
  {
    label: "Objectif",
    get: (parcours) => parcours.objective,
  },
  {
    label: "Prix d'entrée",
    get: (parcours) => `${parcours.entryPrice} ${parcours.entryBilling}`.trim(),
    emphasise: true,
  },
  {
    label: "Offres incluses",
    get: (parcours) => parcours.offers.map((offer) => offer.name).join(" + "),
  },
  {
    label: "Mode de facturation",
    get: (parcours) =>
      [
        ...new Set(
          parcours.offers.map((offer) => CADENCE_LABEL[getPricing(offer.id).cadence]),
        ),
      ].join(" · "),
  },
  {
    label: "Livrables",
    get: (parcours) => parcours.offers.flatMap((offer) => offer.features),
    isList: true,
  },
];

/*
 * The three parcours side by side, folded by default. Same sheet as the
 * parcours above: hairlines, and the most-chosen route as the inked column.
 */
export default function ComparisonTable() {
  const [isOpen, setIsOpen] = useState(false);

  const cell = (inked) =>
    `p-5 align-top lg:p-6 ${inked ? "bg-[#0D332B] text-[#F7FAF8]" : ""}`;

  return (
    <section className="border-t border-[#0D332B]/10 bg-[#F6F7F4] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHead
            size="md"
            className="lg:col-span-8"
            title="Comparer les trois parcours"
            intro="Objectif, prix d'entrée, mode de facturation et livrables, côte à côte."
          />
          <Reveal delay={200} className="lg:col-span-4 lg:flex lg:justify-end lg:pb-2">
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-expanded={isOpen}
              aria-controls="comparatif-parcours"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-[#0D332B]/20 px-6 py-3 text-sm font-semibold tracking-[-0.01em] text-[#0D332B] transition-colors duration-300 hover:border-[#0D332B]/50 hover:bg-[#FCFDFC] sm:w-auto"
            >
              {isOpen ? "Masquer le comparatif" : "Afficher le comparatif"}
              <Plus
                size={16}
                strokeWidth={2.5}
                aria-hidden="true"
                className={`transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "rotate-45" : ""}`}
              />
            </button>
          </Reveal>
        </div>

        {isOpen && (
          <div
            id="comparatif-parcours"
            className="mt-12 overflow-x-auto rounded-[22px] bg-[#FCFDFC] ring-1 ring-[#0D332B]/10 md:mt-16"
          >
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr>
                  <th scope="col" className="w-[180px] p-5 align-bottom text-sm font-semibold text-[#4E605B] lg:p-6">
                    Critère
                  </th>
                  {RESOLVED.map((parcours) => {
                    const inked = Boolean(parcours.highlight);
                    return (
                      <th key={parcours.id} scope="col" className={cell(inked)}>
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="font-heading text-xl font-semibold tracking-[-0.03em]">
                            {parcours.name}
                          </span>
                          {inked && parcours.tag && (
                            <span className="chip-status" data-step="2">
                              {parcours.tag}
                            </span>
                          )}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="border-t border-[#0D332B]/10">
                    <th scope="row" className="p-5 align-top text-sm font-semibold text-[#0D332B] lg:p-6">
                      {row.label}
                    </th>
                    {RESOLVED.map((parcours) => {
                      const inked = Boolean(parcours.highlight);
                      const value = row.get(parcours);

                      return (
                        <td key={parcours.id} className={cell(inked)}>
                          {row.isList ? (
                            <ul className="space-y-2">
                              {value.map((item) => (
                                <li
                                  key={item}
                                  className={`flex items-start gap-2.5 text-sm leading-snug ${
                                    inked ? "text-[#E4ECE8]" : "text-[#2C4640]"
                                  }`}
                                >
                                  <Check
                                    size={15}
                                    strokeWidth={2.75}
                                    aria-hidden="true"
                                    className={`mt-0.5 shrink-0 ${inked ? "text-[#B0FF5B]" : "text-[#4E8D38]"}`}
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : value ? (
                            <span
                              className={
                                row.emphasise
                                  ? "font-heading text-2xl font-semibold tracking-[-0.04em] tabular-nums"
                                  : `text-sm leading-relaxed ${inked ? "text-[#CFDDD7]" : "text-[#4E605B]"}`
                              }
                            >
                              {value}
                            </span>
                          ) : (
                            <Minus size={16} aria-label="Non applicable" className="text-[#4E605B]/50" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr className="border-t border-[#0D332B]/10">
                  <td />
                  {RESOLVED.map((parcours) => {
                    const inked = Boolean(parcours.highlight);
                    return (
                      <td key={parcours.id} className={cell(inked)}>
                        <Link
                          href={parcours.primaryHref}
                          className={`group/btn inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                            inked
                              ? "bg-[#B0FF5B] text-[#0D332B] hover:bg-[#C8FF8D]"
                              : "border border-[#0D332B]/20 text-[#0D332B] hover:border-[#0D332B] hover:bg-[#0D332B] hover:text-[#F7FAF8]"
                          }`}
                        >
                          Découvrir
                          <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
