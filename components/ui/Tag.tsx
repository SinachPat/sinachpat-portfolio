import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export function Tag({ children, className, variant = "default" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
        variant === "default" &&
          "bg-[var(--gray-1)] text-[var(--text-2)]",
        variant === "accent" &&
          "bg-[var(--accent)] text-white",
        variant === "outline" &&
          "border border-[var(--border)] text-[var(--text-2)]",
        className
      )}
    >
      {children}
    </span>
  );
}
