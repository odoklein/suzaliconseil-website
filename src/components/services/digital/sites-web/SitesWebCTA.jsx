"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../../../ui/Button";
import { motion } from "framer-motion";

export default function SitesWebCTA() {
  return (
    <section className="py-24 bg-[#1e293b] relative overflow-hidden text-center border-t border-white/10">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600 rounded-full blur-[150px]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-4xl md:text-6xl mb-8 leading-tight"
        >
          Prêt à avoir un site qui vend ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Demandez votre devis gratuit dès aujourd&apos;hui. Réponse sous 24h
          ouvrées avec une estimation précise.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Button
            href="/contact"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-indigo-600/50 transition-all hover:scale-105 inline-flex items-center gap-3"
          >
            Lancer mon projet web <ArrowRight size={24} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
