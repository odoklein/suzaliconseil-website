"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { motion } from "framer-motion";

export function CommercialHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-emerald-200/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-lime-200/20 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] left-[15%] w-[10vw] h-[10vw] bg-green-500/10 rounded-full blur-[50px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#1a4d43 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-[#0D332B] text-sm font-bold uppercase tracking-wider mb-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <Handshake size={16} />
          <span>Prospection Commerciale B2B</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]"
        >
          Accélérez votre <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D332B] to-emerald-600">
            Prospection B2B
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed font-light"
        >
          De la structuration de votre force de vente à la génération de leads
          qualifiés, nous déployons les meilleures stratégies de prospection
          commerciale B2B en France pour booster votre croissance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-[#0D332B] bg-[#B0FF5B] rounded-full text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
          >
            <span className="relative z-10">Audit de prospection gratuit</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="#services"
            className="px-8 py-4 text-slate-600 font-medium hover:text-[#0D332B] transition-colors flex items-center gap-2"
          >
            Découvrir nos solutions
          </Link>
        </motion.div>
      </div>

      {/* Decorative Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-20 w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 hidden lg:flex items-center justify-center p-4 rotate-[-12deg]"
      >
        <span className="text-3xl">📈</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-10 md:right-20 w-20 h-20 bg-white rounded-full shadow-lg border border-slate-100 hidden lg:flex items-center justify-center p-4"
      >
        <span className="text-4xl">🤝</span>
      </motion.div>
    </section>
  );
}
