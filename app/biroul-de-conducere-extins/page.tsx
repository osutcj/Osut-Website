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

const SectionTitle = ({ label }: { label: string }) => (
    <div className="bce-section-header">
        <div className="bce-section-line"></div>
        <h2 className="bce-section-title">
            {label}
        </h2>
        <div className="bce-section-line"></div>
    </div>
);

const SERVICII: TeamMember[] = [
    { photo: "/assets/images/images/bce/CalinSecara.jpg", lastName: "Secară", firstName: "Călin-Mihai", role: "Serviciul HR", fbLink: "https://www.facebook.com/calinmihai.secara", igLink: "https://www.instagram.com/calinsecara/" },
    { photo: "/assets/images/images/bce/GeorgianaMurariu.jpg", lastName: "Murariu", firstName: "Georgiana", role: "Serviciul Imagine", fbLink: "https://www.facebook.com/murariu.georgiana.5", igLink: "https://www.instagram.com/murariugeorgiana/" },
    { photo: "/assets/images/images/bce/CosminIrimiciuc.jpg", lastName: "Irimiciuc", firstName: "Cosmin", role: "Serviciul IT", fbLink: "https://www.facebook.com/cosmin.irimiciuc", igLink: "https://www.instagram.com/cosmin_irimiciuc/" },
    { photo: "/assets/images/images/bce/AndaSanteiu.jpg", lastName: "Santeiu", firstName: "Anda-Ștefana", role: "Serviciul Fundraising", fbLink: "https://www.facebook.com/anda.santeiu", igLink: "https://www.instagram.com/andasanteiu/" },
    { photo: "/assets/images/images/bce/TimeaPal.jpg", lastName: "Pal", firstName: "Timea-Maria", role: "Serviciul Logisitică", fbLink: "https://www.facebook.com/timea.pal.37", igLink: "https://www.instagram.com/paltimea_/" },
];

const DEPARTAMENTE: TeamMember[] = [
    { photo: "/assets/images/images/bce/LenghelCarmen.jpg", lastName: "Lenghel", firstName: "Carmen-Anamaria", role: "Departamentul AC", fbLink: "https://www.facebook.com/carmen.lenghel.3", igLink: "https://www.instagram.com/lenghelcarmen/" },
    { photo: "/assets/images/images/bce/RobertBujdei.jpg", lastName: "Bujdei", firstName: "Robert", role: "Departamentul ETTI", fbLink: "https://www.facebook.com/robert.bujdei.7", igLink: "https://www.instagram.com/bujdeirobert/" },
    { photo: "/assets/images/images/bce/MarianIauta.jpg", lastName: "Iaută", firstName: "Claudiu-Marian", role: "Departamentul ARMM", fbLink: "https://www.facebook.com/iauta.marian", igLink: "https://www.instagram.com/iautamarian/" },
    { photo: "/assets/images/images/bce/IulianChirila.jpg", lastName: "Chirilă", firstName: "Iulian", role: "Departamentul IE", fbLink: "https://www.facebook.com/iulian.chirila.14", igLink: "https://www.instagram.com/iulianch_/" },
    { photo: "/assets/images/images/bce/RobertoSpuma.jpg", lastName: "Spumă", firstName: "Roberto-Ionut", role: "Departamentul C", fbLink: "https://www.facebook.com/roberto.ionut.14", igLink: "https://www.instagram.com/spuma_roberto/" },
    { photo: "/assets/images/images/bce/MaiaAvram.jpg", lastName: "Avram", firstName: "Maia", role: "Departamentul IIRMP", fbLink: "https://www.facebook.com/maia.avram.71", igLink: "https://www.instagram.com/maiaavram/" },
    { photo: "/assets/images/images/bce/AnaMihali.jpg", lastName: "Mihali", firstName: "Ana-Maria", role: "Departamentul IMM", fbLink: "https://www.facebook.com/ana.mihali.14", igLink: "https://www.instagram.com/anaamariaam_/" },
    { photo: "/assets/images/images/bce/JessicaSuciu.jpg", lastName: "Suciu", firstName: "Jessica-Maria", role: "Departamentul FAU", fbLink: "https://www.facebook.com/jessica.suciu.12", igLink: "https://www.instagram.com/jessicasuciu/" },
];

const PROIECTE: TeamMember[] = [
    { photo: "/assets/images/images/bce/TudorCos.jpg", lastName: "Coș", firstName: "Tudor-Adrian", role: "Manager Proiecte", fbLink: "https://www.facebook.com/cos.tudor.12", igLink: "https://www.instagram.com/tudoradrian_/" },
    { photo: "/assets/images/images/bce/CristianFelic.jpg", lastName: "Felic", firstName: "Cristian", role: "Manager Proiecte", fbLink: "https://www.facebook.com/cristian.felic", igLink: "https://www.instagram.com/cristianfelic/" },
];

export default function BiroulDeConducereExtins() {
    return (
        <main className="bc-main">
            <div className="bc-header">
                <div className="bc-header-line"></div>
                <h1 className="bc-title-new">
                    Biroul de <span className="bc-title-red">Conducere Extins</span>
                </h1>
            </div>

            <SectionTitle label="Servicii" />
            <div className="bc-grid">
                {SERVICII.map((m, i) => <TeamCard key={i} {...m} />)}
            </div>

            <SectionTitle label="Departamente" />
            <div className="bc-grid">
                {DEPARTAMENTE.map((m, i) => <TeamCard key={i} {...m} />)}
            </div>

            <SectionTitle label="Proiecte" />
            <div className="bc-grid">
                {PROIECTE.map((m, i) => <TeamCard key={i} {...m} />)}
            </div>
        </main>
    );
}
