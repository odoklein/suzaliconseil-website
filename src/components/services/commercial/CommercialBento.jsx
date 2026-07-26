"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  PhoneCall,
  MessageSquare,
  Headphones,
  ArrowUpRight,
  Target,
  Mail,
} from "lucide-react";

const services = [
  {
    title: "Génération de Leads",
    description:
      "Alimentez votre pipeline avec des prospects qualifiés et vérifiés. Nous identifions vos futurs clients idéaux.",
    tags: ["Sourcing", "Qualification", "Data Enrichment"],
    icon: Target,
    gradient: "from-emerald-500 to-green-600",
    bgClass: "bg-emerald-50/50",
    textClass: "text-emerald-700",
    colSpan: "md:col-span-2",
    watermark: Target,
  },
  {
    title: "Téléprospection & RDV",
    description:
      "Nos experts prennent des rendez-vous qualifiés directement dans votre agenda.",
    tags: ["Cold Calling", "Prise de RDV", "B2B"],
    icon: PhoneCall,
    gradient: "from-teal-500 to-emerald-600",
    bgClass: "bg-teal-50/50",
    textClass: "text-teal-700",
    colSpan: "md:col-span-1",
    watermark: PhoneCall,
  },
  {
    title: "Vente Marque Blanche",
    description:
      "Une force de vente supplétive qui conclut vos deals en votre nom.",
    tags: ["Closing", "Externalisation", "Force de Vente"],
    icon: HandshakeIcon, // Defined below custom wrapper if needed, or use default icon
    gradient: "from-green-500 to-lime-600",
    bgClass: "bg-green-50/50",
    textClass: "text-green-700",
    colSpan: "md:col-span-1",
    watermark: Users,
  },
  {
    title: "Campagnes Email & SMS",
    description:
      "Scénarios automatisés de nurturing et de relance pour engager vos contacts.",
    tags: ["Nurturing", "Automation", "Copywriting"],
    icon: Mail,
    gradient: "from-lime-500 to-green-500",
    bgClass: "bg-lime-50/50",
    textClass: "text-lime-700",
    colSpan: "md:col-span-1",
    watermark: Mail,
  },
  {
    title: "Service Client & Chat",
    description:
      "Fidélisez votre clientèle avec un support réactif et omnicanal 24/7.",
    tags: ["Support", "Fidélisation", "Omnicanal"],
    icon: Headphones,
    gradient: "from-emerald-400 to-teal-500",
    bgClass: "bg-emerald-50/50",
    textClass: "text-emerald-700",
    colSpan: "md:col-span-2", // Spans 2 cols for structure variety
    watermark: MessageSquare,
  },
];

// Helper for the icon in array
function HandshakeIcon(props) {
  return <Users {...props} />;
}

export function CommercialBento() {
  return (
    <section className="py-24 bg-[#F8FAFC]" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-sm uppercase tracking-widest"
          >
            Nos Solutions
          </motion.div>
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Accélérez vos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Ventes
            </span>
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Des stratégies proactives et des équipes dédiées pour transformer
            vos opportunités en revenus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`
                ${service.colSpan} 
                group relative p-8 rounded-[32px] border border-slate-100 
                bg-white
                box-border
                hover:shadow-2xl hover:shadow-emerald-900/20
                transition-all duration-300 flex flex-col justify-between overflow-hidden
              `}
            >
              {/* 1. Base Background (White) */}

              {/* 2. Hover Solid Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}
              />

              {/* 3. Watermark */}
              <div className="absolute -bottom-10 -right-10 text-slate-900/5 group-hover:text-white/10 transition-colors duration-300 pointer-events-none z-0">
                <service.watermark size={240} strokeWidth={0.5} />
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  {/* Icon Box */}
                  <div
                    className={`
                        w-14 h-14 rounded-2xl ${service.bgClass} ${service.textClass}
                        flex items-center justify-center
                        group-hover:bg-white/20 group-hover:text-white
                        transition-all duration-300
                    `}
                  >
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>

                  {/* Arrow Button */}
                  <div className="w-10 h-10 rounded-full bg-white text-slate-400 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={20} className="text-slate-600" />
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-base mb-6 font-medium group-hover:text-emerald-50 transition-colors">
                  {service.description}
                </p>

                {/* Tags Section */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-500 group-hover:bg-white/20 group-hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
