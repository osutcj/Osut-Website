"use client";

import React from "react";
import "./bce.css";

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
            {igLink && (
                <a className="icon" href={igLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            )}
            {inLink && (
                <a className="icon" href={inLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            )}
        </div>
    </div>
);

const DIRECTII = [
    {
        photo: "/assets/images/images/bce/AnaMihali.jpg",
        lastName: "Mihali", firstName: "Ana",
        role: "Coordonator Cultural",
        fbLink: "https://www.facebook.com/profile.php?id=100008125005627",
        igLink: "https://www.instagram.com/anuk_ana/"
    },
    {
        photo: "/assets/images/images/bce/CristianFelic.jpg",
        lastName: "Felic", firstName: "Cristian",
        role: "Coordonator Divertisment",
        fbLink: "https://www.facebook.com/felic.cristian",
        igLink: "https://www.instagram.com/felic.cristian/"
    },
    {
        photo: "/assets/images/images/bce/LenghelCarmen.jpg",
        lastName: "Lenghel", firstName: "Carmen",
        role: "Coordonator Educațional",
        fbLink: "https://www.facebook.com/carmen.lenghel.9",
        igLink: "https://www.instagram.com/carmen.anamaria_/?ref=osut.org"
    },
    {
        photo: "/assets/images/images/bce/RobertBujdei.jpg",
        lastName: "Bujdei", firstName: "Robert",
        role: "Coordonator Sport și Sănătate",
        fbLink: "https://www.facebook.com/robert.bujdei",
        igLink: "https://www.instagram.com/robertbujdei18/"
    },
    {
        photo: "/assets/images/images/bce/MaiaAvram.jpg",
        lastName: "Avram", firstName: "Maia",
        role: "Coordonator Tineret",
        fbLink: "https://www.facebook.com/profile.php?id=100008618348137",
        igLink: "https://www.instagram.com/maia_avram?igsh=MWFkcHJzc2E0cnFjcQ%3D%3D&utm_source=qr",
        inLink: "http://www.linkedin.com/in/maya-avram-398a352b4?ref=osut.org"
    }
];

const SERVICII = [
    {
        photo: "/assets/images/images/bce/CosminIrimiciuc.jpg",
        lastName: "Irimiciuc", firstName: "Cosmin",
        role: "Coordonator Financiar",
        fbLink: "https://www.facebook.com/cosmin.irimiciuc",
        igLink: "https://www.instagram.com/cosmin.irimiciuc/"
    },
    {
        photo: "/assets/images/images/bce/TimeaPal.jpg",
        lastName: "Pal", firstName: "Timea",
        role: "Coordonator Imagine",
        fbLink: "https://www.facebook.com/timea.pal.948",
        igLink: "https://www.instagram.com/timiii.p/"
    },
    {
        photo: "/assets/images/images/bce/TudorCos.jpg",
        lastName: "Coș", firstName: "Tudor",
        role: "Coordonator IT",
        fbLink: "https://www.facebook.com/tudor.cos.5",
        igLink: "https://www.instagram.com/tudor._.cos/",
        inLink: "https://www.linkedin.com/in/tudor-co%C8%99-958490224/"
    },
    {
        photo: "/assets/images/images/bce/MarianIauta.jpg",
        lastName: "Iauta", firstName: "Marian",
        role: "Coordonator Media",
        fbLink: "https://www.facebook.com/marian.iauta.5",
        igLink: "https://www.instagram.com/marianiauta/"
    },
    {
        photo: "/assets/images/images/bce/RobertoSpuma.jpg",
        lastName: "Spumă", firstName: "Roberto",
        role: "Coordonator Tehnic-Administrativ",
        fbLink: "https://www.facebook.com/roberto.spuma.1",
        igLink: "https://www.instagram.com/roberto._.sp/"
    }
];

const PROIECTE = [
    {
        photo: "/assets/images/images/bce/CalinSecara.jpg",
        lastName: "Secară", firstName: "Călin",
        role: "Coordonator Engineering Summer University",
        fbLink: "https://www.facebook.com/profile.php?id=100005923397549",
        igLink: "https://www.instagram.com/secaracalin/"
    },
    {
        photo: "/assets/images/images/bce/JessicaSuciu.jpg",
        lastName: "Suciu", firstName: "Jessica",
        role: "Coordonator Gala Aniversară",
        fbLink: "https://www.facebook.com/suciu.jessica",
        igLink: "https://www.instagram.com/jessi_suciu/"
    },
    {
        photo: "/assets/images/images/bce/GeorgianaMurariu.jpg",
        lastName: "Murariu", firstName: "Georgiana",
        role: "Coordonator InfoTech",
        fbLink: "https://www.facebook.com/profile.php?id=100009081565180",
        igLink: "https://www.instagram.com/georgiamurariu/?ref=osut.org",
        inLink: "https://www.linkedin.com/in/georgiana-roxana-murariu-aa7272271/?ref=osut.org"
    },
    {
        photo: "/assets/images/images/bce/IulianChirila.jpg",
        lastName: "Chirilă", firstName: "Iulian",
        role: "Coordonator PoliHack",
        fbLink: "https://www.facebook.com/profile.php?id=100084863419146",
        igLink: "https://www.instagram.com/c.iulian08/"
    },
    {
        photo: "/assets/images/images/bce/AndaSanteiu.jpg",
        lastName: "Santeiu", firstName: "Anda",
        role: "Coordonator Viitor Inginer",
        fbLink: "https://www.facebook.com/anda.santeiu.7",
        igLink: "https://www.instagram.com/anda._.santeiu/"
    }
];

export default function BCE() {
    return (
        <main className="main-wrap bg-[#121212] min-h-screen text-white font-sans pb-16 pt-8">
            <h1 className="bc-title">
                <span className="white-text">BIROUL DE</span> <span className="red-text">CONDUCERE EXTINS</span>
            </h1>

            <div className="container mt-12 mb-8">
                <h2 className="text-outline">DIRECȚII</h2>
            </div>

            <div className="team-section">
                {DIRECTII.map((member, i) => (
                    <TeamCard key={i} {...member} />
                ))}
            </div>

            <div className="container mt-16 mb-8">
                <h2 className="text-outline">SERVICII</h2>
            </div>

            <div className="team-section">
                {SERVICII.map((member, i) => (
                    <TeamCard key={i} {...member} />
                ))}
            </div>

            <div className="container mt-16 mb-8">
                <h2 className="text-outline">PROIECTE</h2>
            </div>

            <div className="team-section">
                {PROIECTE.map((member, i) => (
                    <TeamCard key={i} {...member} />
                ))}
            </div>
        </main>
    );
}
