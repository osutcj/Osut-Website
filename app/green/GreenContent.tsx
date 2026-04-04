"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";

import "./green.css";

const CROS_IMAGES = [
    "/assets/images/images/Poze Sustenabilitate/crosulUT.png",
    "/assets/images/images/Poze Sustenabilitate/Crosul UT/cros1.jpg",
    "/assets/images/images/Poze Sustenabilitate/Crosul UT/cros2.jpg",
    "/assets/images/images/Poze Sustenabilitate/Crosul UT/cros3.jpg",
    "/assets/images/images/Poze Sustenabilitate/Crosul UT/cros4.jpg",
    "/assets/images/images/Poze Sustenabilitate/Crosul UT/cros5.jpg"
];

const POLIHACK_IMAGES = [
    "/assets/images/images/Poze Sustenabilitate/polihack.jpg",
    "/assets/images/images/Poze Sustenabilitate/PoliHack/PoliHack 1.jpg",
    "/assets/images/images/Poze Sustenabilitate/PoliHack/PoliHack 2.jpg",
    "/assets/images/images/Poze Sustenabilitate/PoliHack/PoliHack 3.jpg",
    "/assets/images/images/Poze Sustenabilitate/PoliHack/PoliHack 4.jpg",
    "/assets/images/images/Poze Sustenabilitate/PoliHack/PoliHack 5.jpg"
];

const ESU_IMAGES = [
    "/assets/images/images/Poze Sustenabilitate/esu.jpg",
    "/assets/images/images/Poze Sustenabilitate/ESU/ESU 1.jpg",
    "/assets/images/images/Poze Sustenabilitate/ESU/ESU 2.JPG",
    "/assets/images/images/Poze Sustenabilitate/ESU/ESU 3.jpg",
    "/assets/images/images/Poze Sustenabilitate/ESU/ESU 4.jpg",
    "/assets/images/images/Poze Sustenabilitate/ESU/ESU 5.jpg",
    "/assets/images/images/Poze Sustenabilitate/ESU/ESU 6.jpg",
    "/assets/images/images/Poze Sustenabilitate/ESU/ESU 7.jpg"
];

const INFOTECH_IMAGES = [
    "/assets/images/images/Poze Sustenabilitate/InfoTech.png",
    "/assets/images/images/Poze Sustenabilitate/InfoTech/infotech1.jpg",
    "/assets/images/images/Poze Sustenabilitate/InfoTech/infotech2.jpg",
    "/assets/images/images/Poze Sustenabilitate/InfoTech/infotech3.jpg",
    "/assets/images/images/Poze Sustenabilitate/InfoTech/infotech4.jpg",
    "/assets/images/images/Poze Sustenabilitate/InfoTech/infotech5.jpg"
];

const Carousel = ({ images }: { images: string[] }) => (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 group h-[400px] md:h-[500px]">
        <Swiper
            modules={[Autoplay, EffectFade, Navigation]}
            effect="fade"
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="h-full w-full"
        >
            {images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                        <Image
                            src={imgSrc}
                            alt={`Slide ${index}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-button-prev !text-white !opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
            <div className="swiper-button-next !text-white !opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
        </Swiper>
    </div>
);

export default function GreenContent() {
    return (
        <main className="bg-white dark:bg-[#121212] min-h-screen text-zinc-900 dark:text-zinc-100 font-sans pb-24">
            
            <section className="relative pt-44 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                    <div className="absolute top-20 left-0 w-72 h-72 bg-red-600/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[150px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="w-full max-w-5xl relative flex justify-center items-center mb-12 mx-auto">
                        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-100"></div>
                        <h1 className="bg-white dark:bg-[#121212] px-10 text-4xl md:text-7xl font-bold relative z-10 tracking-wide text-zinc-900 dark:text-white text-center uppercase">
                            Sustenabilitate
                        </h1>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    <div className="relative group bg-zinc-100 dark:bg-zinc-900/50 rounded-[2.5rem] p-10 md:p-14 border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-red-600/10 transition-all"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6 tracking-tight text-zinc-900 dark:text-white">Plan de dezvoltare durabilă</h2>
                        </div>
                        <div className="relative z-10">
                            <a href="/assets/pdf/PLAN STRATEGIC DE DEZVOLTARE DURABILĂ 2022-2027.pdf" download 
                               className="inline-flex items-center gap-3 bg-[#b51c1c] hover:bg-[#8f1515] text-white font-bold py-5 px-10 rounded-2xl transition-all hover:scale-[1.02] shadow-lg shadow-red-900/20 uppercase tracking-widest text-sm">
                                <i className="fas fa-download text-lg"></i> DOWNLOAD HERE
                            </a>
                        </div>
                    </div>

                    <div className="bg-zinc-50 dark:bg-[#1a1a1a] rounded-[2.5rem] p-10 md:p-14 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6 tracking-tight text-zinc-900 dark:text-red-500">SCOP</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed text-justify">
                           La OSUT Cluj, credem că impactul nostru trebuie să fie unul pozitiv nu doar pentru studenți, ci și pentru mediul înconjurător. Ne asumăm responsabilitatea de a organiza proiecte cât mai verzi, reducând consumul de plastic și gestionând eficient resursele la fiecare eveniment. 
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="w-full max-w-3xl relative flex items-center mb-6">
                            <div className="absolute w-full h-[2px] bg-gradient-to-r from-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-100"></div>
                            <h2 className="bg-white dark:bg-[#121212] pr-6 text-2xl md:text-3xl font-bold relative z-10 tracking-wide text-zinc-900 dark:text-white uppercase transition-colors">
                                Misiune
                            </h2>
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify relative z-10 text-lg mb-8">
                            Fiind conștienți de impactul pe care Organizația Studenților din Universitatea Tehnică din Cluj-Napoca (OSUT Cluj) îl are în viața studenților, ne dorim să oferim acestora prilejul să construiască împreună un mediu sustenabil propice dezvoltării lor. Viziunea noastră este de a crește conștientizarea problemelor cu care ne confruntăm când vine vorba de sustenabilitate în rândul comunității studențești. Prin intermediul inițiativelor pe care le derulăm, ne angajăm să mobilizăm și să îndrumăm studenții cu privire la importanța abordării unui parcurs responsabil și sustenabile, atât în contextul academic, cât și în viața de zi cu zi.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="w-full max-w-3xl relative flex items-center mb-6">
                            <div className="absolute w-full h-[2px] bg-gradient-to-r from-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-100"></div>
                            <h2 className="bg-white dark:bg-[#121212] pr-6 text-2xl md:text-3xl font-bold relative z-10 tracking-wide text-zinc-900 dark:text-white uppercase transition-colors">
                                Proiecte
                            </h2>
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify relative z-10 text-lg mb-8">
                            Încă din 2003, Organizația Studenților din Universitatea Tehnică din Cluj-Napoca (OSUT Cluj) își concentrează activitatea pe reprezentarea drepturilor studenților, apărarea intereselor acestora, dar și în privința nevoilor studenților și dezvoltării acestora în complementar mediului academic, prin organizarea a diferite proiecte, atât cu tematică de orientare în carieră (InfoTech, Engineering Summer University – ESU), formare profesională (PoliHack), culturală (PoliArt), cât și de bunăstare a tineretului (Zilele Universității Tehnice, Ce spun studenții?, PoliSport etc.).
                        </p>
                    </div>
                </div>
            </section>

            <div className="space-y-32">
                <section className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <Carousel images={CROS_IMAGES} />
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="w-full relative flex items-center mb-8">
                                <div className="absolute w-full h-[2px] bg-gradient-to-r from-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-100"></div>
                                <h2 className="bg-white dark:bg-[#121212] pr-8 text-3xl md:text-5xl font-bold relative z-10 tracking-tight leading-none text-zinc-900 dark:text-white uppercase transition-colors">
                                    Crosul UT
                                </h2>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-wide text-[#b51c1c] mb-2">DESCRIERE</h3>
                                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify relative z-10 text-lg mb-8">
                                        Crosul UT reprezintă un proiect de tradiție OSUT Cluj aflat la cea de-a 17-a ediție și care promovează un stil de viață sănătos și activ pentru tinerii comunității clujene printr-o competiție de alergare de 6 km. Acest eveniment este mai mult decât o simplă inițiativă sportivă, scopul lui fiind dublat de componenta caritabilă. Taxele de participare se întorc în comunitatea clujeană, prin sprijinul cauzelor umanitare.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-wide text-[#b51c1c] mb-2">CE AM AVUT ÎN VEDERE</h3>
                                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify relative z-10 text-lg">
                                        În același timp, Crosul UT se angajează să fie un eveniment sustenabil, gestionând responsabil deșeurile prin containere de colectare selectivă și utilizând materiale reciclabile și biodegradabile. Pentru a întregi experiența participanților, tricourile oferite acestora vor fi confecționate din materiale organice și reciclabile, reflectând angajamentul nostru pentru mediul înconjurător și promovând mesajul de sustenabilitate către toți cei implicați în eveniment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-100 dark:bg-zinc-900/30 py-24 border-y border-zinc-200 dark:border-zinc-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8 text-left">
                                <div className="w-full relative flex items-center mb-8">
                                    <div className="absolute w-full h-[2px] bg-gradient-to-r from-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-100"></div>
                                    <h2 className="bg-zinc-100 dark:bg-[#121212] pr-8 text-3xl md:text-5xl font-bold relative z-10 tracking-tight leading-none text-zinc-900 dark:text-white uppercase transition-colors">
                                        PoliHack
                                    </h2>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold uppercase tracking-wide text-[#b51c1c] mb-2">DESCRIERE</h3>
                                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify relative z-10 text-lg mb-8">
                                            PoliHack a luat naștere acum 13 ani pentru a oferi studenților o rampă de lansare în domeniul IT și antreprenoriat. Timp de 48 de ore, cele 20 de echipe participante își dezvoltă ideile într-un mediu competitiv-amical, având parte de traininguri, sesiuni de networking și îndrumare din partea mentorilor. Proiectul facilitează interacțiunea dintre studenți și companiile din industrie, oferindu-le ocazia să afle ce caută angajatorii și cum funcționează lumea antreprenorială.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold uppercase tracking-wide text-[#b51c1c] mb-2">CE AM AVUT ÎN VEDERE</h3>
                                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify relative z-10 text-lg">
                                            Pentru a reduce impactul asupra mediului, proiectul utilizează exclusiv instrumente digitale în gestionarea resurselor, iar participanții sunt încurajați să colecteze selectiv deșeurile în timpul evenimentului. PoliHack promovează un mediu prietenos cu natura și oferă tinerilor o platformă inovatoare unde își pot transforma ideile în start-upuri de succes, dezvoltând totodată o mentalitate verde.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Carousel images={POLIHACK_IMAGES} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <Carousel images={ESU_IMAGES} />
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="w-full relative flex items-center mb-8">
                                <div className="absolute w-full h-[2px] bg-gradient-to-r from-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-100"></div>
                                <h2 className="bg-white dark:bg-[#121212] pr-8 text-3xl md:text-5xl font-bold relative z-10 tracking-tight leading-none text-zinc-900 dark:text-white uppercase transition-colors">
                                    Engineering Summer University (ESU)
                                </h2>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-wide text-[#b51c1c] mb-2">DESCRIERE</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
                                        ESU urmărește să sprijine dezvoltarea a 180 de elevi în decurs de două săptămâni, oferindu-le acces la cursuri universitare, sesiuni de formare și activități variate care îi ajută să își contureze un plan de viitor în domeniul tehnic. Prin promovarea ofertei educaționale și sesiuni de orientare, proiectul își propune ca cel puțin 60% dintre participanți să urmeze studii la UTCN în următorii doi ani.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-wide text-[#b51c1c] mb-2">CE AM AVUT ÎN VEDERE</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
                                        Pentru a susține un stil de viață sustenabil, participanții la ESU primesc goodiebags cu materiale ecologice, precum agende, pixuri și termosuri reutilizabile. Proiectul promovează reciclarea selectivă și responsabilitatea față de mediu, având un impact semnificativ asupra perspectiva elevilor privind educația și cariera. OSUT Cluj integrează practici verzi în evenimentele sale, devenind un model de comunitate studențească implicată și conștientă de importanța protejării mediului.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-50 dark:bg-[#1a1a1a] py-24 border-y border-zinc-200 dark:border-zinc-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="w-full relative flex items-center mb-8">
                                    <div className="absolute w-full h-[2px] bg-gradient-to-r from-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-100"></div>
                                    <h2 className="bg-zinc-50 dark:bg-[#1a1a1a] pr-8 text-3xl md:text-5xl font-bold relative z-10 tracking-tight leading-none text-zinc-900 dark:text-white uppercase transition-colors">
                                        InfoTech
                                    </h2>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold uppercase tracking-wide text-[#b51c1c] mb-2">DESCRIERE</h3>
                                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify relative z-10 text-lg mb-8">
                                            InfoTech, unul dintre cele mai mari proiecte marca OSUT Cluj, este un târg de cariere ce facilitează interacțiunea dintre studenți și companii din domeniul tehnic. Proiectul oferă peste 2000 de studenți acces la workshopuri, open days și concursuri tehnice, vizând totodată colaborarea cu minimum 20 de firme care își prezintă activitatea și ofertele de angajare în cadrul UTCN.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold uppercase tracking-wide text-[#b51c1c] mb-2">CE AM AVUT ÎN VEDERE</h3>
                                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify relative z-10 text-lg">
                                            Partea de protocol a evenimentului a pus accent pe sustenabilitate, folosind pahare biodegradabile și containere pentru colectarea selectivă a deșeurilor. Proiectul contribuie la dezvoltarea profesională și personală a tinerilor, promovând totodată spiritul antreprenorial și responsabilitatea față de mediu.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Carousel images={INFOTECH_IMAGES} />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
