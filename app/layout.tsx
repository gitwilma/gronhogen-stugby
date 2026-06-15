import type { Metadata } from "next";
import { Cormorant_Garamond, PT_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  variable: "--font-pt-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Grönhögens Stugby",
  description: "Stugor på södra Öland nära natur, hav och upplevelser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${cormorant.variable} ${ptSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}