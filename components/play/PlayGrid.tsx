"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { StatusTag } from "@/components/work/StatusTag";
import { Tag } from "@/components/ui/Tag";
import type { PlayItem } from "@/lib/types";

interface PlayGridProps {
  items: PlayItem[];
}

function PlayCard({ item, index }: { item: PlayItem; index: number }) {
  const inner = (
    <div
      className="notion-card group block overflow-hidden border border-[var(--border)]"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Cover image area */}
      <div
        className="w-full aspect-[16/9] overflow-hidden"
        style={{ backgroundColor: "var(--gray-1)" }}
      >
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full relative">
            <span
              className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--text-3)" }}
            >
              {item.category}
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-6">
        {/* Meta row: year + category + status */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className="text-xs tabular-nums"
              style={{ color: "var(--text-3)" }}
            >
              {item.year}
            </span>
            <span style={{ color: "var(--text-3)", fontSize: "4px" }}>●</span>
            <span className="text-xs" style={{ color: "var(--text-3)" }}>
              {item.category}
            </span>
          </div>
          <StatusTag status={item.status} />
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold leading-snug mb-2 transition-colors duration-200 group-hover:text-[var(--accent)]"
          style={{ color: "var(--text-1)" }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: "var(--text-2)" }}
        >
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <FadeIn key={item.title} delay={index * 70}>
      <Link href={`/play/${item.slug}`} className="block" data-cursor="pointer">
        {inner}
      </Link>
    </FadeIn>
  );
}

export function PlayGrid({ items }: PlayGridProps) {
  if (items.length === 0) {
    return (
      <p
        className="text-sm py-12 text-center"
        style={{ color: "var(--text-3)" }}
      >
        Experiments coming soon.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, i) => (
        <PlayCard key={item.title} item={item} index={i} />
      ))}
    </div>
  );
}
