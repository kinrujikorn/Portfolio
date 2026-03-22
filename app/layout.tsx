import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ui/ThemeProvider";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kin.dev"),
  title: {
    default: "Kin | Full Stack Developer",
    template: "%s | kin.dev",
  },
  description:
    "Portfolio of Rujikorn Rujitanont (Kin) - Full Stack Developer & Software Engineer",
  keywords: ["full stack developer", "software engineer", "react", "next.js", "flutter", "portfolio"],
  authors: [{ name: "Rujikorn Rujitanont" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Kin | Full Stack Developer",
    description:
      "Portfolio of Rujikorn Rujitanont (Kin) - Full Stack Developer & Software Engineer",
    images: ["/images/Profile.jpg"],
    siteName: "kin.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
