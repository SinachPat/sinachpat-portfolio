"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  {
    href: "/",
    label: "Work",
    match: (p: string) => p === "/" || p.startsWith("/work"),
  },
  {
    href: "/teardowns",
    label: "Teardowns",
    match: (p: string) => p.startsWith("/teardowns"),
  },
  // Hidden — uncomment to show Playground in nav
  // { href: "/play", label: "Playground", match: (p: string) => p.startsWith("/play") },
  {
    href: "/about",
    label: "About",
    match: (p: string) => p.startsWith("/about"),
  },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Only render portal after hydration
  useEffect(() => { setMounted(true); }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock/unlock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Hamburger button — visible only on mobile */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] rounded"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        data-cursor="pointer"
      >
        <motion.span
          className="block h-[1.5px] w-5 origin-center rounded-full"
          style={{ backgroundColor: "var(--text-1)" }}
          animate={isOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        />
        <motion.span
          className="block h-[1.5px] w-5 rounded-full"
          style={{ backgroundColor: "var(--text-1)" }}
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.15 }}
        />
        <motion.span
          className="block h-[1.5px] w-5 origin-center rounded-full"
          style={{ backgroundColor: "var(--text-1)" }}
          animate={isOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        />
      </button>

      {/* Full-screen overlay — rendered via portal to escape Header's backdrop-filter stacking context */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-[999] flex flex-col"
              style={{ backgroundColor: "var(--bg)" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Top bar inside overlay — mirrors Header layout */}
              <div
                className="flex items-center justify-between h-14 px-5 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <Link
                  href="/"
                  className="text-sm font-semibold tracking-tight"
                  style={{ color: "var(--text-1)" }}
                  onClick={() => setIsOpen(false)}
                >
                  OP
                </Link>
                {/* Close button (X) */}
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
                  data-cursor="pointer"
                >
                  <span
                    className="block h-[1.5px] w-5 origin-center rounded-full rotate-45 translate-y-[3.25px]"
                    style={{ backgroundColor: "var(--text-1)" }}
                  />
                  <span
                    className="block h-[1.5px] w-5 origin-center rounded-full -rotate-45 -translate-y-[3.25px]"
                    style={{ backgroundColor: "var(--text-1)" }}
                  />
                </button>
              </div>

              {/* Nav links — vertically centred in remaining space */}
              <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
                {links.map((link, i) => {
                  const active = link.match(pathname);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.06 + i * 0.055,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "block py-3 text-3xl font-semibold tracking-tight transition-colors",
                          active
                            ? "text-[var(--accent)]"
                            : "text-[var(--text-1)] hover:text-[var(--accent)]"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom row — Resume + divider */}
              <motion.div
                className="px-8 pb-10 pt-6 border-t"
                style={{ borderColor: "var(--border)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.25 }}
              >
                <a
                  href="/resume/osinachi-patrick-resume.pdf"
                  download
                  className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--text-2)" }}
                  onClick={() => setIsOpen(false)}
                >
                  Resume ↗
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
