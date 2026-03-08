import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merges Tailwind classes safely, resolving conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats an ISO date string to "Month Year" or "Month Day, Year". */
export function formatDate(dateStr: string, short = false): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: short ? "short" : "long",
    ...(short ? {} : { day: "numeric" }),
  });
}

/** Converts a string to a URL-safe slug. */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .trim();
}
