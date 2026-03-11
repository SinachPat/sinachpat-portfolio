import { Tag } from "@/components/ui/Tag";
import { formatDate } from "@/lib/utils";
import type { TeardownFrontmatter } from "@/lib/types";

interface TeardownHeaderProps {
  meta: TeardownFrontmatter;
}

export function TeardownHeader({ meta }: TeardownHeaderProps) {
  return (
    <header className="container-page pt-16 pb-10 border-b border-[var(--border)]">
      {/* Breadcrumb */}
      <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--text-3)" }}>
        Teardown · {meta.company}
      </p>

      {/* Title */}
      <h1
        className="font-bold tracking-tight leading-tight mb-6"
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          color: "var(--text-1)",
          maxWidth: "36ch",
        }}
      >
        {meta.title}
      </h1>

      {/* TL;DR callout */}
      <div
        className="p-4 mb-8 border-l-4"
        style={{
          backgroundColor: "var(--gray-1)",
          borderLeftColor: "var(--accent)",
          borderRadius: "6px",
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--accent)" }}>
          TL;DR
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
          {meta.tldr}
        </p>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-sm" style={{ color: "var(--text-3)" }}>
          {formatDate(meta.publishedAt)}
        </span>
        {meta.readingTime && (
          <span className="text-sm" style={{ color: "var(--text-3)" }}>
            {meta.readingTime}
          </span>
        )}
        <Tag>{meta.category}</Tag>
        {meta.tags.map((tag) => (
          <Tag key={tag} variant="outline">
            {tag}
          </Tag>
        ))}
      </div>
    </header>
  );
}
