import { ProjectCard } from "@/components/work/ProjectCard";
import type { WorkFrontmatter } from "@/lib/types";

interface WorkListProps {
  posts: WorkFrontmatter[];
}

export function WorkList({ posts }: WorkListProps) {
  return (
    <section className="container-page pb-24">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-0">
        <p
          className="text-xs font-medium uppercase tracking-widest py-3"
          style={{ color: "var(--text-3)" }}
        >
          Selected Work
        </p>
      </div>

      {/* Divider */}
      <div
        className="border-t border-[var(--border)]"
        style={{ borderColor: "var(--border)" }}
      />

      {/* Project rows */}
      {posts.length === 0 ? (
        <p
          className="text-sm py-12 text-center"
          style={{ color: "var(--text-3)" }}
        >
          Projects coming soon.
        </p>
      ) : (
        <div>
          {posts.map((post, i) => (
            <ProjectCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
