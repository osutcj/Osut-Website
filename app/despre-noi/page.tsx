import { Metadata } from "next";
import AboutUsContent from "./AboutUsContent";

export const metadata: Metadata = {
  title: "Despre Noi",
  description: "Află mai multe despre misiunea, valorile și echipa OSUT Cluj. Suntem aici pentru a reprezenta și sprijini studenții UTCN.",
  openGraph: {
    title: "Despre Noi | OSUT Cluj",
    description: "Misiunea, valorile și echipa din spatele celei mai mari organizații studențești din UTCN.",
  },
};

export default function DespreNoiPage() {
  return <AboutUsContent />;
}
