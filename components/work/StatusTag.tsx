import type { WorkFrontmatter } from "@/lib/types";

type Status = WorkFrontmatter["status"];

const STATUS_STYLE_MAP: Record<Status, React.CSSProperties> = {
  live: {
    backgroundColor: "var(--status-live-bg)",
    color: "var(--status-live-text)",
    borderRadius: "3px",
  },
  shipped: {
    backgroundColor: "var(--status-shipped-bg)",
    color: "var(--status-shipped-text)",
    borderRadius: "3px",
  },
  "in-progress": {
    backgroundColor: "var(--status-progress-bg)",
    color: "var(--status-progress-text)",
    borderRadius: "3px",
  },
  archived: {
    backgroundColor: "var(--status-archived-bg)",
    color: "var(--status-archived-text)",
    borderRadius: "3px",
  },
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
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium shrink-0${className ? ` ${className}` : ""}`}
      style={STATUS_STYLE_MAP[status]}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
