import type { Metadata } from "next";
import { Instrument_Serif, Inter, Source_Serif_4, PT_Serif, Barlow, Space_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/providers";

const instrumentSerif = Instrument_Serif({
  // variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400"
});

const inter = Inter({
  // variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Add weights as needed
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Add weights as needed
});

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "BlockVault",
  description:
    "Anchor documents and prove authencity by securing docs via blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
