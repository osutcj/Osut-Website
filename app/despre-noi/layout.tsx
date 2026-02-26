import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Noi",
};

export default function DespreNoiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
