"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitLead } from "../../actions/submitLead";
import { startSmoothScroll, stopSmoothScroll } from "../../lib/smooth-scroll";
import useSafeReducedMotion from "../../lib/useSafeReducedMotion";

const FIELD =
  "w-full rounded-[12px] border border-[#0D332B]/16 bg-[#F6F7F4] px-4 py-3 text-[15px] text-[#0D332B] outline-none transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-[#4E605B]/80 hover:border-[#0D332B]/30 focus:border-[#0D332B] focus:bg-white focus:ring-4 focus:ring-[#B0FF5B]/40";
const LABEL = "mb-2 block text-sm font-semibold text-[#0D332B]";
const EASE = [0.16, 1, 0.3, 1];

export default function LeadModal({ offer, isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useSafeReducedMotion();

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);

  // Lock the page (and pause Lenis, which ignores body overflow) while open.
  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = "hidden";
    stopSmoothScroll();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "unset";
      startSmoothScroll();
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.target);
    formData.append("offerId", offer.id || "");
    formData.append("offerName", offer.name || "");

    const result = await submitLead(formData);

    if (result.success) {
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false); // Reset for next time
      }, 3000);
    } else {
      setErrorMessage(result.error || "Une erreur inconnue est survenue.");
    }
    setIsSubmitting(false);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={onClose}
            className="fixed inset-0 z-[999990] bg-[#07221D]/70 backdrop-blur-sm"
          />

          {/* Modal container */}
          <div className="pointer-events-none fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="lead-modal-title"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="pointer-events-auto relative m-auto flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-[22px] bg-[#FCFDFC] text-[#0D332B] shadow-[0_50px_90px_-40px_rgba(0,0,0,0.6)]"
            >
              {/* Header */}
              <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[#0D332B]/10 px-6 pb-5 pt-6 sm:px-8">
                <div>
                  <h3
                    id="lead-modal-title"
                    className="font-heading text-[1.6rem] font-semibold leading-tight tracking-[-0.035em] md:text-[1.8rem]"
                  >
                    {isSuccess ? "Demande envoyée !" : "Intéressé ?"}
                  </h3>
                  {!isSuccess && (
                    <p className="mt-1.5 text-[15px] leading-relaxed text-[#4E605B]">
                      Vous avez choisi l&apos;offre{" "}
                      <span className="font-semibold text-[#0D332B]">{offer.name}</span>
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fermer"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0D332B]/16 text-[#0D332B] transition-colors hover:border-[#0D332B]/40 hover:bg-[#F6F7F4]"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body (scrollable) */}
              <div data-lenis-prevent className="custom-scrollbar overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
                {isSuccess ? (
                  <div role="status" className="flex flex-col items-center justify-center py-6 text-center md:py-8">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E3FFC4]">
                      <CheckCircle size={30} className="text-[#0D332B]" />
                    </div>
                    <p className="mb-2 font-heading text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                      Merci de votre intérêt !
                    </p>
                    <p className="mx-auto max-w-xs text-[15px] leading-relaxed text-[#4E605B]">
                      Nous avons bien reçu votre demande pour l&apos;offre{" "}
                      <strong className="font-semibold text-[#0D332B]">{offer.name}</strong>. Notre équipe vous
                      recontactera très rapidement.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {errorMessage && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 rounded-[12px] bg-[#FDECEA] p-4 text-sm font-medium text-[#8A1C12]"
                      >
                        <AlertCircle size={18} className="mt-0.5 shrink-0" />
                        <p>{errorMessage}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="lead-fullName" className={LABEL}>
                          Nom complet *
                        </label>
                        <input
                          id="lead-fullName"
                          name="fullName"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Jean Dupont"
                          className={FIELD}
                        />
                      </div>
                      <div>
                        <label htmlFor="lead-phone" className={LABEL}>
                          Téléphone
                        </label>
                        <input
                          id="lead-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="06 12 34 56 78"
                          className={FIELD}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="lead-email" className={LABEL}>
                        Email professionnel *
                      </label>
                      <input
                        id="lead-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="jean@entreprise.com"
                        className={FIELD}
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-companyName" className={LABEL}>
                        Société
                      </label>
                      <input
                        id="lead-companyName"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        placeholder="Votre société"
                        className={FIELD}
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-message" className={LABEL}>
                        Message (optionnel)
                      </label>
                      <textarea
                        id="lead-message"
                        name="message"
                        rows={2}
                        placeholder="Précisez votre besoin..."
                        className={`${FIELD} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-1 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0D332B] px-7 py-3 text-sm font-semibold tracking-[-0.01em] text-[#F7FAF8] transition-colors duration-300 hover:bg-[#1A4D43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                          Envoi...
                        </>
                      ) : (
                        "Envoyer la demande"
                      )}
                    </button>

                    <p className="text-center text-xs leading-relaxed text-[#4E605B]">
                      En cliquant sur envoyer, vous acceptez d&apos;être
                      recontacté par nos équipes.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
