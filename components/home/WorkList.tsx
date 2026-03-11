import { FadeIn } from "@/components/ui/FadeIn";
import { StatusTag } from "@/components/work/StatusTag";
import { Tag } from "@/components/ui/Tag";
import Link from "next/link";
import type { WorkFrontmatter } from "@/lib/types";

interface WorkListProps {
  posts: WorkFrontmatter[];
}

export function WorkList({ posts }: WorkListProps) {
  return (
    <section className="container-page pb-24">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-8">
        <p
          className="text-xs font-medium uppercase tracking-widest py-3"
          style={{ color: "var(--text-3)" }}
        >
          Selected Work
        </p>
      </div>

      {/* Gallery grid */}
      {posts.length === 0 ? (
        <p
          className="text-sm py-12 text-center"
          style={{ color: "var(--text-3)" }}
        >
          Projects coming soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 80}>
              <Link
                href={`/work/${post.slug}`}
                className="notion-card group block overflow-hidden border border-[var(--border)]"
                style={{ backgroundColor: "var(--surface)" }}
                data-cursor="pointer"
              >
                {/* Cover image area */}
                <div
                  className="w-full aspect-[16/9] overflow-hidden"
                  style={{ backgroundColor: "var(--gray-1)" }}
                >
                  {post.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full relative">
                      <span
                        className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-widest"
                        style={{ color: "var(--text-3)" }}
                      >
                        {post.company}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-6">
                  {/* Meta row: year + status */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs tabular-nums"
                        style={{ color: "var(--text-3)" }}
                      >
                        {post.year}
                      </span>
                      <span
                        style={{ color: "var(--text-3)", fontSize: "4px" }}
                      >
                        ●
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-3)" }}
                      >
                        {post.company}
                      </span>
                    </div>
                    <StatusTag status={post.status} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold leading-snug mb-2 transition-colors duration-200 group-hover:text-[var(--accent)]"
                    style={{ color: "var(--text-1)" }}
                  >
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p
                    className="text-sm leading-relaxed mb-4 line-clamp-2"
                    style={{ color: "var(--text-2)" }}
                  >
                    {post.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}
