"use client";

import React from "react";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

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
    "/assets/images/images/Poze Sustenabilitate/ESU/ESU 2.jpg",
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
    <div className="cros-carousel">
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
            {images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgSrc} alt={`Slide ${index}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);

export default function Sustenabilitate() {
    return (
        <main className="main-wrap bg-[#121212] font-sans pb-16">
            <h1 className="green-title" style={{ marginTop: "10vh", textAlign: "center", fontSize: "40px" }}>
                SUSTENABILITATE
            </h1>

            <div className="grid-container">
                <div className="reprez">
                    <div style={{ textAlign: "center" }}>
                        <h2 className="green-text-outline">Plan de dezvoltare durabilă</h2>
                    </div>
                    <div className="button-container">
                        <a href="/assets/pdf/PLAN STRATEGIC DE DEZVOLTARE DURABILĂ 2022-2027.pdf" download className="button-download">
                            <i className="fa fa-download"></i> DOWNLOAD HERE
                        </a>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="green-title">SCOP</div>
                    <p style={{ textAlign: "justify", color: "#d1d0d0" }}>
                        Organizația Studenților din Universitatea Tehnică din Cluj-Napoca recunoaște și aplică valoarea principiilor
                        dezvoltării durabile. Dezvoltarea durabilă reprezintă o serie de principii economice, sociale și de mediu ce
                        permit realizarea activităților desfășurate de organizație, într-un mod în care cerințele prezentului sunt
                        îndeplinite într-un mediu curat, echilibrat și integrat. Astfel, s-a redactat și implementat un Plan Strategic
                        de dezvoltare durabilă în vederea realizării activităților specifice.
                    </p>
                </div>
            </div>

            <div className="grid-container" style={{ marginTop: "40px" }}>

                <div className="grid-item">
                    <div className="green-title">MISIUNE</div>
                    <p style={{ textAlign: "justify", color: "#d1d0d0" }}>
                        Fiind conștienți de impactul pe care Organizația Studenților din Universitatea Tehnică din Cluj-Napoca (OSUT
                        Cluj) îl are în viața studenților, ne dorim să oferim acestora prilejul să construiască împreună un mediu
                        sustenabil propice dezvoltării lor. Viziunea noastră este de a crește conștientizarea problemelor cu care ne
                        confruntăm când vine vorba de sustenabilitate în rândul comunității studențești. Prin intermediul
                        inițiativelor pe care le derulăm, ne angajăm să mobilizăm și să îndrumăm studenții cu privire la importanța
                        abordării unui parcurs responsabil și sustenabile, atât în contextul academic, cât și în viața de zi cu zi.
                    </p>
                </div>

                <div className="grid-item">
                    <div className="green-title">PROIECTE</div>
                    <p style={{ textAlign: "justify", color: "#d1d0d0" }}>
                        Încă din 2003, Organizația Studenților din Universitatea Tehnică din Cluj-Napoca (OSUT Cluj) își concentrează
                        activitatea pe reprezentarea drepturilor studenților, apărarea intereselor acestora, dar și în privința
                        nevoilor studenților și dezvoltării acestora în complementar mediului academic, prin organizarea a diferite
                        proiecte, atât cu tematică de orientare în carieră (InfoTech, Engineering Summer University – ESU), formare
                        profesională (PoliHack), culturală (PoliArt), cât și de bunăstare a tineretului (Zilele Universității Tehnice,
                        Ce spun studenții?, PoliSport etc.).
                    </p>
                </div>
            </div>

            <section className="crosul-ut">
                <h1 className="cros-title">CROSUL UT</h1>
                <div className="cros-content">
                    <div className="cros-text">
                        <h2>DESCRIERE</h2>
                        <p style={{ color: "#d1d0d0" }}>
                            Crosul UT reprezintă un proiect de tradiție OSUT Cluj aflat la cea de-a 17-a ediție și care promovează un
                            stil de viață sănătos și activ pentru tinerii comunității clujene printr-o competiție de alergare de 6 km.
                            Acest eveniment este mai mult decât o simplă inițiativă sportivă, scopul lui fiind dublat de componenta
                            caritabilă. Taxele de participare se întorc în comunitatea clujeană, prin sprijinul cauzelor umanitare.
                        </p>

                        <h2>CE AM AVUT ÎN VEDERE</h2>
                        <p style={{ color: "#d1d0d0" }}>
                            În același timp, Crosul UT se angajează să fie un eveniment sustenabil, gestionând responsabil deșeurile
                            prin containere de colectare selectivă și utilizând materiale reciclabile și biodegradabile. Pentru a
                            întregi experiența participanților, tricourile oferite acestora vor fi confecționate din materiale organice
                            și reciclabile, reflectând angajamentul nostru pentru mediul înconjurător și promovând mesajul de
                            sustenabilitate către toți cei implicați în eveniment.
                        </p>
                    </div>
                    <Carousel images={CROS_IMAGES} />
                </div>
            </section>

            <section className="crosul-ut" style={{ marginTop: 0 }}>
                <h1 className="cros-title">PoliHack</h1>
                <div className="cros-content">
                    <div className="cros-text">
                        <h2>DESCRIERE</h2>
                        <p style={{ color: "#d1d0d0" }}>
                            PoliHack a luat naștere acum 13 ani pentru a oferi studenților o rampă de lansare în domeniul IT și
                            antreprenoriat. Timp de 48 de ore, cele 20 de echipe participante își dezvoltă ideile într-un mediu
                            competitiv-amical, având parte de traininguri, sesiuni de networking și îndrumare din partea mentorilor.
                            Proiectul facilitează interacțiunea dintre studenți și companiile din industrie, oferindu-le ocazia să afle
                            ce caută angajatorii și cum funcționează lumea antreprenorială.
                        </p>
                        <h2>CE AM AVUT ÎN VEDERE</h2>
                        <p style={{ color: "#d1d0d0" }}>
                            Pentru a reduce impactul asupra mediului, proiectul utilizează exclusiv instrumente digitale în gestionarea
                            resurselor, iar participanții sunt încurajați să colecteze selectiv deșeurile în timpul evenimentului.
                            PoliHack promovează un mediu prietenos cu natura și oferă tinerilor o platformă inovatoare unde își pot
                            transforma ideile în start-upuri de succes, dezvoltând totodată o mentalitate verde.
                        </p>
                    </div>
                    <Carousel images={POLIHACK_IMAGES} />
                </div>
            </section>

            <section className="crosul-ut" style={{ marginTop: 0 }}>
                <h1 className="cros-title">Engineering Summer University (ESU)</h1>
                <div className="cros-content">
                    <div className="cros-text">
                        <h2>DESCRIERE</h2>
                        <p style={{ color: "#d1d0d0" }}>
                            ESU urmărește să sprijine dezvoltarea a 180 de elevi în decurs de două săptămâni, oferindu-le acces la
                            cursuri universitare, sesiuni de formare și activități variate care îi ajută să își contureze un plan de
                            viitor în domeniul tehnic. Prin promovarea ofertei educaționale și sesiuni de orientare, proiectul își
                            propune ca cel puțin 60% dintre participanți să urmeze studii la UTCN în următorii doi ani.
                        </p>
                        <h2>CE AM AVUT ÎN VEDERE</h2>
                        <p style={{ color: "#d1d0d0" }}>
                            Pentru a susține un stil de viață sustenabil, participanții la ESU primesc goodiebags cu materiale
                            ecologice, precum agende, pixuri și termosuri reutilizabile. Proiectul promovează reciclarea selectivă și
                            responsabilitatea față de mediu, având un impact semnificativ asupra perspectiva elevilor privind educația
                            și cariera. OSUT Cluj integrează practici verzi în evenimentele sale, devenind un model de comunitate
                            studențească implicată și conștientă de importanța protejării mediului.
                        </p>
                    </div>
                    <Carousel images={ESU_IMAGES} />
                </div>
            </section>

            <section className="crosul-ut" style={{ marginTop: 0 }}>
                <h1 className="cros-title">InfoTech</h1>
                <div className="cros-content">
                    <div className="cros-text">
                        <h2>DESCRIERE</h2>
                        <p style={{ color: "#d1d0d0" }}>
                            InfoTech, unul dintre cele mai mari proiecte marca OSUT Cluj, este un târg de cariere ce facilitează
                            interacțiunea dintre studenți și companii din domeniul tehnic. Proiectul oferă peste 2000 de studenți acces
                            la workshopuri, open days și concursuri tehnice, vizând totodată colaborarea cu minimum 20 de firme care își
                            prezintă activitatea și ofertele de angajare în cadrul UTCN.
                        </p>
                        <h2>CE AM AVUT ÎN VEDERE</h2>
                        <p style={{ color: "#d1d0d0" }}>
                            Partea de protocol a evenimentului a pus accent pe sustenabilitate, folosind pahare biodegradabile și
                            containere pentru colectarea selectivă a deșeurilor. Proiectul contribuie la dezvoltarea profesională și
                            personală a tinerilor, promovând totodată spiritul antreprenorial și responsabilitatea față de mediu.
                        </p>
                    </div>
                    <Carousel images={INFOTECH_IMAGES} />
                </div>
            </section>

        </main>
    );
}
