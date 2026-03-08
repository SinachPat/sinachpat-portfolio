import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getWorkBySlug, getWorkSlugs } from "@/lib/mdx";
import { StatusTag } from "@/components/work/StatusTag";
import { Tag } from "@/components/ui/Tag";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getWorkBySlug(slug);
    return { title: meta.title, description: meta.summary };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;

  let data;
  try {
    data = await getWorkBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = data;

  return (
    <main>
      {/* Header */}
      <header className="container-page pt-16 pb-10 border-b border-[var(--border)]">
        {/* Back + breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/"
            className="text-xs transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-3)" }}
          >
            ← Work
          </Link>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--text-3)" }}
          >
            {meta.company}
          </span>
          <span style={{ color: "var(--text-3)", fontSize: "10px" }}>·</span>
          <span className="text-xs" style={{ color: "var(--text-3)" }}>
            {meta.year}
          </span>
          <span style={{ color: "var(--text-3)", fontSize: "10px" }}>·</span>
          <StatusTag status={meta.status} />
        </div>

        {/* Title */}
        <h1
          className="font-bold tracking-tight leading-tight mb-4"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "var(--text-1)",
            maxWidth: "24ch",
          }}
        >
          {meta.title}
        </h1>

        {/* Summary */}
        <p
          className="text-base leading-relaxed mb-6 max-w-xl"
          style={{ color: "var(--text-2)" }}
        >
          {meta.summary}
        </p>

        {/* Tags + meta */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm" style={{ color: "var(--text-3)" }}>
            {meta.role}
          </span>
          <span style={{ color: "var(--text-3)", fontSize: "10px" }}>·</span>
          <span className="text-sm" style={{ color: "var(--text-3)" }}>
            {meta.duration}
          </span>
          {meta.tags.map((tag) => (
            <Tag key={tag} variant="outline">
              {tag}
            </Tag>
          ))}
        </div>

        {/* Metrics */}
        {meta.metrics && meta.metrics.length > 0 && (
          <div
            className="grid gap-px mt-8 rounded-lg overflow-hidden border border-[var(--border)]"
            style={{
              gridTemplateColumns: `repeat(${meta.metrics.length}, 1fr)`,
              backgroundColor: "var(--border)",
            }}
          >
            {meta.metrics.map((m) => (
              <div
                key={m.label}
                className="px-5 py-5 text-center"
                style={{ backgroundColor: "var(--surface)" }}
              >
                <p
                  className="text-xs font-medium uppercase tracking-widest mb-2"
                  style={{ color: "var(--text-3)" }}
                >
                  {m.label}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span
                    className="text-base font-medium tabular-nums"
                    style={{
                      color: "var(--text-3)",
                      textDecoration: "line-through",
                    }}
                  >
                    {m.before}
                  </span>
                  <span style={{ color: "var(--text-3)", fontSize: "12px" }}>
                    →
                  </span>
                  <span
                    className="text-xl font-bold tabular-nums"
                    style={{ color: "var(--accent)" }}
                  >
                    {m.after}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* MDX content */}
      <div className="container-page py-12">
        <div
          className="prose"
          style={{ maxWidth: "65ch" }}
        >
          {content}
        </div>

        {/* Footer links */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex items-center justify-between">
          <Link
            href="/"
            className="text-sm transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-2)" }}
          >
            ← All Work
          </Link>
          {meta.externalUrl && (
            <a
              href={meta.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-2)" }}
            >
              View Live ↗
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
