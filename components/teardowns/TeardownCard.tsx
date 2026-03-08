import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import { formatDate } from "@/lib/utils";
import type { TeardownFrontmatter } from "@/lib/types";

interface TeardownCardProps {
  post: TeardownFrontmatter;
}

export function TeardownCard({ post }: TeardownCardProps) {
  return (
    <Link
      href={`/teardowns/${post.slug}`}
      className="block py-6 border-b border-[var(--border)] group"
      data-cursor="pointer"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        {/* Left: meta */}
        <div className="flex-1 min-w-0">
          {/* Company + category */}
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--text-3)" }}
            >
              {post.company}
            </span>
            <span style={{ color: "var(--text-3)", fontSize: "10px" }}>·</span>
            <Tag>{post.category}</Tag>
          </div>

          {/* Title */}
          <h3
            className="text-base font-medium mb-2 transition-colors group-hover:text-[var(--accent)]"
            style={{ color: "var(--text-1)" }}
          >
            {post.title}
          </h3>

          {/* TL;DR */}
          <p
            className="text-sm leading-relaxed line-clamp-2 max-w-lg"
            style={{ color: "var(--text-2)" }}
          >
            {post.tldr}
          </p>
        </div>

        {/* Right: date + reading time */}
        <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 shrink-0">
          <span className="text-xs" style={{ color: "var(--text-3)" }}>
            {formatDate(post.publishedAt, true)}
          </span>
          {post.readingTime && (
            <span className="text-xs" style={{ color: "var(--text-3)" }}>
              {post.readingTime}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
