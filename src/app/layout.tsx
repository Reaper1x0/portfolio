import type { Metadata } from "next";
import { Geist, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const headlineFont = Hanken_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-label-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Musa B. Kashif — Case Study Portfolio",
  description:
    "Minimal, high-fidelity portfolio with case studies and AI engineering work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headlineFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-cyan/30">{children}</body>
    </html>
  );
}
