"use client";

import React from "react";
import { Feather, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandingPhilosophy() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            {/* Abstract composition showing design process */}
            <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-200/50 to-violet-200/50"></div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="absolute top-10 left-10 right-10 bottom-10 bg-white shadow-xl rounded-3xl p-8 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-16 h-16 bg-black rounded-full"
                  ></motion.div>
                  <div className="text-right">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                      Typography
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-4xl font-serif font-light"
                    >
                      Aa
                    </motion.div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className={`aspect-square rounded-xl ${
                        [
                          "bg-[#2e1065]",
                          "bg-[#701a75]",
                          "bg-[#c026d3]",
                          "bg-[#e879f9]",
                        ][i]
                      }`}
                    ></motion.div>
                  ))}
                </div>

                <div className="flex justify-between items-end border-t border-slate-100 pt-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                      Proportions
                    </div>
                    <div className="flex gap-1 items-end h-12">
                      {[12, 8, 5].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h * 4}px` }} // Approximation
                          transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                          className={`w-2 h-${h} bg-slate-900 rounded-sm`}
                          style={{
                            height:
                              h === 12 ? "48px" : h === 8 ? "32px" : "20px",
                          }}
                        ></motion.div>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center"
                  >
                    <Feather size={20} className="text-slate-400" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-violet-50 text-violet-600 font-bold text-sm mb-6">
              NOTRE PHILOSOPHIE
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-slate-900 mb-8 leading-tight">
              Le Design au service <br />
              <span className="text-fuchsia-600">du Business</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Nous ne faisons pas du &quot;joli&quot;. Nous créons des outils
              visuels performants conçus pour :
            </p>
            <ul className="space-y-6 mb-12">
              {[
                "Augmenter la valeur perçue de votre offre",
                "Créer une préférence de marque instantanée",
                "Justifier un pricing premium",
                "Fédérer vos équipes autour d'une culture forte",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <Star
                    className="text-yellow-400 flex-shrink-0 mt-1 fill-current"
                    size={20}
                  />
                  <span className="text-slate-700 text-lg font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
