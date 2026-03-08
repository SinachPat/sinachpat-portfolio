"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { StatusTag } from "@/components/work/StatusTag";
import { Tag } from "@/components/ui/Tag";
import type { PlayItem } from "@/lib/types";

interface PlayGridProps {
  items: PlayItem[];
}

function PlayCard({ item, index }: { item: PlayItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div
      className="group block rounded-xl overflow-hidden border transition-all duration-300"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: hovered ? "var(--border-hi, var(--accent))" : "var(--border)",
        boxShadow: hovered ? "0 8px 24px 0 rgb(0 0 0 / 0.10)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 transition-transform duration-500 group-hover:scale-[1.03]">
            <span className="text-5xl opacity-[0.06]">◈</span>
            <span
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--text-3)", opacity: 0.4 }}
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
            <span
              className="text-xs"
              style={{ color: "var(--text-3)" }}
            >
              {item.category}
            </span>
          </div>
          <StatusTag status={item.status} />
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold leading-snug mb-2 transition-colors duration-200"
          style={{
            color: hovered ? "var(--accent)" : "var(--text-1)",
          }}
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

        {/* Tags + optional external link */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0, 3).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          {item.url && (
            <span
              className="text-xs shrink-0 transition-colors"
              style={{ color: hovered ? "var(--accent)" : "var(--text-3)" }}
            >
              ↗
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <FadeIn key={item.title} delay={index * 70}>
      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          data-cursor="pointer"
        >
          {inner}
        </a>
      ) : (
        <div>{inner}</div>
      )}
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
