"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useBooking } from "../../context/BookingContext";
import AnimatedSection from "../ui/AnimatedSection";
import MagneticButton from "../ui/MagneticButton";

const Projects = ({ projects = [] }) => {
  const { openBooking } = useBooking();

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left Content (Sticky on large screens) */}
          <AnimatedSection className="lg:col-span-5 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0 space-y-6 md:space-y-8 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-semibold tracking-wide uppercase">
              Portfolio
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D332B] tracking-tight leading-[1.1]">
              Nos collaborations <br className="hidden sm:block" />
              qui font la{" "}
              <span className="text-gradient-premium">différence</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Découvrez comment notre équipe a accompagné des entreprises et
              organisations ambitieuses. Chaque projet incarne notre vision :
              écouter, concevoir, exécuter et optimiser.
            </p>
            <div>
              <MagneticButton
                onClick={openBooking}
                variant="primary"
                className="inline-flex items-center gap-2"
              >
                Planifier un appel
                <ArrowUpRight className="w-5 h-5" />
              </MagneticButton>
            </div>
          </AnimatedSection>

          {/* Right Content (Projects Grid) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, idx) => (
                <AnimatedSection
                  key={project.id}
                  delay={idx * 150}
                  className="group flex flex-col bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-glow"
                >
                  {/* Image */}
                  <div className="h-48 md:h-64 bg-gray-200 relative overflow-hidden">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-100">
                        No Image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/5 transition-colors duration-300" />

                    {/* Floating arrow on hover */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={18} className="text-[#0D332B]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags &&
                          project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] md:text-xs font-bold text-[#1A6D48] bg-[#E8F5E9] px-2 md:px-3 py-1 rounded-full uppercase tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-[#0D332B] mb-2 md:mb-3 group-hover:text-[#1A6D48] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
