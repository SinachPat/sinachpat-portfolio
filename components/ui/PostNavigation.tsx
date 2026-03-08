import Link from "next/link";

interface NavItem {
  title: string;
  slug: string;
}

interface PostNavigationProps {
  prev: NavItem | null;
  next: NavItem | null;
  basePath: string; // "/work" or "/teardowns"
  allPath: string;  // "/" or "/teardowns"
  allLabel: string; // "All Work" or "All Teardowns"
}

export function PostNavigation({
  prev,
  next,
  basePath,
  allPath,
  allLabel,
}: PostNavigationProps) {
  return (
    <div
      className="mt-10 pt-8 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="grid grid-cols-3 items-start gap-4">
        {/* Prev */}
        <div className="col-span-1">
          {prev ? (
            <Link
              href={`${basePath}/${prev.slug}`}
              className="group flex flex-col gap-1 transition-colors"
              data-cursor="pointer"
            >
              <span
                className="text-xs font-medium uppercase tracking-widest flex items-center gap-1 transition-colors group-hover:text-[var(--accent)]"
                style={{ color: "var(--text-3)" }}
              >
                ← Previous
              </span>
              <span
                className="text-sm font-medium leading-snug transition-colors group-hover:text-[var(--accent)]"
                style={{ color: "var(--text-1)" }}
              >
                {prev.title}
              </span>
            </Link>
          ) : null}
        </div>

        {/* Centre — back to index */}
        <div className="col-span-1 flex justify-center">
          <Link
            href={allPath}
            className="text-xs font-medium uppercase tracking-widest transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-3)" }}
            data-cursor="pointer"
          >
            {allLabel}
          </Link>
        </div>

        {/* Next */}
        <div className="col-span-1 flex flex-col items-end text-right">
          {next ? (
            <Link
              href={`${basePath}/${next.slug}`}
              className="group flex flex-col gap-1 transition-colors"
              data-cursor="pointer"
            >
              <span
                className="text-xs font-medium uppercase tracking-widest flex items-center justify-end gap-1 transition-colors group-hover:text-[var(--accent)]"
                style={{ color: "var(--text-3)" }}
              >
                Next →
              </span>
              <span
                className="text-sm font-medium leading-snug transition-colors group-hover:text-[var(--accent)]"
                style={{ color: "var(--text-1)" }}
              >
                {next.title}
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
