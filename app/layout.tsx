import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/ui/BackToTopButton";
import AnnouncementBanner from "./components/ui/AnnouncementBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KNIT College - Kamla Nehru Institute of Technology",
  description: "Kamla Nehru Institute of Technology - A premier engineering college providing quality education in technology and innovation.",
  keywords: "KNIT, engineering college, technology, education, Sultanpur",
  authors: [{ name: "KNIT College" }],
  robots: "index, follow",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnnouncementBanner
          id="admission-2025"
          type="announcement"
          title="Admissions Open!"
          message="New Academic Session 2025-26 Admissions are now open. Apply before September 30, 2025."
          actionText="Apply Now"
          actionUrl="/admissions"
          dismissible={true}
          priority="high"
        />
        <Header />
        <main className="min-h-screen pt-[140px]">
          {children}
        </main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
