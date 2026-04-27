import React from "react";
import Link from "next/link";
import VoluntariCarousel from "./VoluntariCarousel";

export default function TeamSection() {
  return (
    <section className="py-24 border-t border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full max-w-5xl flex justify-center items-center mb-16 mx-auto gap-4 md:gap-8">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-red-600 opacity-100"></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-zinc-900 dark:text-white text-center uppercase shrink-0">

            Echipa și <span className="text-red-600">Voluntariat</span>
                    </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-red-600 opacity-100"></div>
        </div>
        <div className="flex flex-col gap-24">
          {/* BC */}
          <div className="relative group">
            <h3 className="text-3xl md:text-5xl font-black uppercase text-red-600 mb-8 tracking-tighter">
              Biroul de Conducere (BC)
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify mb-10 relative z-10 text-xl font-medium">
              Biroul de Conducere reprezintă structura principală de coordonare, care menține echilibrul și direcția organizației, asigurându-se că întreaga activitate respectă valorile OSUT și planul stabilit. Aceștia monitorizează constant progresul departamentelor și se asigură că viziunear pe termen lung a organizației se regăsește în fiecare proiect. O prioritate pentru Biroul de Conducere este starea de bine a voluntarilor, aceștia fiind atenți ca mediul de lucru să fie unul plăcut, în care fiecare student să se poată dezvolta. În același timp, BC-ul reprezintă puntea de legătură cu universitatea. Membrii Biroului de Conducere transmit mai departe opiniile și nevoile colegilor lor și se luptă constant ca dorințele studenților să fie cu adevărat auzite și luate în seamă de structurile decizionale. Prin această monitorizare atentă și prin susținerea intereselor noastre, Biroul de Conducere oferă stabilitatea de care organizația are nevoie pentru a crește sănătos.
            </p>
            <Link 
              href="/biroul-de-conducere/" 
              className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:scale-105"
            >
              Cunoaște membrii BC <span className="group-hover/link:translate-x-2 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800"></div>

          {/* BCE */}
          <div className="relative group">
            <h3 className="text-3xl md:text-5xl font-black uppercase text-red-600 mb-8 tracking-tighter">
              Biroul de Conducere Extins (BCE)
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify mb-10 relative z-10 text-xl font-medium">
              Biroul de Conducere Extins reprezintă echipa care pune în mișcare toate planurile organizației. Această structură reunește coordonatorii tuturor departamentelor, fie că vorbim despre direcții, servicii sau proiecte. Aceștia sunt responsabili de implementarea propriu-zisă a activităților, ghidându-și echipele pentru a transforma obiectivele organizației în realitate. Rolul coordonatorului nu se rezumă la simpla gestionare a sarcinilor, ei lucrează cot la cot cu voluntarii pentru fiecare activitate. Membrii BCE se concentrează pe creșterea și dezvoltarea fiecărui membru din echipă, oferindu-le sprijinul necesar pentru a învăța și a evolua prin experiențe practice.
            </p>
            <Link 
              href="/biroul-de-conducere-extins/" 
              className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:scale-105"
            >
              Cunoaște membrii BCE <span className="group-hover/link:translate-x-2 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800"></div>

          {/* Experiența de voluntar */}
          <div className="relative group">
            <h3 className="text-3xl md:text-5xl font-black uppercase text-red-600 mb-8 tracking-tighter">
              Experiența de Voluntar
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify relative z-10 text-xl font-medium">
              Dincolo de proiecte și ședințe, OSUT Cluj este spațiul în care studenția capătă un sens mult mai profund, transformându-se într-o experiență de viață completă. Pentru mulți dintre membri, acest loc devine rapid o a doua casă, locul în care munca se împletește firesc cu momentele de relaxare și activitățile de bonding, dând naștere unor prietenii solide care depășesc anii facultății. Pe lângă conexiunile umane, parcursul în organizație deschide porți către o dezvoltare personală și profesională. Voluntarii au ocazia să interacționeze direct cu mari companii și să își testeze abilitățile în situații reale, de la organizarea de evenimente până la gestionarea resurselor. Toate aceste experiențe sunt susținute de sesiuni de formare și traininguri, atât la nivel local, cât și național, oferind un bagaj de cunoștințe practice extrem de valoros. În tot acest proces de învățare, universitatea recunoaște oficial implicarea prin credite de voluntariat, oferind o confirmare academică a efortului depus. A fi voluntar aici înseamnă să faci parte dintr-un mecanism viu, care luptă pentru drepturile colegilor și care construiește un mediu universitar mai vibrant. Este, în esență, șansa de a crește frumos alături de oameni care împărtășesc aceleași valori și de a transforma studenția într-o aventură memorabilă.
            </p>
            <VoluntariCarousel />
          </div>

          <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800"></div>

          {/* Cum poți deveni voluntar? */}
          <div id="cum-devin-voluntar" className="relative group">
            <h3 className="text-3xl md:text-5xl font-black uppercase text-red-600 mb-8 tracking-tighter">
              Cum poți deveni voluntar?
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify mb-10 relative z-10 text-xl font-medium">
              Drumul în OSUT Cluj începe de cele mai multe ori cu dorința de a schimba ceva și de a găsi o comunitate faină în care să te dezvolți. Recrutările pentru noii membri au loc de două ori pe an, fiind organizate la începutul fiecărui semestru. Aceasta este ocazia perfectă pentru studenții care vor să se implice în viața universitară, să învețe lucruri noi și să lege prietenii care de multe ori durează toată viața.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
