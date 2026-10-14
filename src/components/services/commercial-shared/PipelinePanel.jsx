"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import useSafeReducedMotion from "../../../lib/useSafeReducedMotion";

const STATUS = ["Contacté", "Qualifié", "RDV planifié"];

/* Roles only, no client data: this panel illustrates the mechanism. */
const DEFAULT_ROWS = [
  { role: "Directrice financière", org: "ETI industrielle", target: 2, slot: "jeu. 10:30" },
  { role: "Directeur commercial", org: "Éditeur SaaS", target: 1 },
  { role: "Responsable achats", org: "Groupe de services", target: 0 },
];

/*
 * PipelinePanel - an inked panel where three illustrative prospects move
 * through the pipeline (Contacté -> Qualifié -> RDV planifié) once the panel
 * is read. Replaces the old fake "dashboard" cards; the caption says it is an
 * illustration. Page content (capabilities, figures) goes in children, under
 * a hairline.
 */
export default function PipelinePanel({
  rows = DEFAULT_ROWS,
  caption = "Illustration : rôles fictifs, aucune donnée client.",
  children,
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useSafeReducedMotion();
  const [steps, setSteps] = useState(() => rows.map((r) => r.target));

  useEffect(() => {
    if (!inView || reduceMotion) return undefined;
    const timers = [setTimeout(() => setSteps(rows.map(() => 0)), 0)];
    rows.forEach((row, i) => {
      for (let s = 1; s <= row.target; s += 1) {
        timers.push(
          setTimeout(() => {
            setSteps((prev) => prev.map((v, j) => (j === i ? s : v)));
          }, 500 + i * 260 + s * 700),
        );
      }
    });
    return () => timers.forEach(clearTimeout);
  }, [inView, reduceMotion, rows]);

  return (
    <figure
      ref={ref}
      className={`relative overflow-hidden rounded-[22px] bg-[#0D332B] p-6 text-[#F7FAF8] shadow-[0_50px_90px_-40px_rgba(13,51,43,0.45)] sm:p-8 ${className}`}
    >
      <ul className="border-t border-white/12">
        {rows.map((row, i) => {
          const step = steps[i];
          return (
            <li
              key={row.role}
              className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-white/12 py-4"
            >
              <span className="min-w-0">
                <span className="block text-[15px] font-semibold tracking-[-0.01em]">{row.role}</span>
                <span className="block text-[13px] text-[#B9CBC4]">{row.org}</span>
              </span>
              <span className="flex items-center gap-3">
                {step === 2 && row.slot && (
                  <span className="font-mono text-[0.72rem] tracking-normal text-[#B9CBC4]">
                    {row.slot}
                  </span>
                )}
                <span className="chip-status" data-step={step}>
                  {STATUS[step]}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
      <figcaption className="mt-3 text-[13px] text-[#B9CBC4]/80">{caption}</figcaption>

      {children && <div className="mt-8">{children}</div>}
    </figure>
  );
}
