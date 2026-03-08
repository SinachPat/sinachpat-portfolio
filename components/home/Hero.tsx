import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
      <FadeIn>
        <p
          className="text-xs font-medium uppercase tracking-widest mb-6"
          style={{ color: "var(--text-3)" }}
        >
          Product Designer & Engineer
        </p>
      </FadeIn>

      <FadeIn delay={80}>
        <h1
          className="font-bold leading-tight tracking-tight mb-8 w-8xl"
          style={{
            fontSize: "clamp(2.5rem, 16vw, 4rem)",
            color: "var(--text-1)",
          }}
        >
          Product guy who builds, designs
          <span style={{ color: "var(--accent)" }}> <br /> and engineers.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={160}>
        <p
          className="text-base leading-relaxed max-w-lg w-8xl"
          style={{ color: "var(--text-2)" }}
        >
          I&apos;m Osinachi Patrick — I work at the intersection of product
          strategy, design, and engineering. I build things that matter and
          write about what I learn along the way.
        </p>
      </FadeIn>
    </section>
  );
}
