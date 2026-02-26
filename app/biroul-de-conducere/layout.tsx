import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BC",
};

export default function BCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
