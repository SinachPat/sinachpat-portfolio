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
          className="leading-tight mb-4"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            color: "var(--text-1)",
          }}
        >
          I'm Patrick, a product guy who designs & builds digital products with a focus on user experience design, product management & engineering,
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}> <br /> and I also love tinkering on GTM processes.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={160}>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--text-2)" }}
        >
          I&apos;m Osinachi Patrick — I have 6+ years experience work at the intersection of product
          strategy, design, and engineering. I'm currently building Meetwith. Before Meetwith, i worked as product/design lead at ShipLaas, before that I worked as a product and design lead at Sonr, before that I worked as a designer at Wireways (a nigerian fintech startup). I also have experience working with startups and agencies in the US, UK, and Nigeria. I have a passion for building products that solve real problems and make people&apos;s lives easier.
        </p>
      </FadeIn>
    </section>
  );
}
