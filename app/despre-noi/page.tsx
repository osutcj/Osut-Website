"use client";

import React from "react";
import Link from "next/link";
import "./despre-noi.css";

export default function DespreNoi() {
    return (
        <main className="main-wrap bg-[#121212] text-white font-sans min-h-screen pt-10 pb-10">
            <div className="img-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/images/images/despre.png" className="img-center" alt="Despre Noi" />
            </div>

            <div className="container mt-12">
                <h2 className="text-outline" style={{ fontSize: "70px" }}>
                    VALORILE<span className="despre-highlight" style={{ fontSize: "70px" }}>ORGANIZAȚIEI</span>
                </h2>
            </div>

            <table className="table-fixed">
                <tbody>
                    <tr>
                        <td>
                            <div className="gradient-box-r">RESPECT</div>
                        </td>
                        <td>
                            <div className="gradient-box-r">AMBIȚIE</div>
                        </td>
                        <td>
                            <div className="gradient-box-r">ONOARE</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="gradient-box-l">PRIETENIE</div>
                        </td>
                        <td>
                            <div className="gradient-box-l">CREATIVITATE</div>
                        </td>
                        <td>
                            <div className="gradient-box-l">INIȚIATIVĂ</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="gradient-box-r">PERFORMANȚĂ</div>
                        </td>
                        <td>
                            <div className="gradient-box-r">RESPONSABILITATE</div>
                        </td>
                        <td>
                            <div className="gradient-box-r">ADAPTABILITATE</div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="container mt-16">
                <h2 className="text-outline" style={{ fontSize: "70px" }}>
                    BIROUL DE<span className="despre-highlight" style={{ fontSize: "70px" }}>CONDUCERE</span>
                </h2>
            </div>

            <table className="table-fixed">
                <tbody>
                    <tr>
                        <td>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/images/images/bc/BCBAANNER.jpg" alt="BC Banner" />
                        </td>
                        <td>
                            <p style={{ textAlign: "justify" }} className="text-[#d1d0d0]">
                                Biroul de Conducere al OSUT Cluj reprezintă structura principală de coordonare
                                a activității organizației. Aceștia sunt aleși de către Adunarea Generală OSUT Cluj pe durata de un an, cu
                                responsabilitatea de a gestiona proiectele organizației și inițiativele de reprezentare studențească ale
                                acesteia.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap", marginTop: "1rem" }}>
                <h3 style={{ margin: 0 }}><u><Link href="/biroul-de-conducere/">See more</Link></u></h3>
                <Link href="/biroul-de-conducere/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/images/images/newwindow.png" className="external-link-icon" alt="icon" />
                </Link>
            </div>

            <div className="container mt-16">
                <h2 className="text-outline" style={{ fontSize: "70px" }}>
                    BIROUL DE<span className="despre-highlight" style={{ fontSize: "70px" }}>CONDUCERE EXTINS</span>
                </h2>
            </div>

            <table className="table-fixed">
                <tbody>
                    <tr>
                        <td>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/images/images/bc/BCEBANNER.jpg" alt="BCE Banner" />
                        </td>
                        <td>
                            <p style={{ textAlign: "justify" }} className="text-[#d1d0d0]">
                                Biroul de Conducere Extins al OSUT Cluj este compus din coordonatorii
                                departamentelor organizației, clasificate în servicii, direcții și proiecte. Departamentele sunt structuri
                                de voluntari cu obiective bine delimitate, iar membrii BCE sunt principalii actori ai activității OSUT Cluj,
                                în strânsă legătură cu responsabilii din Biroul de Conducere.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap", marginTop: "1rem" }}>
                <h3 style={{ margin: 0 }}><u><Link href="/biroul-de-conducere-extins/">See more</Link></u></h3>
                <Link href="/biroul-de-conducere-extins/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/images/images/newwindow.png" className="external-link-icon" alt="icon" />
                </Link>
            </div>

            <div className="container mt-24">
                <h2 className="text-outline" style={{ fontSize: "70px" }}>
                    Raportul de<span className="despre-highlight" style={{ fontSize: "70px" }}>activitate</span>
                </h2>
            </div>

            <div className="button-container">
                <a href="/assets/pdf/Raportul organizatiei semestrul 1 2024-2025.pdf" download className="button-download">
                    <i className="fas fa-download"></i> DOWNLOAD HERE
                </a>
            </div>

            <div className="container mt-16 mb-8">
                <h2 className="text-outline" style={{ fontSize: "70px" }}>
                    MEMBRII<span className="despre-highlight" style={{ fontSize: "70px" }}>ÎN</span>
                </h2>
            </div>

            <div className="partners-logos text-center mb-16">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/images/images/anosr.png" alt="ANOSR" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/images/images/ftc.png" alt="FTC" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/images/images/cos.png" alt="COS" />
            </div>
        </main>
    );
}
