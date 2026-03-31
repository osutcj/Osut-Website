"use client";

import React, { useState } from "react";
import Image from "next/image";

// Data
const PROJECT_ITEMS = [
  {
    image: "/assets/images/images/Proiecte/viitoringiner.PNG",
    alt: "Viitor Inginer",
    text: "Viitor Inginer este un proiect desfășurat de OSUT Cluj, care facilitează întâlnirea între studenții UTCN și elevii de liceu, prin vizite organizate în întreaga țară. În cadrul prezentărilor, elevii au ocazia să afle direct de la colegii lor mai mari ce înseamnă viața de student la Universitatea Tehnică din Cluj-Napoca. Proiectul urmărește combaterea abandonului școlar și sprijinirea adolescenților în alegerea facultății, oferindu-le informații esențiale pentru viitorul lor academic.\n\nDacă vrei să afli mai multe despre aceste subiecte, te așteptăm cu drag să ne întâlnim atunci când vom vizita liceul tău!"
  },
  {
    image: "/assets/images/images/Proiecte/proiect-polihack.jpg",
    alt: "PoliHack",
    text: "Ajuns la cea de-a 16-a ediție, PoliHack este un hackathon semestrial care provoacă studenții și elevii de liceu să își depășească limitele creativității și abilităților tehnice prin dezvoltarea de soluții inovatoare într-una dintre cele patru categorii: Embedded, AppDev, Web și Junior.\n\nOrganizat de Organizația Studenților din Universitatea Tehnică din Cluj-Napoca, PoliHack își propune să încurajeze participanții să colaboreze cu mentori apreciați din industrie și din mediul academic, oferindu-le o experiență autentică, similară cu cea din marile companii.\n\nPoliHack. The.Future.Is.Now."
  },
  {
    image: "/assets/images/images/Proiecte/proiect-balul_bobocilor.png",
    alt: "Balul Bobocilor",
    text: "An de an, OSUT Cluj pune în scenă Balul Bobocilor Universității Tehnice din Cluj-Napoca, un moment special care marchează începutul vieții de student. Acest eveniment, asemănător cu balurile din perioada liceului, oferă bobocilor ocazia de a-și demonstra abilitățile și de a lega prietenii noi, creând amintiri de neuitat. Spre deosebire de un bal obișnuit, noi ne străduim să transformăm această seară într-un adevărat spectacol, plin de momente artistice, momente inedite și surprize fascinante.\n\nFiecare Bal al Bobocilor spune o poveste aparte, iar bobocii și organizatorii depun eforturi pentru a oferi o experiență unică tuturor celor prezenți."
  },
  {
    image: "/assets/images/images/Proiecte/sah.png",
    alt: "UT Chess Wars",
    text: "UT Chess Wars este un campionat de șah dedicat studenților, organizat cu scopul de a promova jocul de șah în rândul tinerilor și de a crea o comunitate de pasionați ai acestui joc strategic. Acesta reunește studenți din diverse domenii academice, oferindu-le oportunitatea de a-și testa abilitățile într-o competiție prietenoasă și provocatoare.\n\nFormatul campionatului variază, dar de obicei include partide de șah în sistem eliminatoriu, cu scopul de a premia cei mai buni jucători.\n\nPe lângă competiția sportivă, UT Chess Wars are și un rol educativ, încurajând gândirea strategică, dezvoltarea abilităților de rezolvare a problemelor și stimularea colaborării între studenți. De asemenea, este și un eveniment social, în care participanții se întâlnesc și interacționează în lumea misterioasă a șahului, creând legături între colegii din diferite facultăți sau universități.\n\nAcest campionat poate atrage atât jucători experimentați, cât și începători, oferind șansa fiecăruia să-și îmbunătățească jocul și să învețe din experiențele celorlalți."
  },
  {
    image: "/assets/images/images/Proiecte/polisport.png",
    alt: "PoliSport",
    text: "PoliSport este un proiect de tradiție marca OSUT Cluj, care se desfășoară de peste 38 de ediții și continuă să atragă un număr tot mai mare de studenți pasionați de sport. Acesta implică organizarea de competiții sportive destinate amatorilor, derulate în Cluj-Napoca, și reprezintă o oportunitate excelentă pentru studenți de a-și demonstra talentul și aptitudinile sportive într-un mediu organizat și prietenos.\n\nInteresul pentru PoliSport a crescut constant, fiecare ediție înregistrând un număr tot mai mare de participanți înscriși. Acest lucru reflectă succesul proiectului în a aduce studenții împreună, încurajând interacțiunea, socializarea și un stil de viață activ. Competițiile nu doar că oferă o pauză binemeritată de la stresul cotidian, dar contribuie și la dezvoltarea personală a participanților, prin promovarea fair-play-ului și a spiritului de echipă.\n\nAstfel, PoliSport rămâne unul dintre cele mai apreciate proiecte studențești marca OSUT Cluj, îmbinând beneficiile sportului asupra sănătății cu cele ale unei comunități unite și implicate."
  },
  {
    image: "/assets/images/images/Proiecte/proiect-poliart.png",
    alt: "PoliArt",
    text: "PoliArt este un proiect prin care studenții au ocazia de a lua o pauză de la viața academică și de a-și valorifica înclinațiile artistice prin operele lor. Acestea sunt expuse pe holurile facultăților din Universitatea Tehnică și, ulterior, într-o locație finală, pentru a le oferi ocazia să fie admirate de cât mai multe persoane.\n\nPoliArt este ocazia perfectă pentru iubitorii de artă să iasă din zona lor de confort, să treacă peste frici și să lege legături prețioase cu alți pasionați ca ei. Este momentul perfect în care își pot exprima stările și emoțiile prin cele mai creative moduri, indiferent de nivelul de experiență."
  },
  {
    image: "/assets/images/images/Proiecte/proiect-crosulUT.png",
    alt: "Crosul UTCN",
    text: "Crosul Universității Tehnice este un eveniment sportiv cu o puternică latură comunitară și caritabilă, care aduce împreună participanți de toate vârstele, de la cei mai tineri, copii de 6-7 ani, până la adulți și seniori, toți uniți de dorința de a promova un stil de viață sănătos și de a susține o cauză nobilă. Cu o distanță accesibilă de 6 km, evenimentul își propune să fie atât o competiție, cât și o oportunitate de socializare și solidaritate.\n\nÎn ultimii ani, crosul a devenit tot mai diversificat, organizatorii aducând în fiecare ediție elemente noi pentru a menține interesul participanților. De exemplu, ultimele două ediții au fost tematice, oferind o experiență aparte: „Bring the Lights” și „Light Up the Night”. Aceste concepte au transformat crosul într-un spectacol vizual, desfășurat într-o atmosferă animată, cu iluminări speciale și decoruri care au dat un plus de farmec evenimentului.\n\nPe lângă latura sportivă, Crosul Universității Tehnice păstrează o puternică componentă caritabilă, direcționând fondurile strânse către inițiative umanitare importante. Acest aspect reușește să mobilizeze nu doar studenții, ci și întreaga comunitate clujeană, transformând alergarea într-un gest concret de sprijin pentru cei care au nevoie."
  },
  {
    image: "/assets/images/images/Proiecte/infotech.png",
    alt: "InfoTech",
    text: "Bine ați venit la InfoTech, poarta voastră către dezvoltare profesională și învățare practică în lumea ingineriei! Susținut de OSUT Cluj (Organizația Studenților din Universitatea Tehnică), InfoTech este dedicat să ofere studenților de la UTCN cunoștințele, abilitățile și conexiunile necesare pentru a prospera în industria IT.\n\nLa InfoTech, creăm un mediu de sprijin și implicare pentru studenți, cu activități practice, sesiuni de formare orientate către carieră și evenimente precum ContestNight, InfoNight și Open Days la companii de top. Organizăm workshopuri susținute de profesioniști din industrie, oferind îndrumare pe teme esențiale, cum ar fi redactarea unui CV, pregătirea pentru interviuri și explorarea oportunităților de carieră.\n\nFie că ești aici pentru a-ți dezvolta abilitățile tehnice, pentru a-ți extinde rețeaua de contacte sau pur și simplu pentru a explora noi posibilități, InfoTech este alături de tine la fiecare pas. Alătură-te nouă și fă următorul pas către îndeplinirea aspirațiilor tale profesionale!"
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
    text: "Zilele Universității Tehnice (ZUT) este un proiect marca OSUT Cluj dedicat întregii comunități studențești din Cluj-Napoca, cu precădere celor 20.000 din UTCN. Proiectul se desfășoară anual pe parcursul primei săptămâni a anului universitar și include atât activități culturale, cât și activități de divertisment. ZUT este unul dintre cele mai mari festivale studențești, gratuitatea evenimentului, cât și plasarea activităților în facultăți și în campusurile noastre asigură o participare diversificată.\n\nCu peste 5000 de participanți la toate activitățile, ultima ediție a inclus diverse activități captivante pentru studenți, precum “Ce spun studenții?”, Silent Party, campionate de e-sports sau un concert, avându-i în line-up pe DJ David Aquilla, Emeric Imre și pe Mira!\n\nTe așteptăm și la următoarea ediție pentru a descoperi viața studențească petrecută la Cluj!"
  },
  {
    image: "/assets/images/images/Proiecte/esucoverbun.jpg",
    alt: "ESU",
    text: "Engineering Summer University este o tabără de vară de două săptămâni destinată elevilor de clasa a XI-a care doresc să descopere fascinantul domeniu al ingineriei și să experimenteze viața de student universitar într-un mediu dinamic și prietenos.\n\nCu un program interactiv și intens, participanții vor fi implicați în activități distractive și educative, care vor cuprinde cursuri teoretice, dar și o varietate de laboratoare care le vor permite să aplice cunoștințele învățate. Cursurile de inginerie sunt susținute de profesori de top din cadrul Universității Tehnice din Cluj-Napoca și sunt structurate într-un mod interactiv și practic."
  },
  {
    image: "/assets/images/images/Proiecte/infocafe.png",
    alt: "InfoCafe",
    text: "InfoCafe este un proiect inițiat de OSUT Cluj, având ca obiectiv evaluarea respectării drepturilor și obligațiilor studenților din Universitatea Tehnică din Cluj-Napoca, în conformitate cu Codul Drepturilor și Obligațiilor Studenților (CDOS), precum și a gradului de informare al acestora cu privire la aceste aspecte. Procesul se desfășoară prin completarea unui formular online, anonim, de către studenți.\n\nProiectul se află într-o continuă creștere în ceea ce privește atât numărul studenților respondenți, cât și al voluntarilor implicați. Pe parcursul unei săptămâni, InfoCafe își propune să interacționeze direct cu studenții prin organizarea de standuri cu băuturi calde în clădirile și campusurile UTCN. Voluntarii promovează completarea formularului anonim, iar ca semn de apreciere, participanții primesc o cafea, ciocolată caldă sau un ceai.\n\nLa finalul campaniei, răspunsurile colectate sunt centralizate într-un raport transmis conducerii universității, pentru a sprijini luarea de măsuri menite să îmbunătățească calitatea procesului educațional."
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
    alt: "Drumeție",
    text: "În data de 19 octombrie 2024, Direcția Sport și Sănătate din cadrul organizației noastre a organizat o drumeție memorabilă la Cheile Turzii. Această activitate a avut ca scop promovarea unui stil de viață sănătos, consolidarea relațiilor dintre studenți și reconectarea cu natura. Fiecare pas pe traseu a fost o ocazie de a învăța, de a socializa și de a descoperi frumusețea și importanța mediului înconjurător. Ne dorim să continuăm să organizăm astfel de evenimente, care inspiră și aduc bucurie.\n\nRămâi alături de noi pentru a descoperi următoarele destinații ale OSUT Cluj!"
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
    <main className="bg-[#121212] min-h-screen text-white pt-40 pb-20 font-sans">
      
      {/* SECTIUNEA 1: PROIECTE */}
      <section className="w-full flex flex-col items-center mb-24 lg:px-20 px-6">
        <div className="w-full max-w-5xl relative flex justify-center items-center mb-16">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-70"></div>
          <h1 className="bg-[#121212] px-10 text-4xl md:text-5xl font-bold relative z-10 tracking-wide text-white text-center uppercase">Proiecte</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl">
          {PROJECT_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer bg-[#1c1c1c] rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-red-900/40 hover:border-red-600/50 flex flex-col"
              onClick={() => openPopup(item)}
            >
              <div className="w-full h-48 relative overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.alt} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="p-5 flex-grow flex items-center justify-center text-center">
                <h3 className="text-xl font-semibold text-gray-100 group-hover:text-red-400 transition-colors">{item.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTIUNEA 2: INITIATIVE (Merged Initiative + OSUT La ...) */}
      <section className="w-full flex flex-col items-center mb-20 lg:px-20 px-6">
        <div className="w-full max-w-5xl relative flex justify-center items-center mb-16">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-70"></div>
          <h1 className="bg-[#121212] px-10 text-4xl md:text-5xl font-bold relative z-10 tracking-wide text-white text-center uppercase">Inițiative</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl">
          {INITIATIVE_AND_OSUTLA_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer bg-[#1c1c1c] rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-red-900/40 hover:border-red-600/50 flex flex-col"
              onClick={() => openPopup(item)}
            >
              <div className="w-full h-48 relative overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.alt} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="p-5 flex-grow flex items-center justify-center text-center">
                <h3 className="text-xl font-semibold text-gray-100 group-hover:text-red-400 transition-colors">{item.alt}</h3>
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
            className="relative bg-[#1a1a1a] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-800 flex flex-col md:flex-row animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside the modal
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-50 text-white/70 hover:text-red-500 bg-black/50 hover:bg-black p-2 rounded-full transition-all"
              onClick={closePopup}
            >
              <i className="fas fa-times text-xl w-6 h-6 flex items-center justify-center"></i>
            </button>
            
            {/* Image Side */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-black shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedItem.image} alt={selectedItem.alt} className="w-full h-full object-cover" />
            </div>
            
            {/* Text Side */}
            <div className="p-8 md:p-10 flex flex-col w-full text-left">
              <h2 className="text-3xl font-bold text-white mb-6 pb-4 border-b border-zinc-800">{selectedItem.alt}</h2>
              <div className="text-zinc-300 whitespace-pre-wrap leading-relaxed text-[1rem]">
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
