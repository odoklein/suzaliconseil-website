"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useSafeReducedMotion from "../../lib/useSafeReducedMotion";

/*
 * AgendaField - the hero's visual. The week is drawn straight onto the ink in
 * hairlines (no window, no panel), and a "now" line sweeps across it, booking
 * each meeting as it passes. Roles only, never company names: the data is
 * illustrative and the caption says so.
 */
const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven"];
const SLOTS = ["9h", "10h", "11h", "14h", "15h", "16h"];

const MEETINGS = [
  { role: "DG", short: "DG", day: 0, slot: 4 },
  { role: "Fondatrice", short: "Fond.", day: 0, slot: 1 },
  { role: "Dir. commercial", short: "Dir.co", day: 1, slot: 0 },
  { role: "Dir. marketing", short: "Mkt", day: 1, slot: 3 },
  { role: "DRH", short: "DRH", day: 2, slot: 1 },
  { role: "DAF", short: "DAF", day: 3, slot: 2 },
  { role: "Gérant", short: "Gér.", day: 3, slot: 5 },
  { role: "Dir. achats", short: "Achats", day: 4, slot: 3 },
];

// Where the sweep is (0 → 1 across the week) when each meeting gets booked.
const bookedAt = ({ day, slot }) => (day + 0.2 + (slot / SLOTS.length) * 0.6) / DAYS.length;
const IN_ORDER = [...MEETINGS].sort((a, b) => bookedAt(a) - bookedAt(b));
const countAt = (v) => IN_ORDER.filter((m) => bookedAt(m) <= v).length;

const SWEEP_S = 4.2;
const START_S = 0.9;
const EASE = [0.16, 1, 0.3, 1];

export default function AgendaField() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useSafeReducedMotion();
  const progress = useMotionValue(0);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  // Re-render only when a meeting lands, not on every frame of the sweep.
  useMotionValueEvent(progress, "change", (v) => setCount(countAt(v)));

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(progress, 1, {
      duration: SWEEP_S,
      delay: START_S,
      ease: [0.3, 0, 0.25, 1],
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, progress]);

  // Reduced motion shows the finished week straight away.
  const booked = IN_ORDER.slice(0, reduceMotion ? IN_ORDER.length : count);
  const lineLeft = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <figure ref={ref} className="w-full">
      <div className="agenda-field relative">
        <div
          className="grid gap-1.5 sm:gap-2"
          style={{
            gridTemplateColumns: "2.6rem repeat(5, minmax(0, 1fr))",
            gridTemplateRows: `1.75rem repeat(${SLOTS.length}, var(--agenda-row))`,
          }}
        >
          {DAYS.map((d, c) => (
            <div
              key={d}
              className="self-center font-mono text-[11px] uppercase tracking-[0.08em] text-[#B9CBC4]"
              style={{ gridColumn: c + 2, gridRow: 1 }}
            >
              {d}
            </div>
          ))}
          {SLOTS.map((s, r) => (
            <div
              key={s}
              className="self-start pt-1 font-mono text-[11px] text-[#B9CBC4]/80"
              style={{ gridColumn: 1, gridRow: r + 2 }}
            >
              {s}
            </div>
          ))}
          {SLOTS.map((_, r) =>
            DAYS.map((__, c) => (
              <div
                key={`${r}-${c}`}
                className="slot-in rounded-[10px] border border-[#F7FAF8]/[0.09]"
                style={{
                  gridColumn: c + 2,
                  gridRow: r + 2,
                  "--slot-delay": `${300 + (r + c) * 40}ms`,
                }}
              />
            )),
          )}

          <AnimatePresence>
            {booked.flatMap((m) => [
              !reduceMotion && (
                <motion.span
                  key={`${m.role}-ring`}
                  aria-hidden="true"
                  initial={{ opacity: 0.8, scale: 0.9 }}
                  animate={{ opacity: 0, scale: 1.3 }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="pointer-events-none rounded-[12px] ring-1 ring-[#B0FF5B]"
                  style={{ gridColumn: m.day + 2, gridRow: m.slot + 2 }}
                />
              ),
              <motion.div
                key={m.role}
                initial={
                  reduceMotion ? false : { clipPath: "inset(0% 100% 0% 0% round 10px)" }
                }
                animate={{ clipPath: "inset(0% 0% 0% 0% round 10px)" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="z-10 flex min-w-0 flex-col justify-between overflow-hidden rounded-[10px] bg-[#B0FF5B] px-2 py-1.5 text-[#0D332B]"
                style={{ gridColumn: m.day + 2, gridRow: m.slot + 2 }}
              >
                <span className="truncate text-[11px] font-semibold leading-tight sm:text-xs" title={m.role}>
                  <span className="sm:hidden">{m.short}</span>
                  <span className="hidden sm:inline">{m.role}</span>
                </span>
                <span className="hidden font-mono text-[10px] leading-none text-[#1A4D43] sm:block">
                  {SLOTS[m.slot]}
                </span>
              </motion.div>,
            ])}
          </AnimatePresence>
        </div>

        {/* The "now" line, sweeping the five days. */}
        {!reduceMotion && (
          <div
            className="pointer-events-none absolute bottom-0 right-0 top-[1.75rem] z-20"
            style={{ left: "calc(2.6rem + 0.5rem)" }}
            aria-hidden="true"
          >
            <motion.div
              className="agenda-now absolute inset-y-0 w-px"
              style={{ left: lineLeft }}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView && !done ? 1 : 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            />
          </div>
        )}
      </div>

      <div className="mt-7 flex items-end justify-between gap-6 border-t border-[#F7FAF8]/10 pt-5">
        <div className="flex items-end gap-3 text-[#F7FAF8]">
          {/* Each new figure rolls up into a fixed window, so nothing shifts. */}
          <span className="inline-block h-[1em] overflow-hidden font-heading text-[clamp(2.6rem,4vw,3.6rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums">
            <span key={booked.length} className="count-roll block">
              {booked.length}
            </span>
          </span>
          <span className="max-w-[12rem] text-sm leading-snug text-[#CFDDD7]">
            rendez-vous qualifiés planifiés cette semaine
          </span>
        </div>
        <figcaption className="text-right text-xs text-[#B9CBC4]">
          Données d&apos;illustration
        </figcaption>
      </div>
    </figure>
  );
}
