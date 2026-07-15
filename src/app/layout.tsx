import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
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
  title: {
    default: "Toolbox - Free Online Tools for Developers",
    template: "%s - Toolbox",
  },
  description:
    "Free online tools including calculator, JSON formatter, Base64 encode/decode, timestamp converter, URL encode/decode. No registration required, runs entirely in your browser.",
  keywords: [
    "online tools",
    "JSON formatter",
    "base64 encoder",
    "timestamp converter",
    "URL encoder",
    "calculator",
    "developer tools",
    "free online tools",
  ],
  authors: [{ name: "Toolbox" }],
  robots: "index, follow",
  openGraph: {
    title: "Toolbox - Free Online Tools for Developers",
    description:
      "Free online tools for developers. JSON formatter, Base64 encoder, timestamp converter, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {adsenseClientId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        {children}
        <Footer />
      </body>
    </html>
  );
}
