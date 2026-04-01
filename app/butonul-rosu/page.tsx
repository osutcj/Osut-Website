"use client";

import React from "react";
import "./butonul-rosu.css";

export default function ButonulRosu() {
    return (
        <main className="min-h-screen bg-[#121212] text-white font-sans pt-40 pb-20 px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] -mr-80 -mt-80 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    {/* Text Content Column */}
                    <div className="flex-1 space-y-10">
                        <div className="space-y-2 animate-fade-in">
                            <h1 className="text-3xl md:text-4xl font-light uppercase tracking-[0.2em] text-white opacity-80">
                                LET US
                            </h1>
                            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none text-[#b51c1c] tracking-tighter">
                                HELP YOU
                            </h2>
                        </div>

                        <div className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl animate-fade-in [animation-delay:200ms] fill-mode-forwards opacity-0">
                            <p className="text-white font-medium">
                                Ai o problemă în facultate pe care nu știi cum să o rezolvi? Poate un profesor îți încalcă un drept, poate există probleme în căminul în care ești cazat sau poate nu știi cum să procedezi atunci când ai de făcut o sesizare?
                            </p>
                            <p>
                                OSUT Cluj vine în ajutorul tău cu Butonul Roșu, un mecanism simplu prin care ne poți sesiza rapid orice problemă pe care o întâmpini!
                            </p>
                            <p className="text-zinc-200">
                                Fă-ți vocea auzită! Împreună, luptăm pentru studenți!
                            </p>
                            <div className="pt-4 flex flex-wrap gap-4 text-xs font-black uppercase tracking-widest text-[#b51c1c]">
                                <span>#OSUTCJ</span>
                                <span>#weAreUTCN</span>
                                <span>#ButonulRosu</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="w-full lg:w-[500px] xl:w-[600px] animate-fade-in [animation-delay:400ms] fill-mode-forwards opacity-0">
                        <div className="relative p-1 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] shadow-2xl backdrop-blur-xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b51c1c] to-transparent opacity-50"></div>
                            
                            <div className="rounded-[2.2rem] overflow-hidden bg-zinc-800/20">
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSehM0INGphPT-FWfki5BWW9x4OVpqT_oLeXTv_jTy-jH1RDZg/viewform?embedded=true"
                                    title="Butonul Roșu Form"
                                    className="w-full min-h-[600px] border-none"
                                >
                                    Loading…
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
