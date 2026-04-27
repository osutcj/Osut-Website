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
  Wrench,
  GraduationCap,
  Trophy,
  Cpu,
  Terminal,
  Group
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
  },
  {
    titlu: "Balul Bobocilor",
    icon: <MusicDoubleNote width={32} height={32} />,
    descriere: "Ediția din 2025, desfășurată sub tema \u201eArabian Nights\u201d, a adus în lumină 8 perechi de boboci care și-au demonstrat creativitatea și talentul pentru a marca debutul vieții lor academice. Proiectul are ca scop integrarea noilor studenți în mediul universitar, oferindu-le cadrul perfect pentru a socializa, a lega prietenii și a se acomoda mai ușor cu spiritul comunității noastre."
  },
  {
    titlu: "Engineering Summer University",
    icon: <GraduationCap width={32} height={32} />,
    descriere: "Scopul principal al Engineering Summer University este familiarizarea elevilor cu mediul universitar prin recrearea autentică a experienței de student la UTCN. Ultima ediție a reunit 194 de participanți care au explorat spiritul comunității noastre, descoperind ce înseamnă cu adevărat viața în facultate, îmbinând cursurile și laboratoarele practice cu activități pline de distracție."
  },
  {
    titlu: "Gala Aniversară",
    icon: <Trophy width={32} height={32} />,
    descriere: "Gala Aniversară este evenimentul prin care celebrăm realizările și dedicarea voluntarilor OSUT Cluj din semestrul trecut. Aceasta reunește întreaga echipă într-o seară festivă unde sunt recunoscuți cei mai activi voluntari, cele mai de impact proiecte și momentele care au definit activitatea organizației. Este ocazia perfectă de a privi în urmă cu mândrie și de a ne motiva pentru provocările viitoare."
  },
  {
    titlu: "InfoTech",
    icon: <Cpu width={32} height={32} />,
    descriere: "Scopul proiectului InfoTech este să faciliteze tranziția studenților spre piața muncii prin oferirea de cunoștințe și conexiuni esențiale în industria tehnologiei. Inițiativa asigură accesul la workshopuri de programare, simulări de interviuri și vizite la companii importante din domeniu. Prin evenimente precum ContestNight sau InfoNight, studenții își dezvoltă abilitățile practice alături de profesioniști și transformă teoria în avantaje reale pentru viitoarea carieră."
  },
  {
    titlu: "PoliHack",
    icon: <Terminal width={32} height={32} />,
    descriere: "PoliHack provoacă studenții și elevii de liceu să își depășească limitele creativității și ale abilităților tehnice prin dezvoltarea unor soluții software sau hardware inovatoare. Proiectul a ajuns la ediția cu numărul 18 și a reunit 188 de participanți care au format 42 de echipe pentru a crea aplicații sau sisteme complexe. Sub îndrumarea unor mentori din industrie și din mediul academic, echipele transformă ideile în realitate, procesul având ca scop principal testarea cunoștințelor practice într-un cadru competitiv și colaborativ."
  },
  {
    titlu: "Viitor Inginer",
    icon: <Group width={32} height={32} />,
    descriere: "Viitor Inginer facilitează întâlnirea dintre voluntarii noștri și elevii de liceu din toată țara pentru a le arăta ce presupune cu adevărat viața de student la UTCN. Proiectul are ca scop combaterea abandonului școlar și sprijinul tinerilor în alegerea facultății prin discuții directe despre oportunitățile din universitate. În ultimul semestru, caravana a ajuns inclusiv în Republica Moldova, unde studenții au oferit informații esențiale și sfaturi utile elevilor care vor să urmeze o carieră în domeniu."
  }
];

export default function DepartmentsSection() {
  return (
    <section className="py-24 border-t border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full max-w-5xl flex justify-center items-center mb-16 mx-auto gap-4 md:gap-8">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-red-600 opacity-100"></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-zinc-900 dark:text-white text-center uppercase shrink-0">

            Departamente
                    </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-red-600 opacity-100"></div>
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
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify relative z-10 text-lg">
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
