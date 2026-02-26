"use client";

import React from "react";
import "./cdos.css";

const DocumentCard = ({ title, subTitle, downloadLink }: { title: string, subTitle?: string, downloadLink: string }) => (
    <div className="reprez">
        <div className="cdos-container">
            {subTitle ? (
                <>
                    <h4 className="cdos-text-outline mt-1">{title}</h4>
                    <h4 className="cdos-text-outline">{subTitle}</h4>
                </>
            ) : (
                <h2 className="cdos-text-outline">{title}</h2>
            )}
        </div>
        <div className="button-container">
            <a href={downloadLink} download className="button-download">
                <i className="fas fa-download"></i> DOWNLOAD HERE
            </a>
        </div>
    </div>
);

const DOCUMENTS = [
    { title: "CARTA", downloadLink: "/assets/pdf/carta.pdf" },
    { title: "ECTS", downloadLink: "/assets/pdf/ects.pdf" },
    { title: "BURSE", downloadLink: "/assets/pdf/burse.pdf" },
    { title: "TAXE", downloadLink: "/assets/pdf/taxe.pdf" },
    { title: "CAMINE CANTINE", downloadLink: "/assets/pdf/caminecantine.pdf" },
    { title: "CDOS", downloadLink: "/assets/pdf/CDOS.pdf" },
    { title: "Ghidul Studentului", subTitle: "licenta", downloadLink: "/assets/pdf/ghid_student_licenta.pdf" },
    { title: "Ghidul Studentului", subTitle: "master", downloadLink: "/assets/pdf/ghid_student_master.pdf" }
];

export default function DocumenteUtile() {
    return (
        <main className="main-wrap bg-[#121212] text-white font-sans min-h-screen py-10 flex flex-col justify-center">
            <div className="cdos-container" style={{ marginTop: "5vh", marginBottom: "3vh" }}>
                <h2 className="cdos-text-outline">Documentele utile</h2>
            </div>
            
            <div className="scroll-container">
                {DOCUMENTS.map((doc, i) => (
                    <DocumentCard key={i} {...doc} />
                ))}
            </div>
        </main>
    );
}
