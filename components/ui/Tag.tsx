interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

const TAG_STYLES: Record<NonNullable<TagProps["variant"]>, React.CSSProperties> = {
  default: {
    backgroundColor: "var(--gray-2)",
    color: "var(--text-2)",
    borderRadius: "3px",
  },
  accent: {
    backgroundColor: "var(--status-live-bg)",
    color: "var(--accent)",
    borderRadius: "3px",
  },
  outline: {
    border: "1px solid var(--border-hi)",
    color: "var(--text-2)",
    borderRadius: "3px",
  },
};

export function Tag({ children, className, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium${className ? ` ${className}` : ""}`}
      style={TAG_STYLES[variant]}
    >
      {children}
    </span>
  );
}
