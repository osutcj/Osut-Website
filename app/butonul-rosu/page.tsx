"use client";

import React from "react";
import "./butonul-rosu.css";

export default function ButonulRosu() {
    return (
        <main className="main-wrap bg-[#121212] text-[#d1d0d0] font-sans flex flex-col items-center justify-center min-h-screen">
            <div className="br-container">
                <div className="text-column">
                    <h1>LET US</h1>
                    <h2>HELP YOU</h2>
                    <p>Ai o problemă în facultate pe care nu știi cum să o rezolvi? Poate un profesor îți încalcă un drept, poate există probleme în căminul în care ești cazat sau poate nu știi cum să procedezi atunci când ai de făcut o sesizare?</p>
                    <p>OSUT Cluj vine în ajutorul tău cu Butonul Roșu, un mecanism simplu prin care ne poți sesiza rapid orice problemă pe care o întâmpini!</p>
                    <p>Fă-ți vocea auzită! Împreună, luptăm pentru studenți!</p>
                    <p>#OSUTCJ #weAreUTCN #ButonulRosu</p>
                </div>

                <div className="form-container">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSehM0INGphPT-FWfki5BWW9x4OVpqT_oLeXTv_jTy-jH1RDZg/viewform?embedded=true"
                        title="Butonul Roșu Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </main>
    );
}
