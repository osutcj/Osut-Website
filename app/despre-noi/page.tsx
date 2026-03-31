"use client";

import React from "react";
import DespreHero from "@/components/despre/DespreHero";
import PlanetarValues from "@/components/despre/PlanetarValues";
import TeamSection from "@/components/despre/TeamSection";
import DepartmentsSection from "@/components/despre/DepartmentsSection";

export default function DespreNoi() {
  return (
    <main className="main-wrap bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white font-sans min-h-screen pt-24 pb-10 overflow-hidden">
      {/* Page Header / Contextual Image */}
      <div className="flex justify-center mb-12 px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/assets/images/images/despre.png" 
          className="max-w-xs md:max-w-md w-full object-contain filter drop-shadow-2xl" 
          alt="Despre Noi" 
        />
      </div>

      <DespreHero />
      <PlanetarValues />
      <TeamSection />
      <DepartmentsSection />

      {/* Legacy features: Raport de activitate & Partners */}
      <section className="py-24 bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-center mb-10">
            Raportul de <span className="text-red-600">activitate</span>
          </h2>
          
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
