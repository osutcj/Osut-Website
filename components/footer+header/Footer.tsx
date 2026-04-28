import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <a id="Contact"></a>
      <footer 
        className="w-full text-zinc-300 py-8 px-6 lg:px-20 font-sans flex flex-col items-center relative overflow-hidden border-t border-white/5 bg-[#121212]"
        suppressHydrationWarning
      >
        {/* Fără elemente decorative în background sau linia colorată de sus, păstrăm doar o culoare (bg-[#121212]) și bordura subtilă de sus din clasele tailwind. */}

        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-8 relative z-10">
          {/* OSUT Logo */}
          <Link href="/" className="relative h-24 w-48 shrink-0">
            <Image 
              src="/assets/images/images/OSUT alb.webp" 
              alt="OSUT Logo" 
              fill
              sizes="192px"
              className="object-contain object-left lg:object-center" 
            />
          </Link>

          {/* Vertical/Horizontal subtle divider 1 */}
          <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="lg:hidden w-full max-w-sm self-center h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* OSUT Cluj este membra */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">OSUT Cluj este membră:</p>
            <div className="flex items-center gap-8">
              <a href="https://anosr.ro" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity relative h-16 w-24">
                <Image 
                  src="/assets/images/images/anosr.webp" 
                  fill
                  sizes="96px"
                  className="object-contain brightness-0 invert opacity-90 relative top-1" 
                  alt="ANOSR" 
                />
              </a>
              <a href="https://ftcluj.ro/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity relative h-12 w-20">
                <Image 
                  src="/assets/images/images/ftc.webp" 
                  fill
                  sizes="80px"
                  className="object-contain brightness-0 invert opacity-90" 
                  alt="FTC" 
                />
              </a>
              <a href="https://www.facebook.com/cosclujnapoca/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity relative h-14 w-20">
                <Image 
                  src="/assets/images/images/cos.webp" 
                  fill
                  sizes="80px"
                  className="object-contain brightness-0 invert opacity-90" 
                  alt="COS" 
                />
              </a>
            </div>
          </div>
          {/* Vertical/Horizontal subtle divider 2 */}
          <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="lg:hidden w-full max-w-sm self-center h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Sectiune Dreapta */}
          <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 lg:pt-2">

            {/* Voluntariat */}
            <div className="flex flex-col gap-2 text-left">
              <h4 className="text-white font-semibold mb-1">Voluntariat</h4>
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
            <div className="flex flex-col gap-2 text-left">
              <h4 className="text-white font-semibold mb-1">Resurse</h4>
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
            <div className="flex flex-col gap-2 text-left">
              <h4 className="text-white font-semibold mb-1">Socials</h4>
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
