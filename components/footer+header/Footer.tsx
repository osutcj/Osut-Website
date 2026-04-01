import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <a id="Contact"></a>
      <footer className="w-full bg-black text-zinc-300 py-16 px-6 lg:px-20 font-sans flex flex-col items-center">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          
          {/* Sectiune Stanga */}
          <div className="flex flex-col gap-4 max-w-sm">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/images/OSUT alb.png" alt="OSUT Logo" className="h-24 w-auto object-contain" />
            </Link>
            
            
            <div className="mt-8 flex flex-col gap-4">
              <p className="text-base font-semibold text-white">OSUT Cluj este membră:</p>
              <div className="flex items-center gap-10">
                <a href="https://anosr.ro" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/images/images/anosr.png" className="h-16 w-auto brightness-0 invert opacity-90 relative top-1" alt="ANOSR" />
                </a>
                <a href="https://ftcluj.ro/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/images/images/ftc.png" className="h-12 w-auto brightness-0 invert opacity-90" alt="FTC" />
                </a>
                <a href="https://www.facebook.com/cosclujnapoca/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/images/images/cos.png" className="h-14 w-auto brightness-0 invert opacity-90" alt="COS" />
                </a>
              </div>
            </div>
          </div>

          {/* Sectiune Dreapta */}
          <div className="flex flex-wrap gap-12 sm:gap-16 lg:gap-24 lg:pt-2">
            
            {/* Resurse */}
            <div className="flex flex-col gap-4 text-left">
              <h4 className="text-white font-semibold mb-2">Resurse</h4>
              <Link href="/educational#studenti-reprezentanti" className="text-sm text-zinc-400 hover:text-white transition">Studenți reprezentanți</Link>
              <Link href="/educational#resurse" className="text-sm text-zinc-400 hover:text-white transition">Regulamente</Link>
              <Link href="/educational#osut-te-informeaza" className="text-sm text-zinc-400 hover:text-white transition">OSUT Te Informează</Link>
              <Link href="/educational#resurse" className="text-sm text-zinc-400 hover:text-white transition">Demersuri</Link>
            </div>

            {/* Voluntariat */}
            <div className="flex flex-col gap-4 text-left">
              <h4 className="text-white font-semibold mb-2">Voluntariat</h4>
              <Link href="/cum-devin-voluntar" className="text-sm text-zinc-400 hover:text-white transition">Cum devin voluntar OSUT Cluj?</Link>
              {/* Link spre pagina cu detalii credite SAU un document */}
              <Link href="/credite" className="text-sm text-zinc-400 hover:text-white transition">Credite de voluntariat</Link>
              <Link href="/oportunitati" className="text-sm text-zinc-400 hover:text-white transition">Oportunități</Link>
            </div>

            {/* Retele de socializare (Stay in Touch style) */}
            <div className="flex flex-col gap-4 text-left">
              <h4 className="text-white font-semibold mb-2">Socials</h4>
              <a href="https://www.facebook.com/OSUTCJ" target="_blank" rel="noreferrer" className="text-sm text-zinc-400 hover:text-white transition">Facebook</a>
              <a href="https://www.instagram.com/osutcluj/" target="_blank" rel="noreferrer" className="text-sm text-zinc-400 hover:text-white transition">Instagram</a>
              <a href="/contact/" className="text-sm text-zinc-400 hover:text-white transition">Contact</a>
            </div>

          </div>

        </div>

        
      </footer>
    </>
  );
}
