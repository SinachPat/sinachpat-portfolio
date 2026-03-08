import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b border-[var(--border)]"
      style={{
        backgroundColor: "var(--header-bg)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="container-page flex items-center justify-between h-14">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition-colors hover:text-[var(--accent)]"
          style={{ color: "var(--text-1)" }}
          data-cursor="pointer"
        >
          OP
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-5 sm:gap-6">
          <div className="hidden sm:flex items-center gap-5 sm:gap-6">
            <NavLinks />
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/resume/osinachi-patrick-resume.pdf"
              download
              className="hidden sm:inline-flex items-center text-xs px-3 py-1.5 rounded border border-[var(--border)] font-medium transition-colors hover:bg-[var(--gray-1)]"
              style={{ color: "var(--text-1)" }}
              data-cursor="pointer"
            >
              Resume ↗
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
