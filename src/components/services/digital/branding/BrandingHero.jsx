"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Crown } from "lucide-react";
import Button from "../../../ui/Button";

export default function BrandingHero() {
  return (
    <section className="relative bg-[#2e1065] text-white py-24 sm:py-32 md:py-48 overflow-hidden">
      {/* Large Watermark */}
      {/* Large Watermark */}
      <motion.div
        animate={{ rotate: [12, -12, 12] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[2.5] sm:scale-[3] md:scale-[4] pointer-events-none"
      >
        <Palette size={400} />
      </motion.div>

      {/* Artistic Decor */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full -mr-48 -mt-48 blur-3xl border border-fuchsia-500/20"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full -ml-32 -mb-32 blur-3xl border border-violet-500/10"
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-5xl mx-auto lg:mx-0"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-400/30 text-fuchsia-200 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
          >
            <Crown size={14} className="text-fuchsia-400 animate-pulse" />{" "}
            Studio de Branding & Design
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight"
          >
            Création d&apos;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400">
              Identité Visuelle
            </span>{" "}
            & Stratégie de Marque
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-violet-100/90 mb-12 leading-relaxed max-w-3xl font-light"
          >
            Donnez à votre entreprise l&apos;image qu&apos;elle mérite.
            <strong> Logos, Chartes Graphiques, Plateforme de Marque.</strong>
            Nous sculptons des identités mémorables qui fédèrent et
            convertissent instantanément.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 mb-16"
          >
            <Button
              href="/contact"
              className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white border-none shadow-xl hover:shadow-fuchsia-700/30 px-10 py-5 text-lg font-bold rounded-xl w-full sm:w-auto transition-all duration-300 hover:scale-[1.02]"
            >
              Auditer mon image de marque
            </Button>
            <Button
              href="#portfolio"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 text-lg font-medium rounded-xl w-full sm:w-auto backdrop-blur-md transition-all duration-300"
            >
              Explorer nos créations
            </Button>
          </motion.div>

          {/* Brand Attributes */}
          <div className="flex flex-wrap gap-8 border-t border-white/10 pt-8 opacity-80 font-serif italic text-violet-200 text-lg">
            <span>Élégance</span>
            <span>•</span>
            <span>Cohérence</span>
            <span>•</span>
            <span>Impact</span>
            <span>•</span>
            <span>Intemporalité</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
