"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Button from "../../../ui/Button";

export default function StrategieHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white py-24 sm:py-32 md:py-48 overflow-hidden">
      {/* Large Watermark */}
      {/* Large Watermark */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] scale-[2.5] sm:scale-[3] md:scale-[4] pointer-events-none"
      >
        <Target size={400} />
      </motion.div>

      {/* Geometric Decor */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full -mr-48 -mt-48 blur-3xl border border-blue-500/10"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full -ml-32 -mb-32 blur-3xl border border-indigo-500/10"
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
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
          >
            <Target size={14} className="text-blue-400" /> Cabinet de Conseil
            Digital France
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight"
          >
            Conseil en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Stratégie Digitale
            </span>{" "}
            & Transformation Numérique
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-300/90 mb-12 leading-relaxed max-w-3xl font-light"
          >
            Nous aidons les PME et ETI à{" "}
            <strong>sécuriser leur croissance</strong> par le digital. Audit de
            performance, roadmap stratégique et pilotage ROIste. Ne laissez pas
            vos concurrents prendre l&apos;avantage technologique.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 mb-16"
          >
            <Button
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white border-none shadow-xl hover:shadow-blue-600/30 px-10 py-5 text-lg font-bold rounded-xl w-full sm:w-auto transition-all duration-300 hover:scale-[1.02]"
            >
              Auditer ma maturité digitale
            </Button>
            <Button
              href="#methodologie"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 text-lg font-medium rounded-xl w-full sm:w-auto backdrop-blur-md transition-all duration-300"
            >
              Découvrir notre méthode
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
            {[
              {
                label: "Croissance Moyenne",
                value: "+35%",
                desc: "Chiffre d'affaires",
              },
              {
                label: "Projets Pilotés",
                value: "150+",
                desc: "B2B & Industrie",
              },
              { label: "ROI Constaté", value: "x4", desc: "Sous 12 mois" },
              { label: "Expertise", value: "360°", desc: "Tech, Mkg, Sales" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-blue-200 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
