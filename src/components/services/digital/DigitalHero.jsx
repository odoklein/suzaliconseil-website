"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export function DigitalHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50/30 pt-32 pb-20">
      {/* Dynamic Background - Enhanced */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] sm:w-[50vw] h-[40vw] sm:h-[50vw] bg-blue-200/30 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] sm:w-[60vw] h-[50vw] sm:h-[60vw] bg-indigo-200/20 rounded-full blur-[80px] sm:blur-[100px]" />
        <div className="absolute top-[20%] left-[15%] w-[8vw] sm:w-[10vw] h-[8vw] sm:h-[10vw] bg-accent-blue/10 rounded-full blur-[40px] sm:blur-[50px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.3] sm:opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#1155cc 0.5px, transparent 0.5px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-blue-50 border border-blue-100 text-accent-blue text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-10 sm:mb-12 shadow-sm hover:shadow-md transition-shadow"
        >
          <Sparkles size={14} className="sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">Pôle </span>Digital & Innovation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-slate-900 mb-10 sm:mb-14 tracking-tight leading-[1.2] sm:leading-[1.15] px-4"
        >
          Agence{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-indigo-600 drop-shadow-[0_0_20px_rgba(17,85,204,0.25)]">
            Digitale
          </span>
          <br className="hidden lg:block" /> & Développement Web
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl text-slate-600 mb-12 sm:mb-16 leading-relaxed font-light px-4"
        >
          De la{" "}
          <strong className="text-slate-800 font-medium">
            stratégie digitale
          </strong>{" "}
          à l&apos;exécution technique, nous concevons des{" "}
          <strong className="text-slate-800 font-medium">
            écosystèmes web performants
          </strong>{" "}
          qui convertissent. Sites web sur mesure, applications métier, SEO,
          acquisition digitale : tout pour votre{" "}
          <strong className="text-accent-blue font-medium">
            croissance en ligne
          </strong>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 mb-16 sm:mb-24 px-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-5 sm:py-6 text-white bg-accent-blue rounded-full text-lg sm:text-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 w-full sm:w-auto min-w-[240px]"
          >
            <span className="relative z-10">Lancer mon projet</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="#services"
            className="px-8 py-4 text-slate-500 font-medium hover:text-accent-blue transition-colors flex items-center gap-2 text-lg w-full sm:w-auto justify-center"
          >
            Découvrir nos services
          </Link>
        </motion.div>

        {/* Trust Badges - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-12 text-sm sm:text-base text-slate-400 font-medium px-4"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent-blue" />
            <span>Déploiement sous 30 jours</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-accent-blue" />
            <span className="hidden xs:inline">100+ projets </span>livrés
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-blue" />
            <span>Hébergement sécurisé</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-accent-blue" />
            <span>SEO optimisé</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Floating Elements - Responsive */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-4 sm:left-10 md:left-20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-2xl shadow-lg border border-slate-100 hidden md:flex items-center justify-center p-3 sm:p-4 rotate-[-12deg]"
      >
        <span className="text-2xl sm:text-3xl">🚀</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-4 sm:right-10 md:right-20 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white rounded-full shadow-lg border border-slate-100 hidden md:flex items-center justify-center p-3 sm:p-4"
      >
        <span className="text-3xl sm:text-4xl">💎</span>
      </motion.div>

      {/* Additional decorative element for mobile */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg opacity-20 md:hidden"
      />
    </section>
  );
}
