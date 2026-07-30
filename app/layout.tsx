import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { LightboxProvider } from "@/components/Lightbox";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ammar Tyo Pasaribu — Portfolio",
  description:
    "Personal portfolio of Ammar Tyo Pasaribu — Information Systems Student at Hasanuddin University passionate about Data Science & Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <LanguageProvider>
          <LightboxProvider>{children}</LightboxProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
