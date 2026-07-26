"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../../../ui/Button";
import { motion } from "framer-motion";

export default function BrandingCTA() {
  return (
    <section className="py-24 bg-[#2e1065] relative overflow-hidden text-center border-t border-white/10">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-fuchsia-600 rounded-full blur-[150px]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-4xl md:text-6xl mb-8 leading-tight"
        >
          Révélez le potentiel de votre marque
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-violet-200 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Votre image actuelle reflète-t-elle vraiment la qualité de vos
          services ? Si la réponse est non, parlons-en.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Button
            href="/contact"
            className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-fuchsia-600/50 transition-all hover:scale-105 inline-flex items-center gap-3"
          >
            Booking Direction Artistique <ArrowRight size={24} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
