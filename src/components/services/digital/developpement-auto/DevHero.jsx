"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal } from "lucide-react";
import Button from "../../../ui/Button";

export default function DevHero() {
  return (
    <section className="relative bg-[#020617] text-white py-24 sm:py-32 md:py-48 overflow-hidden">
      {/* Large Watermark */}
      {/* Large Watermark */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[2.5] sm:scale-[3] md:scale-[4] pointer-events-none"
      >
        <Cpu size={400} />
      </motion.div>

      {/* Geometric Decor - Circuit Board Vibe */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full -mr-64 -mt-64 blur-3xl border border-cyan-500/10"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full -ml-48 -mb-48 blur-3xl border border-blue-500/10"
      ></motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>

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
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <Terminal size={14} className="text-cyan-400 animate-pulse" />{" "}
            Digital Factory & IA Lab
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight"
          >
            Développement Web &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Automatisation IA
            </span>{" "}
            Sur-Mesure
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl font-light"
          >
            Transformez vos idées en actifs technologiques. De
            l&apos;application métier complexe à l&apos;automatisation de vos
            flux (RPA) par l&apos;Intelligence Artificielle.
            <strong>
              {" "}
              Code propre, scalable et sécurisé (&quot;Security by
              Design&quot;).
            </strong>
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 mb-16"
          >
            <Button
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-500 text-white border-none shadow-xl hover:shadow-cyan-600/30 px-10 py-5 text-lg font-bold rounded-xl w-full sm:w-auto transition-all duration-300 hover:scale-[1.02]"
            >
              Automatiser mes processus
            </Button>
            <Button
              href="#solutions-tech"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 text-lg font-medium rounded-xl w-full sm:w-auto backdrop-blur-md transition-all duration-300"
            >
              Voir nos réalisations
            </Button>
          </motion.div>

          {/* Tech Stack Indicators */}
          <div className="flex flex-wrap gap-8 border-t border-white/10 pt-8 opacity-70">
            <span className="font-mono text-cyan-400">Next.js 14</span>
            <span className="font-mono text-cyan-400">Python / Django</span>
            <span className="font-mono text-cyan-400">OpenAI API</span>
            <span className="font-mono text-cyan-400">AWS / Vercel</span>
            <span className="font-mono text-cyan-400">n8n / Zapier</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
