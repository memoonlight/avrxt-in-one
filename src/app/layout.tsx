import type { Metadata } from "next";
import { Inter, Space_Mono, Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "avrxt | Full Stack Developer & Tech Innovator",
  description: "avrxt: Full Stack Developer specializing in React, Node.js, API development, and AI automation. Building secure, scalable, and enterprise-ready web solutions.",
  icons: {
    icon: "https://cdn.avrxt.in/assets/logo-02.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} ${outfit.variable} ${instrumentSerif.variable} font-sans bg-black text-white selection:bg-white/10`}>
        <div className="mesh-gradient" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
