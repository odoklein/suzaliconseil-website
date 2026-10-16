"use client";

import React, { useState, useCallback } from "react";
import { CheckCircle, AlertCircle, ArrowRight, ArrowUpRight } from "lucide-react";
import { submitContact } from "./actions";
import { PageHero, ClosingCta } from "../../components/kit";

const CHANNELS = [
  {
    label: "Email",
    note: "Notre canal privilégié",
    value: "contact@suzaliconseil.com",
    href: "mailto:contact@suzaliconseil.com",
  },
  {
    label: "WhatsApp",
    note: "Réponse rapide",
    value: "+33 6 43 63 81 10",
    href: "https://wa.me/33643638110",
    external: true,
  },
  {
    label: "Téléphone",
    note: "Du lundi au vendredi",
    value: "+33 7 57 90 24 79",
    href: "tel:+33757902479",
  },
  {
    label: "Adresse",
    note: "Siège social",
    value: "10 Rue de la Paix, 75002 Paris",
  },
];

const FIELD =
  "w-full rounded-[12px] border border-[#0D332B]/16 bg-[#F6F7F4] px-4 py-3.5 text-[15px] text-[#0D332B] outline-none transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-[#4E605B]/80 hover:border-[#0D332B]/30 focus:border-[#0D332B] focus:bg-white focus:ring-4 focus:ring-[#B0FF5B]/40";
const LABEL = "mb-2 block text-sm font-semibold text-[#0D332B]";

export default function ContactClient() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    setLoading(true);
    setFeedback(null);

    const formData = new FormData(event.target);
    const result = await submitContact(formData);

    if (result.success) {
      setFeedback({ type: "success", message: result.message });
      event.target.reset();
    } else {
      setFeedback({ type: "error", message: result.error });
    }
    setLoading(false);
  }, []);

  const form = (
    <div className="rounded-[22px] bg-[#FCFDFC] p-6 text-[#0D332B] shadow-[0_50px_90px_-40px_rgba(0,0,0,0.6)] sm:p-8 md:p-10">
      <h2 className="font-heading text-[1.7rem] font-semibold leading-tight tracking-[-0.035em] md:text-[2rem]">
        Envoyez-nous un message
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-[#4E605B]">
        Remplissez les détails ci-dessous et nous prendrons contact avec vous rapidement.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {feedback && (
          <div
            role={feedback.type === "error" ? "alert" : "status"}
            className={`flex items-start gap-3 rounded-[12px] p-4 text-sm font-medium ${
              feedback.type === "success"
                ? "bg-[#E3FFC4] text-[#0D332B]"
                : "bg-[#FDECEA] text-[#8A1C12]"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle size={18} className="mt-0.5 shrink-0" />
            ) : (
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
            )}
            <p>{feedback.message}</p>
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={LABEL}>
              Nom complet
            </label>
            <input type="text" id="fullName" name="fullName" required placeholder="Votre nom" autoComplete="name" className={FIELD} />
          </div>
          <div>
            <label htmlFor="email" className={LABEL}>
              Email professionnel
            </label>
            <input type="email" id="email" name="email" required placeholder="exemple@entreprise.com" autoComplete="email" className={FIELD} />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className={LABEL}>
            Sujet
          </label>
          <input type="text" id="subject" name="subject" placeholder="Comment pouvons-nous vous aider ?" className={FIELD} />
        </div>

        <div>
          <label htmlFor="message" className={LABEL}>
            Votre message
          </label>
          <textarea id="message" name="message" required placeholder="Détaillez votre demande…" rows={5} className={`${FIELD} resize-none`} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0D332B] px-7 py-3 text-sm font-semibold tracking-[-0.01em] text-[#F7FAF8] transition-colors duration-300 hover:bg-[#1A4D43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 md:w-auto"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
              Envoi…
            </>
          ) : (
            <>
              Envoyer le message
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </>
          )}
        </button>
      </form>
    </div>
  );

  return (
    <div className="w-full bg-[#F6F7F4]">
      <PageHero
        title="Contactez notre agence de prospection B2B"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        intro="Une question stratégique, un besoin d'accompagnement ou une opportunité commerciale ? Notre équipe vous répond rapidement."
        aside={form}
        align="start"
      >
        {/* The channels, as a ledger drawn on the ink. */}
        <ul className="hero-focus mt-12 max-w-[36rem] border-t border-white/12" style={{ "--rise-delay": "520ms" }}>
          {CHANNELS.map(({ label, note, value, href, external }) => {
            const inner = (
              <>
                <span className="min-w-0">
                  <span className="block text-[15px] font-semibold text-[#F7FAF8]">{label}</span>
                  <span className="block text-sm text-[#B9CBC4]">{note}</span>
                </span>
                <span className="flex min-w-0 items-center gap-2 text-[15px] sm:text-right font-medium tabular-nums text-[#F7FAF8]">
                  <span>{value}</span>
                  {href && <ArrowUpRight size={15} aria-hidden="true" className="shrink-0 text-[#B0FF5B]" />}
                </span>
              </>
            );
            const row = "flex flex-col items-start gap-1.5 border-b border-white/12 px-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6";
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`ledger-row on-ink ${row} outline-none focus-visible:ring-2 focus-visible:ring-[#B0FF5B]`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={row}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </PageHero>

      <ClosingCta
        title="Vous préférez en parler de vive voix ?"
        intro="Réservez un appel stratégique gratuit. En 30 minutes, nous regardons votre situation et vous disons par où commencer."
        secondary={{ label: "Voir nos offres", href: "/offres" }}
      />
    </div>
  );
}
