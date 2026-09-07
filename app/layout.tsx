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
  metadataBase: new URL("https://gronhogensuthyrning.se"),

  title: {
    default: "Grönhögens Uthyrning | Grönhögens Stugby på södra Öland",
    template: "%s | Grönhögens Uthyrning",
  },

  description:
    "Grönhögens Uthyrning erbjuder boende i Grönhögen på södra Öland, inklusive Grönhögens Stugby med 11 stugor, lägenhet och camping nära hav, natur och utflyktsmål.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Grönhögens Uthyrning | Grönhögens Stugby på södra Öland",
    description:
      "Boende i Grönhögen på södra Öland. Grönhögens Stugby med 11 stugor, lägenhet och camping nära hav, natur och upplevelser.",
    url: "/",
    siteName: "Grönhögens Uthyrning",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/assets/gronhogen-og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Grönhögens Uthyrning och Grönhögens Stugby på södra Öland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Grönhögens Uthyrning | Grönhögens Stugby",
    description: "Stugor, lägenhet och camping i Grönhögen på södra Öland.",
    images: ["/assets/gronhogen-og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/assets/gronhogen-favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/assets/gronhogen-favicon.svg",
    apple: "/assets/gronhogen-apple-touch-icon.png",
  },
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
