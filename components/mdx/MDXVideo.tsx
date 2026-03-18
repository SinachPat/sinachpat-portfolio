interface MDXVideoProps {
  src: string;
  caption?: string;
  /** For self-hosted videos: show native controls */
  controls?: boolean;
  /** Autoplay (muted, for UI demos) */
  autoplay?: boolean;
}

function isEmbedUrl(src: string) {
  return src.includes("youtube.com") || src.includes("youtu.be") || src.includes("vimeo.com");
}

function toEmbedUrl(src: string) {
  // youtube.com/watch?v=ID → youtube.com/embed/ID
  const ytMatch = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  // vimeo.com/ID → player.vimeo.com/video/ID
  const vimeoMatch = src.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

  return src; // already an embed URL
}

export function MDXVideo({ src, caption, controls = true, autoplay = false }: MDXVideoProps) {
  const isEmbed = isEmbedUrl(src);

  return (
    <figure className="my-10">
      <div
        className="overflow-hidden border border-[var(--border)]"
        style={{ borderRadius: "6px", backgroundColor: "var(--gray-1)" }}
      >
        {isEmbed ? (
          <div className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 */ }}>
            <iframe
              src={toEmbedUrl(src)}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title={caption ?? "Video"}
            />
          </div>
        ) : (
          <video
            src={src}
            className="w-full h-auto block"
            controls={controls}
            autoPlay={autoplay}
            muted={autoplay}
            loop={autoplay}
            playsInline
            preload="metadata"
          />
        )}
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
