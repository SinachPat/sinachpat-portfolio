interface MDXImageProps {
  src: string;
  alt: string;
  caption?: string;
  /** "full" spans the full column width (default), "wide" bleeds slightly */
  size?: "full" | "wide";
}

export function MDXImage({ src, alt, caption, size = "full" }: MDXImageProps) {
  return (
    <figure
      className="my-10"
      style={
        size === "wide"
          ? { marginLeft: "calc(-1 * var(--space-6, 1.5rem))", marginRight: "calc(-1 * var(--space-6, 1.5rem))" }
          : undefined
      }
    >
      <div
        className="overflow-hidden border border-[var(--border)]"
        style={{ borderRadius: "6px", backgroundColor: "var(--gray-1)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption
          className="mt-3 text-xs text-center leading-relaxed"
          style={{ color: "var(--text-3)" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
