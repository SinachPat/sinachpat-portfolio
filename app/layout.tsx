import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

const BASE_URL = "https://sinachpat-portfolio.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Osinachi Patrick",
    template: "%s — Osinachi Patrick",
  },
  description:
    "Product guy who builds, designs and engineers. Exploring the intersection of product strategy, design, and engineering.",
  authors: [{ name: "Osinachi Patrick" }],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Osinachi Patrick",
    url: BASE_URL,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Osinachi Patrick — Product guy who builds, designs and engineers.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        {/* Preconnect for Loom embeds — saves ~150ms DNS+TCP on first embed */}
        <link rel="preconnect" href="https://www.loom.com" />
        <link rel="dns-prefetch" href="https://cdn.loom.com" />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col"
        style={{ backgroundColor: "var(--bg)", color: "var(--text-1)" }}
      >
        <CustomCursor />
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
