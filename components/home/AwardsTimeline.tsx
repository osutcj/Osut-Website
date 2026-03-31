import React from "react";

const AWARDS = [
  { 
    year: "2025", 
    event: "Gala Tineretului din România", 
    prizes: [
      "Premiul 1 - PoliHack V.16 - Inovație pentru comunitate"
    ], 
    color: "bg-red-500" 
  },
  { 
    year: "2025", 
    event: "Gala Tineretului Clujean", 
    prizes: [
      "Premiul de popularitate - Festivalul Universității Tehnice",
      "Premiul 3 - Student Network Cluj - Incluziune și diversitate",
      "Mențiune specială - PoliHack V.16 - Educație"
    ], 
    color: "bg-red-600" 
  },
  {
    year: "2024",
    event: "Gala Tineretului din România",
    prizes: [
      "Premiul 2 - PoliHack - Antreprenoriat și inovare"
    ],
    color: "bg-red-500"
  },
  {
    year: "2024",
    event: "Gala Tineretului Clujean",
    prizes: [
      "Premiul 3 - PoliSport - Sănătatea și Bunăstarea Tinerilor",
      "Premiul 2 - Debattle - Educație"
    ],
    color: "bg-red-600"
  },
  {
    year: "2023",
    event: "Gala Tineretului din România",
    prizes: [
      "Premiul 3 - Engineering Summer University - Proiectul Studențesc al anului 2023"
    ],
    color: "bg-red-500"
  },
  {
    year: "2023",
    event: "Gala Tineretului Clujean",
    prizes: [
      "Premiul de popularitate - Zilele Universității Tehnice",
      "Premiul Pentru cea mai bună reprezentare a culturii organizaționale în cadrul Galei",
      "Premiul 2 - PoliArt - Cultură",
      "Premiul 3 - PoliSport - Sănătatea și Bunăstarea Tinerilor"
    ],
    color: "bg-red-600"
  },
  {
    year: "2022",
    event: "Gala Tineretului Clujean",
    prizes: [
      "Premiul 3 - PoliHack - Formare Profesională",
      "Premiul 2 - Engineering Summer University - Inițiative pentru mediul rural",
      "Premiul de popularitate - Crosul UT"
    ],
    color: "bg-red-500"
  },
  {
    year: "2020",
    event: "Gala Tineretului Clujean",
    prizes: [
      "Premiul 1 - EUt+ - Tineri conectați la Europa",
      "Premiul 3 - Viitor Inginer - Tinerii și piața muncii",
      "Premiul 3 - Debattle - Participarea tinerilor în comunitate",
      "Premiul pentru cea mai buna tranziție de la offline la online - PoliArt",
      "Premiul de popularitate - Viitor Inginer"
    ],
    color: "bg-red-600"
  },
  {
    year: "2019",
    event: "Gala Tineretului Clujean",
    prizes: [
      "Premiul 2 - InfoTech - Antreprenoriat și angajare",
      "Premiul de popularitate - Engineering Summer University"
    ],
    color: "bg-red-500"
  }
];

export default function AwardsTimeline() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white px-6 w-full relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Timeline <span className="text-red-600">Premii</span></h2>
          <p className="text-zinc-600 dark:text-gray-400 mt-4 text-lg">O scurtă recapitulare a excelenței noastre (2019-2025)</p>
        </div>
        
        <div className="relative border-l-4 border-zinc-300 dark:border-zinc-800 ml-3 md:ml-0 md:mx-auto md:w-full">
          {AWARDS.map((award, index) => (
            <div key={index} className="mb-10 ml-8 md:ml-0 relative group">
              {/* Timeline Dot */}
              <div className={`absolute w-6 h-6 rounded-full -left-[40px] md:left-1/2 md:-ml-3 top-1 shadow-lg shadow-red-500/50 border-4 border-white dark:border-black ${award.color} z-20`}></div>
              
              {/* Content Box */}
              <div className={`flex flex-col md:flex-row items-center justify-between w-full md:px-0`}>
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:ml-auto'}`}>
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl hover:border-red-500/50 transition-colors shadow-xl shadow-zinc-200 dark:shadow-black">
                    <div className="flex items-baseline gap-2 mb-2 justify-start md:justify-[inherit]">
                      <span className="text-red-500 font-bold text-3xl tracking-widest">{award.year}</span>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wider">{award.event}</h3>
                    </div>
                    
                    <ul className={`mt-4 space-y-2 flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      {award.prizes.map((prize, pIndex) => (
                        <li key={pIndex} className="text-zinc-700 dark:text-gray-300 text-sm md:text-base flex items-start gap-2 max-w-sm text-left">
                          <span className="text-red-600 mt-1 flex-shrink-0">&bull;</span>
                          <span className="leading-snug">{prize}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
