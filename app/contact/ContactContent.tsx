"use client";

import React from "react";
import { Facebook, Instagram } from "iconoir-react";

export default function ContactContent() {
  return (
    <main className="min-h-screen text-zinc-900 dark:text-white font-sans pb-24 pt-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="w-full max-w-5xl flex justify-center items-center mb-24 mx-auto animate-fade-in gap-4 md:gap-8">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-red-600 opacity-100"></div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-zinc-900 dark:text-white text-center uppercase shrink-0">

            Contactează-ne
                    </h1>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-red-600 opacity-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 animate-fade-in [animation-delay:200ms]">
          
          <div className="flex flex-col gap-5 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-white dark:hover:bg-zinc-800 shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600">
              <i className="fas fa-envelope text-xl"></i>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest">E-mail</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed min-h-[40px]">
              Trimite-ne întrebările tale direct pe adresa noastră.
            </p>
            <a href="mailto:office@osutcluj.com" className="text-sm font-bold underline decoration-2 underline-offset-4 decoration-red-600 hover:text-red-400 transition-colors w-fit text-zinc-900 dark:text-white">
              office@osutcluj.com
            </a>
          </div>

          <div className="flex flex-col gap-5 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-white dark:hover:bg-zinc-800 shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600">
              <i className="fas fa-phone text-xl"></i>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest">Telefon</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed min-h-[40px]">
              În caz de întrebări urgente, contactează-ne telefonic.
            </p>
            <div className="flex flex-col gap-1">
              <a href="tel:0762385168" className="text-sm font-bold underline decoration-2 underline-offset-4 decoration-red-600 hover:text-red-400 transition-colors w-fit text-zinc-900 dark:text-white">
                0762 385 168
              </a>
              <span className="text-sm text-zinc-500 font-semibold mt-1">Arimia Andreea - Președinte</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-white dark:hover:bg-zinc-800 shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600">
              <i className="fas fa-share-nodes text-xl"></i>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest">Socials</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed min-h-[40px]">
              Urmărește-ne pe rețelele noastre de social media!
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/OSUTCJ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 text-red-500 border border-zinc-300 dark:border-zinc-700/50 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all shadow-lg hover:shadow-red-600/50">
                <Facebook width={20} height={20} />
              </a>
              <a href="https://www.instagram.com/osutcluj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 text-red-500 border border-zinc-300 dark:border-zinc-700/50 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all shadow-lg hover:shadow-red-600/50">
                <Instagram width={20} height={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="w-full">
          <div className="w-full h-96 md:h-[500px] bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-[2rem] overflow-hidden relative shadow-2xl">
            <iframe 
              src="https://maps.google.com/maps?q=OSUT%20Cluj-Napoca&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 dark:filter dark:invert-[90%] dark:hue-rotate-180 dark:brightness-[85%] dark:contrast-125"
              title="Locație Sediul OSUT"
            ></iframe>
          </div>
        </div>

      </div>
    </main>
  );
}
