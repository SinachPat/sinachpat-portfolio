import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Osinachi Patrick — product guy who builds, designs and engineers.",
};

const SKILLS = [
  "Product Strategy",
  "UX Design",
  "Figma",
  "React / Next.js",
  "TypeScript",
  "User Research",
  "0→1 Products",
  "Design Systems",
  "Data Analysis",
  "Prototyping",
];

export default function AboutPage() {
  return (
    <main>
      <section className="container-page pt-16 pb-24" style={{ maxWidth: "640px" }}>
        {/* Photo */}
        <FadeIn>
          <div
            className="relative w-full aspect-video overflow-hidden border border-border mb-10"
            style={{ backgroundColor: "var(--gray-1)", borderRadius: "6px" }}
          >
            <Image
              src="/images/about/my-picture.jpg"
              alt="Osinachi Patrick"
              fill
              sizes="(max-width: 640px) 100vw, 740px"
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>

        {/* Bio */}
        <FadeIn delay={60}>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-6"
            style={{ color: "var(--text-3)" }}
          >
            About
          </p>
          <h1
            className="font-bold tracking-tight mb-8"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--text-1)",
            }}
          >
            Osinachi Patrick
          </h1>
        </FadeIn>

        <FadeIn delay={120}>
          <div
            className="space-y-4 text-base leading-relaxed"
            style={{ color: "var(--text-2)" }}
          >
            <p>
              I&apos;m a product person who lives at the intersection of
              strategy, design, and engineering. I believe the best
              products come from people who can hold all three in their
              head at once — and I&apos;ve spent my career building that
              muscle.
            </p>
            <p>
              I&apos;ve worked on 0→1 products, led design systems, run
              user research, and shipped production code. I&apos;m most
              energized when working on problems where the user need is
              clear but the solution isn&apos;t.
            </p>
            <p>
              Outside of work, I write teardowns of products I find
              interesting, build small experiments, and think deeply about
              how digital products shape behavior.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-10">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--text-3)" }}
            >
              Skills & Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <Tag key={skill} variant="outline">
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
