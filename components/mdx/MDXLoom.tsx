"use client";

import { useEffect, useRef, useState } from "react";

interface MDXLoomProps {
  /** Loom share URL — e.g. https://www.loom.com/share/4be99e15b0194e77a4610a1eb8ab15c2 */
  src: string;
  caption?: string;
}

function toLoomEmbed(src: string, autoplay: boolean): string {
  // Extract the video ID from any loom.com URL pattern
  const match = src.match(/loom\.com\/(?:share|embed)\/([a-f0-9]+)/i);
  const id = match ? match[1] : src;
  const params = [
    "hide_owner=true",
    "hide_share=true",
    "hide_title=true",
    "hideEmbedTopBar=true",
    autoplay ? "autoplay=1" : "",
  ]
    .filter(Boolean)
    .join("&");
  return `https://www.loom.com/embed/${id}?${params}`;
}

export function MDXLoom({ src, caption }: MDXLoomProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [embedSrc, setEmbedSrc] = useState<string>("");

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !embedSrc) {
          // Fire autoplay the moment the video scrolls into view
          setEmbedSrc(toLoomEmbed(src, true));
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // 30% visible before triggering
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <figure className="my-10">
      <div
        ref={wrapperRef}
        className="overflow-hidden border border-[var(--border)]"
        style={{ borderRadius: "6px", position: "relative", paddingBottom: "56.25%" }}
      >
        {embedSrc ? (
          <iframe
            src={embedSrc}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            allow="autoplay; fullscreen"
            title={caption ?? "Loom video"}
          />
        ) : (
          // Placeholder shown before scrolling into view
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: "var(--gray-1)" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-3)" }}>
              Loading video…
            </span>
          </div>
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
