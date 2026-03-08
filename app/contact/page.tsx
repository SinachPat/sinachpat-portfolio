import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Osinachi Patrick.",
};

const LINKS = [
  {
    label: "Email",
    href: "mailto:hello@osinachi.dev",
    description: "hello@osinachi.dev",
    external: false,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    description: "@osinachipat",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    description: "linkedin.com/in/osinachi",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="container-page pt-16 pb-24">
        <FadeIn>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--text-3)" }}
          >
            Contact
          </p>
          <h1
            className="font-bold tracking-tight mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--text-1)",
            }}
          >
            Let&apos;s talk
          </h1>
          <p
            className="text-base leading-relaxed max-w-md mb-12"
            style={{ color: "var(--text-2)" }}
          >
            Whether you want to collaborate, have a product question, or just
            want to say hi — my inbox is open.
          </p>
        </FadeIn>

        {/* Links */}
        <div className="border-t border-[var(--border)]">
          {LINKS.map((link, i) => (
            <FadeIn key={link.label} delay={i * 60}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between py-5 border-b border-[var(--border)] group transition-colors"
                data-cursor="pointer"
                style={{ color: "var(--text-1)" }}
              >
                <div>
                  <p className="text-base font-medium">{link.label}</p>
                  <p className="text-sm mt-0.5" style={{ color: "var(--text-3)" }}>
                    {link.description}
                  </p>
                </div>
                <span
                  className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: "var(--text-3)" }}
                >
                  ↗
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Resume */}
        <FadeIn delay={240}>
          <div className="mt-12">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--text-3)" }}
            >
              Resume
            </p>
            <a
              href="/resume/osinachi-patrick-resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[var(--border)] text-sm font-medium transition-colors hover:bg-[var(--gray-1)]"
              style={{ color: "var(--text-1)" }}
              data-cursor="pointer"
            >
              Download Resume ↓
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
