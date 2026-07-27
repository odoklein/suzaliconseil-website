"use client";

import React, { useState, useEffect, useRef } from "react";
import { Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";

const DEPARTMENTS = [
  { id: "all", label: "Tous" },
  { id: "strategy", label: "Stratégie" },
  { id: "sales", label: "Ventes & Croissance" },
];

const teamMembers = [
  {
    name: "Hichem Hammouche",
    role: "CEO",
    department: "strategy",
    linkedin: "https://www.linkedin.com/in/hichem-hammouche-ba957238/",
    quote: "Transformer l'ambition en résultats concrets.",
  },
];

const commercialTeamMembers = [
  {
    name: "Équipe Commerciale",
    role: "Prospection & Acquisition",
    department: "sales",
    linkedin: null,
  },
];

const ALL_MEMBERS = [...teamMembers, ...commercialTeamMembers];

const STATS = [
  { value: 50, suffix: "+", label: "Projets réalisés" },
  { value: 10, suffix: "+", label: "Experts" },
  { value: 4, suffix: "", label: "Années d'expérience" },
];

function useCountUp(end, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, trigger]);
  return count;
}

function StatCard({ value, suffix, label, trigger, index }) {
  const count = useCountUp(value, 2000, trigger);
  return (
    <AnimatedSection delay={index * 150} className="text-center group">
      <div className="font-heading font-black text-5xl md:text-7xl text-[#0d332b] group-hover:text-primary-main transition-colors duration-300">
        {count}
        {suffix}
      </div>
      <p className="text-gray-500 mt-2 font-medium">{label}</p>
    </AnimatedSection>
  );
}

export default function EquipeClient() {
  const [department, setDepartment] = useState("all");
  const numbersRef = useRef(null);
  const isNumbersInView = useInView(numbersRef, {
    once: true,
    margin: "-100px",
  });

  const filteredMembers =
    department === "all"
      ? ALL_MEMBERS
      : ALL_MEMBERS.filter((m) => m.department === department);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 1. HERO - Green section */}
      <section className="relative pt-24 md:pt-32 pb-32 md:pb-40 overflow-hidden bg-[#0d332b] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/team.png"
            alt="Équipe Suzali"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d332b]/85 via-[#0d332b]/60 to-[#0d332b]" />
        </div>

        {/* Orbit ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="orbit-ring w-[600px] h-[600px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 border border-white/10 text-white text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#B0FF5B] animate-pulse" />
              Équipe
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Les têtes pensantes de{" "}
              <span className="text-[#B0FF5B]">votre croissance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Chaque membre de notre équipe s&apos;engage à vous accompagner
              avec rigueur et efficacité, pour accélérer vos performances et
              sécuriser vos investissements digitaux.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. TEAM CLUSTERS - White section */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-white text-[#0d332b]">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
            {DEPARTMENTS.map((d) => (
              <button
                key={d.id}
                onClick={() => setDepartment(d.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  department === d.id
                    ? "bg-[#0d332b] text-white shadow-lg shadow-[#0d332b]/20"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#0d332b] border border-gray-200"
                }`}
              >
                {d.label}
              </button>
            ))}
          </AnimatedSection>

          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative flex items-end rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#0d332b] cursor-pointer hover:shadow-2xl transition-shadow duration-500 ${
                  member.name === "Équipe Commerciale"
                    ? "sm:col-span-2 lg:col-span-2 aspect-[4/3] sm:aspect-[2/1] min-h-[320px] sm:min-h-[380px]"
                    : "aspect-[4/5] sm:aspect-[3/4]"
                }`}
              >
                {/* Glassmorphism card */}
                <div className="relative w-full p-4 md:p-6 z-20">
                  <div className="bg-[#0d332b]/90 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 border border-white/10 shadow-2xl flex flex-col gap-2 group-hover:bg-[#0d332b] transition-colors duration-300">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base md:text-lg leading-tight text-white">
                          {member.name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300 mt-0.5 leading-snug">
                          {member.role}
                        </p>
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="p-2 rounded-lg bg-white/10 hover:bg-[#B0FF5B] hover:text-[#0d332b] text-white transition-all duration-300 shrink-0"
                        >
                          <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                      )}
                    </div>
                    {member.techStack && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10 items-center">
                        {member.techStack.map((tech) => (
                          <div
                            key={tech.name}
                            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                            title={tech.name}
                          >
                            {tech.logo ? (
                              <Image
                                src={tech.logo}
                                alt={tech.name}
                                width={16}
                                height={16}
                                className="w-4 h-4 object-contain opacity-90"
                              />
                            ) : null}
                            <span className="text-[10px] text-white font-medium">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {(member.metric || member.quote) && (
                      <p className="text-xs text-gray-300 italic truncate">
                        {member.metric && (
                          <span className="text-[#B0FF5B] font-bold not-italic mr-1">
                            {member.metric}
                          </span>
                        )}
                        {member.metricLabel && (
                          <span className="text-gray-400 mr-1">
                            {member.metricLabel} ·{" "}
                          </span>
                        )}
                        {member.quote}
                      </p>
                    )}
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-[24px] md:rounded-[32px] border-2 border-[#B0FF5B]/0 group-hover:border-[#B0FF5B]/30 transition-all duration-500 pointer-events-none z-30" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE NUMBERS - White section */}
      <section
        ref={numbersRef}
        className="relative z-10 py-16 md:py-24 px-4 bg-white"
      >
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6">
              En Chiffres
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#0d332b] mb-4">
              Les <span className="text-gradient-premium">chiffres</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Des résultats concrets, une équipe engagée.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {STATS.map((stat, i) => (
              <StatCard
                key={i}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                trigger={isNumbersInView}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. JOIN THE TEAM - Green section */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-[#0d332b] text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#B0FF5B] rounded-full blur-[150px] opacity-[0.06] pointer-events-none" />

        <AnimatedSection className="container mx-auto max-w-3xl">
          <div className="rounded-[32px] p-8 md:p-12 text-center bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 relative z-10">
              Rejoignez l&apos;équipe
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
              Vous partagez notre vision de la croissance ? Nous recrutons des
              profils passionnés en stratégie commerciale, digital et
              opérations.
            </p>
            <a
              href="/carriers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-[#B0FF5B] text-[#0d332b] hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform relative z-10"
            >
              Voir les postes ouverts
              <ArrowRight size={18} />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
