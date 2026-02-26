import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustenabilitate",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
