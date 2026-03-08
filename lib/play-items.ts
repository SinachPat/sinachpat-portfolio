import type { PlayItem } from "@/lib/types";

export const PLAY_ITEMS: PlayItem[] = [
  {
    title: "Portfolio v2",
    slug: "portfolio-v2",
    description:
      "This site. Built with Next.js 16, Tailwind CSS v4, and MDX. Design-system-first — every token, component, and animation hand-rolled. A learning exercise in building with precision.",
    tags: ["Next.js", "Tailwind v4", "MDX", "Design System"],
    year: 2024,
    status: "live",
    category: "Site",
    url: "https://sinachpat-portfolio.vercel.app",
  },
  {
    title: "Activation Simulator",
    slug: "activation-simulator",
    description:
      "An interactive prototype for mapping user activation flows. Drag-and-drop steps, mark friction points, and identify the 'aha moment'. Built to think through onboarding problems visually.",
    tags: ["Prototype", "React", "Product Design"],
    year: 2024,
    status: "in-progress",
    category: "Prototype",
  },
  {
    title: "Feature Scorer",
    slug: "feature-scorer",
    description:
      "Lightweight feature prioritisation using impact × effort scoring. Add candidates, adjust weights, drag to reorder, export to CSV. No spreadsheet required.",
    tags: ["Product Tool", "TypeScript", "React"],
    year: 2024,
    status: "shipped",
    category: "Tool",
  },
  {
    title: "Type Scale Playground",
    slug: "type-scale-playground",
    description:
      "Adjust base size, modular ratio, and font weight in real time and watch your typographic hierarchy respond. Generates a ready-to-copy CSS custom property file.",
    tags: ["Typography", "CSS", "Design Tool"],
    year: 2023,
    status: "shipped",
    category: "Design",
  },
  {
    title: "Onboarding Annotator",
    slug: "onboarding-annotator",
    description:
      "Upload screenshots of any app's onboarding flow and annotate friction points, clarity gaps, and delight moments directly on the canvas. Lightweight teardown tooling.",
    tags: ["Canvas API", "TypeScript", "UX Research"],
    year: 2024,
    status: "in-progress",
    category: "Tool",
  },
  {
    title: "Token Studio",
    slug: "token-studio",
    description:
      "Paste in a design token JSON file and explore your entire palette, type scale, and spacing system rendered visually. Built to close the gap between design and code token reviews.",
    tags: ["Design Tokens", "TypeScript", "Dev Tool"],
    year: 2023,
    status: "archived",
    category: "Tool",
  },
];
