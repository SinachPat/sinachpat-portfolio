"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on fine pointer devices (not touchscreens)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    // Make visible — hidden by default to avoid flash at (0,0)
    dot.style.opacity = "1";
    ring.style.opacity = "1";

    let mx = -200;
    let my = -200;
    let rx = -200;
    let ry = -200;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      // Dot follows instantly
      dot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
    };

    // Ring follows with lerp (smooth lag)
    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
      rafId = requestAnimationFrame(tick);
    };

    // Scale ring on interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest(
        "a, button, [data-cursor='pointer'], input, textarea, select"
      );
      if (target) {
        ring.style.width = "44px";
        ring.style.height = "44px";
        ring.style.opacity = "0.4";
      }
    };

    const onMouseOut = () => {
      ring.style.width = "30px";
      ring.style.height = "30px";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot — follows cursor exactly */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          willChange: "transform",
          transition: "opacity 300ms",
        }}
      />

      {/* Ring — follows with lerp lag */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "1.5px solid var(--accent)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: 0,
          willChange: "transform",
          transition: "opacity 300ms, width 200ms ease, height 200ms ease",
        }}
      />
    </>
  );
}
