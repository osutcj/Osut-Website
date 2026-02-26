"use client";

import React, { useState, useEffect, useRef } from "react";
import "./studenti-reprezentanti.css";

const senatMembers = [
    {nume: "Mitocaru", prenume: "Silviu", email: "mitocarusilviu227@gmail.com", phone: "0752769200"},
    {nume: "Buzea", prenume: "Lorena", email: "lorena7buzea@gmail.com", phone: "0747055101"},
    {nume: "Demean", prenume: "Vlad", email: "demeanvlad8@gmail.com", phone: "0736353111"},
    {nume: "Duțulescu", prenume: "Aurelia-Georgiana", email: "dutulescureli14@gmail.com", phone: "0746532877"},
    {nume: "Filip", prenume: "Cristian-Mihai", email: "cristifilip2002@gmail.com", phone: "0760993125"},
    {nume: "Ihoș", prenume: "Iarina-Valentina", email: "iarinaihos@gmail.com", phone: "0744216598"},
    {nume: "Abiculesei", prenume: "Denis-Andrei", email: "abiculeseidenis7@gmail.com", phone: "0745360232"},
    {nume: "Ormindean", prenume: "Vlad-Cosmin", email: "ormindeanvlad@gmail.com", phone: "0743135003"},
    {nume: "Timiș", prenume: "Traian-Marius", email: "traiantimis02@gmail.com", phone: "0757332298"},
    {nume: "Bria", prenume: "Mara Aiyana", email: "aiyanamara@gmail.com", phone: "0758091841"},
    {nume: "Vîrlan", prenume: "Dragoș George", email: "dragosvirlan2413@gmail.com", phone: "0746373983"},
    {nume: "Licu", prenume: "Arina Andreea", email: "arina.licu04@gmail.com", phone: "0770938737"},
    {nume: "Livinschi", prenume: "Cătălina", email: "catalinalivinschi97@gmail.com", phone: "0759145397"},
    {nume: "Maxim", prenume: "Andrei Vasile", email: "andreimaxim805@gmail.com", phone: "0756465679"},
    {nume: "Nistor", prenume: "Marius Gabriel", email: "nistormarius200@gmail.com", phone: "0749631616"},
    {nume: "Arimia", prenume: "Andreea-Ștefania", email: "arimiaandreeastefania@gmail.com", phone: "0762385168"},
    {nume: "Ciotea", prenume: "Alexandra-Anamaria", email: "lexaciotea@gmail.com", phone: "0741285543"},
    {nume: "Orțan", prenume: "Adela-Lorena", email: "adelalorena16@gmail.com", phone: "0754273202"},
    {nume: "Moldovan", prenume: "Ana-Maria", email: "anamariamoldovan09.amm@gmail.com", phone: "0743282230"},
    {nume: "Spătăcean", prenume: "Lidia-Giorgiana", email: "sgiorgiana02@gmail.com", phone: "0783054447"},
    {nume: "Rusu", prenume: "Horia Daniel", email: "horiarusu21@gmail.com", phone: "0747473335"},
    {nume: "Borodi", prenume: "Cristina", email: "cristinaborodi2003@gmail.com", phone: "0762543494"},
    {nume: "Dragoș", prenume: "Alex Răzvan", email: "dragosalex318@gmail.com", phone: "0757695110"},
    {nume: "Dulf", prenume: "Diana Geanina", email: "diana.dulf@lspv.ro", phone: "0756499825"},
    {nume: "Covaci", prenume: "Sebastian-Andrei", email: "seb.covaci@gmail.com", phone: "0752664094"},
    {nume: "Șepși", prenume: "Roxana", email: "roxanasepsi_09@yahoo.com", phone: "0741900411"},
];

const faculties = {
    arhitectura: {
        id: "arhitectura",
        name: "FACULTATEA DE ARHITECTURĂ ȘI URBANISM",
        shortName: "Facultatea de Arhitectură și Urbanism",
        members: [
            {nume: "Dâscă", prenume: "Sabrina-Ioana", email: "sabrinadasca@gmail.com", phone: "0729579560"},
            {nume: "Couti", prenume: "Paul", email: "coutipaul372@gmail.com", phone: "074528065"},
            {nume: "Neculcea", prenume: "Davide", email: "davidee.neculcea@gmail.com", phone: "0745837559"},
        ]
    },
    automatica: {
        id: "automatica",
        name: "FACULTATEA DE AUTOMATICĂ ȘI CALCULATOARE",
        shortName: "Facultatea de Automatică și Calculatoare",
        members: [
            {nume: "Filip", prenume: "Cristian-Mihai", email: "cristifilip2002@gmail.com", phone: "0760993125"},
            {nume: "Demean", prenume: "Vlad", email: "demeanvlad8@gmail.com", phone: "0736353111"},
            {nume: "Nechita", prenume: "Florina-Elena", email: "nechitaflorina2002@gmail.com", phone: "0725534103"},
            {nume: "Mozacu", prenume: "Ştefania-Cristina", email: "stefaniamozacu1@gmail.com", phone: "0756032882"},
            {nume: "Bălănescu", prenume: "Rareș-Ioan", email: "raresbalanescu@gmail.com", phone: "0786825333"},
            {nume: "Mureșan", prenume: "Daria", email: "dariamuresan100@gmail.com", phone: "0757203096"},
            {nume: "Tudose", prenume: "Rareș", email: "tudoserares20@gmail.com", phone: "0742869019"},
            {nume: "Avram", prenume: "Iulia", email: "iuliaavram455@gmail.com", phone: "0737615259"},
            {nume: "Duțulescu", prenume: "Aurelia-Georgiana", email: "dutulescureli14@gmail.com", phone: "0746532877"},
            {nume: "Vasile", prenume: "Maria-Lorena", email: "vasilemarialorena@gmail.com", phone: "0754637917"},
        ]
    },
    autovehicule: {
        id: "autovehicule",
        name: "FACULTATEA DE AUTOVEHICULE RUTIERE, MECATRONICĂ SI MECANICĂ",
        shortName: "Facultatea de Autovehicule Rutiere, Mecatronică și Mecanică",
        members: [
            {nume: "Balazs", prenume: "Andra-Renata", email: "andrarenata8@yahoo.com", phone: "0757232711"},
            {nume: "Bria", prenume: "Mara-Aiyana", email: "aiyanamara@gmail.com", phone: "0758091841"},
            {nume: "Crăcăoanu", prenume: "Răzvan-Ioan", email: "razvanioan071@gmail.com", phone: "0754530670"},
            {nume: "Ungur", prenume: "Ştefania Denisa", email: "stefania_ungur@yahoo.com", phone: "0745170966"},
            {nume: "Cotea", prenume: "Teona-Maria", email: "teonacotea@gmail.com", phone: "0770863134"},
            {nume: "Faur", prenume: "David-Mihai", email: "faur.david850@gmail.com", phone: "0761192359"},
            {nume: "Virlan", prenume: "Dragos-George", email: "dragosvirlan2413@gmail.com", phone: "0746373983"},
        ]
    },
    constructii: {
        id: "constructii",
        name: "FACULTATEA DE CONSTRUCȚII",
        shortName: "Facultatea de Construcții",
        members: [
            {nume: "Lenghel", prenume: "Carmen-Anamaria", email: "carmenlenghek@gmail.com", phone: "0763600973"},
            {nume: "Timiș", prenume: "Traian Marius", email: "traiantimis02@gmail.com", phone: "0757332298"},
            {nume: "Abiculesei", prenume: "Denis-Andrei", email: "abiculeseidenis7@gmail.com", phone: "0745360232"},
            {nume: "Buda", prenume: "Sebastian Petru", email: "sebipetrubuda@gmail.com", phone: "0771495509"},
            {nume: "Secară", prenume: "Călin-Bogdan", email: "calinbogdan02@gmail.com", phone: "0734785227"},
            {nume: "Ormindean", prenume: "Vlad Cosmin", email: "ormindeanvlad@gmail.com", phone: "0743135003"},
            {nume: "Urian", prenume: "Andrei-Lucian", email: "urian.lucian@yahoo.com", phone: "0771239970"},
            {nume: "Miherta", prenume: "Florentina-Ioana", email: "ioanamiherta2@gmail.com", phone: "0742683469"},
            {nume: "Marcu", prenume: "Petra-Denisa", email: "marcudenisa3@gmail.com", phone: "0755194584"},
        ]
    },
    electronica: {
        id: "electronica",
        name: "FACULTATEA DE ELECTRONICĂ, TELECOMUNICAȚII ȘI TEHNOLOGIA INFORMAȚIEI",
        shortName: "Facultatea de Electronică, Telecomunicații și Tehnologia Informației",
        members: [
            {nume: "Oros", prenume: "Ovidiu-Tiberiu", email: "Oros.Ov.Ovidiu@student.utcluj.ro", phone: "0758346910"},
            {nume: "Nicoară", prenume: "Paul-Nicolae", email: "nicoara.ni.paul@student.utcluj.ro", phone: "0799856742"},
            {nume: "Arimia", prenume: "Andreea-Ștefania", email: "Arimia.Io.Andreea@student.utcluj.ro", phone: "0762385168"},
            {nume: "Drule", prenume: "Daniela-Ileana", email: "Drule.Vi.Daniela@student.utcluj.ro", phone: "0765502464"},
            {nume: "Avram", prenume: "Maria", email: "Avram.Ma.Maria@student.utcluj.ro", phone: "0741139690"},
            {nume: "Beldean", prenume: "Ioana Maria", email: "Beldean.Io.Ioana@student.utcluj.ro", phone: "0743975523"},
            {nume: "Ciotea", prenume: "Alexandra-Anamaria", email: "Ciotea.Ad.Alexandra@student.utcluj.ro", phone: "0741285543"},
        ]
    },
    materiale: {
        id: "materiale",
        name: "FACULTATEA DE INGINERIA MATERIALELOR ȘI A MEDIULUI",
        shortName: "Facultatea de Ingineria Materialelor și a Mediului",
        members: [
            {nume: "Borodi", prenume: "Cristina", email: "cristinaborodi2003@gmail.com", phone: "0762543494"},
            {nume: "Adorean", prenume: "Lorena-Valentina", email: "adoreanlorena@gmail.com", phone: "0771008548"},
            {nume: "Cojocaru", prenume: "Ana-Maria Nuți", email: "anamariaann222n@gmail.com", phone: "0764730269"},
            {nume: "Gherman", prenume: "Anamaria Luisa", email: "ursan.annamarya.10@gmail.com", phone: "0756608672"},
        ]
    },
    instalatii: {
        id: "instalatii",
        name: "FACULTATEA DE INGINERIE A INSTALAȚIILOR",
        shortName: "Facultatea de Inginerie a Instalațiilor",
        members: [
            {nume: "Nasca", prenume: "Tudor", email: "nascatudor@gmail.com", phone: "0760237647"},
            {nume: "Costea", prenume: "Alina-Paula-Daniela", email: "acostea53@yahoo.com", phone: "0731853115"},
            {nume: "Rusu", prenume: "Horia-Daniel", email: "horiarusu21@gmail.com", phone: "0747473335"},
        ]
    },
    electrica: {
        id: "electrica",
        name: "FACULTATEA DE INGINERIE ELECTRICĂ",
        shortName: "Facultatea de Inginerie Electrică",
        members: [
            {nume: "Mihai", prenume: "Vlad-Gabriel", email: "mihaivg@gmail.com", phone: "0732801763"},
            {nume: "Ocneru", prenume: "Diana", email: "ocnerudiana@gmail.com", phone: "0757949870"},
            {nume: "Moldovan", prenume: "Ana-Maria", email: "anamariamoldovan09.amm@gmail.com", phone: "0743282230"},
            {nume: "Spătăcean", prenume: "Lidia-Giorgiana", email: "sgiorgiana02@gmail.com", phone: "0783054447"},
            {nume: "Dumitrean", prenume: "Denis-Andrei", email: "denisandreidumitrean@gmail.com", phone: "0768456800"},
            {nume: "Prode", prenume: "Ioana Ștefania", email: "niastefa56@gmail.com", phone: "0741397575"},
        ]
    },
    industriala: {
        id: "industriala",
        name: "FACULTATEA DE INGINERIE INDUSTRIALĂ, ROBOTICĂ ȘI MANAGEMENTUL PRODUCȚIEI",
        shortName: "Facultatea de Inginerie Industrială",
        members: [
            {nume: "Licu", prenume: "Arina-Andreea", email: "arina.licu04@gmail.com", phone: "0770938737"},
            {nume: "Nistor", prenume: "Marius-Gabriel", email: "nistormarius200@gmail.com", phone: "0749631616"},
            {nume: "Livinschi", prenume: "Cătălina", email: "catalinalivinschi97@gmail.com", phone: "0759145397"},
            {nume: "Maxim", prenume: "Andrei-Vasile", email: "andreimaxim805@gmail.com", phone: "0756465679"},
            {nume: "Streza", prenume: "Cornel Bogdan", email: "bogdanstreza17@gmail.com", phone: "0761024876"},
            {nume: "Meghețan", prenume: "Ana Camelia", email: "cameliameghesan105@gmail.com", phone: "0756824591"},
            {nume: "Man", prenume: "Richard Daniel", email: "manricharddaniel@yahoo.com", phone: "0745670036"},
            {nume: "Spătar", prenume: "Georgiana-Teodora", email: "georgispatar@gmail.com", phone: "0752137279"},
            {nume: "Privigyei", prenume: "Ana-Maria-Alexandra", email: "privigyeianamaria@gmail.com", phone: "0758740453"},
        ]
    },
    "inginerie-bm": {
        id: "inginerie-bm",
        name: "FACULTATEA DE INGINERIE (CUNBM)",
        shortName: "Facultatea de Inginerie (CUNBM)",
        members: [
            {nume: "Gyorgy", prenume: "Melissza Szemida", email: "Gyorgymelissza@gmail.com", phone: "0747487529"},
            {nume: "Țînțaș", prenume: "Gheorghe-Mihăiță", email: "gheorghetintas.14@gmail.com", phone: "0751535197"},
            {nume: "Sillai", prenume: "Beatrice", email: "sillaibeatrice@gmail.com", phone: "0732779412"},
        ]
    },
    "litere-bm": {
        id: "litere-bm",
        name: "FACULTATEA DE LITERE (CUNBM)",
        shortName: "Facultatea de Litere (CUNBM)",
        members: [
            {nume: "Dragoș", prenume: "Alex", email: "dragosalex318@gmail.com", phone: "0757695110"},
            {nume: "Popdan", prenume: "Nicoleta Andreea", email: "nicoletapopdan20@gmail.com", phone: "0752063197"},
            {nume: "Neamț", prenume: "Lorena-Alexandra", email: "lanlore236@gmail.com", phone: "0743080346"},
            {nume: "Gaier", prenume: "Andreea-Cristiana", email: "andreeagaier.student@gmail.com", phone: "0764553543"},
        ]
    },
    "stiinte-bm": {
        id: "stiinte-bm",
        name: "FACULTATEA DE ȘTIINȚE (CUNBM)",
        shortName: "Facultatea de Științe (CUNBM)",
        members: [
            {nume: "Şepşi", prenume: "Roxana", email: "roxanasepsi_09@yahoo.com", phone: "0741900411"},
            {nume: "Deak", prenume: "Szilvia Szabina", email: "szilvia.deak@lspv.ro", phone: "0756371095"},
            {nume: "Covaci", prenume: "Sebastian Gabriel", email: "seb.covaci@gmail.com", phone: "0752664094"},
            {nume: "Leonte", prenume: "Cosmin", email: "asassinulyoutubuluy@gmail.com", phone: "0757184357"},
        ]
    },
};

const ReprezCard = ({ member }: { member: { nume: string, prenume: string, email: string, phone: string } }) => (
    <div className="sr-reprez">
        <h1>{member.nume}</h1>
        <h2>{member.prenume}</h2>
        <h4>Email: <a href={`mailto:${member.email}`} className="sr-contact-link">{member.email}</a></h4>
        <h4>Phone Number: <a href={`tel:${member.phone}`} className="sr-contact-link">{member.phone}</a></h4>
    </div>
);

export default function StudentiReprezentanti() {
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
        <main className="main-wrap bg-[#121212] font-sans pb-16 min-h-screen">
            <div className="container mx-auto" style={{ marginTop: "10vh" }}>
                <h2 className="sr-text-outline">STUDENȚI REPREZENTANȚI</h2>
            </div>

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
                            className={`sr-dropdown-trigger ${isDropdownOpen ? "open" : ""}`}
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
                <div className="sr-section-content">
                    <div className="sr-scroll-container">
                        {senatMembers.map((member, idx) => (
                            <ReprezCard key={idx} member={member} />
                        ))}
                    </div>
                </div>
            )}

            {activeTab === "consiliu" && selectedFaculty && (
                <div className="sr-section-content">
                    <div className="container mx-auto mt-4 px-4 text-center">
                        <h2 className="sr-text-outline !inline-block" style={{ fontSize: "clamp(20px, 4vw, 36px)" }}>
                            {selectedFaculty.name.split(' ').slice(0, 2).join(' ')}{" "}
                            <span className="sr-highlight !inline-block" style={{ fontSize: "inherit" }}>
                                {selectedFaculty.name.split(' ').slice(2).join(' ')}
                            </span>
                        </h2>
                    </div>
                    <div className="sr-scroll-container">
                        {selectedFaculty.members.map((member, idx) => (
                            <ReprezCard key={idx} member={member} />
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
