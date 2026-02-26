"use client";

import React from "react";
import "./donat.css";

export default function Donat() {
    return (
        <main className="main-wrap bg-[#121212] text-white font-sans min-h-screen flex flex-col items-center justify-center pb-10 pt-10">
            <div className="donation-container">
                <h1>
                    HELP US <br /> <span className="highlight-35">DO MORE</span>
                </h1>
                <h2>IBAN: RO36BTRL01301205950852XX</h2>
                <p>Organizația Studenților din Universitatea Tehnică din Cluj-Napoca</p>

                <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
                    DONEAZĂ <span className="highlight-35">3,5%</span>
                </h2>
                <p>Chiar tu ne poți ajuta, donând 3.5% din impozitul pe venit către organizația noastră.</p>

                <h2 style={{ marginTop: "2rem" }}>Cum poți face acest lucru?</h2>
                <p>
                    <b style={{ color: "red" }}>1. Completarea formularului:</b>
                    <br />
                    Pentru venituri din salarii sau pensii: Formularul 230 (Cerere privind destinația sumei reprezentând până la 3.5% din impozitul anual pe veniturile din salarii și din pensii). Pentru alte venituri: Declarația unică. În formular se completează datele personale (nume, CNP, adresă) și datele organizației beneficiare.
                </p>
                <br />
                <p>
                    <b style={{ color: "red" }}>2. Depunerea formularului:</b>
                    <br />
                    Formularul se poate depune în format fizic la administrația financiară (ANAF) de care aparțineți. Se poate trimite prin poștă cu confirmare de primire. Se poate depune online, prin platforma SPV (Spațiul Privat Virtual), dacă aveți un cont activ.
                </p>

                <p style={{ marginTop: "1.5rem" }}>
                    <b>Campania începe din 1 ianuarie 2026.</b>
                </p>

                <a
                    href="https://formular230.ro/organizatia-studentilor-din-universitatea-tehnica-din-cluj-napoca"
                    className="donation-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    DONEAZĂ ACUM
                </a>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/images/images/cometa2.png" alt="Cometă" className="comet-image" />
            </div>
        </main>
    );
}
