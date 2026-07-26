"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, LineChart } from "lucide-react";
import Button from "../../../ui/Button";

export default function SeoHero() {
  return (
    <section className="relative bg-[#082f49] text-white py-24 sm:py-32 md:py-48 overflow-hidden">
      {/* Large Watermark */}
      {/* Large Watermark */}
      <motion.div
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[2.5] sm:scale-[3] md:scale-[4] pointer-events-none -rotate-12"
      >
        <LineChart size={400} />
      </motion.div>

      {/* Dynamic Growth curve decor */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[50vh] h-[50vh] bg-sky-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 right-0 w-[60vh] h-[60vh] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"
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
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
          >
            <TrendingUp size={14} className="text-sky-400 animate-pulse" />{" "}
            Agence SEO & Google Ads Certifiée
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight"
          >
            Dominez Votre Marché avec une{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Acquisition Digitale
            </span>{" "}
            Imparable
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-sky-100/80 mb-12 leading-relaxed max-w-3xl font-light"
          >
            Fini le trafic inutile. Nous ciblons vos clients idéaux par{" "}
            <strong>SEO technique</strong>, <strong>Google Ads (SEA)</strong> et{" "}
            <strong>Social Ads</strong>.
            <br />
            Objectif unique : <strong>Maximiser votre ROI chaque mois.</strong>
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 mb-16"
          >
            <Button
              href="/contact"
              className="bg-sky-600 hover:bg-sky-500 text-white border-none shadow-xl hover:shadow-sky-600/30 px-10 py-5 text-lg font-bold rounded-xl w-full sm:w-auto transition-all duration-300 hover:scale-[1.02]"
            >
              Lancer mon audit d&apos;acquisition
            </Button>
            <Button
              href="#canaux"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 text-lg font-medium rounded-xl w-full sm:w-auto backdrop-blur-md transition-all duration-300"
            >
              Nos leviers de performance
            </Button>
          </motion.div>

          {/* Performance KPIs */}
          <div className="flex flex-wrap gap-10 border-t border-white/10 pt-8 opacity-90">
            <div>
              <div className="text-3xl font-bold text-white mb-1">x3.5</div>
              <div className="text-xs uppercase tracking-widest text-sky-300">
                ROI Moyen
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">+150%</div>
              <div className="text-xs uppercase tracking-widest text-sky-300">
                Trafic SEO
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">-40%</div>
              <div className="text-xs uppercase tracking-widest text-sky-300">
                Coût/Acquisition
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
