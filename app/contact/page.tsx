"use client";

import React from "react";
import Link from "next/link";
import { Telegram, Facebook, Instagram } from "iconoir-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#121212] text-zinc-900 dark:text-white font-sans pb-24 pt-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left Column (Form) */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-16 leading-tight">
              Let&apos;s <br /> <span className="text-red-600">collaborate</span>
            </h1>

            <form className="flex flex-col gap-8 w-full max-w-md">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Your Name *" 
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 placeholder-gray-500 text-zinc-900 dark:text-white font-semibold focus:outline-none focus:border-red-500 transition-colors group-hover:border-zinc-500"
                />
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Phone Number *" 
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 placeholder-gray-500 text-zinc-900 dark:text-white font-semibold focus:outline-none focus:border-red-500 transition-colors group-hover:border-zinc-500"
                />
              </div>

              <div className="relative mb-6 group">
                <input 
                  type="text" 
                  placeholder="Message *" 
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 placeholder-gray-500 text-zinc-900 dark:text-white font-semibold focus:outline-none focus:border-red-500 transition-colors group-hover:border-zinc-500"
                />
              </div>

              <div>
                <button 
                  type="button" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:scale-105 w-fit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Column (Image) */}
          <div className="flex items-center justify-center lg:justify-end hidden md:flex relative">
            {/* The blur shape behind image for depth */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Using a placeholder from OSUT assets, styled with large rounded borders */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/images/images/Proiecte/infonight.jpg" 
              alt="Collaborate" 
              className="w-full max-w-lg aspect-square object-cover rounded-[2rem] shadow-2xl border border-zinc-800 grayscale-[20%]"
            />
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* E-mail */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase tracking-widest">E-mail</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed min-h-[40px]">
              Trimite-ne întrebările tale direct pe adresa noastră.
            </p>
            <a href="mailto:osutcluj@gmail.com" className="text-sm font-bold underline decoration-2 underline-offset-4 decoration-red-600 hover:text-red-400 transition-colors w-fit text-zinc-900 dark:text-white">
              osutcluj@gmail.com
            </a>
          </div>

          {/* Infoline */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase tracking-widest">Infoline</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed min-h-[40px]">
              În caz de întrebări urgente, contactează-ne telefonic.
            </p>
            <a href="tel:0757332298" className="text-sm font-bold underline decoration-2 underline-offset-4 decoration-red-600 hover:text-red-400 transition-colors w-fit text-zinc-900 dark:text-white">
              0757 332 298
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase tracking-widest">Socials</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed min-h-[40px]">
              Aici ducem o viață socială activă. Urmărește-ne!
            </p>
            <div className="flex gap-4 mt-1">
              <a href="https://www.facebook.com/OSUTCJ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 text-red-500 border border-zinc-300 dark:border-zinc-700/50 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all shadow-lg hover:shadow-red-600/50">
                <Facebook width={20} height={20} />
              </a>
              <a href="https://www.instagram.com/osutcluj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 text-red-500 border border-zinc-300 dark:border-zinc-700/50 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all shadow-lg hover:shadow-red-600/50">
                <Instagram width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase tracking-widest">Adresă</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed min-h-[40px]">
              Te așteptăm la sediul nostru pentru orice nelămurire.
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline decoration-2 underline-offset-4 decoration-red-600 hover:text-red-400 transition-colors w-fit leading-loose text-zinc-900 dark:text-white">
              Universitatea Tehnică din Cluj-Napoca
            </a>
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
