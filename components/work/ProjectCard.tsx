"use client";

import { useState } from "react";
import Link from "next/link";
import { StatusTag } from "./StatusTag";
import { Tag } from "@/components/ui/Tag";
import { FadeIn } from "@/components/ui/FadeIn";
import type { WorkFrontmatter } from "@/lib/types";

interface ProjectCardProps {
  post: WorkFrontmatter;
  index: number;
}

export function ProjectCard({ post, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 60}>
      <Link
        href={`/work/${post.slug}`}
        className="block border-b border-[var(--border)] group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-cursor="pointer"
        style={{
          backgroundColor: hovered ? "var(--gray-1)" : "transparent",
          transition: "background-color 180ms ease",
        }}
      >
        {/* Main row */}
        <div className="px-4 py-5 flex items-baseline gap-4 sm:gap-6 -mx-4">
          {/* Year */}
          <span
            className="text-xs shrink-0 w-10 tabular-nums"
            style={{ color: "var(--text-3)" }}
          >
            {post.year}
          </span>

          {/* Title + tags */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="text-sm font-medium transition-colors"
                style={{
                  color: hovered ? "var(--accent)" : "var(--text-1)",
                }}
              >
                {post.title}
              </span>
              {post.tags.slice(0, 2).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>

          {/* Company */}
          <span
            className="hidden sm:block text-sm shrink-0"
            style={{ color: "var(--text-3)" }}
          >
            {post.company}
          </span>

          {/* Status */}
          <StatusTag status={post.status} />
        </div>

        {/* Summary — expands on hover */}
        <div
          className="px-4 overflow-hidden"
          style={{
            maxHeight: hovered ? "80px" : "0px",
            opacity: hovered ? 1 : 0,
            transition: "max-height 280ms ease, opacity 220ms ease",
          }}
        >
          <p
            className="text-xs pb-4 leading-relaxed"
            style={{ color: "var(--text-2)", paddingLeft: "calc(2.5rem + 1rem)" }}
          >
            {post.summary}
          </p>
        </div>
      </Link>
    </FadeIn>
  );
}
