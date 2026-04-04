import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/footer+header/Header";
import Footer from "../components/footer+header/Footer";
import LoadingScreen from "../components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://osut.org"),
  title: {
    default: "OSUT Cluj - Organizația Studenților din UTCN",
    template: "%s | OSUT Cluj",
  },
  description: "Pagina oficială a Organizației Studenților din Universitatea Tehnică din Cluj-Napoca. Reprezentăm interesele studenților și dezvoltăm comunitatea academică.",
  keywords: ["OSUT", "UTCN", "Cluj-Napoca", "studenti", "reprezentare", "voluntariat", "evenimente"],
  authors: [{ name: "OSUT Cluj" }],
  creator: "OSUT Cluj",
  publisher: "OSUT Cluj",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/images/images/Cometa rosie.png",
    apple: "/assets/images/images/Cometa rosie.png",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://osut.org",
    siteName: "OSUT Cluj",
    title: "OSUT Cluj - Organizația Studenților din UTCN",
    description: "Reprezentăm studenții Universității Tehnice din Cluj-Napoca. Află mai multe despre proiectele și inițiativele noastre.",
    images: [
      {
        url: "/assets/images/images/OSUT Color.png",
        width: 1200,
        height: 630,
        alt: "OSUT Cluj Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OSUT Cluj - Organizația Studenților din UTCN",
    description: "Reprezentăm studenții Universității Tehnice din Cluj-Napoca.",
    images: ["/assets/images/images/OSUT Color.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://osut.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-[#121212] text-zinc-100 min-h-screen`}
        suppressHydrationWarning
      >
          <LoadingScreen />
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
      </body>
    </html>
  );
}
