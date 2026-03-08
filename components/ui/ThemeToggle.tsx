"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function applyTheme(theme: Theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved =
    theme === "system" ? (prefersDark ? "dark" : "light") : theme;
  document.documentElement.setAttribute("data-theme", resolved);
}

const ICONS: Record<Theme, string> = {
  light: "☀",
  dark: "☾",
  system: "◑",
};

const CYCLE: Record<Theme, Theme> = {
  system: "light",
  light: "dark",
  dark: "system",
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    setTheme(stored || "system");
    setMounted(true);
  }, []);

  const handleClick = () => {
    const next = CYCLE[theme];
    setTheme(next);
    if (next === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", next);
    }
    applyTheme(next);
  };

  // Render a stable placeholder until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="w-6 h-6 flex items-center justify-center"
        style={{ opacity: 0 }}
      />
    );
  }

  return (
    <button
      onClick={handleClick}
      aria-label={`Theme: ${theme}. Click to switch.`}
      title={`Theme: ${theme}`}
      className="w-6 h-6 flex items-center justify-center text-sm select-none rounded transition-colors hover:bg-[var(--gray-1)]"
      style={{ color: "var(--text-2)" }}
    >
      {ICONS[theme]}
    </button>
  );
}
