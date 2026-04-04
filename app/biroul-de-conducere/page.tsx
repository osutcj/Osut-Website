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
    photoPosition?: string;
}

const TeamCard = ({ photo, lastName, firstName, role, fbLink, igLink, inLink, photoPosition }: TeamMember) => (
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
            </div>
        </div>
    </div>
);

const TEAM_MEMBERS: TeamMember[] = [
    {
        photo: "/assets/images/images/bc/TimișTraian.jpg",
        lastName: "Timiș",
        firstName: "Traian-Marius",
        role: "Președinte",
        fbLink: "https://www.facebook.com/traianmarius.timis",
        igLink: "https://www.instagram.com/traian_timis/",
        inLink: "https://www.linkedin.com/in/traian-marius-timi%C8%99-011103250/"
    },
    {
        photo: "/assets/images/images/bc/CioteaAlexandra.jpg",
        lastName: "Ciotea",
        firstName: "Alexandra-Anamaria",
        role: "Secretar General",
        fbLink: "https://www.facebook.com/ale.ciotea",
        igLink: "https://www.instagram.com/aleciotea/",
        inLink: "https://www.linkedin.com/in/alexandra-anamaria-ciotea-044102250/"
    },
    {
        photo: "/assets/images/images/bc/LicuArina.jpg",
        lastName: "Licu",
        firstName: "Arina-Andreea",
        role: "Vicepreședinte Educațional",
        fbLink: "https://www.facebook.com/arina.licu.1",
        igLink: "https://www.instagram.com/arina_licu/",
        inLink: "https://www.linkedin.com/in/arina-andreea-licu-444102250/"
    },
    {
        photo: "/assets/images/images/bc/OrmindeanVlad.jpg",
        lastName: "Ormindean",
        firstName: "Vlad-Cosmin",
        role: "Vicepreședinte Interne",
        fbLink: "https://www.facebook.com/vlad.ormindean",
        igLink: "https://www.instagram.com/vladormindean/",
        inLink: "https://www.linkedin.com/in/vlad-cosmin-ormindean-044102250/"
    },
    {
        photo: "/assets/images/images/bc/MoiceanuElena.jpg",
        lastName: "Moiceanu",
        firstName: "Elena-Ștefania",
        role: "Vicepreședinte Externe",
        fbLink: "https://www.facebook.com/elena.moiceanu.1",
        igLink: "https://www.instagram.com/elenamoiceanu/",
        inLink: "https://www.linkedin.com/in/elena-%C8%99tefania-moiceanu-044102250/"
    },
    {
        photo: "/assets/images/images/bc/ArimiaAndreea.jpg",
        lastName: "Arimia",
        firstName: "Andreea-Ștefania",
        role: "Vicepreședinte Imagine",
        fbLink: "https://www.facebook.com/andreeastefania.arimia.1",
        igLink: "https://www.instagram.com/andreeastefaniaarimia/",
        inLink: "https://www.linkedin.com/in/andreea-%C8%99tefania-arimia-044102250/"
    },
    {
        photo: "/assets/images/images/bc/BălănescuRareș.jpg",
        lastName: "Bălănescu",
        firstName: "Rareș",
        role: "Vicepreședinte Proiecte",
        fbLink: "https://www.facebook.com/rares.balanescu.1",
        igLink: "https://www.instagram.com/raresbalanescu/",
        inLink: "https://www.linkedin.com/in/rare%C8%99-b%C4%83l%C4%83nescu-044102250/"
    },
    {
        photo: "/assets/images/images/bc/TudoseRares.jpg",
        lastName: "Tudose",
        firstName: "Rareș",
        role: "Vicepreședinte IT",
        fbLink: "https://www.facebook.com/rares.tudose.1",
        igLink: "https://www.instagram.com/rarestudose/",
        inLink: "https://www.linkedin.com/in/rare%C8%99-tudose-044102250/"
    },
    {
        photo: "/assets/images/images/bc/OrtanAdela.jpg",
        lastName: "Ortan",
        firstName: "Adela-Mălina",
        role: "Cenzor",
        fbLink: "https://www.facebook.com/adela.ortan",
        igLink: "https://www.instagram.com/adelaortan/",
        inLink: "https://www.linkedin.com/in/adela-m%C4%83lina-ortan-044102250/"
    },
];

export default function BiroulDeConducere() {
    return (
        <main className="bc-main">
            <div className="bc-header">
                <div className="bc-header-line"></div>
                <h1 className="bc-title-new">
                    Biroul de <span className="bc-title-red">Conducere</span>
                </h1>
            </div>

            <div className="bc-grid">
                {TEAM_MEMBERS.map((member, i) => (
                    <TeamCard key={i} {...member} />
                ))}
            </div>
        </main>
    );
}
