"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const BookingContext = createContext({
  openBooking: () => {},
});

export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when modal is open
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

  const openBooking = () => setIsOpen(true);
  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 perspective-1000"
            role="dialog"
            aria-modal="true"
            aria-label="Prendre rendez-vous avec Suzali Conseil"
          >
            {/* Backdrop with heavy blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBooking}
              className="absolute inset-0 bg-[#001A15]/80 backdrop-blur-xl transition-all"
            />

            {/* 3D Modal Container */}
            <motion.div
              initial={{ opacity: 0, rotateX: 10, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
              exit={{ opacity: 0, rotateX: -10, scale: 0.9, y: 50 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 0.8,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-4xl h-[85dvh] md:min-h-[600px] flex flex-col group"
            >
              {/* Outer Glow/Border Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-[34px] blur-[1px] pointer-events-none"></div>

              {/* Main Card */}
              <div className="relative w-full h-full bg-[#FAFAFA] rounded-[32px] overflow-hidden flex flex-col shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/40">
                {/* Glassy Header */}
                <div className="relative h-14 w-full bg-white/50 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 z-20 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">
                    Suzali Conseil • Booking
                  </span>

                  <button
                    onClick={closeBooking}
                    type="button"
                    aria-label="Fermer la fenêtre de réservation"
                    className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Top Gradient Line */}
                <div className="h-1 bg-gradient-to-r from-[#0D332B] via-[#B0FF5B] to-[#0D332B] opacity-80 shrink-0"></div>

                {/* Scrollable Content */}
                <div className="flex-1 bg-white relative overflow-hidden">
                  <iframe
                    src="https://cal.eu/suzali-conseil"
                    title="Prendre rendez-vous avec Suzali Conseil"
                    className="h-full w-full border-0"
                    allow="clipboard-write"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}
