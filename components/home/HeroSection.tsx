import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white overflow-hidden">
      {/* Background Gradient / Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 to-white dark:to-zinc-900 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Organizația Studenților din Universitatea <span className="text-red-500">Tehnică</span> din Cluj-Napoca
        </h1>

        <div className="bg-red-600 px-6 py-2 rounded-full transform -rotate-2 hover:rotate-0 transition-all duration-300 shadow-xl shadow-red-600/30">
          <p className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white">
            Luptăm pentru studenți!
          </p>
        </div>

        <p className="text-lg md:text-xl text-zinc-700 dark:text-gray-300 leading-relaxed max-w-4xl mt-4">
          Organizația Studenților din Universitatea Tehnică din Cluj-Napoca (OSUT Cluj) a fost înființată în 2003 
          și este singura organizație reprezentativă din Universitatea Tehnică din Cluj-Napoca și una din cele mai 
          mari organizații studențești din țară. Misiunea sa principală este apărarea drepturilor studențești, 
          dublată de o implicare activă în comunitatea de tineret prin proiecte diverse de antreprenoriat, 
          dezvoltare personală, sport și cultură. Mai mult, facilităm prin intermediul evenimentelor organizate 
          de noi, o comunicare directă între companii și studenți.
        </p>

      </div>
    </section>
  );
}
