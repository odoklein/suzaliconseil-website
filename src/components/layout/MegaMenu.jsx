"use client";

import React from "react";
import Link from "next/link";
import { Monitor, Handshake, CheckCircle2, ArrowRight } from "lucide-react";

const MegaMenu = ({ services, isOpen, onClose }) => {
  // We do NOT return null here to allow exit animations.
  // Instead we use CSS opacity/visibility toggles.

  const commercial = services.find((s) => s.slug === "commercial");
  const digital = services.find((s) => s.slug === "digital");

  if (!commercial && !digital) return null;

  return (
    <div
      className={`fixed top-20 left-0 w-full flex justify-center z-50 pb-8 transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) ${
        isOpen
          ? "opacity-100 translate-y-0 visible pointer-events-none"
          : "opacity-0 -translate-y-4 invisible pointer-events-none"
      }`}
    >
      <div
        className="w-[95vw] max-w-5xl pointer-events-auto flex flex-col md:flex-row gap-6 p-4"
        onMouseLeave={onClose}
      >
        {/* LEFT CARD: COMMERCIAL */}
        {commercial && (
          <div className="flex-1 bg-white rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(13,51,43,0.3)] transition-all duration-300 group ring-1 ring-black/5 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E7F6F2] via-white to-white opacity-100 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm text-[#0D332B] ring-1 ring-black/5 group-hover:bg-[#0D332B] group-hover:text-[#B0FF5B] transition-colors duration-300">
                  <Handshake size={32} strokeWidth={1.5} />
                </div>
                <div className="bg-[#E7F6F2] text-[#0D332B] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Performance
                </div>
              </div>

              <Link
                href="/services/commercial"
                onClick={onClose}
                className="text-2xl font-bold text-[#0D332B] font-heading tracking-tight mb-2 hover:text-[#1A4D43] transition-colors"
              >
                {commercial.title}
              </Link>

              {/* Detailed List with Descriptions */}
              <div className="space-y-2 mb-8 flex-1 mt-6">
                {commercial.subServices.map((sub, idx) => (
                  <Link
                    key={idx}
                    href={sub.href || `/services/commercial`}
                    onClick={onClose}
                    className="flex items-start gap-3 p-3 -mx-3 rounded-xl transition-all duration-300 hover:bg-black/5 cursor-pointer block"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[#B0FF5B] fill-[#0D332B] mt-0.5 shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-[#0D332B] text-sm leading-tight mb-0.5 transition-colors">
                        {sub.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-snug">
                        {sub.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Visual CTA */}
              <Link
                href="/services/commercial"
                onClick={onClose}
                className="flex items-center gap-2 text-sm font-bold text-[#0D332B] uppercase tracking-wider hover:underline underline-offset-4 decoration-2 decoration-[#B0FF5B]"
              >
                Explorer le pôle{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        )}

        {/* RIGHT CARD: DIGITAL */}
        {digital && (
          <div className="flex-1 bg-white rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(17,85,204,0.2)] transition-all duration-300 group ring-1 ring-black/5 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E3F2FD] via-white to-white opacity-100 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm text-[#1155CC] ring-1 ring-black/5 group-hover:bg-[#1155CC] group-hover:text-white transition-colors duration-300">
                  <Monitor size={32} strokeWidth={1.5} />
                </div>
                <div className="bg-[#E3F2FD] text-[#0D47A1] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Visibilité
                </div>
              </div>

              <Link
                href="/services/digital"
                onClick={onClose}
                className="text-2xl font-bold text-[#0D47A1] font-heading tracking-tight mb-2 hover:text-[#1565C0] transition-colors"
              >
                {digital.title}
              </Link>

              {/* Detailed List with Descriptions */}
              <div className="space-y-2 mb-8 flex-1 mt-6">
                {digital.subServices.map((sub, idx) => (
                  <Link
                    key={idx}
                    href={sub.href || `/services/digital`}
                    onClick={onClose}
                    className="flex items-start gap-3 p-3 -mx-3 rounded-xl transition-all duration-300 hover:bg-black/5 cursor-pointer block"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[#1155CC]/30 fill-[#1155CC] mt-0.5 shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-[#0D47A1] text-sm leading-tight mb-0.5 transition-colors">
                        {sub.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-snug">
                        {sub.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Visual CTA */}
              <Link
                href="/services/digital"
                onClick={onClose}
                className="flex items-center gap-2 text-sm font-bold text-[#0D47A1] uppercase tracking-wider hover:underline underline-offset-4 decoration-2 decoration-[#1155CC]"
              >
                Explorer le pôle{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
