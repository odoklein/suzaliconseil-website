"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import Marker from "./kit/Marker";
import SectionHead from "./kit/SectionHead";
import Reveal from "./kit/Reveal";
import { useBooking } from "../../context/BookingContext";

const steps = [
  {
    number: "1",
    title: "Analyse & Ciblage",
    description:
      "Comprendre votre activité, vos offres et vos clients idéaux pour poser des bases solides avant toute action.",
  },
  {
    number: "2",
    title: "Stratégie & Plan d'Action",
    description:
      "Définir une stratégie multicanale sur mesure afin de générer rapidement des leads qualifiés.",
  },
  {
    number: "3",
    title: "Exécution & Suivi",
    description:
      "Déployer et piloter vos campagnes en temps réel via SuzaLink CRM pour un suivi transparent.",
  },
  {
    number: "4",
    title: "Optimisation Continue",
    description:
      "Analyser les données, ajuster les actions et automatiser ce qui fonctionne pour maximiser vos résultats.",
  },
];

/* A step lights its marker once the reading line (mid-screen) reaches it. */
function Step({ step }) {
  const ref = useRef(null);
  const reached = useInView(ref, { once: true, margin: "0px 0px -50% 0px" });

  return (
    <li ref={ref} className="relative pb-14 pl-16 last:pb-0 md:pl-24">
      <span
        className={`absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full font-mono text-sm font-semibold transition-colors duration-500 md:left-2 ${
          reached
            ? "bg-[#B0FF5B] text-[#0D332B]"
            : "bg-[#FCFDFC] text-[#4E605B] ring-1 ring-[#0D332B]/15"
        }`}
      >
        {step.number}
      </span>
      <h3
        className={`font-heading text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.04em] transition-colors duration-500 ${
          reached ? "text-[#0D332B]" : "text-[#0D332B]/55"
        }`}
      >
        {step.title}
      </h3>
      <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-[#4E605B] md:text-lg">
        {step.description}
      </p>
    </li>
  );
}

const Method = () => {
  const { openBooking } = useBooking();
  const listRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 50%", "end 50%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  return (
    <section className="bg-[#F6F7F4] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="h-fit lg:sticky lg:top-32 lg:col-span-5">
            <SectionHead
              title={
                <>
                  Notre <Marker>méthode</Marker>
                </>
              }
              intro="Chez Suzali Conseil, chaque projet suit une méthode claire — testée sur des centaines de campagnes B2B. Un process transparent, pensé pour transformer vos objectifs en résultats."
            />
            <Reveal delay={220} className="mt-10">
              <MagneticButton onClick={openBooking} variant="primary">
                <span className="inline-flex items-center gap-3 whitespace-nowrap">
                  Audit gratuit de prospection
                  <ArrowRight size={20} aria-hidden="true" />
                </span>
              </MagneticButton>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7 lg:pt-3">
            {/* Rail: the hairline is the plan, the lime fill is how far you've read. */}
            <span
              className="absolute bottom-[calc(100%-1.4rem)] left-[1.375rem] top-0 w-px bg-[#0D332B]/15 md:left-[1.875rem]"
              aria-hidden="true"
            />
            <motion.span
              className="absolute bottom-0 left-[1.375rem] top-0 w-[3px] -translate-x-px origin-top rounded-full bg-[#B0FF5B] md:left-[1.875rem]"
              style={reduceMotion ? { scaleY: 1 } : { scaleY: progress }}
              aria-hidden="true"
            />
            <ol ref={listRef} className="relative">
              {steps.map((step) => (
                <Step key={step.number} step={step} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
