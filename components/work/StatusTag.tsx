import { cn } from "@/lib/utils";
import type { WorkFrontmatter } from "@/lib/types";

type Status = WorkFrontmatter["status"];

const STATUS_STYLES: Record<Status, string> = {
  live: "bg-[var(--accent)] text-white",
  shipped: "bg-[var(--accent)] text-white",
  "in-progress": "bg-amber-100 text-amber-700",
  archived: "bg-[var(--gray-1)] text-[var(--text-3)]",
};

const STATUS_LABELS: Record<Status, string> = {
  live: "Live",
  shipped: "Shipped",
  "in-progress": "In Progress",
  archived: "Archived",
};

interface StatusTagProps {
  status: Status;
  className?: string;
}

export function StatusTag({ status, className }: StatusTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium shrink-0",
        STATUS_STYLES[status],
        className
      )}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
