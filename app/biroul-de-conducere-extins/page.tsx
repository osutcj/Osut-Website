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
                style={{ objectPosition: photoPosition || "center", objectFit: "cover" }}
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
                    <a href={fbLink} target="_blank" rel="noreferrer" className="bc-social-btn" aria-label={`Facebook ${firstName} ${lastName}`}>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                )}
                {igLink && (
                    <a href={igLink} target="_blank" rel="noreferrer" className="bc-social-btn" aria-label={`Instagram ${firstName} ${lastName}`}>
                        <i className="fab fa-instagram"></i>
                    </a>
                )}
                {inLink && (
                    <a href={inLink} target="_blank" rel="noreferrer" className="bc-social-btn" aria-label={`LinkedIn ${firstName} ${lastName}`}>
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                )}
                {email && (
                    <a href={`mailto:${email}`} className="bc-social-btn" aria-label={`Email ${firstName} ${lastName}`}>
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
    {
        photo: "/assets/images/images/bce/GabrielDoana.webp",
        lastName: "Doană",
        firstName: "Gabriel",
        role: "Coordonator Divertisment",
        fbLink: "https://www.facebook.com/gabriel.doana.10",
        igLink: "https://www.instagram.com/doanagabriel/",
        email: "gabriel.doana@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bce/PrecubIoan.webp",
        lastName: "Precub",
        firstName: "Alexandru Ioan",
        role: "Coordonator Educațional",
        fbLink: "https://www.facebook.com/share/1F1i5pvmwH/",
        igLink: "https://www.instagram.com/alexandruprecub?igsi=MWhoMXRhNTBhc29tdQ==",
        email: "alexandru.precub@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bce/ArmeanAndrei.webp",
        lastName: "Armean",
        firstName: "Andrei",
        role: "Coordonator Sport și Sănătate",
        fbLink: "https://www.facebook.com/profile.php?id=100083719936978",
        igLink: "https://www.instagram.com/andrei.armean/",
        email: "andrei.armean@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bce/SofinetiPatrick.webp",
        lastName: "Sofineti",
        firstName: "Patrick",
        role: "Coordonator Tineret",
        fbLink: "https://www.facebook.com/patrick.sofineti01/",
        igLink: "https://www.instagram.com/patrikutzz?igsi=2Myb2FxaWFsbWQ=",
        email: "patrick.sofineti@osutcluj.com"
    }
];

const SERVICII: TeamMember[] = [
    {
        photo: "/assets/images/images/bce/DenisDumitrean.webp",
        lastName: "Dumitrean",
        firstName: "Denis",
        role: "Coordonator Financiar",
        fbLink: "https://www.facebook.com/share/18PSbh7ZyX/",
        igLink: "https://www.instagram.com/denis._071?igsi=MWVtejAwYTJ0eTNqeQ==",
        email: "denis.dumitrean@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bce/IonutIspir.webp",
        lastName: "Ispir-Boltea",
        firstName: "Ionuț",
        role: "Coordonator Imagine",
        fbLink: "https://www.facebook.com/share/1GVnB6A2Hf/",
        igLink: "https://www.instagram.com/_ionut_130?igsi=MXNhcndoMnJsczBreQ==",
        inLink: "https://www.linkedin.com/in/ionut-boltea-105922430?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "ionut.ispir@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bce/IonutDomniteanu.webp",
        lastName: "Domnițeanu",
        firstName: "Ionuț",
        role: "Coordonator IT",
        fbLink: "https://www.facebook.com/ionut.domniteanu.583",
        igLink: "https://www.instagram.com/ionut.dom/",
        inLink: "https://www.linkedin.com/in/domniteanu-ioan-12991821a",
        email: "ionut.domniteanu@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bce/PavelOctavian.webp",
        lastName: "Pavel",
        firstName: "Octavian",
        role: "Coordonator Media",
        fbLink: "https://www.facebook.com/share/1Kbr4t5Yct/",
        igLink: "https://www.instagram.com/_octavian.p_?igsi=cnEyZjRrc3hwbDli",
        email: "octavian.pavel@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bce/RobertLuta.webp",
        lastName: "Luța",
        firstName: "Robert",
        role: "Coordonator PR",
        fbLink: "https://www.facebook.com/robert.luta.1#",
        igLink: "https://www.instagram.com/robert._l00/",
        email: "robert.luta@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bce/CalinSecara.webp",
        lastName: "Secară",
        firstName: "Călin",
        role: "Coordonator Tehnic-Administrativ",
        fbLink: "https://www.facebook.com/share/19V15dvhiM/?mibextid=wwXIfr",
        igLink: "https://www.instagram.com/secaracalin?igsi=MXF3MDY1Z25veWdobA%3D%3D&utm_source=qr",
        email: "secara.calin@osutcluj.com"
    }
];

const PROIECTE: TeamMember[] = [
    {
        photo: "/assets/images/images/bce/CirtitaBianca.webp",
        lastName: "Cîrtiță",
        firstName: "Bianca",
        role: "Coordonator Balul Bobocilor",
        fbLink: "https://www.facebook.com/share/18SNsUDHGC/?mibextid=wwXIfr",
        igLink: "https://www.instagram.com/bianca_cirtita?igsi=MXFpa2hrY2szMXExZA%3D%3D&utm_source=qr",
        email: "bianca.cirtita@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bce/DianaZinici.webp",
        lastName: "Zinici",
        firstName: "Diana",
        role: "Coordonator InfoTech",
        fbLink: "https://www.facebook.com/share/1EkzYnRmvK/?mibextid=wwXIfr",
        igLink: "https://www.instagram.com/diana._.zinici?igsi=ZmkyNWw4OGtieGdy&utm_source=qr",
        email: "diana.zinici@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bce/BeldeanIoana.webp",
        lastName: "Beldean",
        firstName: "Ioana",
        role: "Coordonator PoliHack",
        fbLink: "https://www.facebook.com/share/1JNZKZ2b7k/?mibextid=wwXIfr",
        igLink: "https://www.instagram.com/beldeaan?igsi=MTloODJheTVnZHpxMA%3D%3D&utm_source=qr",
        inLink: "https://ro.linkedin.com/in/ioana-beldean-0b33a5338",
        email: "ioana.beldean@osutcluj.com"
    },
    {
        photo: "/assets/images/images/bce/ZagoniMario.webp",
        lastName: "Zagoni",
        firstName: "Cristopher Mario",
        role: "Coordonator Viitor Inginer",
        fbLink: "https://www.facebook.com/mario.zagoni",
        igLink: "https://www.instagram.com/mario_zagoni/?hl=en",
        email: "mario.zagoni@osutcluj.com"
    }
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
