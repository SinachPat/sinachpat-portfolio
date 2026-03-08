interface ImageFullProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ImageFull({ src, alt, caption }: ImageFullProps) {
  return (
    <figure className="my-8 -mx-4 sm:-mx-8 lg:-mx-16">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg border border-[var(--border)]"
        style={{ borderColor: "var(--border)" }}
      />
      {caption && (
        <figcaption
          className="text-center text-xs mt-3 leading-relaxed"
          style={{ color: "var(--text-3)" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
