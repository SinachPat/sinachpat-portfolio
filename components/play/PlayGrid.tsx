import { Tag } from "@/components/ui/Tag";
import { FadeIn } from "@/components/ui/FadeIn";
import type { PlayItem } from "@/lib/types";

interface PlayGridProps {
  items: PlayItem[];
}

export function PlayGrid({ items }: PlayGridProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm py-12 text-center" style={{ color: "var(--text-3)" }}>
        Experiments coming soon.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <FadeIn key={item.title} delay={i * 50}>
          <div
            className="rounded-lg border border-[var(--border)] overflow-hidden group"
            style={{ backgroundColor: "var(--surface)" }}
          >
            {/* Image placeholder */}
            {item.image ? (
              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <div
                className="aspect-video flex items-center justify-center"
                style={{ backgroundColor: "var(--gray-1)" }}
              >
                <span className="text-2xl opacity-30">◈</span>
              </div>
            )}

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3
                  className="text-sm font-medium"
                  style={{ color: "var(--text-1)" }}
                >
                  {item.title}
                </h3>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs shrink-0 transition-colors hover:text-[var(--accent)]"
                    style={{ color: "var(--text-3)" }}
                    data-cursor="pointer"
                  >
                    ↗
                  </a>
                )}
              </div>
              <p
                className="text-xs leading-relaxed mb-3"
                style={{ color: "var(--text-2)" }}
              >
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
