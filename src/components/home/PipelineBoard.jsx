"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/*
 * PipelineBoard - the hero's demonstration of what Suzali delivers: leads move
 * Contacté → Qualifié → RDV planifié, and every booked meeting lands in the
 * week. Roles and sectors only, never company names: this is illustrative
 * data and the caption under the board says so.
 */
const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven"];
const SLOTS = ["9h", "10h", "11h", "14h", "15h", "16h"];
const STEPS = ["Contacté", "Qualifié", "RDV planifié"];

const LEADS = [
  { role: "Directeur commercial", short: "Dir.co", sector: "Industrie", day: 1, slot: 0 },
  { role: "DAF", short: "DAF", sector: "Logistique", day: 3, slot: 1 },
  { role: "Fondatrice", short: "Fond.", sector: "SaaS B2B", day: 0, slot: 2 },
  { role: "Directeur achats", short: "Achats", sector: "BTP", day: 4, slot: 3 },
  { role: "DRH", short: "DRH", sector: "Retail", day: 2, slot: 1 },
  { role: "Dir. marketing", short: "Mkt", sector: "Santé", day: 1, slot: 4 },
  { role: "Gérant", short: "Gérant", sector: "Transport", day: 3, slot: 5 },
  { role: "Directeur général", short: "DG", sector: "Agroalimentaire", day: 0, slot: 4 },
];

const TICK_MS = 720;
const LAST_TICK = (LEADS.length - 1) * 2 + 2;

// Lead i enters the feed at tick 2i, is qualified one tick later, booked the next.
const stepOf = (i, tick) => Math.max(-1, Math.min(2, tick - 2 * i));

export default function PipelineBoard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [running, setTick] = useState(-1);
  // Reduced motion shows the finished week straight away.
  const tick = reduceMotion ? LAST_TICK : running;

  useEffect(() => {
    if (!inView || reduceMotion) return;
    let t = -1;
    const id = setInterval(() => {
      t += 1;
      setTick(t);
      if (t >= LAST_TICK) clearInterval(id);
    }, TICK_MS);
    return () => clearInterval(id);
  }, [inView, reduceMotion]);

  const booked = LEADS.filter((_, i) => stepOf(i, tick) === 2).length;
  const feed = LEADS.map((lead, i) => ({ ...lead, i, step: stepOf(i, tick) }))
    .filter((l) => l.step >= 0)
    .reverse()
    .slice(0, 5);
  const latest = feed[0];

  return (
    <figure ref={ref} className="w-full">
      <div className="overflow-hidden rounded-[20px] bg-[#F6F7F4] text-[#0D332B] shadow-[0_50px_90px_-40px_rgba(2,14,11,0.85)] ring-1 ring-white/10">
        {/* Window bar */}
        <div className="flex items-center justify-between gap-4 border-b border-[#0D332B]/10 px-5 py-3.5 sm:px-6">
          <div className="flex min-w-0 items-baseline gap-2">
            <span className="whitespace-nowrap text-sm font-semibold tracking-[-0.02em]">SuzaLink CRM</span>
            <span className="hidden truncate text-xs text-[#4E605B] sm:inline">Agenda commercial · semaine en cours</span>
          </div>
          <span className="flex shrink-0 items-center gap-2 rounded-full bg-[#0D332B] px-3 py-1 font-mono text-xs text-[#F7FAF8]">
            <span className="tabular-nums text-[#B0FF5B]">{booked}</span>
            RDV planifiés
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          {/* Week */}
          <div className="p-4 sm:p-5">
            {/* Phones get the pipeline as a one-line ticker above the week. */}
            {latest && (
              <div className="mb-4 flex items-center justify-between gap-3 rounded-[12px] bg-[#EEF1EC] px-3 py-2 lg:hidden">
                <span className="min-w-0 truncate text-[13px] font-semibold">
                  {latest.role} <span className="font-normal text-[#4E605B]">· {latest.sector}</span>
                </span>
                <span className="chip-status" data-step={latest.step}>
                  {STEPS[latest.step]}
                </span>
              </div>
            )}
            <div
              className="grid gap-1.5"
              style={{
                gridTemplateColumns: "2.4rem repeat(5, minmax(0, 1fr))",
                gridTemplateRows: `1.6rem repeat(${SLOTS.length}, minmax(2.5rem, 1fr))`,
              }}
            >
              {DAYS.map((d, c) => (
                <div
                  key={d}
                  className="self-center text-center text-xs font-semibold text-[#2C4640]"
                  style={{ gridColumn: c + 2, gridRow: 1 }}
                >
                  {d}
                </div>
              ))}
              {SLOTS.map((s, r) => (
                <div
                  key={s}
                  className="self-center font-mono text-[11px] text-[#5B6E68]"
                  style={{ gridColumn: 1, gridRow: r + 2 }}
                >
                  {s}
                </div>
              ))}
              {SLOTS.map((_, r) =>
                DAYS.map((__, c) => (
                  <div
                    key={`${r}-${c}`}
                    className="rounded-[8px] border border-dashed border-[#0D332B]/12"
                    style={{ gridColumn: c + 2, gridRow: r + 2 }}
                  />
                )),
              )}
              <AnimatePresence>
                {LEADS.map((lead, i) =>
                  stepOf(i, tick) === 2 ? (
                    <motion.div
                      key={lead.role}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.55, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 420, damping: 22 }}
                      className="z-10 flex min-w-0 flex-col justify-center overflow-hidden rounded-[8px] bg-[#B0FF5B] px-1.5 py-1 shadow-[0_6px_14px_-8px_rgba(13,51,43,0.7)]"
                      style={{ gridColumn: lead.day + 2, gridRow: lead.slot + 2 }}
                    >
                      <span className="truncate text-[10px] font-semibold leading-tight sm:text-[11px]" title={`${lead.role} · ${lead.sector}`}>
                        {lead.short}
                      </span>
                      <span className="hidden truncate font-mono text-[10px] leading-tight text-[#1A4D43] sm:block">
                        {SLOTS[lead.slot]}
                      </span>
                    </motion.div>
                  ) : null,
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Pipeline feed */}
          <div className="hidden border-l border-[#0D332B]/10 bg-[#EEF1EC] p-5 lg:block">
            <p className="mb-3 text-xs font-semibold text-[#4E605B]">Pipeline</p>
            <ul className="relative flex flex-col gap-2" aria-live="off">
              <AnimatePresence initial={false}>
                {feed.map((lead) => (
                  <motion.li
                    key={lead.role}
                    layout
                    initial={{ opacity: 0, y: -14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="flex flex-col items-start gap-1.5 rounded-[12px] bg-[#FCFDFC] px-3 py-2.5 ring-1 ring-[#0D332B]/8"
                  >
                    <span className="min-w-0 max-w-full">
                      <span className="block truncate text-[13px] font-semibold leading-tight">
                        {lead.role}
                      </span>
                      <span className="block truncate text-xs text-[#4E605B]">{lead.sector}</span>
                    </span>
                    <span className="chip-status" data-step={lead.step}>
                      {STEPS[lead.step]}
                    </span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-[#B9CBC4]">
        Aperçu de SuzaLink CRM, notre outil de pilotage · données d&apos;illustration
      </figcaption>
    </figure>
  );
}
