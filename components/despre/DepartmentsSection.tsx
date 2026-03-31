"use client";

import React from "react";
import { 
  Palette, 
  MusicDoubleNote, 
  Book, 
  Heart, 
  Flash, 
  Coins, 
  Camera, 
  Code, 
  VideoCamera, 
  Wrench 
} from "iconoir-react";

const DEPARTAMENTE = [
  {
    titlu: "Cultural",
    icon: <Palette width={32} height={32} />,
    descriere: "Direcția Culturală este inima creativă a organizației, unde arta și energia bună se împletesc pentru a le oferi studenților echilibru și inspirație. Prin proiecte precum PoliArt și Mind Power, voluntarii promovează exprimarea liberă și sănătatea mintală, transformând arta într-un instrument de conectare. Pe lângă evenimentele din campus, direcția se implică activ în comunitate prin vizite la adăposturi de animale și case de copii, demonstrând că spiritul creativ merge mână în mână cu cel caritabil."
  },
  {
    titlu: "Divertisment",
    icon: <MusicDoubleNote width={32} height={32} />,
    descriere: "Direcția de Divertisment transformă ideile în experiențe memorabile și menține spiritul organizației viu prin activități sociale și petreceri tematice. Scopul acesteia este să asigure starea de bine a echipei și să creeze un cadru unde voluntarii își pun în practică ideile creative."
  },
  {
    titlu: "Educațional",
    icon: <Book width={32} height={32} />,
    descriere: "Direcția Educațional este vocea studenților și se asigură că toată lumea își cunoaște și își apără drepturile în facultate. Voluntarii le oferă sprijin colegilor când apar probleme academice și îi ajută să înțeleagă mai bine regulamentele universitare. Dacă vrei să înveți cum funcționează reprezentarea studențească și cum poți să îmbunătățești experiența tuturor în universitate, aici e locul potrivit."
  },
  {
    titlu: "Sport și Sănătate",
    icon: <Heart width={32} height={32} />,
    descriere: "Direcția Sport și Sănătate promovează mișcarea, echilibrul și spiritul de echipă prin activități sportive și de wellbeing dedicate tuturor studenților. Aici organizezi evenimente precum Crosul UT sau PoliSport, proiecte care unesc oamenii prin sport și încurajează un stil de viață sănătos. Este locul ideal unde înveți să lucrezi într-o echipă dinamică și contribui la starea de bine a comunității noastre."
  },
  {
    titlu: "Tineret",
    icon: <Flash width={32} height={32} />,
    descriere: "Direcția Tineret aduce un plus de energie în viața studenților prin proiecte mari, cum este festivalul ZUT, și prin activități care scot campusul din rutină. Aici înveți să pui pe picioare evenimente studențești și competiții care îi apropie pe colegi. Dacă vrei să schimbi vibe-ul din facultate și să creezi o atmosferă activă, aici e locul tău."
  },
  {
    titlu: "Financiar",
    icon: <Coins width={32} height={32} />,
    descriere: "Financiarul este motorul care susține ideile organizației și le transformă în realitate. Aici înveți cum să abordezi parteneri externi, cum să negociezi sponsorizări și cum să gestionezi resursele necesare pentru fiecare proiect. Este locul unde îți dezvolți abilitățile de comunicare și înțelegi cum funcționează colaborările cu mediul de business, asigurându-te că nicio idee faină nu rămâne neimplementată din lipsă de fonduri."
  },
  {
    titlu: "Imagine",
    icon: <Camera width={32} height={32} />,
    descriere: "Imaginea este locul unde ideile OSUT capătă formă, culoare și o identitate vizuală clară. Tot ce înseamnă transpunerea grafică a proiectelor, de la postările de pe social media și afișe, până la materialele promoționale pe care le vede toată lumea, are loc aici. Dacă vrei să înveți graphic design sau să pui în practică ce știi deja, în acest serviciu ai libertatea să exprimi vizual concepte diverse și să dai personalitate fiecărei campanii."
  },
  {
    titlu: "IT",
    icon: <Code width={32} height={32} />,
    descriere: "Serviciul IT se ocupă de site-ul oficial și de platformele pe care le folosim pentru proiectele mari. Echipa dezvoltă paginile web, le întreține și se asigură că totul funcționează corect în online. E locul unde noțiunile de programare sau UI/UX sunt puse în practică pentru a crea soluții digitale utile întregii comunități studențești."
  },
  {
    titlu: "Media",
    icon: <VideoCamera width={32} height={32} />,
    descriere: "Serviciul Media surprinde spiritul organizației în cadre foto și video, transformând evenimentele în amintiri vizuale. Voluntarii sunt mereu în mijlocul acțiunii pentru a reda atmosfera și energia proiectelor prin imagini și clipuri. Dacă vrei să îți exersezi talentul în fotografie sau editare video într-o echipă creativă, aici ai ocazia să spui povestea OSUT prin obiectivul camerei."
  },
  {
    titlu: "Tehnic Administrativ",
    icon: <Wrench width={32} height={32} />,
    descriere: "Echipa de la Tehnic-Administrativ pune totul în mișcare și aduce proiectele la viață prin soluții logistice imediate. Voluntarii se ocupă de tot ce ține de montaj, verificări și pregătirea necesarelor pentru evenimente, fiind prezenți la fiecare activitate a organizației. Dacă vrei să înveți cum să rezolvi rapid orice problemă de organizare și să cunoști cel mai bine sediul și resursele noastre, aici este locul tău."
  }
];

export default function DepartmentsSection() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-zinc-900 dark:text-white">
            Direcții și <span className="text-red-600">Servicii</span>
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-gray-400 text-lg">
            Descoperă departamentele noastre și alege unde vrei să faci diferența.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {DEPARTAMENTE.map((dept, i) => (
            <div 
              key={i} 
              className="bg-zinc-50 dark:bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 hover:border-red-500/50 transition-colors shadow-2xl flex flex-col md:flex-row gap-6 md:gap-12 md:items-center"
            >
              {/* Iconita + Titlu (Stanga pe md) */}
              <div className="flex items-center gap-4 md:w-1/3 flex-shrink-0">
                <div className="bg-red-600/10 p-4 rounded-xl text-red-500 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                  {dept.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-widest uppercase text-zinc-900 dark:text-white">
                  {dept.titlu}
                </h3>
              </div>
              
              {/* Descriere (Dreapta pe md) */}
              <div className="md:w-2/3">
                <p className="text-zinc-700 dark:text-gray-300 leading-relaxed text-justify relative">
                  {dept.descriere}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
