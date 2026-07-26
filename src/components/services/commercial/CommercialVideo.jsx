"use client";

import React from "react";

export function CommercialVideo() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative w-full aspect-video rounded-3xl bg-slate-100 border-2 border-dashed border-emerald-200 flex items-center justify-center overflow-hidden">
          <div className="text-center p-8">
            <span className="block text-4xl mb-4">🎥</span>
            <h3 className="text-2xl font-bold text-slate-400 mb-2">
              Video Section Schema
            </h3>
            <p className="text-slate-400">
              Reserved for high-quality commercial presentation video.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
