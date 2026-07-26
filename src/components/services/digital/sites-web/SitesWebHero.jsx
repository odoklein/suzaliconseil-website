"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Globe, Zap, Search, Smartphone } from "lucide-react";
import Button from "../../../ui/Button";

export default function SitesWebHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white py-24 sm:py-32 md:py-48 overflow-hidden">
      {/* Large Watermark */}
      {/* Large Watermark */}
      <motion.div
        animate={{ rotate: [6, -6, 6] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[2.5] sm:scale-[3] md:scale-[4] pointer-events-none"
      >
        <Monitor size={400} />
      </motion.div>

      {/* Ambient Lights */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full -mr-48 -mt-48 blur-3xl border border-indigo-500/20"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.2, 0.05] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full -ml-32 -mb-32 blur-3xl border border-blue-500/10"
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
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
          >
            <Globe size={14} className="text-indigo-400 animate-pulse" /> Agence
            Web & E-commerce France
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight"
          >
            Création <span className="text-indigo-400">Sites Web</span> &
            E-commerce{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Haute Performance
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-300/90 mb-12 leading-relaxed max-w-3xl font-light"
          >
            Des expériences digitales d&apos;exception, conçues pour dominer
            Google et convertir vos visiteurs.
            <strong> Next.js, Shopify, React.</strong> Sans compromis sur le
            design ni la vitesse.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 mb-16"
          >
            <Button
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-500 text-white border-none shadow-xl hover:shadow-indigo-600/30 px-10 py-5 text-lg font-bold rounded-xl w-full sm:w-auto transition-all duration-300 hover:scale-[1.02]"
            >
              Calculer le prix de mon site
            </Button>
            <Button
              href="#portfolio"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 text-lg font-medium rounded-xl w-full sm:w-auto backdrop-blur-md transition-all duration-300"
            >
              Voir nos réalisations
            </Button>
          </motion.div>

          {/* Performance Stats */}
          <div className="flex flex-wrap gap-8 sm:gap-12 border-t border-white/10 pt-8 opacity-90">
            <div className="flex items-center gap-3">
              <Zap className="text-yellow-400" size={24} />
              <div>
                <div className="font-bold text-white">Score 98/100</div>
                <div className="text-xs text-slate-400">Google PageSpeed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Search className="text-blue-400" size={24} />
              <div>
                <div className="font-bold text-white">SEO Natif</div>
                <div className="text-xs text-slate-400">Structure Opti.</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="text-purple-400" size={24} />
              <div>
                <div className="font-bold text-white">Mobile First</div>
                <div className="text-xs text-slate-400">UX Responsive</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
