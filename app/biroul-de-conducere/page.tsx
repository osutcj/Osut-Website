"use client";

import React from "react";
import "./bc.css";

const TeamCard = ({ photo, lastName, firstName, role, fbLink, igLink, inLink }: any) => (
    <div className="team-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo} alt={`${firstName} ${lastName}`} className="team-photo" />
        <div className="team-name">
            <span className="last-name">{lastName} </span>
            <span className="first-name">{firstName}</span>
        </div>
        <div className="team-role">{role}</div>
        <div className="links">
            {fbLink && (
                <a className="icon" href={fbLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
            )}
            {inLink && (
                <a className="icon" href={inLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            )}
            {igLink && (
                <a className="icon" href={igLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            )}
        </div>
    </div>
);

const TEAM_MEMBERS = [
    {
        photo: "/assets/images/images/bc/Timi%C8%99Traian.jpg", // Kept original naming but it's recommended to encode or not use special characters in paths, updated to what was likely uploaded
        lastName: "Timiș", firstName: "Traian",
        role: "Președinte",
        fbLink: "https://www.facebook.com/timis.traian02",
        inLink: "https://www.linkedin.com/in/traian-timis/",
        igLink: "https://www.instagram.com/timistm/"
    },
    {
        photo: "/assets/images/images/bc/TudoseRares.jpg",
        lastName: "Tudose", firstName: "Rareș",
        role: "Director Executiv",
        fbLink: "https://www.facebook.com/rares.tudose08",
        igLink: "https://www.instagram.com/rares_tudose/",
        inLink: "https://www.linkedin.com/in/rare%C8%99-tudose/"
    },
    {
        photo: "/assets/images/images/bc/OrtanAdela.jpg",
        lastName: "Orțan", firstName: "Adela",
        role: "Secretar General",
        fbLink: "https://www.facebook.com/adela.ortan",
        igLink: "https://www.instagram.com/adela_ortan/"
    },
    {
        photo: "/assets/images/images/bc/ArimiaAndreea.jpg",
        lastName: "Arimia", firstName: "Andreea",
        role: "Vicepreședinte Electro",
        fbLink: "https://www.facebook.com/andreea.arimia",
        igLink: "https://www.instagram.com/andreeaa_stefaniaa/?ref=osut.org",
        inLink: "https://www.linkedin.com/in/andreea-arimia-0713972a2/?ref=osut.org"
    },
    {
        photo: "/assets/images/images/bc/OrmindeanVlad.jpg",
        lastName: "Ormindean", firstName: "Vlad",
        role: "Vicepreședinte Construcții",
        fbLink: "https://www.facebook.com/vlad.ormindean.1/",
        igLink: "https://www.instagram.com/__vld._/?ref=osut.org"
    },
    {
        photo: "/assets/images/images/bc/LicuArina.jpg",
        lastName: "Licu", firstName: "Arina",
        role: "Vicepreședinte Mecanică",
        fbLink: "https://www.facebook.com/arina.licu",
        igLink: "https://www.instagram.com/arina_andreea?igsh=ZGQzZDg2NXdiZTg3&utm_source=qr",
        inLink: "https://www.linkedin.com/in/arina-licu-3355b520a/?ref=osut.org"
    },
    {
        photo: "/assets/images/images/bc/B%C4%83l%C4%83nescuRare%C8%99.jpg", 
        lastName: "Bălănescu", firstName: "Rareș",
        role: "Vicepreședinte Relații Interne",
        fbLink: "https://www.facebook.com/rares.balanescu?locale=ro_RO",
        igLink: "https://www.instagram.com/rares.bala_4/?ref=osut.org",
        inLink: "https://www.linkedin.com/in/rares-balanescu-790958298/?ref=osut.org"
    },
    {
        photo: "/assets/images/images/bc/CioteaAlexandra.jpg",
        lastName: "Ciotea", firstName: "Alexandra",
        role: "Vicepreședinte Relații Externe",
        fbLink: "https://www.facebook.com/alexandra.ciotea.58",
        igLink: "https://www.instagram.com/lexa.ciotea?igsh=YmptNDZyOHZ5cTdh&utm_source=qr",
        inLink: "https://www.linkedin.com/in/alexandra-anamaria-ciotea-9832a42b1/?ref=osut.org"
    },
    {
        photo: "/assets/images/images/bc/MoiceanuElena.jpg",
        lastName: "Moiceanu", firstName: "Elena",
        role: "Director PR",
        fbLink: "https://www.facebook.com/ella.moiceanu",
        igLink: "https://www.instagram.com/ellamoiceanu/?ref=osut.org",
        inLink: "http://www.linkedin.com/in/elena-moiceanu-494031269?ref=osut.org"
    }
];

export default function BC() {
    return (
        <main className="main-wrap bg-[#121212] min-h-screen text-white font-sans pb-16 pt-8">
            <h1 className="bc-title">
                <span className="white-text">BIROUL DE</span> <span className="red-text">CONDUCERE</span>
            </h1>

            <div className="team-section">
                {TEAM_MEMBERS.map((member, i) => (
                    <TeamCard key={i} {...member} />
                ))}
            </div>
        </main>
    );
}
