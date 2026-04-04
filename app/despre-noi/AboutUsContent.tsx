"use client";

import React from "react";
import DespreHero from "@/components/despre/DespreHero";
import PlanetarValues from "@/components/despre/PlanetarValues";
import TeamSection from "@/components/despre/TeamSection";
import DepartmentsSection from "@/components/despre/DepartmentsSection";

export default function AboutUsContent() {
  return (
    <main className="main-wrap bg-white dark:bg-[#121212] text-zinc-900 dark:text-white font-sans min-h-screen pt-36 pb-10 overflow-hidden">
      <div className="w-full max-w-5xl relative flex justify-center items-center mb-12 mx-auto px-6">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-100"></div>
        <h1 className="bg-white dark:bg-[#121212] px-10 text-4xl md:text-7xl font-bold relative z-10 tracking-wide text-zinc-900 dark:text-white text-center uppercase">
          Despre <span className="text-red-600">Noi</span>
        </h1>
      </div>

      <DespreHero />
      <PlanetarValues />
      <TeamSection />
      <DepartmentsSection />

      <section className="py-24 bg-zinc-100 dark:bg-[#121212] border-t border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full max-w-5xl relative flex justify-center items-center mb-10">
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-100"></div>
            <h2 className="bg-zinc-100 dark:bg-[#121212] px-10 text-4xl md:text-5xl font-bold relative z-10 tracking-wide text-zinc-900 dark:text-white text-center uppercase">
              Raportul de <span className="text-red-600">activitate</span>
            </h2>
          </div>
          
          <a 
            href="/assets/pdf/Raportul organizatiei semestrul 1 2024-2025.pdf" 
            download 
            className="flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-105"
          >
            <i className="fas fa-download text-2xl"></i> 
            <span className="tracking-widest">DOWNLOAD HERE</span>
          </a>
        </div>
      </section>
    </main>
  );
}
