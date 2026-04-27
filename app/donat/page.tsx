"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./donat.css";

export default function Donat() {
    const [copied, setCopied] = useState(false);
    const iban = "RO36BTRL01301205950852XX";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(iban);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen text-zinc-900 dark:text-white font-sans pt-40 pb-20 px-6 overflow-hidden relative">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="w-full max-w-5xl flex justify-center items-center mb-16 mx-auto gap-4 md:gap-8">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-red-600 opacity-100"></div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-wide text-zinc-900 dark:text-white text-center uppercase leading-tight shrink-0">

                        HELP US DO MORE
                              </h1>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-red-600 opacity-100"></div>
        </div>
                
                <div className="text-center mb-24 px-6">
                    <div 
                        onClick={copyToClipboard}
                        className="group relative cursor-pointer py-10 border-y border-white/5 transition-all hover:bg-white/[0.02] w-full"
                    >
                        <p className="text-zinc-500 uppercase text-xs font-black tracking-[0.3em] mb-4">Codul IBAN</p>
                        <h2 className="text-2xl md:text-5xl font-mono font-bold tracking-[0.1em] text-zinc-900 dark:text-white break-all mb-4 translate-z-0">
                           {iban}
                        </h2>
                        <p className="text-zinc-400 text-base mb-6">Organizația Studenților din Universitatea Tehnică din Cluj-Napoca</p>
                        <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest text-red-600">
                            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} text-lg`}></i>
                            {copied ? 'Copiat în clipboard!' : 'Apasă pentru a copia IBAN-ul'}
                        </div>
                    </div>
                </div>

                <div className="mb-24 text-center">
                <div className="w-full max-w-5xl flex justify-center items-center mb-10 mx-auto gap-4 md:gap-8">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-red-600 opacity-100"></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-zinc-900 dark:text-white text-center uppercase shrink-0">

                        DONEAZĂ <span className="text-[#b51c1c]">3,5%</span>
                              </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-red-600 opacity-100"></div>
        </div>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify relative z-10 text-xl mb-8 max-w-5xl mx-auto">
                        Organizația Studenților din Universitatea Tehnică din Cluj-Napoca recunoaște și aplică valoarea principiilor dezvoltării durabile. Dezvoltarea durabilă reprezintă o serie de principii economice, sociale și de mediu ce permit realizarea activităților desfășurate de organizație.
                    </p>
                </div>

                <div className="mb-20">
                    <div className="w-full max-w-5xl flex justify-center items-center mb-12 mx-auto gap-4 md:gap-8">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-red-600 opacity-100"></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-zinc-900 dark:text-white text-center uppercase shrink-0">

                            Cum poți face acest lucru?
                                  </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-red-600 opacity-100"></div>
        </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="py-10 border-b md:border-b-0 md:border-r border-zinc-800 px-6">
                            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center font-black text-2xl mb-8 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]">1</div>
                            <h3 className="text-2xl font-bold uppercase mb-6 text-zinc-900 dark:text-white tracking-tight">Completarea formularului:</h3>
                            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify text-xl">
                                Pentru venituri din salarii sau pensii: Formularul 230 (Cerere privind destinația sumei reprezentând până la 3.5% din impozitul anual pe veniturile din salarii și din pensii). Pentru alte venituri: Declarația unică. În formular se completează datele personale (nume, CNP, adresă) și datele organizației beneficiare.
                            </p>
                        </div>

                        <div className="py-10 px-6">
                            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center font-black text-2xl mb-8 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]">2</div>
                            <h3 className="text-2xl font-bold uppercase mb-6 text-zinc-900 dark:text-white tracking-tight">Depunerea formularului:</h3>
                            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify text-xl">
                                Formularul se poate depune în format fizic la administrația financiară (ANAF) de care aparțineți. Se poate trimite prin poștă cu confirmare de primire. Se poate depune online, prin platforma SPV (Spațiul Privat Virtual), dacă aveți un cont activ.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center relative py-16 px-8 rounded-[3rem] bg-zinc-900/20 border border-zinc-800/50 overflow-hidden backdrop-blur-sm">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b51c1c] to-transparent"></div>
                    
                    <p className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-[#b51c1c] mb-10">
                        Campania începe din 1 ianuarie 2026
                    </p>

                    <a
                        href="https://formular230.ro/organizatia-studentilor-din-universitatea-tehnica-din-cluj-napoca"
                        className="group relative inline-flex items-center justify-center bg-[#b51c1c] hover:bg-[#8f1515] text-white font-black py-6 px-14 rounded-full shadow-xl overflow-hidden transition-transform hover:scale-[1.02]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="relative z-10 tracking-[0.15em] text-lg uppercase">DONEAZĂ ACUM</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>

                    <div className="absolute -top-10 -right-10 w-44 h-44">
                      <Image 
                          src="/assets/images/images/cometa2.png" 
                          alt="Cometă" 
                          fill
                          sizes="176px"
                          className="opacity-20 pointer-events-none transform -rotate-12 group-hover:opacity-30 object-contain" 
                      />
                    </div>
                </div>
            </div>
        </main>
    );
}
