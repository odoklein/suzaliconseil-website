"use client";

import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import ParticleField from "../ui/ParticleField";
import { TrendingUp, Target, BarChart3, PieChart } from "lucide-react";
import { useBooking } from "../../context/BookingContext";

export default function Hero() {
  const { openBooking } = useBooking();
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.55,
  });
  const visualY = useTransform(smoothProgress, [0, 1], [0, 16]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[calc(100dvh-72px)] w-full items-center overflow-hidden bg-[#F6F7F4] py-16 text-[#0D332B] md:py-20"
    >
      {/* Particle Field */}
      <ParticleField
        particleCount={0}
        color="rgba(176, 255, 91, 0.4)"
        maxSize={2.5}
        speed={0.2}
      />

      {/* Orbit Rings - Background Decoration */}
      <div
        className="orbit-ring"
        style={{
          width: 500,
          height: 500,
          top: "10%",
          right: "4%",
          opacity: 0.5,
          animation: "none",
        }}
      />
      <div
        className="orbit-ring hidden lg:block"
        style={{
          width: 700,
          height: 700,
          top: "4%",
          right: "-12%",
          opacity: 0.32,
          animation: "none",
        }}
      />

      {/* Subtle Dot Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-dots opacity-[0.025]" />

      {/* Abstract Watermark Icons - Faded Background Elements */}
      <div className="pointer-events-none absolute right-[8%] top-[18%] hidden text-[#0D332B] opacity-[0.055] lg:block">
        <TrendingUp size={250} strokeWidth={1} />
      </div>
      <div className="pointer-events-none absolute bottom-[10%] right-[5%] hidden text-[#0D332B] opacity-[0.05] lg:block">
        <Target size={220} strokeWidth={1} />
      </div>
      <div className="pointer-events-none absolute right-[27%] top-[12%] hidden text-[#0D332B] opacity-[0.035] xl:block">
        <PieChart size={150} strokeWidth={1} />
      </div>
      <div className="pointer-events-none absolute bottom-[16%] right-[27%] hidden text-[#0D332B] opacity-[0.035] xl:block">
        <BarChart3 size={170} strokeWidth={1} />
      </div>

      {/* Morphing Gradient Blobs */}
      <div className="pointer-events-none absolute right-[7%] top-[18%] h-[430px] w-[430px] rounded-[28px] bg-[#E3FFC4] opacity-70" />
      <motion.div
        className="pointer-events-none absolute bottom-[12%] right-[18%] h-[260px] w-[260px] rounded-full bg-[#B0FF5B] opacity-35 blur-[90px]"
        style={{ y: reduceMotion ? 0 : visualY }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-4 text-left sm:px-6 lg:px-8">
        {/* Badge */}
        <div
          className="hero-rise mb-6 inline-flex items-center gap-2 rounded-full border border-[#0D332B]/10 bg-[#FCFDFC]/80 px-4 py-2 text-xs font-semibold text-[#315048] shadow-[0_10px_24px_-20px_rgba(13,51,43,0.5)] backdrop-blur-md md:text-sm"
          style={{ "--rise-delay": "0ms" }}
        >
          <span className="h-2 w-2 rounded-full bg-[#85C947]" />
          Agence B2B • Paris, France
        </div>

        {/* Main Heading — delay 0 so it stays eligible as the LCP element */}
        <div className="mb-4 max-w-[760px] lg:w-[58%]">
          <h1
            className="hero-rise max-w-5xl font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] !text-[#0D332B] sm:text-5xl lg:text-[4rem] xl:text-[4.35rem]"
            style={{ "--rise-delay": "0ms" }}
          >
            Génération de Leads{" "}
            <span className="inline-block underline decoration-[#B0FF5B] decoration-[10px] underline-offset-[-5px] [text-decoration-skip-ink:none]">
              B2B
            </span>{" "}
            en
            France
          </h1>
        </div>

        {/* Subheading */}
        <h2
          className="hero-rise mb-6 max-w-[680px] text-lg font-semibold leading-snug !text-[#173D35] md:text-xl lg:w-[56%] lg:text-2xl"
          style={{ "--rise-delay": "90ms" }}
        >
          Prospection commerciale, téléprospection et outbound marketing
        </h2>

        {/* Description */}
        <p
          className="hero-rise mb-9 max-w-2xl text-base font-normal leading-relaxed !text-[#52635F] md:text-lg lg:w-[54%]"
          style={{ "--rise-delay": "180ms" }}
        >
          Suzali Conseil, agence spécialisée en génération de leads B2B en
          France, aide les entreprises à structurer leur prospection
          commerciale, automatiser leurs campagnes outbound et générer des
          rendez-vous qualifiés.
        </p>

        {/* Buttons */}
        <div
          className="hero-rise flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
          style={{ "--rise-delay": "270ms" }}
        >
          <MagneticButton
            onClick={openBooking}
            variant="primary"
            className="w-full sm:w-auto"
          >
            Audit gratuit de prospection
          </MagneticButton>

          <MagneticButton
            href="/offres"
            variant="outline"
            className="w-full sm:w-auto"
          >
            Voir nos tarifs
          </MagneticButton>
        </div>

        {/* Scroll Indicator */}
        <div
          className="hero-rise mt-10 flex flex-col items-start gap-2 text-[#65746F]"
          style={{ "--rise-delay": "360ms" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em]">
            Découvrir
          </span>
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-[#0D332B]/20 p-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#85C947]" />
          </div>
        </div>
      </div>
    </section>
  );
}
