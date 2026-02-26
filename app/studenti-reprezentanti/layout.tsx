import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studenți Reprezentanți",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
