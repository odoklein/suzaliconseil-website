"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Minus } from "lucide-react";
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

export default function ComparisonTable() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#F6F7F4] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="overflow-hidden rounded-[28px] border border-[#0D332B]/10 bg-white shadow-[0_12px_30px_rgba(13,51,43,0.05)]">
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            className="flex w-full items-center justify-between gap-6 p-6 text-left transition-colors hover:bg-[#FAFBFA] md:p-8"
          >
            <div>
              <h2 className="font-heading text-xl font-extrabold tracking-[-0.02em] text-[#0D332B] md:text-2xl">
                Comparer les trois parcours
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#416058]">
                Objectif, prix d&apos;entrée, mode de facturation et livrables,
                côte à côte.
              </p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF7E4] text-[#1A6D48]">
              <ChevronDown
                size={18}
                strokeWidth={2.5}
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </span>
          </button>

          {isOpen && (
            <div className="overflow-x-auto border-t border-[#0D332B]/10">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#FAFBFA]">
                    <th
                      scope="col"
                      className="w-[180px] p-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7C9188]"
                    >
                      Critère
                    </th>
                    {RESOLVED.map((parcours) => (
                      <th
                        key={parcours.id}
                        scope="col"
                        className="p-5 align-top"
                      >
                        <span className="block font-heading text-lg font-extrabold tracking-[-0.02em] text-[#0D332B]">
                          {parcours.name}
                        </span>
                        {parcours.highlight && parcours.tag && (
                          <span className="mt-1.5 inline-block rounded-full bg-[#FF6A3D] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            {parcours.tag}
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr
                      key={row.label}
                      className="border-t border-[#0D332B]/8 align-top"
                    >
                      <th
                        scope="row"
                        className="p-5 text-sm font-bold text-[#0D332B]"
                      >
                        {row.label}
                      </th>
                      {RESOLVED.map((parcours) => {
                        const value = row.get(parcours);

                        return (
                          <td key={parcours.id} className="p-5">
                            {row.isList ? (
                              <ul className="space-y-2">
                                {value.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2.5 text-sm leading-5 text-[#416058]"
                                  >
                                    <Check
                                      size={15}
                                      strokeWidth={2.6}
                                      className="mt-0.5 shrink-0 text-[#1A6D48]"
                                    />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            ) : value ? (
                              <span
                                className={
                                  row.emphasise
                                    ? "tabular-figures font-heading text-xl font-extrabold tracking-[-0.02em] text-[#0D332B]"
                                    : "text-sm leading-6 text-[#416058]"
                                }
                              >
                                {value}
                              </span>
                            ) : (
                              <Minus size={16} className="text-[#C3CCC7]" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr className="border-t border-[#0D332B]/8">
                    <td />
                    {RESOLVED.map((parcours) => (
                      <td key={parcours.id} className="p-5">
                        <Link
                          href={parcours.primaryHref}
                          className="inline-flex items-center justify-center rounded-xl bg-[#B0FF5B] px-5 py-3 text-sm font-extrabold text-[#0D332B] transition-all hover:-translate-y-0.5 hover:bg-[#9BEA45]"
                        >
                          Découvrir
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
