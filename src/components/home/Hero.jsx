"use client";

import React, { useEffect, useState } from "react";
import MagneticButton from "../ui/MagneticButton";
import ParticleField from "../ui/ParticleField";
import { TrendingUp, Target, BarChart3, PieChart } from "lucide-react";
import { useBooking } from "../../context/BookingContext";

export default function Hero() {
  const { openBooking } = useBooking();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col items-center justify-start pt-32 md:pt-48 pb-20 overflow-hidden hero-gradient">
      {/* Particle Field */}
      <ParticleField
        particleCount={40}
        color="rgba(176, 255, 91, 0.4)"
        maxSize={2.5}
        speed={0.2}
      />

      {/* Orbit Rings - Background Decoration */}
      <div
        className="orbit-ring"
        style={{
          width: 500,
          height: 500,
          top: "50%",
          left: "50%",
          marginTop: -250,
          marginLeft: -250,
          opacity: 0.4,
        }}
      />
      <div
        className="orbit-ring"
        style={{
          width: 700,
          height: 700,
          top: "50%",
          left: "50%",
          marginTop: -350,
          marginLeft: -350,
          opacity: 0.2,
          animationDirection: "reverse",
          animationDuration: "45s",
        }}
      />

      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dots opacity-[0.03] z-0 pointer-events-none" />

      {/* Abstract Watermark Icons - Faded Background Elements */}
      <div className="absolute top-[15%] left-[5%] opacity-[0.04] animate-subtle-float delay-0 pointer-events-none">
        <TrendingUp size={300} strokeWidth={1} />
      </div>
      <div className="absolute bottom-[10%] right-[5%] opacity-[0.04] animate-subtle-float delay-1000 pointer-events-none">
        <Target size={250} strokeWidth={1} />
      </div>
      <div className="absolute top-[20%] right-[10%] opacity-[0.03] animate-subtle-float delay-500 pointer-events-none">
        <PieChart size={180} strokeWidth={1} />
      </div>
      <div className="absolute bottom-[20%] left-[10%] opacity-[0.03] animate-subtle-float delay-700 pointer-events-none">
        <BarChart3 size={200} strokeWidth={1} />
      </div>

      {/* Morphing Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1A6D48] rounded-full blur-[120px] opacity-20 animate-morph pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#B0FF5B] rounded-full blur-[140px] opacity-[0.06] animate-morph pointer-events-none"
        style={{ animationDelay: "-7s" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-xs md:text-sm font-medium mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="w-2 h-2 bg-[#B0FF5B] rounded-full animate-glow-pulse" />
          Agence B2B • Paris, France
        </div>

        {/* Main Heading with Text Reveal */}
        <div className="overflow-hidden mb-4">
          <h1
            className={`font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight !text-white drop-shadow-sm max-w-5xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
            style={{
              transitionDelay: "400ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            Génération de Leads{" "}
            <span className="text-gradient-lime inline-block">B2B</span> en
            France
          </h1>
        </div>

        {/* Subheading */}
        <h2
          className={`text-lg md:text-xl lg:text-2xl font-medium !text-white/90 mb-6 max-w-4xl leading-snug transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "600ms" }}
        >
          Prospection commerciale, téléprospection et outbound marketing
        </h2>

        {/* Description */}
        <p
          className={`text-base md:text-lg !text-gray-200 max-w-2xl mb-10 font-regular leading-relaxed transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "800ms" }}
        >
          Suzali Conseil, agence spécialisée en génération de leads B2B en
          France, aide les entreprises à structurer leur prospection
          commerciale, automatiser leurs campagnes outbound et générer des
          rendez-vous qualifiés.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "1000ms" }}
        >
          <MagneticButton
            onClick={openBooking}
            variant="primary"
            className="w-full sm:w-auto"
          >
            Audit gratuit de prospection
          </MagneticButton>

          <MagneticButton
            href="/contact"
            variant="outline-light"
            className="w-full sm:w-auto"
          >
            Calculez votre ROI
          </MagneticButton>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`mt-16 md:mt-20 flex flex-col items-center gap-2 text-white/40 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1400ms" }}
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 bg-[#B0FF5B] rounded-full animate-[float_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
