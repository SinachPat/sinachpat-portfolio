import Link from "next/link";
import { NavLinks } from "./NavLinks";
// import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";

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
          PRODUCT DESIGNER & BUILDER
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3 sm:gap-5">
          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-5 sm:gap-6">
            <NavLinks />
          </div>

          <div className="flex items-center gap-3">
            {/* <ThemeToggle /> */}
            {/* Experience page — desktop only */}
            <Link
              href="/experience"
              className="hidden sm:inline-flex btn-notion-primary"
              data-cursor="pointer"
            >
              Experience ↗
            </Link>
          </div>

          {/* Mobile hamburger */}
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}
