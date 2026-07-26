"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../../../ui/Button";
import { motion } from "framer-motion";

export default function StrategieCTA() {
  return (
    <section className="py-24 bg-blue-950 relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600 rounded-full blur-[150px]"
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
          Ne laissez pas le hasard décider de votre avenir digital
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Discutez avec un Directeur Conseil senior (pas un commercial) de vos
          enjeux de croissance. Diagnostic flash offert.
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
            className="bg-white text-blue-950 hover:bg-blue-50 px-12 py-6 rounded-full font-bold text-xl shadow-2xl transition-transform hover:scale-105 inline-flex items-center gap-3"
          >
            Réserver mon échange stratégique <ArrowRight size={24} />
          </Button>
          <Button
            href="tel:+33757902479"
            className="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-12 py-6 rounded-full font-bold text-xl transition-all"
          >
            Nous appeler
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-sm text-blue-400"
        >
          *places limitées à 5 nouveaux accompagnements par mois pour garantir
          la qualité.
        </motion.p>
      </div>
    </section>
  );
}
