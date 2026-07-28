"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitLead } from "../../actions/submitLead";

export default function LeadModal({ offer, isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999990]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-2 sm:p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl md:rounded-[32px] w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh] relative m-auto border border-gray-100 pointer-events-auto"
            >
              {/* Decorative Header Pattern */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />

              {/* Header */}
              <div className="relative p-4 sm:p-6 sm:px-8 border-b border-gray-100 flex justify-between items-start bg-white/50 backdrop-blur-sm z-10 shrink-0">
                <div className="pt-1 md:pt-2">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-[#0D332B]">
                    {isSuccess ? "Demande envoyée !" : "Intéressé ?"}
                  </h3>
                  {!isSuccess && (
                    <p className="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1 max-w-[200px] md:max-w-[280px]">
                      Vous avez choisi l&apos;offre{" "}
                      <span className="font-bold text-[#1A6D48]">
                        {offer.name}
                      </span>
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={18} className="text-[#0D332B]" />
                </button>
              </div>

              {/* Body (Scrollable) */}
              <div className="p-5 sm:p-6 sm:px-8 md:p-8 overflow-y-auto relative z-10 custom-scrollbar">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-6 md:py-8 text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={36} className="text-green-600" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-[#0D332B] mb-2 md:mb-3">
                      Merci de votre intérêt !
                    </h4>
                    <p className="text-sm md:text-base text-gray-500 max-w-xs mx-auto">
                      Nous avons bien reçu votre demande pour l&apos;offre{" "}
                      <strong>{offer.name}</strong>. Notre équipe vous
                      recontactera très rapidement.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 md:gap-5"
                  >
                    {errorMessage && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs md:text-sm font-medium border border-red-100">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-3 md:space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                            Nom complet *
                          </label>
                          <input
                            name="fullName"
                            type="text"
                            required
                            placeholder="Jean Dupont"
                            className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#1A6D48]/25 focus:ring-4 focus:ring-[#1A6D48]/10 outline-none transition-all placeholder:text-gray-300 font-medium text-sm md:text-base text-[#0D332B]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                            Téléphone
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            placeholder="06 12 34 56 78"
                            className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#1A6D48]/25 focus:ring-4 focus:ring-[#1A6D48]/10 outline-none transition-all placeholder:text-gray-300 font-medium text-sm md:text-base text-[#0D332B]"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                          Email professionnel *
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="jean@entreprise.com"
                          className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#1A6D48]/25 focus:ring-4 focus:ring-[#1A6D48]/10 outline-none transition-all placeholder:text-gray-300 font-medium text-sm md:text-base text-[#0D332B]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                          Société
                        </label>
                        <input
                          name="companyName"
                          type="text"
                          placeholder="Votre société"
                          className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#1A6D48]/25 focus:ring-4 focus:ring-[#1A6D48]/10 outline-none transition-all placeholder:text-gray-300 font-medium text-sm md:text-base text-[#0D332B]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                          Message (optionnel)
                        </label>
                        <textarea
                          name="message"
                          rows={2}
                          placeholder="Précisez votre besoin..."
                          className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#1A6D48]/25 focus:ring-4 focus:ring-[#1A6D48]/10 outline-none transition-all placeholder:text-gray-300 font-medium text-sm md:text-base text-[#0D332B] resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 w-full py-3 md:py-4 rounded-xl font-extrabold text-center text-[#0D332B] bg-[#B0FF5B] hover:bg-[#9BEA45] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#B0FF5B]/25 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] text-sm md:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Envoi...
                        </>
                      ) : (
                        "Envoyer la demande"
                      )}
                    </button>

                    <p className="text-[10px] md:text-xs text-center text-gray-400 mt-1 md:mt-2">
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
