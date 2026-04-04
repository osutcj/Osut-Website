import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ai întrebări? Contactează-ne prin e-mail, telefon sau vizitează-ne la sediul nostru din Cluj-Napoca. Suntem aici să te ajutăm!",
  openGraph: {
    title: "Contact | OSUT Cluj",
    description: "Vrei să intri în legătură cu noi? Găsești aici toate detaliile de contact ale Organizației Studenților din UTCN.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
