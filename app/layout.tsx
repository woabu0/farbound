import type { Metadata, Viewport } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Farbound - Enter a World Beyond Imagination",
  description: "Embark on an epic journey through vast open worlds, master powerful abilities, and forge your legend in the ultimate gaming experience. Play Farbound now!",
  keywords: "gaming, video games, RPG, multiplayer, Farbound, open world, adventure",
  authors: [{ name: "Farbound Team" }],
  creator: "Farbound",
  publisher: "Farbound",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Farbound - Enter a World Beyond Imagination",
    description: "Embark on an epic journey through vast open worlds, master powerful abilities, and forge your legend in the ultimate gaming experience.",
    siteName: "Farbound",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farbound - Enter a World Beyond Imagination",
    description: "Embark on an epic journey through vast open worlds, master powerful abilities, and forge your legend in the ultimate gaming experience.",
  },
  other: {
    "dns-prefetch": "https://fonts.googleapis.com",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${exo2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
