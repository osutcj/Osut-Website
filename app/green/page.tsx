import { Metadata } from "next";
import GreenContent from "./GreenContent";

export const metadata: Metadata = {
  title: "Sustenabilitate",
  description: "Angajamentul OSUT Cluj pentru un viitor mai verde. Află mai multe despre inițiativele noastre de sustenabilitate în cadrul proiectelor Crosul UT, PoliHack, ESU și InfoTech.",
  openGraph: {
    title: "Sustenabilitate | OSUT Cluj",
    description: "Construim un mediu sustenabil pentru studenții UTCN prin proiecte verzi și responsabilitate față de mediu.",
  },
};

export default function SustenabilitatePage() {
  return <GreenContent />;
}
