import React from "react";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-center mb-16">
          Echipa și <span className="text-red-600">Voluntariat</span>
        </h2>

        <div className="flex flex-col gap-12">
          {/* BC */}
          <div className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-300 dark:border-zinc-700/50 hover:border-red-500/50 transition-colors shadow-2xl relative overflow-hidden">
            {/* abstract red shape behind text */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -z-10"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-red-500 mb-4 tracking-wider">
              Biroul de Conducere (BC)
            </h3>
            <p className="text-zinc-700 dark:text-gray-300 leading-relaxed text-justify mb-6 relative z-10">
              Biroul de Conducere reprezintă structura principală de coordonare, care menține echilibrul și direcția organizației, asigurându-se că întreaga activitate respectă valorile OSUT și planul stabilit. Aceștia monitorizează constant progresul departamentelor și se asigură că viziunea pe termen lung a organizației se regăsește în fiecare proiect. O prioritate pentru Biroul de Conducere este starea de bine a voluntarilor, aceștia fiind atenți ca mediul de lucru să fie unul plăcut, în care fiecare student să se poată dezvolta. În același timp, BC-ul reprezintă puntea de legătură cu universitatea. Membrii Biroului de Conducere transmit mai departe opiniile și nevoile colegilor lor și se luptă constant ca dorințele studenților să fie cu adevărat auzite și luate în seamă de structurile decizionale. Prin această monitorizare atentă și prin susținerea intereselor noastre, Biroul de Conducere oferă stabilitatea de care organizația are nevoie pentru a crește sănătos.
            </p>
            <Link 
              href="/biroul-de-conducere/" 
              className="inline-flex items-center gap-2 text-red-500 font-bold hover:text-red-700 dark:hover:text-white transition-colors relative z-10"
            >
              Cunoaște membrii BC <span>&rarr;</span>
            </Link>
          </div>

          {/* BCE */}
          <div className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-300 dark:border-zinc-700/50 hover:border-red-500/50 transition-colors shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -z-10"></div>

            <h3 className="text-2xl md:text-3xl font-bold uppercase text-red-500 mb-4 tracking-wider">
              Biroul de Conducere Extins (BCE)
            </h3>
            <p className="text-zinc-700 dark:text-gray-300 leading-relaxed text-justify mb-6 relative z-10">
              Biroul de Conducere Extins reprezintă echipa care pune în mișcare toate planurile organizației. Această structură reunește coordonatorii tuturor departamentelor, fie că vorbim despre direcții, servicii sau proiecte. Aceștia sunt responsabili de implementarea propriu-zisă a activităților, ghidându-și echipele pentru a transforma obiectivele organizației în realitate. Rolul coordonatorului nu se rezumă la simpla gestionare a sarcinilor, ei lucrează cot la cot cu voluntarii pentru fiecare activitate. Membrii BCE se concentrează pe creșterea și dezvoltarea fiecărui membru din echipă, oferindu-lesprijinul necesar pentru a învăța și a evolua prin experiențe practice.
            </p>
            <Link 
              href="/biroul-de-conducere-extins/" 
              className="inline-flex items-center gap-2 text-red-500 font-bold hover:text-red-700 dark:hover:text-white transition-colors relative z-10"
            >
              Cunoaște membrii BCE <span>&rarr;</span>
            </Link>
          </div>

          {/* Experiența de voluntar */}
          <div className="bg-gradient-to-br from-red-600 to-zinc-200 dark:to-zinc-900 p-1 rounded-2xl shadow-[0_0_40px_rgba(220,38,38,0.2)]">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-[15px] h-full relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-bold uppercase text-zinc-900 dark:text-white mb-4 tracking-wider">
                Experiența de <span className="text-red-500">voluntar</span>
              </h3>
              <p className="text-zinc-700 dark:text-gray-300 leading-relaxed text-justify relative z-10">
                Dincolo de proiecte și ședințe, OSUT Cluj este spațiul în care studenția capătă un sens mult mai profund, transformându-se într-o experiență de viață completă. Pentru mulți dintre membri, acest loc devine rapid o a doua casă, locul în care munca se împletește firesc cu momentele de relaxare și activitățile de bonding, dând naștere unor prietenii solide care depășesc anii facultății. Pe lângă conexiunile umane, parcursul în organizație deschide porți către o dezvoltare personală și profesională. Voluntarii au ocazia să interacționeze direct cu mari companii și să își testeze abilitățile în situații reale, de la organizarea de evenimente până la gestionarea resurselor. Toate aceste experiențe sunt susținute de sesiuni de formare și traininguri, atât la nivel local, cât și național, oferind un bagaj de cunoștințe practice extrem de valoros. În tot acest proces de învățare, universitatea recunoaște oficial implicarea prin credite de voluntariat, oferind o confirmare academică a efortului depus. A fi voluntar aici înseamnă să faci parte dintr-un mecanism viu, care luptă pentru drepturile colegilor și care construiește un mediu universitar mai vibrant. Este, în esență, șansa de a crește frumos alături de oameni care împărtășesc aceleași valori și de a transforma studenția într-o aventură memorabilă.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
