import type { Metadata } from "next";
import { getTeardownPosts } from "@/lib/mdx";
import { TeardownCard } from "@/components/teardowns/TeardownCard";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Teardowns",
  description:
    "Product and UX teardowns — written audits of flows, decisions, and design patterns.",
};

export default async function TeardownsPage() {
  const posts = await getTeardownPosts();

  return (
    <main>
      <section className="container-page pt-16 pb-24">
        <FadeIn>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--text-3)" }}
          >
            Teardowns
          </p>
          <h1
            className="font-bold tracking-tight mb-3"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--text-1)",
            }}
          >
            Product & UX Teardowns
          </h1>
          <p
            className="text-base leading-relaxed max-w-lg mb-12"
            style={{ color: "var(--text-2)" }}
          >
            Written audits of product flows, UX decisions, and design patterns.
            Honest takes on what works, what doesn&apos;t, and why.
          </p>
        </FadeIn>

        {/* Divider */}
        <div className="border-t border-[var(--border)]" />

        {/* List */}
        {posts.length === 0 ? (
          <p
            className="text-sm py-12 text-center"
            style={{ color: "var(--text-3)" }}
          >
            Teardowns coming soon.
          </p>
        ) : (
          <div>
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 60}>
                <TeardownCard post={post} />
              </FadeIn>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
