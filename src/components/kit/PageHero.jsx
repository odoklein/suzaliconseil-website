"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import AgendaGrid from "./AgendaGrid";

const WORD_STAGGER_MS = 55;

/*
 * PageHero - the homepage's opening chapter, carried to every inner page.
 * An inset ink stage on paper, the agenda hairlines as its ground (lit around
 * the cursor), a headline whose words rise out of line masks, and an optional
 * aside: an image, or any node a page needs (a form, a figure, a price).
 *
 * The title is plain text on purpose: emphasis on ink comes from size and
 * white, never from a lime or gradient word.
 */
export default function PageHero({
  title,
  intro,
  breadcrumbs,
  actions,
  meta,
  image,
  imageAlt = "",
  imagePosition = "center",
  imageCaption,
  aside,
  size = "lg",
  align = "center",
  className = "",
  children,
}) {
  const stageRef = useRef(null);
  const hasAside = Boolean(image || aside);
  const words = String(title).split(" ");
  const afterHeadline = words.length * WORD_STAGGER_MS;

  const handlePointerMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const titleSize =
    size === "xl"
      ? "text-[clamp(2.6rem,6.2vw,5.6rem)] max-w-[14ch]"
      : hasAside
        ? "text-[clamp(2.4rem,4.6vw,4.4rem)] max-w-[15ch]"
        : "text-[clamp(2.5rem,5.4vw,5rem)] max-w-[18ch]";

  return (
    <section className={`relative w-full bg-[#F6F7F4] p-3 sm:p-4 lg:p-5 ${className}`}>
      <div
        ref={stageRef}
        onPointerMove={handlePointerMove}
        className="hero-stage relative mx-auto max-w-[1600px] overflow-hidden rounded-[22px] bg-[#0D332B]"
      >
        <AgendaGrid />

        <div
          className={`relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 pb-12 pt-10 sm:px-8 md:px-12 lg:gap-14 lg:px-14 lg:pb-16 lg:pt-12 ${
            hasAside
              ? "lg:min-h-[min(74vh,720px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]"
              : "lg:min-h-[min(60vh,560px)]"
          } ${align === "end" ? "items-end" : "items-center"}`}
        >
          <div className="min-w-0 text-[#F7FAF8]">
            {breadcrumbs?.length > 0 && <InkCrumbs items={breadcrumbs} />}

            <h1
              className={`break-words font-heading font-semibold leading-[0.98] tracking-[-0.045em] text-[#F7FAF8] ${titleSize}`}
            >
              {words.map((word, i) => (
                <span key={i}>
                  <span className="hero-word">
                    <span
                      className="hero-word-inner"
                      style={{ "--word-delay": `${80 + i * WORD_STAGGER_MS}ms` }}
                    >
                      {word}
                    </span>
                  </span>
                  {i < words.length - 1 && " "}
                </span>
              ))}
            </h1>

            {intro && (
              <div
                className="hero-focus mt-7 max-w-[36rem] text-lg leading-relaxed text-[#CFDDD7] lg:text-xl [&_strong]:font-semibold [&_strong]:text-[#F7FAF8]"
                style={{ "--rise-delay": `${afterHeadline + 100}ms` }}
              >
                {intro}
              </div>
            )}

            {meta && (
              <div
                className="hero-focus mt-6 font-mono text-[0.8rem] tracking-normal text-[#B9CBC4]"
                style={{ "--rise-delay": `${afterHeadline + 160}ms` }}
              >
                {meta}
              </div>
            )}

            {actions && (
              <div
                className="hero-rise mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
                style={{ "--rise-delay": `${afterHeadline + 220}ms` }}
              >
                {actions}
              </div>
            )}

            {children}
          </div>

          {hasAside && (
            <div className="hero-focus min-w-0" style={{ "--rise-delay": "180ms" }}>
              {aside ?? (
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#1A4D43] shadow-[0_50px_90px_-40px_rgba(0,0,0,0.6)] lg:aspect-[5/6] lg:max-h-[600px]">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: imagePosition }}
                    />
                  </div>
                  {imageCaption && (
                    <figcaption className="mt-3 text-sm text-[#B9CBC4]">{imageCaption}</figcaption>
                  )}
                </figure>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* Breadcrumbs drawn on the ink: same trail and JSON-LD as <Breadcrumbs />. */
function InkCrumbs({ items }) {
  const base = "https://suzaliconseil.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: base },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        item: `${base}${item.href}`,
      })),
    ],
  };

  return (
    <nav aria-label="Fil d'Ariane" className="hero-focus mb-8 lg:mb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#B9CBC4]">
        <li>
          <Link href="/" className="rounded transition-colors hover:text-[#F7FAF8]">
            Accueil
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              <ChevronRight size={13} className="text-[#B9CBC4]/50" aria-hidden="true" />
              {last ? (
                <span aria-current="page" className="text-[#F7FAF8]">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="rounded transition-colors hover:text-[#F7FAF8]">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
