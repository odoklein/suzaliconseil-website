"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useBooking } from "../../../context/BookingContext";

export function DigitalHero() {
  const { openBooking } = useBooking();

  return (
    <section className="w-full max-w-[100vw] bg-[#F6F7F4] p-3 sm:p-4 lg:p-5">
      <div className="relative mx-auto min-h-[650px] max-w-[1600px] overflow-hidden rounded-[28px] border border-[#0D332B]/10 bg-[#0D332B] shadow-[0_28px_80px_-48px_rgba(13,51,43,0.78)]">
        <Image
          src="/images/equipeweb.png"
          alt="L'équipe digitale de Suzali Conseil au travail"
          fill
          priority
          sizes="(max-width: 1600px) 100vw, 1600px"
          className="object-cover object-[68%_center]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,34,29,0.96)_0%,rgba(7,34,29,0.88)_36%,rgba(7,34,29,0.48)_62%,rgba(7,34,29,0.12)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(7,34,29,0.34)_0%,transparent_46%)]"
        />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-14 sm:px-8 md:px-12 lg:px-14">
          <div className="w-full min-w-0 max-w-[660px] text-[#F7FAF8]">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#B0FF5B] sm:text-sm">
              Pôle digital
            </p>
            <h1 className="max-w-[650px] break-words font-heading text-[2.15rem] font-bold leading-[1.04] tracking-[-0.045em] sm:text-5xl sm:leading-[1.02] lg:text-[4rem]">
              Le digital qui soutient votre croissance B2B.
            </h1>
            <p className="mt-6 max-w-[580px] text-base font-medium leading-relaxed text-[#E4ECE8] sm:text-lg lg:text-xl">
              Stratégie, sites web, acquisition et automatisation pour faire de
              chaque point de contact un levier de croissance.
            </p>
            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={openBooking}
                className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#B0FF5B] px-6 py-3 text-sm font-bold text-[#0D332B] transition-[background-color,transform,box-shadow] duration-300 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:bg-[#D4FF9D] hover:shadow-[0_16px_34px_-18px_rgba(176,255,91,0.58)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B0FF5B]"
              >
                Planifier un appel
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <Link
                href="#expertises"
                className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/28 bg-white/10 px-6 py-3 text-sm font-bold text-[#F7FAF8] backdrop-blur-sm transition-[background-color,border-color,transform] duration-300 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:border-white/48 hover:bg-white/18 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Voir nos expertises
                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/12"
        />
      </div>
    </section>
  );
}
