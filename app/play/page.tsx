import type { Metadata } from "next";
import { PlayGrid } from "@/components/play/PlayGrid";
import { FadeIn } from "@/components/ui/FadeIn";
import type { PlayItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Play",
  description:
    "Side projects, experiments, and things built for fun.",
};

// Static play items — add more here as you build things
const PLAY_ITEMS: PlayItem[] = [
  {
    title: "Portfolio v1",
    description:
      "The very first version of this portfolio — a learning exercise in Next.js and design systems.",
    tags: ["Next.js", "Design Systems", "Tailwind"],
  },
];

export default function PlayPage() {
  return (
    <main>
      <section className="container-page pt-16 pb-24">
        <FadeIn>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--text-3)" }}
          >
            Play
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
