import React from "react";

export default function DespreHero() {
  return (
    <section className="pt-0 pb-20 bg-white dark:bg-[#121212] text-zinc-900 dark:text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
        {/* Viziune */}
        <div className="py-12 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-red-600 mb-8 tracking-tighter">
            Viziune
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify text-lg">
            De peste două decenii, OSUT Cluj (Organizația Studenților din Universitatea Tehnică din Cluj-Napoca) este singura organizație care îi reprezintă pe toți studenții din Universitatea Tehnică, asumându-și misiunea de a le apăra drepturile și de a le face vocea auzită în fața universității. Dincolo de rolul de reprezentare, OSUT Cluj este locul în care studenția prinde viață. Suntem o comunitate mare de voluntari care transformă ideile în proiecte de impact și care învață, zi de zi, ce înseamnă responsabilitatea și prietenia. Aici este spațiul unde înveți să navighezi între cursuri și viața personală, având mereu alături oameni care trec prin aceleași experiențe și care sunt gata să te susțină. Tot ce construim se bazează pe o structură unită și pe parteneriate solide care ne ajută să creștem calitatea fiecărei inițiative. A fi parte din OSUT înseamnă să faci primii pași în viața de adult întro familie care te încurajează să îți descoperi pasiunile. Este locul unde poți să te implici activ și, în același timp, să îți regăsești entuziasmul în fiecare proiect sau moment petrecut în sediu. Indiferent de provocările facultății, în OSUT vei găsi mereu o comunitate care îți face anii de studenție mai ușori și mult mai memorabili.
          </p>
        </div>

        {/* Scop */}
        <div className="py-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-red-600 mb-8 tracking-tighter">
            Scop
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify text-lg">
            Scopul organizației noastre se regăsește chiar în motto-ul nostru: Luptăm pentru studenți. Aceasta nu este doar o promisiune, ci angajamentul nostru zilnic de a apăra drepturile și de a reprezenta interesele tuturor studenților din Universitatea Tehnică. Ne dorim să fim o sursă sigură de informare, oferind fiecărui coleg acces la resursele necesare despre educație și viața universitară. Prin proiectele și activitățile pe care le desfășurăm, creăm oportunități reale de implicare, ajutându-i pe studenți să își dezvolte abilitățile personale și profesionale într-un mediu deschis și prietenos. În OSUT, fiecare student are libertatea de a-și exprima ideile și de a învăța lucruri noi, contribuind direct la o comunitate mai dinamică. În final, tot ceea ce facem are ca obiectiv principal îmbunătățirea calității vieții studențești și consolidarea unui mediu academic în care vocea noastră este cu adevărat ascultată.
          </p>
        </div>
      </div>
    </section>
  );
}
