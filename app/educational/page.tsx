"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./studenti-reprezentanti.css";
import BlogSection from "@/components/BlogSection";

const DOCUMENTS = [
    { title: "CARTA", icon: "fas fa-book", downloadLink: "/assets/pdf/carta.pdf" },
    { title: "ECTS", icon: "fas fa-graduation-cap", downloadLink: "/assets/pdf/ects.pdf" },
    { title: "BURSE", icon: "fas fa-money-bill", downloadLink: "/assets/pdf/burse.pdf" },
    { title: "TAXE", icon: "fas fa-file-invoice-dollar", downloadLink: "/assets/pdf/taxe.pdf" },
    { title: "CĂMINE & CANTINE", icon: "fas fa-building", downloadLink: "/assets/pdf/caminecantine.pdf" },
    { title: "CDOS", icon: "fas fa-file-alt", downloadLink: "/assets/pdf/CDOS.pdf" },
    { title: "Ghidul Studentului (Licență)", icon: "fas fa-book-open", downloadLink: "/assets/pdf/ghid_student_licenta.pdf" },
    { title: "Ghidul Studentului (Master)", icon: "fas fa-book-reader", downloadLink: "/assets/pdf/ghid_student_master.pdf" }
];

const senatMembers = [
    {nume: "Mitocaru", prenume: "Silviu-Gabriel"},
    {nume: "Bălănescu", prenume: "Rareș"},
    {nume: "Coș", prenume: "Tudor-Adrian"},
    {nume: "Juravle", prenume: "Monica"},
    {nume: "Moiceanu", prenume: "Elena-Ștefania"},
    {nume: "Tudose", prenume: "Rareș"},
    {nume: "Abiculesei", prenume: "Denis-Andrei"},
    {nume: "Lenghel", prenume: "Carmen"},
    {nume: "Ormindean", prenume: "Vlad-Cosmin"},
    {nume: "Timiș", prenume: "Traian-Marius"},
    {nume: "Bondrea", prenume: "Lucian-Andrei"},
    {nume: "Bria", prenume: "Mara-Aiyana"},
    {nume: "Afanas", prenume: "Neonila"},
    {nume: "Licu", prenume: "Arina-Andreea"},
    {nume: "Livinschi", prenume: "Cătălina"},
    {nume: "Maxim", prenume: "Andrei-Vasile"},
    {nume: "Arimia", prenume: "Andreea-Ștefania"},
    {nume: "Bujdei", prenume: "Robert"},
    {nume: "Ciotea", prenume: "Alexandra-Anamaria"},
    {nume: "Chirilă", prenume: "Iulian"},
    {nume: "Spătăcean", prenume: "Lidia-Giorgiana"},
    {nume: "Precub", prenume: "Alexandru-Ioan"},
    {nume: "Joia", prenume: "Simona"},
    {nume: "Mureșan", prenume: "Ana-Maria"},
    {nume: "Suciu", prenume: "Alexandra"},
    {nume: "Sillai", prenume: "Beatrice"},
    {nume: "Borbei", prenume: "Alexandra"},
    {nume: "Covaci", prenume: "Sebastian-Gabriel"},
];

const faculties = {
    arhitectura: {
        id: "arhitectura",
        name: "FACULTATEA DE ARHITECTURĂ ȘI URBANISM",
        shortName: "Facultatea de Arhitectură și Urbanism",
        formular: "https://forms.office.com/e/F3bssFQU5E",
        members: [
            {nume: "Couți", prenume: "Paul"},
            {nume: "Dâscă", prenume: "Sabrina-Ioana"},
            {nume: "Rusu", prenume: "George"},
        ]
    },
    automatica: {
        id: "automatica",
        name: "FACULTATEA DE AUTOMATICĂ ȘI CALCULATOARE",
        shortName: "Facultatea de Automatică și Calculatoare",
        formular: "https://forms.office.com/e/2S0mtH8R6J",
        members: [
            {nume: "Bălănescu", prenume: "Rareș"},
            {nume: "Clim", prenume: "Diana"},
            {nume: "Indreiu", prenume: "Daniela"},
            {nume: "Juravle", prenume: "Monica"},
            {nume: "Moiceanu", prenume: "Elena-Ștefania"},
            {nume: "Murariu", prenume: "Georgiana"},
            {nume: "Pavel", prenume: "Luca-Georgian"},
            {nume: "Santeiu", prenume: "Anda-Ștefana"},
            {nume: "Șișeștean", prenume: "Andrei"},
            {nume: "Tudose", prenume: "Rareș"},
        ]
    },
    autovehicule: {
        id: "autovehicule",
        name: "FACULTATEA DE AUTOVEHICULE RUTIERE, MECATRONICĂ ȘI MECANICĂ",
        shortName: "Facultatea de Autovehicule Rutiere, Mecatronică și Mecanică",
        formular: "https://forms.office.com/e/PCZqRCKGRv",
        members: [
            {nume: "Bondrea", prenume: "Lucian-Andrei"},
            {nume: "Bria", prenume: "Mara-Aiyana"},
            {nume: "Buzgariu", prenume: "Ioana Niculina"},
            {nume: "Crăcăoanu", prenume: "Klaudia Maria"},
            {nume: "Haitonic", prenume: "Dacian-Alexandru"},
            {nume: "Iaută", prenume: "Claudiu-Marian"},
            {nume: "Veres", prenume: "Georgian-Ionuț"},
        ]
    },
    constructii: {
        id: "constructii",
        name: "FACULTATEA DE CONSTRUCȚII",
        shortName: "Facultatea de Construcții",
        formular: "https://forms.office.com/e/FGqc1UgaDV",
        members: [
            {nume: "Abiculesei", prenume: "Denis-Andrei"},
            {nume: "Chira", prenume: "Daria-Larisa"},
            {nume: "Lenghel", prenume: "Carmen-Anamaria"},
            {nume: "Marcu", prenume: "Petra-Denisa"},
            {nume: "Ormindean", prenume: "Vlad"},
            {nume: "Stan", prenume: "Giulia"},
            {nume: "Stoian-Pop", prenume: "Alexia-Ioana"},
            {nume: "Timiș", prenume: "Traian-Marius"},
            {nume: "Zinici", prenume: "Diana"},
        ]
    },
    electronica: {
        id: "electronica",
        name: "FACULTATEA DE ELECTRONICĂ, TELECOMUNICAȚII ȘI TEHNOLOGIA INFORMAȚIEI",
        shortName: "Facultatea de Electronică, Telecomunicații și Tehnologia Informației",
        formular: "https://forms.office.com/e/gDaHAf3VcK",
        members: [
            {nume: "Arimia", prenume: "Andreea-Ștefania"},
            {nume: "Bujdei", prenume: "Robert"},
            {nume: "Drule", prenume: "Daniela-Ileana"},
            {nume: "Irimiciuc", prenume: "Cosmin"},
            {nume: "Pop", prenume: "Lorena Maria"},
            {nume: "Signori", prenume: "Gianmario"},
            {nume: "Tivadar", prenume: "Dragoș-Filip"},
        ]
    },
    materiale: {
        id: "materiale",
        name: "FACULTATEA DE INGINERIA MATERIALELOR ȘI A MEDIULUI",
        shortName: "Facultatea de Ingineria Materialelor și a Mediului",
        formular: "https://forms.office.com/e/LbLkr1vKdZ",
        members: [
            {nume: "Goman", prenume: "Denis Gabriel"},
            {nume: "Joia", prenume: "Simona"},
            {nume: "Oltean", prenume: "Ariana"},
            {nume: "Pop", prenume: "Radu-Florin"},
        ]
    },
    instalatii: {
        id: "instalatii",
        name: "FACULTATEA DE INGINERIE A INSTALAȚIILOR",
        shortName: "Facultatea de Inginerie a Instalațiilor",
        formular: "https://forms.office.com/e/B09qBJHQkB",
        members: [
            {nume: "Costea", prenume: "Alina Paula Denisa"},
            {nume: "Nașca", prenume: "Tudor"},
            {nume: "Precub", prenume: "Alexandru-Ioan"},
        ]
    },
    electrica: {
        id: "electrica",
        name: "FACULTATEA DE INGINERIE ELECTRICĂ",
        shortName: "Facultatea de Inginerie Electrică",
        formular: "https://forms.office.com/e/M6Qgtq2Fwf",
        members: [
            {nume: "Chirilă", prenume: "Iulian"},
            {nume: "Constandache", prenume: "Ionela"},
            {nume: "Drăguș", prenume: "Ioan-Darius"},
            {nume: "Dumitrean", prenume: "Denis"},
            {nume: "Moldovan", prenume: "Ana-Maria"},
            {nume: "Spătăcean", prenume: "Lidia-Giorgiana"},
        ]
    },
    industriala: {
        id: "industriala",
        name: "FACULTATEA DE INGINERIE INDUSTRIALĂ, ROBOTICĂ ȘI MANAGEMENTUL PRODUCȚIEI",
        shortName: "Facultatea de Inginerie Industrială",
        formular: "https://forms.office.com/e/TJYTTEWUyB",
        members: [
            {nume: "Afanas", prenume: "Neonila"},
            {nume: "Dan", prenume: "Andrada Nicola"},
            {nume: "Licu", prenume: "Arina-Andreea"},
            {nume: "Livinschi", prenume: "Cătălina"},
            {nume: "Maxim", prenume: "Andrei"},
            {nume: "Mititean", prenume: "Florina"},
            {nume: "Negură", prenume: "Daria Ana-Maria"},
            {nume: "Streza", prenume: "Bogdan"},
            {nume: "Suciu", prenume: "Bianca"},
        ]
    },
    "inginerie-bm": {
        id: "inginerie-bm",
        name: "FACULTATEA DE INGINERIE (CUNBM)",
        shortName: "Facultatea de Inginerie (CUNBM)",
        formular: "https://forms.office.com/e/k2PqfE50u4",
        members: [
            {nume: "Gyorgy", prenume: "Melissza Scemida"},
            {nume: "Koloszvary", prenume: "Alexandru Andrei"},
            {nume: "Sillai", prenume: "Beatrice"},
            {nume: "Țînțaș", prenume: "Gheorghe-Mihăiță"},
        ]
    },
    "litere-bm": {
        id: "litere-bm",
        name: "FACULTATEA DE LITERE (CUNBM)",
        shortName: "Facultatea de Litere (CUNBM)",
        formular: "https://forms.office.com/e/Kq3UJvc4UW",
        members: [
            {nume: "Gaier", prenume: "Andreea-Cristina"},
            {nume: "Mureșan", prenume: "Ana-Maria"},
            {nume: "Popdan", prenume: "Nicoleta-Andreea"},
            {nume: "Suciu", prenume: "Alexandra"},
        ]
    },
    "stiinte-bm": {
        id: "stiinte-bm",
        name: "FACULTATEA DE ȘTIINȚE (CUNBM)",
        shortName: "Facultatea de Științe (CUNBM)",
        formular: "https://forms.office.com/e/xc03HQNVBe",
        members: [
            {nume: "Borbei", prenume: "Alexandra"},
            {nume: "Borșa", prenume: "Cătălin"},
            {nume: "Leonte", prenume: "Cosmin"},
            {nume: "Covaci", prenume: "Sebastian-Gabriel"},
            {nume: "Rus", prenume: "Gabriela Maria"},
        ]
    },
};

const ReprezCard = ({ member }: { member: { nume: string, prenume: string } }) => (
    <div className="sr-reprez">
        <h1>{member.nume}</h1>
        <h2>{member.prenume}</h2>
    </div>
);

export default function Educational() {
    // States for Studenti Reprezentanti section
    const [activeTab, setActiveTab] = useState<"senat" | "consiliu" | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedFacultyId, setSelectedFacultyId] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const selectedFaculty = selectedFacultyId ? faculties[selectedFacultyId as keyof typeof faculties] : null;

    return (
        <main className="bg-white dark:bg-[#121212] font-sans pb-16 min-h-screen pt-40 text-zinc-900 dark:text-white flex flex-col items-center">
            
            {/* 1. SECTION: OSUT TE INFORMEAZA */}
            <div className="w-full flex flex-col items-center mb-24 px-6 lg:px-20" id="osut-te-informeaza">
                <div className="w-full max-w-5xl relative flex justify-center items-center mb-10">
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-70"></div>
                    <h1 className="bg-white dark:bg-[#121212] px-10 text-4xl md:text-5xl font-bold relative z-10 tracking-wide text-zinc-900 dark:text-white text-center uppercase">OSUT te informează</h1>
                </div>
                
                <div className="w-full max-w-7xl">
                    <BlogSection />
                </div>
            </div>

            {/* 2. SECTION: RESURSE */}
            <div className="w-full flex flex-col items-center mb-24 px-6 lg:px-20" id="resurse">
                <div className="w-full max-w-5xl relative flex justify-center items-center mb-10">
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-70"></div>
                    <h1 className="bg-white dark:bg-[#121212] px-10 text-4xl md:text-5xl font-bold relative z-10 tracking-wide text-zinc-900 dark:text-white text-center uppercase">Resurse</h1>
                </div>

                <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DOCUMENTS.map((doc, i) => (
                        <a 
                            key={i} 
                            href={doc.downloadLink} 
                            download
                            className="flex flex-row items-center justify-center gap-3 bg-[#b51c1c] hover:bg-[#8f1515] text-white px-6 py-5 rounded-xl font-bold text-sm transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-red-900/50 hover:-translate-y-1 border border-red-900/40 text-center"
                        >
                            <i className={`${doc.icon} text-lg`}></i>
                            <span className="leading-tight">{doc.title}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* 3. SECTION: STUDENȚI REPREZENTANȚI */}
            <div className="w-full flex flex-col items-center mb-16 px-6 lg:px-20" id="studenti-reprezentanti">
                <div className="w-full max-w-5xl relative flex justify-center items-center mb-10">
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent top-1/2 -translate-y-1/2 opacity-70"></div>
                    <h1 className="bg-white dark:bg-[#121212] px-10 text-4xl md:text-5xl font-bold relative z-10 tracking-wide text-zinc-900 dark:text-white text-center uppercase">Studenți Reprezentanți</h1>
                </div>

                <div className="w-full max-w-7xl">
                    <div className="sr-menu-selector">
                        <button
                            className={`sr-menu-btn ${activeTab === "senat" ? "active" : ""}`}
                            onClick={() => setActiveTab("senat")}
                        >
                            Senatul Universității
                        </button>
                        <button
                            className={`sr-menu-btn ${activeTab === "consiliu" ? "active" : ""}`}
                            onClick={() => setActiveTab("consiliu")}
                        >
                            Consiliul Facultății
                        </button>
                    </div>

                    {activeTab === "consiliu" && (
                        <div className="sr-faculty-selector">
                            <div className="sr-custom-dropdown" ref={dropdownRef}>
                                <button
                                    className={`sr-dropdown-trigger outline-none ring-0 ${isDropdownOpen ? "open" : ""}`}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <span>{selectedFaculty ? selectedFaculty.shortName : "Alege Facultatea"}</span>
                                    <span className="chevron">▼</span>
                                </button>
                                <div className={`sr-dropdown-options ${isDropdownOpen ? "open" : ""}`}>
                                    {Object.values(faculties).map((fac) => (
                                        <button
                                            key={fac.id}
                                            className={`sr-dropdown-option ${selectedFacultyId === fac.id ? "selected" : ""}`}
                                            onClick={() => {
                                                setSelectedFacultyId(fac.id);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {fac.shortName}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "senat" && (
                        <div className="sr-section-content mt-10">
                            <div className="sr-scroll-container">
                                {senatMembers.map((member, idx) => (
                                    <ReprezCard key={idx} member={member} />
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "consiliu" && selectedFaculty && (
                        <div className="sr-section-content mt-10">
                            <div className="sr-scroll-container">
                                {selectedFaculty.members.map((member, idx) => (
                                    <ReprezCard key={idx} member={member} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
        </main>
    );
}
