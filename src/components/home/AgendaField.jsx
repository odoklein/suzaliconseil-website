"use client";

import { useInView } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import useSafeReducedMotion from "../../lib/useSafeReducedMotion";

/*
 * AgendaField - the hero's visual. The week is drawn straight onto the ink in
 * hairlines (no window, no panel), and a "now" line sweeps across it, booking
 * each meeting as it passes; once the week is full, the DG meeting is ticked
 * and its contract signed. The whole timeline is CSS (see "Hero agenda" in
 * globals.css): React only starts it and counts the bookings as they land.
 * Roles only, never company names: the data is illustrative and the caption
 * says so.
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
// The meeting that ends in a signed contract.
const DEAL = MEETINGS[0];

// Where the sweep is (0 → 1 across the week) when each meeting gets booked.
const bookedAt = ({ day, slot }) => (day + 0.2 + (slot / SLOTS.length) * 0.6) / DAYS.length;

// The sweep is linear: it is time passing, so each booking lands exactly when
// the line crosses it.
const START_MS = 400;
const SWEEP_MS = 2200;
const TIMELINE = {
  "--start": `${START_MS}ms`,
  "--sweep": `${SWEEP_MS}ms`,
  "--end": `${START_MS + SWEEP_MS}ms`,
};

// A hand-written signature and its underline (viewBox 0 0 140 44).
const SIGNATURE =
  "M8 30 C6 18 12 8 18 10 C24 12 16 30 22 32 C26 33 28 20 32 14 C34 26 34 31 38 30 C42 29 44 20 46 18 C46 26 48 31 52 29 C56 27 56 20 60 20 C64 20 62 30 67 29 C72 28 74 16 78 8 C76 18 74 28 80 29 C86 30 88 20 92 21 C96 22 92 29 97 29 C103 29 108 18 114 17 C120 16 118 26 124 24 C128 23 131 19 134 16";
const FLOURISH = "M12 38 C45 33 90 33 132 30";
const SIGN_DELAY_MS = 350; // after the sweep, the check lands first
const SIGN_MS = 1100;
const FLOURISH_MS = 260;

export default function AgendaField() {
  const ref = useRef(null);
  const signRef = useRef(null);
  const flourishRef = useRef(null);
  const nibRef = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useSafeReducedMotion();
  const [count, setCount] = useState(0);
  // idle → signing (the pen is writing) → signed
  const [ink, setInk] = useState("idle");

  // Reduced motion shows the finished week, and the contract, straight away.
  const play = inView && !reduceMotion;
  const shown = play || reduceMotion;
  const booked = reduceMotion ? MEETINGS.length : count;
  const signed = reduceMotion || ink === "signed";

  // A booking counts the moment its slot starts painting, not on a timer.
  const onBook = (e) => {
    if (e.target === e.currentTarget) setCount((c) => c + 1);
  };
  // The signature waits for the week to be full, whatever the frame rate.
  const onSweepEnd = (e) => {
    if (e.target === e.currentTarget) setInk("signing");
  };

  // The pen writes the signature: the stroke is revealed along its real
  // length and a nib rides its tip, then the underline is struck.
  useLayoutEffect(() => {
    if (ink !== "signing") return;
    const sign = signRef.current;
    const flourish = flourishRef.current;
    const nib = nibRef.current;
    if (!sign || !flourish || !nib || !sign.animate) {
      setInk("signed");
      return;
    }
    const reveal = (path, duration, delay, easing) => {
      const len = path.getTotalLength();
      return path.animate(
        [
          { strokeDasharray: `${len} ${len}`, strokeDashoffset: len },
          { strokeDasharray: `${len} ${len}`, strokeDashoffset: 0 },
        ],
        { duration, delay, easing, fill: "both" },
      );
    };
    const len = sign.getTotalLength();
    const stroke = reveal(sign, SIGN_MS, SIGN_DELAY_MS, "cubic-bezier(0.65, 0, 0.35, 1)");
    const underline = reveal(flourish, FLOURISH_MS, SIGN_DELAY_MS + SIGN_MS - 60, "cubic-bezier(0.23, 1, 0.32, 1)");

    let frame;
    const follow = () => {
      const p = stroke.effect.getComputedTiming().progress;
      const writing = p !== null && p > 0 && p < 1;
      if (writing) {
        const pt = sign.getPointAtLength(p * len);
        nib.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
      }
      nib.style.opacity = writing ? "1" : "0";
      frame = requestAnimationFrame(follow);
    };
    frame = requestAnimationFrame(follow);

    let cancelled = false;
    Promise.all([stroke.finished, underline.finished])
      .then(() => !cancelled && setInk("signed"))
      .catch(() => {});
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      nib.style.opacity = "0";
      // Once signed, dropping the animations leaves the full stroke in place.
      stroke.cancel();
      underline.cancel();
    };
  }, [ink]);

  return (
    <figure ref={ref} className={`w-full ${play ? "agenda-play" : ""}`} style={TIMELINE}>
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
                  "--slot-delay": `${120 + (r + c) * 24}ms`,
                }}
              />
            )),
          )}

          {shown &&
            MEETINGS.map((m) => (
              <div
                key={m.role}
                onAnimationStart={onBook}
                className="agenda-booked relative z-10 flex min-w-0 flex-col justify-between overflow-hidden rounded-[10px] bg-[#B0FF5B] px-2 py-1.5 text-[#0D332B]"
                style={{
                  gridColumn: m.day + 2,
                  gridRow: m.slot + 2,
                  "--at": `${Math.round(START_MS + bookedAt(m) * SWEEP_MS)}ms`,
                }}
              >
                <span className="agenda-label truncate text-[11px] font-semibold leading-tight sm:text-xs" title={m.role}>
                  <span className="sm:hidden">{m.short}</span>
                  <span className="hidden sm:inline">{m.role}</span>
                </span>
                <span className="agenda-label hidden font-mono text-[10px] leading-none text-[#1A4D43] sm:block">
                  {SLOTS[m.slot]}
                </span>
                {m === DEAL && (
                  <svg viewBox="0 0 12 12" className="absolute right-1.5 top-1.5 h-3 w-3" aria-hidden="true">
                    <path
                      className="agenda-check"
                      d="M2 6.4 4.8 9 10 3"
                      pathLength="1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
        </div>

        {/* The "now" line, sweeping the five days. */}
        {play && (
          <div
            className="pointer-events-none absolute bottom-0 right-0 top-[1.75rem] z-20"
            style={{ left: "calc(2.6rem + 0.5rem)" }}
            aria-hidden="true"
          >
            <div className="agenda-sweep absolute inset-0" onAnimationEnd={onSweepEnd}>
              <div className="agenda-now absolute inset-y-0 left-0 w-px" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-7 flex items-end justify-between gap-4 border-t border-[#F7FAF8]/10 pt-5 sm:gap-6">
        <div className="flex items-end gap-3 text-[#F7FAF8]">
          {/* Each new figure rolls up into a fixed window, so nothing shifts. */}
          <span className="inline-block h-[1em] overflow-hidden font-heading text-[clamp(2.6rem,4vw,3.6rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums">
            <span key={booked} className="count-roll block">
              {booked}
            </span>
          </span>
          <span className="max-w-[12rem] text-sm leading-snug text-[#CFDDD7]">
            rendez-vous qualifiés planifiés cette semaine
          </span>
        </div>

        {/* The contract line. Its space is always reserved, so nothing shifts
            when the signature arrives. */}
        <div className="w-[8.5rem] shrink-0 sm:w-[10.5rem]" role="img" aria-label="Contrat signé avec le DG">
          <svg
            viewBox="0 0 140 44"
            className={`h-10 w-full overflow-visible text-[#B0FF5B] sm:h-11 ${reduceMotion || ink !== "idle" ? "" : "opacity-0"}`}
            aria-hidden="true"
          >
            <path
              ref={signRef}
              d={SIGNATURE}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={flourishRef}
              d={FLOURISH}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.55"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            {/* The pen: a bright tip with a soft halo, riding the stroke. */}
            <g ref={nibRef} style={{ opacity: 0 }}>
              <circle r="5.5" fill="currentColor" opacity="0.2" />
              <circle r="2.1" fill="#F7FAF8" />
            </g>
          </svg>
          <div className="flex justify-between border-t border-[#F7FAF8]/15 pt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#B9CBC4]">
            <span className={signed ? "agenda-signed" : "opacity-0"}>Signé · {DEAL.short}</span>
            <span className={signed ? "agenda-signed" : "opacity-0"}>Ven.</span>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-right text-xs text-[#B9CBC4]">
        Données d&apos;illustration
      </figcaption>
    </figure>
  );
}
