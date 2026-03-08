export interface WorkFrontmatter {
  title: string;
  slug: string;
  company: string;
  role: string;
  year: number;
  duration: string;
  status: "live" | "in-progress" | "archived" | "shipped";
  tags: string[];
  coverImage: string;
  summary: string;
  metrics?: { label: string; before: string; after: string }[];
  externalUrl?: string;
  featured: boolean;
  order: number;
  publishedAt: string;
}

export interface TeardownFrontmatter {
  title: string;
  slug: string;
  company: string;
  category: "UX Analysis" | "Growth" | "Pricing" | "Positioning" | "Retention";
  tldr: string;
  coverImage?: string;
  publishedAt: string;
  readingTime?: string;
  featured: boolean;
  tags: string[];
}

export interface PlayItem {
  title: string;
  description: string;
  tags: string[];
  year: number;
  status: "live" | "in-progress" | "archived" | "shipped";
  category: string; // e.g. "Tool", "Prototype", "Design", "App"
  url?: string;
  image?: string;
}
