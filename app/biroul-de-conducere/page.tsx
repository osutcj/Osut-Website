"use client";

import React from "react";
import Image from "next/image";
import "./bc.css";

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

const TEAM_MEMBERS: TeamMember[] = [
    {
        photo: "/assets/images/images/bc/TimișTraian.jpg",
        lastName: "Timiș",
        firstName: "Traian",
        role: "Președinte",
        fbLink: "https://www.facebook.com/timis.traian02",
        igLink: "https://www.instagram.com/timistm/",
        inLink: "https://www.linkedin.com/in/traian-timis/",
        email: "traian.timis@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/TudoseRares.jpg",
        lastName: "Tudose",
        firstName: "Rareș",
        role: "Director Executiv",
        fbLink: "https://www.facebook.com/rares.tudose08",
        igLink: "https://www.instagram.com/rares_tudose/",
        inLink: "https://www.linkedin.com/in/rare%C8%99-tudose/",
        email: "rares.tudose@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/OrtanAdela.jpg",
        lastName: "Orțan",
        firstName: "Adela",
        role: "Secretar General",
        fbLink: "https://www.facebook.com/adela.ortan",
        igLink: "https://www.instagram.com/adela_ortan/",
        inLink: "https://www.linkedin.com/in/adela-ortan/",
        email: "adela.ortan@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/ArimiaAndreea.jpg",
        lastName: "Arimia",
        firstName: "Andreea",
        role: "Vicepreședinte Electro",
        fbLink: "https://www.facebook.com/andreea.arimia",
        igLink: "https://www.instagram.com/andreeaa_stefaniaa/?ref=osut.org",
        inLink: "https://www.linkedin.com/in/andreea-arimia-0713972a2/",
        email: "andreea.arimia@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/OrmindeanVlad.jpg",
        lastName: "Ormindean",
        firstName: "Vlad",
        role: "Vicepreședinte Construcții",
        fbLink: "https://www.facebook.com/vlad.ormindean.1/",
        igLink: "https://www.instagram.com/__vld._/?ref=osut.org",
        inLink: "https://www.linkedin.com/in/vlad-ormindean-089752375/",
        email: "vlad.ormindean@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/LicuArina.jpg",
        lastName: "Licu",
        firstName: "Arina",
        role: "Vicepreședinte Mecanică",
        fbLink: "https://www.facebook.com/arina.licu",
        igLink: "https://www.instagram.com/arina_andreea?igsh=ZGQzZDg2NXdiZTg3&utm_source=qr",
        inLink: "https://www.linkedin.com/in/arina-licu-3355b520a/",
        email: "arina.licu@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/BălănescuRareș.jpg",
        lastName: "Bălănescu",
        firstName: "Rareș",
        role: "Vicepreședinte Relații Interne",
        fbLink: "https://www.facebook.com/rares.balanescu?locale=ro_RO",
        igLink: "https://www.instagram.com/rares.bala_4/?ref=osut.org",
        inLink: "https://www.linkedin.com/in/rares-balanescu-790958298/",
        email: "rares.balanescu@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/CioteaAlexandra.jpg",
        lastName: "Ciotea",
        firstName: "Alexandra",
        role: "Vicepreședinte Relații Externe",
        fbLink: "https://www.facebook.com/alexandra.ciotea.58",
        igLink: "https://www.instagram.com/lexa.ciotea?igsh=YmptNDZyOHZ5cTdh&utm_source=qr",
        inLink: "https://www.linkedin.com/in/alexandra-anamaria-ciotea-9832a42b1/",
        email: "alexandra.ciotea@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/MoiceanuElena.jpg",
        lastName: "Moiceanu",
        firstName: "Elena",
        role: "Director PR",
        fbLink: "https://www.facebook.com/ella.moiceanu",
        igLink: "https://www.instagram.com/ellamoiceanu/?ref=osut.org",
        inLink: "https://www.linkedin.com/in/elena-moiceanu-494031269/",
        email: "elena.moiceanu@osutcluj.com"
    }
];

export default function BiroulDeConducere() {
    return (
        <main className="bc-main">
            <div className="bc-banner">
                <Image
                    src="/assets/images/images/bc/Poza BC.jpg"
                    alt="Biroul de Conducere - Fotografie de grup"
                    fill
                    sizes="100vw"
                    className="bc-banner-img"
                    priority
                />
                <div className="bc-banner-overlay"></div>
                <div className="bc-banner-content">
                    <div className="bc-header-line"></div>
                    <h1 className="bc-title-new">
                        Biroul de <span className="bc-title-red">Conducere</span>
                    </h1>
                </div>
            </div>

            <div className="bc-grid">
                {TEAM_MEMBERS.map((member, i) => (
                    <TeamCard key={i} {...member} />
                ))}
            </div>
        </main>
    );
}
