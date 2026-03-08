import type { Metadata } from "next";
import { PlayGrid } from "@/components/play/PlayGrid";
import { FadeIn } from "@/components/ui/FadeIn";
import { PLAY_ITEMS } from "@/lib/play-items";

export const metadata: Metadata = {
  title: "Playground",
  description: "Side projects, experiments, and things built for fun.",
};

export default function PlayPage() {
  return (
    <main>
      <section className="container-page pt-16 pb-24">
        <FadeIn>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--text-3)" }}
          >
            Playground
          </p>
          <h1
            className="font-bold tracking-tight mb-3"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--text-1)",
            }}
          >
            Side Projects & Experiments
          </h1>
          <p
            className="text-base leading-relaxed max-w-lg mb-12"
            style={{ color: "var(--text-2)" }}
          >
            Things built for fun, curiosity, or learning. No pressure, just
            exploration.
          </p>
        </FadeIn>

        <PlayGrid items={PLAY_ITEMS} />
      </section>
    </main>
  );
}
