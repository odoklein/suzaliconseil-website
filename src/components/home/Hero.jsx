"use client";

import MagneticButton from "../ui/MagneticButton";
import PipelineBoard from "./PipelineBoard";
import { useBooking } from "../../context/BookingContext";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="w-full bg-[#F6F7F4] p-3 sm:p-4 lg:p-5">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[22px] bg-[#0D332B] lg:min-h-[calc(100dvh-96px)]">
        {/* Agenda hairlines: the page's ground is the week it fills. */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F7FAF8 1px, transparent 1px), linear-gradient(to bottom, #F7FAF8 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 88px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-12 pt-16 sm:px-8 md:px-12 lg:min-h-[calc(100dvh-96px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:px-14 lg:py-16">
          <div className="min-w-0 text-[#F7FAF8]">
            <h1
              className="hero-rise max-w-[13ch] break-words font-heading text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#F7FAF8]"
              style={{ "--rise-delay": "0ms" }}
            >
              Génération de leads B2B en France
            </h1>

            <p
              className="hero-rise mt-7 max-w-[34rem] text-lg leading-relaxed text-[#CFDDD7] lg:text-xl"
              style={{ "--rise-delay": "90ms" }}
            >
              Prospection commerciale, outbound marketing et solutions
              digitales pour générer des rendez-vous qualifiés et accélérer
              votre croissance.
            </p>

            <div
              className="hero-rise mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
              style={{ "--rise-delay": "180ms" }}
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
          </div>

          <div className="hero-rise min-w-0" style={{ "--rise-delay": "260ms" }}>
            <PipelineBoard />
          </div>
        </div>
      </div>
    </section>
  );
}
