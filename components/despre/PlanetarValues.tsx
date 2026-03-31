"use client";

import React, { useEffect, useState } from "react";

const VALORI = [
  "adaptabilitate",
  "ambiție",
  "creativitate",
  "inițiativă",
  "onoare",
  "performanță",
  "prietenie",
  "respect",
  "responsabilitate",
];

export default function PlanetarValues() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-[600px] w-full bg-white dark:bg-black"></div>;

  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden relative min-h-[700px] flex items-center justify-center">
      <div className="text-center absolute top-12 left-0 right-0 z-20">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-zinc-900 dark:text-white tracking-widest">
          Valorile <span className="text-red-600">Noastre</span>
        </h2>
      </div>

      {/* Container for Planetary Layout */}
      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center mt-12">
        {/* The "Sun" */}
        <div className="absolute z-10 w-24 h-24 md:w-32 md:h-32 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(220,38,38,0.8)] border border-red-400">
          <span className="text-white font-black text-2xl md:text-3xl tracking-widest">
            OSUT
          </span>
        </div>

        {/* The "Orbit" Line */}
        <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] border border-zinc-200 dark:border-zinc-800 rounded-full animate-spin-slow pointer-events-none"></div>

        {/* The "Planets" */}
        {VALORI.map((valoare, i) => {
          const angle = (i / VALORI.length) * 360;
          // Math.cos takes radians, so angle * (PI / 180)
          const rad = angle * (Math.PI / 180);
          const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 225;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <div
              key={valoare}
              className="absolute group transition-transform hover:scale-110 z-20 cursor-default"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700/50 px-4 py-2 rounded-full shadow-lg shadow-black/5 dark:shadow-black/50 hover:border-red-500/80 transition-colors hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] dark:hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] whitespace-nowrap">
                <span className="text-zinc-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-white uppercase font-bold text-xs md:text-sm tracking-widest transition-colors">
                  {valoare}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
