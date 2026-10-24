import type { Metadata } from "next";
import { Pixelify_Sans, Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import "./brutal.css";
import "./hero.css";
import "./poster.css";
import "./extras.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { THEME_INIT_SCRIPT } from "@/lib/theme/themeStore";
import { LOADER_INIT_SCRIPT } from "@/components/brutal/BrickLoader";
import Navbar from "@/components/brutal/Navbar";
import Footer from "@/components/brutal/Footer";
import ToTop from "@/components/brutal/ToTop";
import { ChatWidget } from "@/components/ChatWidget";

const pixel = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const work = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Ammar Tyo Pasaribu — Portfolio",
    template: "%s — Ammar Tyo Pasaribu",
  },
  description:
    "Portfolio of Ammar Tyo Pasaribu — Full Stack Developer combining web technology with AI and data to build intelligent, real-world solutions.",
  openGraph: {
    title: "Ammar Tyo Pasaribu — Portfolio",
    description:
      "Full Stack Developer combining web technology with AI and data to build intelligent, real-world solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-theme="light"
      suppressHydrationWarning
      className={`${pixel.variable} ${jakarta.variable} ${work.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: LOADER_INIT_SCRIPT }} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <ToTop />
            <ChatWidget />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
