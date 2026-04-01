"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  { name: "Balul Bobocilor", logo: "/assets/images/images/Proiecte/Logo-uri/logo-balul_bobocilor.png" },
  { name: "CrosulUT", logo: "/assets/images/images/Proiecte/Logo-uri/logo-cros.png" },
  { name: "ESU", logo: "/assets/images/images/Proiecte/Logo-uri/esu_logo.png" },
  { name: "InfoTech", logo: "/assets/images/images/Proiecte/Logo-uri/logo-infotech.png" },
  { name: "PoliArt", logo: "/assets/images/images/Proiecte/Logo-uri/logo_poliart.png" },
  { name: "PoliHack", logo: "/assets/images/images/Proiecte/Logo-uri/logo-polihack.png" },
  { name: "PoliSport", logo: "/assets/images/images/Proiecte/Logo-uri/logo-polisport.png" },
  { name: "InfoCafe", logo: "/assets/images/images/Proiecte/Logo-uri/logo-infocafe.png" },
  { name: "ZUT", logo: "" },
  { name: "Viitor Inginer", logo: "" }
];

export default function HomeProjects() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-[#121212] text-zinc-900 dark:text-white overflow-hidden relative border-t border-zinc-200 dark:border-zinc-800">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 inline-block text-zinc-900 dark:text-white">
            Proiectele <span className="text-red-600">Noastre</span>
          </h2>
          <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full mb-8"></div>
          
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {PROJECTS.map((project, index) => (
            <Link 
              key={index} 
              href="/proiecte-si-initiative"
              className="group relative bg-white dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl p-10 flex items-center justify-center h-44 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] transition-all duration-500 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden backdrop-blur-sm"
            >
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {project.logo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img 
                    src={project.logo} 
                    alt={project.name} 
                    className="max-w-[85%] max-h-[85%] object-contain transition-transform duration-500 group-hover:scale-110 filter brightness-100 dark:brightness-95 dark:group-hover:brightness-110" 
                  />
                ) : (
                  <div className="text-xl font-bold text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-all duration-300 transform group-hover:scale-105 text-center uppercase tracking-wider">
                    {project.name}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link 
            href="/proiecte-si-initiative"
            className="group relative flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-black text-lg uppercase tracking-wider transition-all duration-300 shadow-2xl shadow-red-900/40 hover:shadow-red-600/50 hover:-translate-y-1.5 border border-red-500/20"
          >
            Vezi toate proiectele
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
