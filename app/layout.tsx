import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Osinachi Patrick",
    template: "%s — Osinachi Patrick",
  },
  description:
    "Product guy who builds, designs and engineers. Exploring the intersection of product strategy, design, and engineering.",
  authors: [{ name: "Osinachi Patrick" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Osinachi Patrick",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
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
