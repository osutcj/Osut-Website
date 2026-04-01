"use client";

import React, { useState } from "react";
import Image from "next/image";

// Data
const PROJECT_ITEMS = [
  {
    image: "/assets/images/images/Proiecte/viitoringiner.PNG",
    alt: "Viitor Inginer",
    text: "Viitor Inginer facilitează întâlnirea dintre voluntarii noștri și elevii de liceu din toată țara pentru a le arăta ce presupune cu adevărat viața de student la UTCN. Proiectul are ca scop combaterea abandonului școlar și sprijinul tinerilor în alegerea facultății prin discuții directe despre oportunitățile din universitate. În ultimul semestru, caravana a ajuns inclusiv în Republica Moldova, unde studenții au oferit informații esențiale și sfaturi utile elevilor care vor să urmeze o carieră în domeniu."
  },
  {
    image: "/assets/images/images/Proiecte/proiect-polihack.jpg",
    alt: "PoliHack",
    text: "PoliHack provoacă studenții și elevii de liceu să își depășească limitele creativității și ale abilităților tehnice prin dezvoltarea unor soluții software sau hardware inovatoare. Proiectul a ajuns la ediția cu numărul 18 și a reunit 188 de participanți care au format 42 de echipe pentru a crea aplicații sau sisteme complexe. Sub îndrumarea unor mentori din industrie și din mediul academic, echipele transformă ideile în realitate, procesul având ca scop principal testarea cunoștințelor practice într-un cadru competitiv și colaborativ."
  },
  {
    image: "/assets/images/images/Proiecte/proiect-balul_bobocilor.png",
    alt: "Balul Bobocilor",
    text: "Ediția din 2025, desfășurată sub tema „Arabian Nights”, a adus în lumină 8 perechi de boboci care și-au demonstrat creativitatea și talentul pentru a marca debutul vieții lor academice. Proiectul are ca scop integrarea noilor studenți în mediul universitar, oferindu-le cadrul perfect pentru a socializa, a lega prietenii și a se acomoda mai ușor cu spiritul comunității noastre."
  },
  {
    image: "/assets/images/images/Proiecte/sah.png",
    alt: "UT Chess Wars",
    text: "UT Chess Wars este un campionat de șah dedicat studenților, organizat cu scopul de a promova jocul de șah în rândul tinerilor și de a crea o comunitate de pasionați ai acestui joc strategic. Acesta reunește studenți din diverse domenii academice, oferindu-le oportunitatea de a-și testa abilitățile într-o competiție prietenoasă și provocatoare.\n\nFormatul campionatului variază, dar de obicei include partide de șah în sistem eliminatoriu, cu scopul de a premia cei mai buni jucători.\n\nPe lângă competiția sportivă, UT Chess Wars are și un rol educativ, încurajând gândirea strategică, dezvoltarea abilităților de rezolvare a problemelor și stimularea colaborării între studenți. De asemenea, este și un eveniment social, în care participanții se întâlnesc și interacționează în lumea misterioasă a șahului, creând legături între colegii din diferite facultăți sau universități.\n\nAcest campionat poate atrage atât jucători experimentați, cât și începători, oferind șansa fiecăruia să-și îmbunătățească jocul și să învețe din experiențele celorlalți."
  },
  {
    image: "/assets/images/images/Proiecte/polisport.png",
    alt: "PoliSport",
    text: "PoliSport promovează fair-play-ul și un stil de viață activ prin competiții amicale dedicate tuturor studenților din universitate. Proiectul a ajuns la ediția cu numărul 40 și a reunit aproximativ 450 de participanți care s-au întrecut la fotbal, baschet, ping-pong și șah. Inițiativa are ca scop principal unirea comunității studențești prin sport, oferind un cadru dinamic unde pasiunea pentru mișcare devine cel mai bun prilej de socializare."
  },
  {
    image: "/assets/images/images/Proiecte/proiect-poliart.png",
    alt: "PoliArt",
    text: "PoliArt valorifică talentele artistice ale studenților prin crearea unei comunități unite de pasionați. Proiectul oferă un spațiu de expunere pentru lucrări de pictură, desen sau fotografie, atât în facultăți, cât și într-o expoziție finală de amploare. La ultima ediție, publicul a admirat peste 200 de opere ale studenților care au ales să iasă din zona de confort și să lege conexiuni cu alți artiști amatori, totul într-un mediu dedicat creativității."
  },
  {
    image: "/assets/images/images/Proiecte/proiect-crosulUT.png",
    alt: "CrosulUT",
    text: "Aflat la cea de-a 20-a ediție, Crosul UT reunește comunitatea clujeană într-o cursă caritabilă de 6 km menită să promoveze sportul și solidaritatea prin cauze umanitare importante. Evenimentul a atras la ultima ediție peste 200 de participanți de toate vârstele, transformând o simplă alergare într-un spectacol vizual plin de energie, unde stilul de viață sănătos se împletește cu dorința de a face bine."
  },
  {
    image: "/assets/images/images/Proiecte/infotech.png",
    alt: "InfoTech",
    text: "Scopul proiectului InfoTech este să faciliteze tranziția studenților spre piața muncii prin oferirea de cunoștințe și conexiuni esențiale în industria tehnologiei. Inițiativa asigură accesul la workshopuri de programare, simulări de interviuri și vizite la companii importante din domeniu. Prin evenimente precum ContestNight sau InfoNight, studenții își dezvoltă abilitățile practice alături de profesioniști și transformă teoria în avantaje reale pentru viitoarea carieră."
  },
  {
    image: "/assets/images/images/Proiecte/ppp.jpg",
    alt: "Private Poli Party",
    text: "Private Poli Party este cel mai așteptat party semestrial de către studenții Universității Tehnice și nu numai. Cu peste 1200 de bilete vândute în ultimele 3 ediții, Private Poli Party reprezintă începutul perfect de semestru alături de colegi și de prieteni. Te așteptăm și pe tine să petreci până dimineața pe muzică pentru toate gusturile în Club Noa!\n\nNe vedem la party?"
  },
  {
    image: "/assets/images/images/Proiecte/css.png",
    alt: "Ce Spun Studenții",
    text: "Te-ai întrebat mereu cum gândesc colegii și prietenii tăi? Acum este șansa ta să aflii răspunsul lor la cele mai amuzante și interesante situații.\nO adaptare a emisiunii “Family Feud” este cea mai bună ocazie să vezi cum unele dintre cele mai simple întrebări te pot pune în dificultate și cum evenimentele uzuale din viața oricărei persoane au o rezolvare complet diferită de la om la om. Cu reflexe bune, intuiție și cel mai important, un strop de noroc poți chiar tu să fi câștigătorul acestui joc!\nCele două echipe se află puse față în față cu un set de întrebări neașteptate la care trebuie să răspundă cu cele mai comune variante, în cel mai scurt timp. Fiecare rundă câștigată te duce tot mai aproape de marele premiu, dar nu uita că o mică greșeală te poate scoate din competiție. Entuziasmul și adrenalina își pot spune cuvântul, ducând atât emoțiile participanților, cât și pe cele ale spectatorilor la cele mai înalte nivele. Un concurs perfect daca ești o fire competitivă, dar și dacă ești doar în cătare de distracție și voie bună alături de persoanele tale preferate."
  },
  {
    image: "/assets/images/images/Proiecte/zut.png",
    alt: "ZUT",
    text: "Zilele Universității Tehnice (ZUT) transformă campusurile noastre într-un festival de amploare, dedicat tuturor celor 20.000 de studenți ai universității. Proiectul a ajuns la ediția cu numărul 20 și are ca scop principal integrarea studenților prin activități diverse, de la concerte live și silent party până la campionate de e-sports sau workshopuri. Ultima ediție a reunit peste 5.000 de participanți care s-au bucurat de acces gratuit la evenimente, demonstrând că ZUT rămâne cel mai important punct de întâlnire pentru întreaga comunitate la începutul fiecărui an universitar."
  },
  {
    image: "/assets/images/images/Proiecte/esucoverbun.jpg",
    alt: "ESU",
    text: "Scopul principal al Engineering Summer University este familiarizarea elevilor cu mediul universitar prin recrearea autentică a experienței de student la UTCN. Ultima ediție a reunit 194 de participanți care au explorat spiritul comunității noastre, descoperind ce înseamnă cu adevărat viața în facultate, îmbinând cursurile și laboratoarele practice cu activități pline de distracție."
  },
  {
    image: "/assets/images/images/Proiecte/infocafe.png",
    alt: "InfoCafe",
    text: "InfoCafe reprezintă principala metodă prin care consultăm mii de studenți din UTCN cu privire la respectarea drepturilor și obligațiilor lor în universitate. Prin standuri cu băuturi calde și chestionare online, voluntarii colectează feedback direct, care stă la baza elaborării Raportului CDOS. Acest document centralizează toate problemele și sugestiile primite și este prezentat oficial în Senatul Universității. Scopul final este ca vocea studenților să fie auzită clar, propunând măsuri concrete de îmbunătățire a politicilor educaționale și a experienței în campus."
  }
];

const INITIATIVE_AND_OSUTLA_ITEMS = [
  {
    image: "/assets/images/images/Proiecte/infonight.jpg",
    alt: "InfoNight",
    text: "Ești de neînlocuit. Abilitățile tale sunt de neegalat. Suntem aici pentru a te ajuta să găsești locul în care chiar îți aparții. Aici intervine InfoNight - un eveniment interesant de networking în care studenții interacționează cu diverse companii care prezintă oportunitățile pe care le au de oferit într-un mod captivant. Este o modalitate excelentă pentru participanți de a-și extinde rețeaua profesională, de a dobândi cunoștințe despre diferite industrii și de a explora căi către viitoarele lor cariere, totul într-un singur loc!"
  },
  {
    image: "/assets/images/images/Proiecte/ContestNight.png",
    alt: "ContestNight",
    text: "Pășește într-o lume unde inovația, creativitatea și ambiția se întâlnesc! ContestNight este poarta ta de acces către o gamă diversă de oportunități pentru studenți, de la hackathoane și competiții, la echipe de voluntari, conferințe, sporturi și activități artistice. Fie că ești un student la primul an sau unul din anii superiori care dorește să-și lărgească orizonturile, acest eveniment este conceput pentru a te conecta cu căi de carieră interesante, în timp ce te bucuri de spectacole live și o zonă de relaxare. Ești pregătit să explorezi ce este posibil?"
  },
  {
    image: "/assets/images/images/training/cv.png",
    alt: "CV Workshop",
    text: "Un CV bine realizat este adesea primul punct de contact cu potențialii angajatori, fiind o parte crucială a procesului de aplicare pentru un loc de muncă. În cadrul acestui workshop, condus de Mariana Irimia, vei învăța cum să structurezi și să prezinți CV-ul tău pentru a evidenția cele mai importante abilități și experiențe ale tale. Sesiunea va aborda greșelile comune de evitat, sfaturi pentru personalizarea CV-ului în funcție de diferite industrii și cum să te faci remarcat într-o piață de muncă competitivă. Expertiza Marianei te va ajuta să te asiguri că CV-ul tău lasă o impresie puternică și comunică eficient calificările tale angajatorilor."
  },
  {
    image: "/assets/images/images/training/sas.png",
    alt: "Antreprenoriat",
    text: "Începerea propriei afaceri poate fi atât palpitantă, cât și descurajantă. Această formare, condusă de Georgina Lupu, te va ghida prin elementele fundamentale ale lansării unei startup. Vei învăța cum să identifici idei de afaceri viabile, cum să dezvolți un plan de afaceri, să asiguri finanțare și care sunt principalele provocări cu care se confruntă noii antreprenori. Fie că lucrezi deja la un startup sau doar explorezi ideea de antreprenoriat, această sesiune îți va oferi instrumentele și mentalitatea necesare pentru a reuși."
  },
  {
    image: "/assets/images/images/training/int.png",
    alt: "Interviu",
    text: "Un interviu de angajare reușit poate face toată diferența atunci când vine vorba de obținerea poziției dorite. În cadrul acestui workshop, Cristina Gogozan te va ajuta să stăpânești arta interviului de angajare. Vei învăța cum să te pregătești eficient pentru interviuri, inclusiv cum să cercetezi compania, să anticipezi întrebările comune și să dezvolți răspunsuri bine gândite. Cristina va împărtăși și strategii pentru a construi o relație bună cu intervievatorii, pentru a-ți comunica punctele forte cu încredere și pentru a face față întrebărilor dificile sau neașteptate. Această sesiune interactivă îți va oferi abilitățile practice și încrederea necesare pentru a lăsa o impresie pozitivă și pentru a te remarca într-un interviu."
  },
  {
    image: "/assets/images/images/training/wlb.png",
    alt: "Work-life balance",
    text: "Echilibrarea bunăstării personale cu aspirațiile profesionale este esențială pentru succes și împlinire. În cadrul acestei sesiuni de formare, Denisa Niță, psiholog cu experiență, te va ghida prin strategii pentru a crea un echilibru mai sănătos între viața personală și profesională și pentru a naviga provocările comune. Vei învăța instrumente practice pentru a-ți gestiona prioritățile, a reduce stresul și a îmbunătăți productivitatea. Denisa va explora, de asemenea, sindromul impostorului—o experiență cu care se confruntă mulți studenți atunci când trec în câmpul muncii—și va împărtăși modalități eficiente de a depăși îndoielile de sine și de a construi încredere. Această sesiune interactivă este concepută pentru a te echipa cu abilitățile și mentalitatea necesare pentru a-ți echilibra cariera cu viața personală, asigurându-ți bunăstarea și succesul pe termen lung. Alătură-te nouă și fă primul pas către o viață mai echilibrată și împlinită!"
  },
  {
    image: "/assets/images/images/training/fe.png",
    alt: "Finanțe",
    text: "Gestionarea eficientă a finanțelor tale este un pas critic în atingerea stabilității și în realizarea obiectivelor tale pe termen lung. În cadrul acestui training, Olimpia Pop te va ghida prin elementele esențiale ale finanțelor personale, oferindu-ți instrumente practice pentru a prelua controlul asupra banilor tăi. Vei învăța cum să creezi un buget realist, să îți gestionzi cheltuielile cu înțelepciune și să stabilești obiceiuri inteligente de economisire. Olimpia va discuta, de asemenea, strategii pentru stabilirea obiectivelor financiare, evitarea capcanelor financiare comune și construirea unei fundații sigure pentru viitor. Această sesiune interactivă este concepută pentru a-ți oferi cunoștințele și încrederea necesare pentru a lua decizii financiare informate, fie că gestionezi primul tău salariu, fie că planifici pentru repere financiare mai mari. Participă și începe-ți călătoria către independența financiară!"
  },
  {
    image: "/assets/images/images/training/it1.jpg",
    alt: "IT1 Java/JS",
    text: "Pe data de 19 noiembrie, în sala OA5 din cadrul Facultății de Căi Ferate, Drumuri și Poduri, serviciul IT a organizat un training interactiv dedicat învățării bazelor celor două limbaje de programare fundamentale Java și JavaScript, susținut de către Andreea Răutescu. Participanții au aflat informații noi despre concepte esențiale precum crearea și utilizarea claselor și obiectelor în Java, lucrul cu variabile și metode, manipularea DOM în JavaScript și nu în ultimul rând care este adevărata diferență dintre cele două limbaje. Exercițiile practice și discuțiile interactive au făcut ca experiența să fie utilă și antrenantă, oferind o bază solidă pentru dezvoltarea ulterioară."
  },
  {
    image: "/assets/images/images/training/it2.jpg",
    alt: "IT2 Cybersecurity",
    text: "Ce este cybersecurity-ul? Securitatea cibernetică, cunoscută și ca tehnologia informației sau securitate informatică, implică stabilirea de măsuri care protejează sistemele și rețelele împotriva dezvăluirii de informații, furtului sau daunelor cu privire la hardware, software sau date electronice.\n\nDe ce ți-ar fi de folos? Training-ul acesta de cybersecurity, sisținut de Romeo Andreica, este o introducere în domeniu. Se vorbeste despre recunoașterea unor atacuri cibernetice, spre exemplu, un e-mail de la o companie care spune că cineva a intrat in contul tau, despre cum să îți protejezi datele de la aceste atacuri și multe altele."
  },
  {
    image: "/assets/images/images/training/IT3.jpg",
    alt: "IT3 AI",
    text: "Trainingul de AI a adus în prim-plan unul dintre cele mai actuale subiecte, inteligența artificială, oferind participanților o experiență captivantă. Evenimentul a reunit studenți dornici să înțeleagă mai bine acest domeniu revoluționar și a avut loc marți, 10 decembrie, începând cu ora 19:00, la CFDP.\n\nParticipanții au descoperit ce înseamnă inteligența artificială, cum funcționează și în ce domenii poate fi aplicată. Prin exemple clare și o abordare interactivă, trainingul a transformat un subiect complex într-unul accesibil și interesant. Atmosfera deschisă a încurajat întrebările și schimbul de idei, oferind tuturor șansa de a explora viitorul tehnologiei într-un mod practic și util."
  },
  {
    image: "/assets/images/images/training/polisport1.jpg",
    alt: "PoliSport1",
    text: "Aceste sesiuni interactive au fost dedicate menținerii echilibrului între viața academică și personală, oferind participanților instrumente utile pentru gestionarea stresului, importanța unei alimentații sănătoase și crearea unor obiceiuri care să sprijine atât sănătatea fizică, cât și cea mentală.\nSusținute de Ionuț Rada și Marius Berbecuț, atelierele au furnizat strategii practice pentru optimizarea energiei, organizarea timpului și abordarea provocărilor zilnice, oferind participanților șansa de a îmbunătăți atât performanța academică, cât și starea generală de bine."
  },
  {
    image: "/assets/images/images/adapost.jpeg",
    alt: "Adăpost",
    text: "Arca lui Noe este locul perfect unde te poți refugia atunci când ai nevoie de o pauză de la agitația cotidiană. Imaginați-vă o oază de liniște, unde fiecare colț emană energie pozitivă, iar fiecare zâmbet este însoțit de lăbuțe jucăușe și priviri pline de iubire. În această „mică lume paralelă” a cățeilor, timpul pare să stea în loc, iar grijile dispar imediat ce te afli în mijlocul lor.🐶\n\nFiecare câine are povestea sa, iar tu ai oportunitatea să le oferi nu doar iubire, ci și un strop de speranță. E un loc unde inimile se deschid și se vindecă, iar fiecare moment petrecut acolo este o lecție despre afecțiune necondiționată și conexiuni pure.💫"
  },
  {
    image: "/assets/images/images/Proiecte/casutabucuriei.jpg",
    alt: "Căsuța Bucuriei",
    text: "Asociația Căsuța Bucuriei este o instituție non-guvernamentală din Cluj-Napoca care le oferă găzduire copiilor și tinerilor din sistemul de protecție până la finalul studiilor și îi ajută să să își croiască un nou drum în viață cu curaj și bunătate în suflet. În cadrul asociației sunt implicate mai multe grupuri de voluntari, printre care și voluntarii OSUT-Cluj. Împreună cu voluntarii noștrii vizităm Căsuța în fiecare semestru, bucurându-ne de diverse activități împreună!"
  },
  {
    image: "/assets/images/images/Proiecte/gtc.jpg",
    alt: "Gala Tineretului Clujean",
    text: "Gala Tineretului Clujean este un eveniment ce aduce în lumina reflectoarelor inițiativele tinerilor, cu și despre comunitatea pe care o reprezintă, a căror rezultate contribui activ la dezvoltarea ecosistemului ca întreg.\nPrecum în fiecare an, voluntarii OSUT Cluj au reprezentat proiectele organizației și am reușit să câștigăm următoarele premii:\nPoliSport - Premiul al III-lea\nDeBattle - Premiul al II-lea"
  },
  {
    image: "/assets/images/images/Proiecte/vot.jpg",
    alt: "Vot",
    text: "Data de 24 noiembrie a reprezentat o zi importantă pentru democrația din România și pentru dreptul studenților de a-și alege viitorul președinte care să ne reprezinte țara. 📍\n\nÎndemnând toți studenții Universității Tehnice din Cluj-Napoca să își exercite dreptul la vot în cadrul primului scrutin de alegeri prezidențiale, am participat și noi, la rândul nostru, în număr mare la Facultatea de Inginerie Civilă CFDP (Căi ferate, drumuri și poduri) pentru a spera la un viitor care să se alinieze cu valorile și pretențiile studenților. ✉️"
  },
  {
    image: "/assets/images/images/Proiecte/drumetie.jpg",
    alt: "OSUT la …",
    text: "OSUT la… reprezintă seria de inițiative dedicate exclusiv voluntarilor noștri, create ca momente de recreere și deconectare după activitatea intensă din organizație. Fie că este vorba despre OSUT la meci, drumeții la munte sau escapade în Vama Veche, aceste ieșiri au ca scop principal relaxarea și închegarea echipei. Prin aceste activități, voluntarii leagă prietenii strânse și se bucură de experiențe memorabile care transformă grupul de lucru într-o familie unită."
  },
  {
    image: "/assets/images/images/Proiecte/fosr.jpg",
    alt: "FOSR",
    text: "Forumul Organizațiilor Studențești din România, eveniment care, începând cu anul 2006, reunește anual liderii studenților din întreaga țară. Timp de câteva zile, în câte un centru universitar din țară, la rotație în fiecare an, studenți din toată țara se adună pentru a se consolida relațiile dintre organizațiile studențești și, implicit, membrii participanți ai acestora.\n\nÎn cadrul evenimentului au loc atât dezbateri și ateliere pe teme educaționale, privind îmbunătățirea vieții studențești sub toate aspectele sale, cât și ateliere pe diverse domenii, ce au scopul de a sprijinii activitatea organizațiilor studențești participante și de stabili prioritățile studenților pentru următorul an.\n\nOSUT Cluj a reprezentat cu mândrie comunitatea studențească din Universitatea Tehnică din Cluj-Napoca la FOSR 2024 la Suceava, voluntarii noștri având ocazia să își aducă punctele de vedere în diferite teme educaționale din viața studențească."
  }
];

// Helper type and component
type ModalItem = { image: string, alt: string, text: string };

export default function ProiecteSiInitiativePage() {
  const [selectedItem, setSelectedItem] = useState<ModalItem | null>(null);

  const openPopup = (item: ModalItem) => setSelectedItem(item);
  const closePopup = () => setSelectedItem(null);

  return (
    <main className="bg-white dark:bg-[#121212] min-h-screen text-zinc-900 dark:text-white pt-40 pb-20 font-sans">
      
      {/* SECTIUNEA 1: PROIECTE */}
      <section className="w-full flex flex-col items-center mb-24 lg:px-20 px-6">
        <div className="w-full max-w-5xl relative flex justify-center items-center mb-16">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-70"></div>
          <h1 className="bg-white dark:bg-[#121212] px-10 text-4xl md:text-5xl font-bold relative z-10 tracking-wide text-zinc-900 dark:text-white text-center uppercase">Proiecte</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl">
          {PROJECT_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer bg-zinc-100 dark:bg-[#1c1c1c] rounded-2xl overflow-hidden border border-zinc-200 dark:border-[#2a2a2a] shadow-lg transition-all duration-300 hover:-translate-y-[6px] flex flex-col"
              onClick={() => openPopup(item)}
            >
              <div className="w-full h-48 relative overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.alt} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="p-5 flex-grow flex items-center justify-center text-center">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-gray-100 transition-colors">{item.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTIUNEA 2: INITIATIVE (Merged Initiative + OSUT La ...) */}
      <section className="w-full flex flex-col items-center mb-20 lg:px-20 px-6">
        <div className="w-full max-w-5xl relative flex justify-center items-center mb-16">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-70"></div>
          <h1 className="bg-white dark:bg-[#121212] px-10 text-4xl md:text-5xl font-bold relative z-10 tracking-wide text-zinc-900 dark:text-white text-center uppercase">Inițiative</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl">
          {INITIATIVE_AND_OSUTLA_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer bg-zinc-100 dark:bg-[#1c1c1c] rounded-2xl overflow-hidden border border-zinc-200 dark:border-[#2a2a2a] shadow-lg transition-all duration-300 hover:-translate-y-[6px] flex flex-col"
              onClick={() => openPopup(item)}
            >
              <div className="w-full h-48 relative overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.alt} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="p-5 flex-grow flex items-center justify-center text-center">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-gray-100 transition-colors">{item.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL POPUP (Triggered on click) */}
      {selectedItem && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity" onClick={closePopup}>
          {/* Modal Container */}
          <div 
            className="relative bg-white dark:bg-[#1a1a1a] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside the modal
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-50 text-zinc-600 dark:text-white/70 hover:text-red-500 dark:hover:text-red-500 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black p-2 rounded-full transition-all"
              onClick={closePopup}
            >
              <i className="fas fa-times text-xl w-6 h-6 flex items-center justify-center"></i>
            </button>
            
            {/* Image Side */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-zinc-100 dark:bg-black shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedItem.image} alt={selectedItem.alt} className="w-full h-full object-cover" />
            </div>
            
            {/* Text Side */}
            <div className="p-8 md:p-10 flex flex-col w-full text-left">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">{selectedItem.alt}</h2>
              <div className="text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed text-[1rem]">
                {selectedItem.text}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </main>
  );
}
