"use client";

import React from "react";

const VALORI = [
  { name: "adaptabilitate", icon: "fas fa-sync-alt" },
  { name: "ambiție", icon: "fas fa-bullseye" },
  { name: "creativitate", icon: "fas fa-lightbulb" },
  { name: "inițiativă", icon: "fas fa-rocket" },
  { name: "onoare", icon: "fas fa-medal" },
  { name: "performanță", icon: "fas fa-trophy" },
  { name: "prietenie", icon: "fas fa-hands-helping" },
  { name: "respect", icon: "fas fa-handshake" },
  { name: "responsabilitate", icon: "fas fa-shield-alt" },
];

export default function PlanetarValues() {
  return (
    <section className="py-24 border-t border-zinc-200 dark:border-zinc-800 text-center px-6">
      <div className="max-w-6xl mx-auto">
        <div className="w-full max-w-5xl flex justify-center items-center mb-16 mx-auto gap-4 md:gap-8">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-red-600 opacity-100"></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-zinc-900 dark:text-white text-center uppercase shrink-0">

            Valorile <span className="text-red-600">Noastre</span>
                    </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-red-600 opacity-100"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
          {VALORI.map((val, i) => {
            const isRed = i % 2 === 0;
            return (
              <div key={val.name} className="flex flex-col items-center w-full sm:w-[calc(50%-24px)] md:w-[calc(33.33%-32px)] lg:w-[calc(20%-40px)]">
                {/* Minimalist Circle with alternating Red/White colors */}
                <div 
                  className={`relative w-28 h-28 mb-6 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 ${
                    isRed ? 'bg-[#b51c1c] text-white' : 'bg-white text-[#1a1a1a] scale-105 border border-zinc-100'
                  }`}
                >
                  <i className={`${val.icon} text-3xl`}></i>
                  
                  {/* Subtle decorative ring */}
                  <div className={`absolute inset-[-6px] rounded-full border-2 ${
                    isRed ? 'border-red-600/20' : 'border-zinc-200/30'
                  }`}></div>
                </div>

                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-center relative z-10 text-lg font-bold uppercase tracking-wide px-2">
                  {val.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
