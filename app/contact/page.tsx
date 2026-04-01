"use client";

import React from "react";
import Link from "next/link";
import { Telegram, Facebook, Instagram } from "iconoir-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#121212] text-zinc-900 dark:text-white font-sans pb-24 pt-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="w-full max-w-5xl relative flex justify-center items-center mb-24 mx-auto animate-fade-in">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-100"></div>
          <h1 className="bg-white dark:bg-[#121212] px-10 text-4xl md:text-6xl font-bold relative z-10 tracking-widest text-zinc-900 dark:text-white text-center uppercase">
            Contactează-ne
          </h1>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 animate-fade-in [animation-delay:200ms]">
          
          {/* E-mail */}
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

          {/* Infoline */}
          <div className="flex flex-col gap-5 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-white dark:hover:bg-zinc-800 shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600">
              <i className="fas fa-phone text-xl"></i>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest">Telefon</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed min-h-[40px]">
              În caz de întrebări urgente, contactează-ne telefonic.
            </p>
            <div className="flex flex-col gap-1">
              <a href="tel:0757332298" className="text-sm font-bold underline decoration-2 underline-offset-4 decoration-red-600 hover:text-red-400 transition-colors w-fit text-zinc-900 dark:text-white">
                0757 332 298
              </a>
              <span className="text-sm text-zinc-500 font-semibold mt-1">Timiș Traian - Președinte</span>
            </div>
          </div>

          {/* Socials */}
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

        {/* Map */}
        <div className="w-full">
          <div className="w-full h-96 md:h-[500px] bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-[2rem] overflow-hidden relative shadow-2xl">
            {/* Embed an Google Maps iframe with Dark Mode filters */}
            <iframe 
              src="https://maps.google.com/maps?q=OSUT%20Cluj-Napoca&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              // The invert + hue-rotate provides an automatic "Dark Map" without paying for Google Cloud dark map API styling!
              className="absolute inset-0 dark:filter dark:invert-[90%] dark:hue-rotate-180 dark:brightness-[85%] dark:contrast-125"
              title="Locație Sediul OSUT"
            ></iframe>
          </div>
        </div>

      </div>
    </main>
  );
}
