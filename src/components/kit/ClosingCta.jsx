"use client";

import { useRef } from "react";
import MagneticButton from "../ui/MagneticButton";
import Reveal from "../home/kit/Reveal";
import AgendaGrid from "./AgendaGrid";
import { useBooking } from "../../context/BookingContext";

const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven"];

/*
 * ClosingCta - the last chapter of every page. Full-bleed ink that runs
 * straight into the footer, so each page ends on the same ground it opened
 * on. The aside is the call itself: one slot booked in an empty week.
 *
 * primary / secondary: { label, href } or { label, onClick }. Without a
 * primary, the button opens the booking modal.
 */
export default function ClosingCta({
  title = "Prêt à accélérer votre croissance ?",
  intro = "Réservez un appel stratégique gratuit avec notre équipe. En 30 minutes, nous identifions vos opportunités de croissance.",
  primary,
  secondary,
  slotLabel = "Appel stratégique",
  slotMeta = "30 min · offert",
  aside,
  id,
}) {
  const { openBooking } = useBooking();
  const stageRef = useRef(null);
  const p = primary ?? { label: "Planifier un appel", onClick: openBooking };

  const handlePointerMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <section
      id={id}
      ref={stageRef}
      onPointerMove={handlePointerMove}
      className="hero-stage relative overflow-hidden bg-[#0D332B] text-[#F7FAF8]"
    >
      <AgendaGrid />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20 lg:px-14">
        <div className="min-w-0">
          <Reveal
            as="h2"
            variant="mask"
            className="max-w-[16ch] font-heading text-[clamp(2.3rem,4.8vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#F7FAF8]"
          >
            {title}
          </Reveal>
          {intro && (
            <Reveal
              as="p"
              delay={140}
              className="mt-6 max-w-[46ch] text-lg leading-relaxed text-[#B9CBC4] md:text-xl"
            >
              {intro}
            </Reveal>
          )}
          <Reveal
            delay={240}
            className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <MagneticButton
              href={p.href}
              onClick={p.onClick}
              variant="primary"
              className="w-full whitespace-nowrap sm:w-auto"
            >
              {p.label}
            </MagneticButton>
            {secondary && (
              <MagneticButton
                href={secondary.href}
                onClick={secondary.onClick}
                variant="outline-light"
                className="w-full whitespace-nowrap sm:w-auto"
              >
                {secondary.label}
              </MagneticButton>
            )}
          </Reveal>
        </div>

        {aside ?? <BookedSlot label={slotLabel} meta={slotMeta} />}
      </div>
    </section>
  );
}

/* One empty week with a single lime slot: the call this chapter offers. */
function BookedSlot({ label, meta }) {
  return (
    <Reveal variant="focus" delay={200} className="hidden min-w-0 lg:block" aria-hidden="true">
      <div className="grid grid-cols-5 gap-2">
        {DAYS.map((d) => (
          <span key={d} className="pb-1 font-mono text-[0.7rem] tracking-normal text-[#B9CBC4]/70">
            {d}
          </span>
        ))}
        {Array.from({ length: 14 }).map((_, i) =>
          i === 6 ? (
            <div
              key={i}
              className="col-span-2 flex h-[4.4rem] flex-col justify-between rounded-[10px] bg-[#B0FF5B] px-3 py-2.5 text-[#0D332B] shadow-[0_24px_40px_-24px_rgba(176,255,91,0.55)]"
            >
              <span className="text-[0.82rem] font-semibold leading-tight">{label}</span>
              <span className="font-mono text-[0.68rem] tracking-normal">{meta}</span>
            </div>
          ) : (
            <div
              key={i}
              className="h-[4.4rem] rounded-[10px] border border-[rgba(247,250,248,0.1)]"
            />
          ),
        )}
      </div>
    </Reveal>
  );
}
