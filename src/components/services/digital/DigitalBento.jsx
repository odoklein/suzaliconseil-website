"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Monitor,
  BarChart3,
  Palette,
  Cpu,
  ArrowUpRight,
  Search,
  Zap,
  Globe,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Stratégie Digitale 360°",
    description:
      "Vision globale pour dominer votre marché digital. De l'audit initial à la roadmap opérationnelle, nous alignons vos objectifs business avec les meilleures opportunités digitales : transformation numérique, positionnement concurrentiel et KPIs de croissance.",
    tags: [
      "Audit de marché",
      "Roadmap digitale",
      "KPIs & Analytics",
      "Consulting stratégique",
    ],
    icon: Target,
    gradient: "from-[#005ff7] to-blue-600",
    bgClass: "bg-[#005ff7]/5",
    textClass: "text-[#005ff7]",
    colSpan: "md:col-span-2",
    watermark: Target,
    href: "/services/digital/strategie-digitale",
  },
  {
    title: "Sites Web & E-commerce",
    description:
      "Expériences web immersives, ultra-rapides et conçues pour la conversion maximale. Sites vitrine, e-commerce Shopify, applications web sur mesure avec technologies modernes (React, Next.js, Node.js).",
    tags: ["Next.js", "Shopify", "UI/UX Design", "Performance Web"],
    icon: Monitor,
    gradient: "from-[#4f3ef1] to-indigo-600",
    bgClass: "bg-[#4f3ef1]/5",
    textClass: "text-[#4f3ef1]",
    colSpan: "md:col-span-1 md:row-span-1",
    watermark: Globe,
    href: "/services/digital/sites-web-ecommerce",
  },
  {
    title: "SEO & Acquisition Digitale",
    description:
      "Attirez du trafic qualifié grâce à une stratégie de contenus SEO, campagnes Google Ads et Social Ads ciblées. Référencement naturel technique, netlinking et optimisation de conversion.",
    tags: ["SEO Technique", "Google Ads", "Social Ads", "Content Marketing"],
    icon: Search,
    gradient: "from-[#08364e] to-sky-900",
    bgClass: "bg-[#08364e]/5",
    textClass: "text-[#08364e]",
    colSpan: "md:col-span-1 md:row-span-1",
    watermark: BarChart3,
    href: "/services/digital/seo-acquisition",
  },
  {
    title: "Branding & Identité Visuelle",
    description:
      "Image de marque inoubliable qui raconte votre histoire et fédère votre audience. Logo, charte graphique, storytelling de marque et design system cohérent sur tous vos supports.",
    tags: [
      "Logo & Identité",
      "Charte Graphique",
      "Storytelling",
      "Design System",
    ],
    icon: Palette,
    gradient: "from-fuchsia-500 to-violet-600",
    bgClass: "bg-violet-50/50",
    textClass: "text-violet-600",
    colSpan: "md:col-span-1 md:row-span-1",
    watermark: Palette,
    href: "/services/digital/branding-identite",
  },
  {
    title: "Tech & Automatisation IA",
    description:
      "Gagnez du temps et réduisez vos coûts grâce à des solutions sur-mesure et l'intelligence artificielle. Développement SaaS, intégrations API, workflows automatisés et chatbots IA.",
    tags: [
      "SaaS Custom",
      "API & Intégrations",
      "Workflow IA",
      "Automatisation",
    ],
    icon: Cpu,
    gradient: "from-[#091627] to-slate-800",
    bgClass: "bg-[#091627]/5",
    textClass: "text-[#091627]",
    colSpan: "md:col-span-1 md:row-span-1",
    watermark: Zap,
    href: "/services/digital/developpement-automatisation",
  },
];

export function DigitalBento() {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-transparent"
      id="services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-widest"
          >
            Nos Expertises Digitales
          </motion.div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight px-4">
            Tout pour votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Croissance Digitale
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 font-light leading-relaxed px-4">
            Une suite complète d&apos;outils et de stratégies, orchestrée pour
            maximiser votre{" "}
            <strong className="text-slate-700">impact sur le web</strong> et
            accélérer votre{" "}
            <strong className="text-slate-700">transformation numérique</strong>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={service.colSpan}
            >
              <Link
                href={service.href}
                className={`
                  block h-full w-full
                  group relative p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-slate-100 
                  bg-white
                  box-border
                  hover:shadow-2xl hover:shadow-blue-900/20
                  transition-all duration-300 flex flex-col justify-between overflow-hidden
                `}
              >
                {/* Hover Solid Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}
                />

                {/* Watermark */}
                <div className="absolute -bottom-8 sm:-bottom-10 -right-8 sm:-right-10 text-slate-900/5 group-hover:text-white/10 transition-colors duration-300 pointer-events-none z-0">
                  <service.watermark
                    size={180}
                    className="sm:w-[240px] sm:h-[240px]"
                    strokeWidth={0.5}
                  />
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    {/* Icon Box */}
                    <div
                      className={`
                          w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${service.bgClass} ${service.textClass}
                          flex items-center justify-center
                          group-hover:bg-white/20 group-hover:text-white
                          transition-all duration-300
                      `}
                    >
                      <service.icon
                        size={24}
                        className="sm:w-7 sm:h-7"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Arrow Button */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-slate-400 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight
                        size={18}
                        className="sm:w-5 sm:h-5 text-slate-600"
                      />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6 font-medium group-hover:text-blue-50 transition-colors">
                    {service.description}
                  </p>

                  {/* Tags Section */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-500 group-hover:bg-white/20 group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
