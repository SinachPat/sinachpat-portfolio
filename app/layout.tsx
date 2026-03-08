import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/*
         * Anti-FOUC script: runs synchronously before paint.
         * Reads localStorage theme preference and sets data-theme on <html>
         * before React hydrates, preventing flash of wrong color scheme.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.setAttribute('data-theme',t||(d?'dark':'light'));}catch(e){}})();`,
          }}
        />
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
