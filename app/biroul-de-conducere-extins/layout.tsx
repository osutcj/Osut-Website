import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BCE",
};

export default function BCELayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
