import type { Metadata } from "next";
import {
  Inter,
  Instrument_Serif,
  Fraunces,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "SkillMaxxing — Master any skill, faster.",
  description:
    "AI-built lesson plans that turn 20 minutes a day into something real, shipped.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body
        style={{
          fontFamily:
            "var(--font-inter), -apple-system, system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
