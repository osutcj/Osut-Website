"use client";

import React from "react";
import Image from "next/image";
import "./bce.css";

interface TeamMember {
    photo: string;
    lastName: string;
    firstName: string;
    role: string;
    fbLink?: string;
    igLink?: string;
    inLink?: string;
    email?: string;
    photoPosition?: string;
}

const TeamCard = ({ photo, lastName, firstName, role, fbLink, igLink, inLink, email, photoPosition }: TeamMember) => (
    <div className="bc-card">
        <div className="bc-card-image-wrap">
            <Image
                src={photo}
                alt={`${firstName} ${lastName}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="bc-card-photo"
                style={{ objectPosition: photoPosition || "top center", objectFit: "cover" }}
            />
        </div>
        <div className="bc-card-info">
            <div className="bc-card-role">{role}</div>
            <div className="bc-card-name">
                <span className="bc-card-lastname">{lastName}</span> 
                <span className="bc-card-firstname">{firstName}</span>
            </div>
            <div className="bc-card-links">
                {fbLink && (
                    <a href={fbLink} target="_blank" rel="noreferrer" className="bc-social-btn">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                )}
                {igLink && (
                    <a href={igLink} target="_blank" rel="noreferrer" className="bc-social-btn">
                        <i className="fab fa-instagram"></i>
                    </a>
                )}
                {inLink && (
                    <a href={inLink} target="_blank" rel="noreferrer" className="bc-social-btn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                )}
                {email && (
                    <a href={`mailto:${email}`} className="bc-social-btn">
                        <i className="fas fa-envelope"></i>
                    </a>
                )}
            </div>
        </div>
    </div>
);

const SectionTitle = ({ label }: { label: string }) => (
    <div className="bce-section-header">
        <div className="bce-section-line"></div>
        <h2 className="bce-section-title">
            {label}
        </h2>
        <div className="bce-section-line"></div>
    </div>
);

const DIRECTII: TeamMember[] = [
    { photo: "/assets/images/images/bce/AnaMihali.webp", lastName: "Mihali", firstName: "Ana", role: "Coordonator Cultural", fbLink: "https://www.facebook.com/profile.php?id=100008125005627", igLink: "https://www.instagram.com/anuk_ana/", inLink: "https://www.linkedin.com/in/ana-mihali-01076b405/", email: "ana.mihali@osutcluj.com" },
    { photo: "/assets/images/images/bce/CristianFelic.webp", lastName: "Felic", firstName: "Cristian", role: "Coordonator Divertisment", fbLink: "https://www.facebook.com/felic.cristian", igLink: "https://www.instagram.com/felic.cristian/", inLink: "https://www.linkedin.com/in/cristian-felic-7b9560364/", email: "cristian.felic@osutcluj.com" },
    { photo: "/assets/images/images/bce/LenghelCarmen.webp", lastName: "Lenghel", firstName: "Carmen", role: "Coordonator Educațional", fbLink: "https://www.facebook.com/carmen.lenghel.9", igLink: "https://www.instagram.com/carmen.anamaria_/?ref=osut.org", email: "carmen.lenghel@osutcluj.com" },
    { photo: "/assets/images/images/bce/RobertBujdei.webp", lastName: "Bujdei", firstName: "Robert", role: "Coordonator Sport și Sănătate", fbLink: "https://www.facebook.com/robert.bujdei", igLink: "https://www.instagram.com/robertbujdei18/", inLink: "https://www.linkedin.com/in/robert-bujdei-59a5bb355/", email: "robert.bujdei@osutcluj.com" },
    { photo: "/assets/images/images/bce/MaiaAvram.webp", lastName: "Avram", firstName: "Maia", role: "Coordonator Tineret", fbLink: "https://www.facebook.com/profile.php?id=100008618348137", igLink: "https://www.instagram.com/maia_avram?igsh=MWFkcHJzc2E0cnFjcQ%3D%3D&utm_source=qr", inLink: "https://www.linkedin.com/in/maia-avram-398a352b4/", email: "maia.avram@osutcluj.com" },
];

const SERVICII: TeamMember[] = [
    { photo: "/assets/images/images/bce/CosminIrimiciuc.webp", lastName: "Irimiciuc", firstName: "Cosmin", role: "Coordonator Financiar", fbLink: "https://www.facebook.com/cosmin.irimiciuc", igLink: "https://www.instagram.com/cosmin.irimiciuc/", inLink: "https://www.linkedin.com/in/cosmin-irimiciuc-23442b357/", email: "cosmin.irimiciuc@osutcluj.com" },
    { photo: "/assets/images/images/bce/TimeaPal.webp", lastName: "Pal", firstName: "Timea", role: "Coordonator Imagine", fbLink: "https://www.facebook.com/timea.pal.948", igLink: "https://www.instagram.com/timiii.p/", inLink: "https://www.linkedin.com/in/timea-pal-5101b4398/", email: "timea.pal@osutcluj.com" },
    { photo: "/assets/images/images/bce/TudorCos.webp", lastName: "Coș", firstName: "Tudor", role: "Coordonator IT", fbLink: "https://www.facebook.com/tudor.cos.5", igLink: "https://www.instagram.com/tudor._.cos/", inLink: "https://www.linkedin.com/in/tudor-co%C8%99-958490224/", email: "tudor.cos@osutcluj.com" },
    { photo: "/assets/images/images/bce/MarianIauta.webp", lastName: "Iaută", firstName: "Marian", role: "Coordonator Media", fbLink: "https://www.facebook.com/marian.iauta.5", igLink: "https://www.instagram.com/marianiauta/", email: "marian.iauta@osutcluj.com" },
    { photo: "/assets/images/images/bce/RobertoSpuma.webp", lastName: "Spumă", firstName: "Roberto", role: "Coordonator Tehnic-Administrativ", fbLink: "https://www.facebook.com/roberto.spuma.1", igLink: "https://www.instagram.com/roberto._.sp/", email: "roberto.spuma@osutcluj.com" },
];

const PROIECTE: TeamMember[] = [
    { photo: "/assets/images/images/bce/CalinSecara.webp", lastName: "Secară", firstName: "Călin", role: "Coordonator Engineering Summer University", fbLink: "https://www.facebook.com/profile.php?id=100005923397549", igLink: "https://www.instagram.com/secaracalin/", email: "calin.secara@osutcluj.com" },
    { photo: "/assets/images/images/bce/JessicaSuciu.webp", lastName: "Suciu", firstName: "Jessica", role: "Coordonator Gala Aniversară", fbLink: "https://www.facebook.com/suciu.jessica", igLink: "https://www.instagram.com/jessi_suciu/", email: "jessica.suciu@osutcluj.com" },
    { photo: "/assets/images/images/bce/GeorgianaMurariu.webp", lastName: "Murariu", firstName: "Georgiana", role: "Coordonator InfoTech", fbLink: "https://www.facebook.com/profile.php?id=100009081565180", igLink: "https://www.instagram.com/georgiamurariu/?ref=osut.org", inLink: "https://www.linkedin.com/in/georgiana-roxana-murariu-aa7272271/", email: "georgiana.murariu@osutcluj.com" },
    { photo: "/assets/images/images/bce/IulianChirila.webp", lastName: "Chirilă", firstName: "Iulian", role: "Coordonator PoliHack", fbLink: "https://www.facebook.com/profile.php?id=100084863419146", igLink: "https://www.instagram.com/c.iulian08/", inLink: "https://www.linkedin.com/in/iulian-chirila-8b9704241/", email: "iulian.chirila@osutcluj.com" },
    { photo: "/assets/images/images/bce/AndaSanteiu.webp", lastName: "Santeiu", firstName: "Anda", role: "Coordonator Viitor Inginer", fbLink: "https://www.facebook.com/anda.santeiu.7", igLink: "https://www.instagram.com/anda._.santeiu/", inLink: "https://www.linkedin.com/in/anda-stefana-santeiu-479930239/", email: "anda.santeiu@osutcluj.com" },
];

export default function BiroulDeConducereExtins() {
    return (
        <main className="bc-main">
            <div className="bce-banner">
                <Image
                    src="/assets/images/images/bce/Poza BCE.webp"
                    alt="Biroul de Conducere Extins - Fotografie de grup"
                    fill
                    sizes="100vw"
                    className="bce-banner-img"
                    priority
                />
                <div className="bce-banner-overlay"></div>
                <div className="bce-banner-content">
                    <div className="bc-header-line"></div>
                    <h1 className="bc-title-new">
                        Biroul de <span className="bc-title-red">Conducere Extins</span>
                    </h1>
                </div>
            </div>

            <SectionTitle label="Direcții" />
            <div className="bc-grid">
                {DIRECTII.map((m, i) => <TeamCard key={i} {...m} />)}
            </div>

            <SectionTitle label="Servicii" />
            <div className="bc-grid">
                {SERVICII.map((m, i) => <TeamCard key={i} {...m} />)}
            </div>

            <SectionTitle label="Proiecte" />
            <div className="bc-grid">
                {PROIECTE.map((m, i) => <TeamCard key={i} {...m} />)}
            </div>
        </main>
    );
}
