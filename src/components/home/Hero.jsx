"use client";

import Image from "next/image";
import MagneticButton from "../ui/MagneticButton";
import { useBooking } from "../../context/BookingContext";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="w-full bg-[#F6F7F4] p-3 sm:p-4 lg:p-5">
      <div className="relative mx-auto min-h-[calc(100dvh-96px)] max-w-[1600px] overflow-hidden rounded-[14px] border border-[#0D332B]/10 bg-[#0D332B] shadow-[0_28px_80px_-48px_rgba(13,51,43,0.78)]">
        <Image
          src="/images/hero-office.webp"
          alt="Les bureaux lumineux de Suzali Conseil"
          fill
          priority
          sizes="(max-width: 1600px) 100vw, 1600px"
          className="object-cover object-[60%_center] sm:object-center"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,34,29,0.94)_0%,rgba(7,34,29,0.82)_32%,rgba(7,34,29,0.32)_64%,rgba(7,34,29,0.08)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(7,34,29,0.28)_0%,transparent_42%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-96px)] w-full max-w-7xl items-center px-6 py-14 sm:px-8 md:px-12 md:py-16 lg:px-14">
          <div className="min-w-0 w-full max-w-[680px] text-left text-[#F7FAF8]">
            <h1
              className="hero-rise max-w-[650px] break-words font-heading text-[2.05rem] font-bold leading-[1.04] tracking-[-0.045em] text-[#F7FAF8] sm:text-5xl sm:leading-[1.02] lg:text-[4rem]"
              style={{ "--rise-delay": "0ms" }}
            >
              Génération de leads B2B en France
            </h1>

            <p
              className="hero-rise mt-6 max-w-[590px] text-base font-medium leading-relaxed text-[#E4ECE8] sm:text-lg lg:text-xl"
              style={{ "--rise-delay": "90ms" }}
            >
              Prospection commerciale, outbound marketing et solutions
              digitales pour générer des rendez-vous qualifiés et accélérer
              votre croissance.
            </p>

            <div
              className="hero-rise mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
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
        </div>

        <div
          className="pointer-events-none absolute inset-[1px] rounded-[13px] border border-white/12"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
