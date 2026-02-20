import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Optimus | Integration IA en Entreprise",
  description:
    "Optimus accompagne les entreprises dans leur transformation par l'intelligence artificielle. Automatisation, agents IA, workflows intelligents.",
  keywords: [
    "intelligence artificielle",
    "IA entreprise",
    "automatisation",
    "agents IA",
    "Claude Code",
    "consultant IA",
    "transformation digitale",
  ],
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Optimus | Integration IA en Entreprise",
    description:
      "Automatisation, agents IA, workflows intelligents - nous transformons votre business avec l'IA.",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
