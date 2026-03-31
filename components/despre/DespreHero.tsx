import React from "react";

export default function DespreHero() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Viziune */}
        <div className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-300 dark:border-zinc-700/50 hover:border-red-500/50 transition-colors shadow-xl">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-red-500 mb-6 tracking-widest">
            Viziune
          </h2>
          <p className="text-zinc-700 dark:text-gray-300 leading-relaxed text-justify">
            De peste două decenii, OSUT Cluj (Organizația Studenților din Universitatea Tehnică din Cluj-Napoca) este singura organizație care îi reprezintă pe toți studenții din Universitatea Tehnică, asumându-și misiunea de a le apăra drepturile și de a le face vocea auzită în fața universității. Dincolo de rolul de reprezentare, OSUT Cluj este locul în care studenția prinde viață. Suntem o comunitate mare de voluntari care transformă ideile în proiecte de impact și care învață, zi de zi, ce înseamnă responsabilitatea și prietenia. Aici este spațiul unde înveți să navighezi între cursuri și viața personală, având mereu alături oameni care trec prin aceleași experiențe și care sunt gata să te susțină. Tot ce construim se bazează pe o structură unită și pe parteneriate solide care ne ajută să creștem calitatea fiecărei inițiative. A fi parte din OSUT înseamnă să faci primii pași în viața de adult într-o familie care te încurajează să îți descoperi pasiunile. Este locul unde poți să te implici activ și, în același timp, să îți regăsești entuziasmul în fiecare proiect sau moment petrecut în sediu. Indiferent de provocările facultății, în OSUT vei găsi mereu o comunitate care îți face anii de studenție mai ușori și mult mai memorabili.
          </p>
        </div>

        {/* Scop */}
        <div className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-300 dark:border-zinc-700/50 hover:border-red-500/50 transition-colors shadow-xl">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-red-500 mb-6 tracking-widest">
            Scop
          </h2>
          <p className="text-zinc-700 dark:text-gray-300 leading-relaxed text-justify">
            Scopul organizației noastre se regăsește chiar în motto-ul nostru: Luptăm pentru studenți. Aceasta nu este doar o promisiune, ci angajamentul nostru zilnic de a apăra drepturile și de a reprezenta interesele tuturor studenților din Universitatea Tehnică. Ne dorim să fim o sursă sigură de informare, oferind fiecărui coleg acces la resursele necesare despre educație și viața universitară. Prin proiectele și activitățile pe care le desfășurăm, creăm oportunități reale de implicare, ajutându-i pe studenți să își dezvolte abilitățile personale și profesionale într-un mediu deschis și prietenos. În OSUT, fiecare student are libertatea de a-și exprima ideile și de a învăța lucruri noi, contribuind direct la o comunitate mai dinamică. În final, tot ceea ce facem are ca obiectiv principal îmbunătățirea calității vieții studențești și consolidarea unui mediu academic în care vocea noastră este cu adevărat ascultată.
          </p>
        </div>
      </div>
    </section>
  );
}
