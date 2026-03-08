import { cn } from "@/lib/utils";

interface TwoColumnProps {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
  /** Whether to flip on small screens (default: stack left-then-right) */
  reverse?: boolean;
}

export function TwoColumn({ left, right, className, reverse }: TwoColumnProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 my-8",
        className
      )}
    >
      <div className={cn(reverse && "sm:order-2")}>{left}</div>
      <div className={cn(reverse && "sm:order-1")}>{right}</div>
    </div>
  );
}
