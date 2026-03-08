import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { WorkFrontmatter, TeardownFrontmatter, PlayItem } from "./types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

// ─── Work / Case Studies ──────────────────────────────────────────────────────

export async function getWorkPosts(): Promise<WorkFrontmatter[]> {
  const dir = path.join(CONTENT_ROOT, "work");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return data as WorkFrontmatter;
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export async function getWorkBySlug(slug: string) {
  const filePath = path.join(CONTENT_ROOT, "work", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  const { content: compiled } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return { meta: data as WorkFrontmatter, content: compiled };
}

export function getWorkSlugs(): string[] {
  const dir = path.join(CONTENT_ROOT, "work");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

// ─── Teardowns ────────────────────────────────────────────────────────────────

export async function getTeardownPosts(): Promise<TeardownFrontmatter[]> {
  const dir = path.join(CONTENT_ROOT, "teardowns");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return data as TeardownFrontmatter;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function getTeardownBySlug(slug: string) {
  const filePath = path.join(CONTENT_ROOT, "teardowns", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  const { content: compiled } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return { meta: data as TeardownFrontmatter, content: compiled };
}

export function getTeardownSlugs(): string[] {
  const dir = path.join(CONTENT_ROOT, "teardowns");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

// ─── Play ─────────────────────────────────────────────────────────────────────

export async function getPlayPosts(): Promise<PlayItem[]> {
  const dir = path.join(CONTENT_ROOT, "play");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return data as PlayItem;
    })
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

export async function getPlayBySlug(slug: string) {
  const filePath = path.join(CONTENT_ROOT, "play", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  const { content: compiled } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return { meta: data as PlayItem, content: compiled };
}

export function getPlaySlugs(): string[] {
  const dir = path.join(CONTENT_ROOT, "play");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
