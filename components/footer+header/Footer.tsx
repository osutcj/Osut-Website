import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <a id="Contact"></a>
      <footer 
        className="w-full text-zinc-300 py-24 px-6 lg:px-20 font-sans flex flex-col items-center relative overflow-hidden border-t border-white/5"
        style={{ background: 'linear-gradient(to bottom, rgba(220, 38, 38, 0.15), #0f0f0f)' }}
        suppressHydrationWarning
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>

        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 relative z-10">
          {/* Sectiune Stanga */}
          <div className="flex flex-col gap-4 max-w-sm">
            <Link href="/" className="relative h-24 w-48">
              <Image 
                src="/assets/images/images/OSUT alb.png" 
                alt="OSUT Logo" 
                fill
                sizes="192px"
                className="object-contain object-left" 
              />
            </Link>


            <div className="mt-8 flex flex-col gap-4">
              <p className="text-base font-semibold text-white">OSUT Cluj este membră:</p>
              <div className="flex items-center gap-10">
                <a href="https://anosr.ro" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity relative h-16 w-24">
                  <Image 
                    src="/assets/images/images/anosr.png" 
                    fill
                    sizes="96px"
                    className="object-contain brightness-0 invert opacity-90 relative top-1" 
                    alt="ANOSR" 
                  />
                </a>
                <a href="https://ftcluj.ro/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity relative h-12 w-20">
                  <Image 
                    src="/assets/images/images/ftc.png" 
                    fill
                    sizes="80px"
                    className="object-contain brightness-0 invert opacity-90" 
                    alt="FTC" 
                  />
                </a>
                <a href="https://www.facebook.com/cosclujnapoca/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity relative h-14 w-20">
                  <Image 
                    src="/assets/images/images/cos.png" 
                    fill
                    sizes="80px"
                    className="object-contain brightness-0 invert opacity-90" 
                    alt="COS" 
                  />
                </a>
              </div>
            </div>
          </div>


          {/* Sectiune Dreapta */}
          <div className="flex flex-wrap gap-12 sm:gap-16 lg:gap-24 lg:pt-2">

            {/* Voluntariat */}
            <div className="flex flex-col gap-4 text-left">
              <h4 className="text-white font-semibold mb-2">Voluntariat</h4>
              <Link
                href="/despre-noi#cum-devin-voluntar"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Cum devin voluntar OSUT Cluj?
              </Link>
              {/* Link spre pagina cu detalii credite SAU un document */}
              <Link
                href="/assets/pdf/Regulament credite voluntariat.pdf"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Credite de voluntariat
              </Link>
            </div>

            {/* Resurse */}
            <div className="flex flex-col gap-4 text-left">
              <h4 className="text-white font-semibold mb-2">Resurse</h4>
              <Link
                href="/educational#studenti-reprezentanti"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Studenți reprezentanți
              </Link>
              <Link
                href="/educational#resurse"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Regulamente
              </Link>
              <Link
                href="/educational#osut-te-informeaza"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                OSUT Te Informează
              </Link>
            </div>
            {/* Retele de socializare (Stay in Touch style) */}
            <div className="flex flex-col gap-4 text-left">
              <h4 className="text-white font-semibold mb-2">Socials</h4>
              <a
                href="https://www.facebook.com/OSUTCJ"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/osutcluj/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Instagram
              </a>
              <a
                href="/contact/"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
