"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  {
    href: "/play",
    label: "Play",
    match: (p: string) => p.startsWith("/play"),
  },
  {
    href: "/about",
    label: "About",
    match: (p: string) => p.startsWith("/about"),
  },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const active = link.match(pathname);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm transition-colors",
              active
                ? "text-[var(--text-1)] font-medium"
                : "text-[var(--text-2)] hover:text-[var(--text-1)]"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
