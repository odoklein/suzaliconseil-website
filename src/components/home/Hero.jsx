"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "../ui/MagneticButton";
import AgendaField from "./AgendaField";
import useSafeReducedMotion from "../../lib/useSafeReducedMotion";
import { useBooking } from "../../context/BookingContext";

// Même mot-clé que le <title> : « génération de leads B2B » a sa propre page
// (/services/generation-leads-b2b), que l'accueil ne doit pas concurrencer.
const HEADLINE = "Agence de prospection B2B en France";
const WORD_STAGGER_MS = 65;

const GRID_STYLE = {
  backgroundImage:
    "linear-gradient(to right, #F7FAF8 1px, transparent 1px), linear-gradient(to bottom, #F7FAF8 1px, transparent 1px)",
  backgroundSize: "calc(100% / 12) 88px",
};

export default function Hero() {
  const { openBooking } = useBooking();
  const reduceMotion = useSafeReducedMotion();
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  // The copy drifts up as the hero is left; the board stays still.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);

  const handlePointerMove = (e) => {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const words = HEADLINE.split(" ");
  const afterHeadline = words.length * WORD_STAGGER_MS;

  return (
    <section ref={sectionRef} className="relative w-full bg-[#F6F7F4] p-3 sm:p-4 lg:p-5">
      <div
        ref={stageRef}
        onPointerMove={handlePointerMove}
        className="hero-stage relative mx-auto max-w-[1600px] overflow-hidden rounded-[22px] bg-[#0D332B] lg:min-h-[calc(100dvh-96px)]"
      >
        {/* Agenda hairlines: the page's ground is the week it fills. */}
        <div
          className="hero-grid pointer-events-none absolute inset-0 opacity-[0.07]"
          style={GRID_STYLE}
          aria-hidden="true"
        />
        {/* The same grid, lit only around the cursor. */}
        <div
          className="hero-grid-lit pointer-events-none absolute inset-0"
          style={GRID_STYLE}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-12 pt-16 sm:px-8 md:px-12 lg:min-h-[calc(100dvh-96px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:px-14 lg:py-16">
          <motion.div
            className="min-w-0 text-[#F7FAF8]"
            style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}
          >
            <h1 className="max-w-[13ch] break-words font-heading text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#F7FAF8]">
              {words.map((word, i) => (
                <span key={i}>
                  <span className="hero-word">
                    <span
                      className="hero-word-inner"
                      style={{ "--word-delay": `${120 + i * WORD_STAGGER_MS}ms` }}
                    >
                      {word}
                    </span>
                  </span>
                  {i < words.length - 1 && " "}
                </span>
              ))}
            </h1>

            <p
              className="hero-focus mt-7 max-w-[34rem] text-lg leading-relaxed text-[#CFDDD7] lg:text-xl"
              style={{ "--rise-delay": `${afterHeadline + 120}ms` }}
            >
              Prospection commerciale, outbound marketing et solutions
              digitales pour générer des rendez-vous qualifiés et accélérer
              votre croissance.
            </p>

            <div
              className="hero-rise mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
              style={{ "--rise-delay": `${afterHeadline + 240}ms` }}
            >
              <MagneticButton
                onClick={openBooking}
                variant="primary"
                className="w-full whitespace-nowrap sm:w-auto"
              >
                Planifier un appel
              </MagneticButton>

              <MagneticButton
                href="/offres"
                variant="outline-light"
                className="w-full whitespace-nowrap sm:w-auto"
              >
                Découvrir nos offres
              </MagneticButton>
            </div>
          </motion.div>

          <div className="hero-focus min-w-0" style={{ "--rise-delay": "200ms" }}>
            <AgendaField />
          </div>
        </div>
      </div>
    </section>
  );
}
