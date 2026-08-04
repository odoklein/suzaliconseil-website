import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Handshake } from "lucide-react";
import Breadcrumbs from "../../ui/Breadcrumbs";

export function CommercialHero() {
  return (
    <>
    <section className="w-full max-w-[100vw] overflow-hidden bg-[#F6F7F4] px-3 pb-10 pt-24 sm:px-4 lg:px-5 lg:pb-12">
      <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-3">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            {
              label: "Performance commerciale",
              href: "/services/commercial",
            },
          ]}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1600px] overflow-hidden rounded-[28px] border border-[#0D332B]/10 bg-[#0D332B] shadow-[0_30px_80px_-48px_rgba(13,51,43,0.8)] lg:min-h-[640px] lg:grid-cols-[1.02fr_0.98fr] xl:min-h-[680px]">
        <div className="relative flex items-center overflow-hidden px-6 py-14 sm:px-10 md:px-14 lg:px-16 lg:py-16 xl:px-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-35"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(176,255,91,0.22), transparent 30%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "auto, 48px 48px, 48px 48px",
            }}
          />

          <div className="relative w-full min-w-0 max-w-[680px] text-[#F7FAF8]">
            <p
              className="hero-rise flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C8FF90] sm:text-sm"
              style={{ "--rise-delay": "0ms" }}
            >
              <Handshake size={17} strokeWidth={1.7} aria-hidden="true" />
              Prospection commerciale B2B
            </p>

            <h1
              className="hero-rise mt-6 max-w-[650px] font-heading text-[2.55rem] font-bold leading-[1.01] tracking-[-0.048em] text-[#F7FAF8] sm:text-5xl md:text-6xl xl:text-[4.3rem]"
              style={{ "--rise-delay": "70ms" }}
            >
              Accélérez votre prospection B2B
            </h1>

            <p
              className="hero-rise mt-6 max-w-[62ch] text-base font-medium leading-relaxed text-[#DCE8E3] sm:text-lg"
              style={{ "--rise-delay": "140ms" }}
            >
              De la structuration de votre force de vente à la génération de
              leads qualifiés.
            </p>

            <div
              className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--rise-delay": "210ms" }}
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#B0FF5B] px-6 py-3.5 text-sm font-bold text-[#0D332B] transition-[background-color,transform,box-shadow] duration-300 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:bg-[#C2FF80] hover:shadow-[0_18px_36px_-18px_rgba(176,255,91,0.7)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B0FF5B]"
              >
                Audit de prospection gratuit
                <ArrowRight
                  size={18}
                  strokeWidth={1.9}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#services"
                className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 bg-white/8 px-6 py-3.5 text-sm font-bold text-white transition-[background-color,border-color,transform] duration-300 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/14 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Découvrir nos solutions
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.9}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-rise relative min-h-[440px] overflow-hidden border-t border-white/10 bg-[#DDE5E1] sm:min-h-[520px] lg:min-h-full lg:border-l lg:border-t-0" style={{ "--rise-delay": "110ms" }}>
          <Image
            src="/images/equipeprospection.png"
            alt="L'équipe de prospection commerciale de Suzali Conseil dans ses bureaux"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 49vw"
            className="object-cover object-[center_42%] transition-transform duration-700 ease-[var(--ease-premium)] hover:scale-[1.015]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_65%,rgba(7,34,29,0.2)_100%)]"
            aria-hidden="true"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/10"
          aria-hidden="true"
        />
      </div>
    </section>

    <section
      aria-label="Notre approche commerciale"
      className="bg-[#F6F7F4] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      <p className="mx-auto max-w-5xl font-heading text-2xl font-bold leading-[1.2] tracking-[-0.03em] text-[#0D332B] sm:text-3xl lg:text-4xl">
        Nous déployons les meilleures stratégies de prospection commerciale B2B
        en France pour booster votre croissance.
      </p>
    </section>
    </>
  );
}
