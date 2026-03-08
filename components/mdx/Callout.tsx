import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "tip" | "note";

const STYLES: Record<CalloutType, { border: string; label: string }> = {
  info: { border: "#0ABFBC", label: "Info" },
  warning: { border: "#F59E0B", label: "Warning" },
  tip: { border: "#10B981", label: "Tip" },
  note: { border: "#999999", label: "Note" },
};

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Callout({
  type = "info",
  title,
  children,
  className,
}: CalloutProps) {
  const style = STYLES[type];

  return (
    <div
      className={cn("rounded-lg p-4 my-6 border-l-4", className)}
      style={{
        backgroundColor: "var(--gray-1)",
        borderLeftColor: style.border,
      }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-wider mb-1"
        style={{ color: style.border }}
      >
        {title || style.label}
      </p>
      <div className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
        {children}
      </div>
    </div>
  );
}
