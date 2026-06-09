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
        photo: "/assets/images/images/bc/ArimiaAndreea.webp",
        lastName: "Arimia",
        firstName: "Andreea",
        role: "Președinte",
        fbLink: "https://www.facebook.com/andreea.arimia",
        igLink: "https://www.instagram.com/andreeaa_stefaniaa/?ref=osut.org",
        inLink: "https://www.linkedin.com/in/andreea-arimia-0713972a2/",
        email: "andreea.arimia@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/OrmindeanVlad.webp",
        lastName: "Ormindean",
        firstName: "Vlad",
        role: "Director Executiv",
        fbLink: "https://www.facebook.com/vlad.ormindean.1/",
        igLink: "https://www.instagram.com/__vld._/?ref=osut.org",
        inLink: "https://www.linkedin.com/in/vlad-ormindean-089752375/",
        email: "vlad.ormindean@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/CosTudor.webp",
        lastName: "Coș",
        firstName: "Tudor",
        role: "Secretar General",
        fbLink: "https://www.facebook.com/tudor.cos.5",
        igLink: "https://www.instagram.com/tudor._.cos/",
        inLink: "https://www.linkedin.com/in/tudor-co%C8%99-958490224/",
        email: "tudor.cos@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/IrimiciucCosmin.webp",
        lastName: "Irimiciuc",
        firstName: "Cosmin",
        role: "Vicepreședinte Electro",
        fbLink: "https://www.facebook.com/cosmin.irimiciuc",
        igLink: "https://www.instagram.com/cosmin.irimiciuc/",
        inLink: "https://www.linkedin.com/in/cosmin-irimiciuc-23442b357/",
        email: "cosmin.irimiciuc@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/LenghelCarmen.webp",
        lastName: "Lenghel",
        firstName: "Carmen",
        role: "Vicepreședinte Construcții",
        fbLink: "https://www.facebook.com/carmen.lenghel.9",
        igLink: "https://www.instagram.com/carmen.anamaria_/?ref=osut.org",
        inLink: "https://www.linkedin.com/in/carmen-lenghel-3b8457415/",
        email: "carmen.lenghel@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/LicuArina.webp",
        lastName: "Licu",
        firstName: "Arina",
        role: "Vicepreședinte Mecanică",
        fbLink: "https://www.facebook.com/arina.licu",
        igLink: "https://www.instagram.com/arina_andreea?igsh=ZGQzZDg2NXdiZTg3&utm_source=qr",
        inLink: "https://www.linkedin.com/in/arina-licu-3355b520a/",
        email: "arina.licu@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/BujdeiRobert.webp",
        lastName: "Bujdei",
        firstName: "Robert",
        role: "Vicepreședinte Relații Interne",
        fbLink: "https://www.facebook.com/robert.bujdei",
        igLink: "https://www.instagram.com/robertbujdei18/",
        inLink: "https://www.linkedin.com/in/robert-bujdei-59a5bb355/",
        email: "robert.bujdei@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/AvramMaia.webp",
        lastName: "Avram",
        firstName: "Maia",
        role: "Vicepreședinte Relații Externe",
        fbLink: "https://www.facebook.com/profile.php?id=100008618348137", 
        igLink: "https://www.instagram.com/maia_avram?igsh=MWFkcHJzc2E0cnFjcQ%3D%3D&utm_source=qr",
        inLink: "https://www.linkedin.com/in/maia-avram-398a352b4/",
        email: "maia.avram@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bc/MoiceanuElena.webp",
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
                    src="/assets/images/images/bc/PozaBC.webp"
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
