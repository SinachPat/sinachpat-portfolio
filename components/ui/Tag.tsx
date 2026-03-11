interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

const TAG_STYLES: Record<NonNullable<TagProps["variant"]>, React.CSSProperties> = {
  default: {
    backgroundColor: "rgba(55, 53, 47, 0.08)",
    color: "#37352F",
    borderRadius: "3px",
  },
  accent: {
    backgroundColor: "rgba(35, 131, 226, 0.12)",
    color: "#2383E2",
    borderRadius: "3px",
  },
  outline: {
    border: "1px solid rgba(55, 53, 47, 0.16)",
    color: "#787774",
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
