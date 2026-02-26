import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Butonul Roșu",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
