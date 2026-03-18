import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getWorkBySlug, getWorkPosts, getWorkSlugs } from "@/lib/mdx";
import { StatusTag } from "@/components/work/StatusTag";
import { Tag } from "@/components/ui/Tag";
import { FadeIn } from "@/components/ui/FadeIn";
import { PostNavigation } from "@/components/ui/PostNavigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getWorkBySlug(slug);
    return { title: meta.title, description: meta.summary };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;

  let data;
  try {
    data = await getWorkBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = data;

  // Prev / next navigation
  const allPosts = await getWorkPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const next = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <main>
      {/* ═══ Hero Section ═══ */}
      <section className="container-page pt-12 pb-0">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs transition-colors hover:text-[var(--accent)] mb-10"
            style={{ color: "var(--text-3)" }}
            data-cursor="pointer"
          >
            ← Back to Work
          </Link>
        </FadeIn>

        {/* Title block */}
        <FadeIn delay={50}>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              {meta.company}
            </span>
            <span style={{ color: "var(--text-3)", fontSize: "8px" }}>●</span>
            <StatusTag status={meta.status} />
            <span style={{ color: "var(--text-3)", fontSize: "8px" }}>●</span>
            <span className="text-xs" style={{ color: "var(--text-3)" }}>
              {meta.year}
            </span>
          </div>

          <h1
            className="font-bold tracking-tight leading-[1.1] mb-5"
            style={{
              fontSize: "clamp(2rem, 6vw, 3.25rem)",
              color: "var(--text-1)",
              maxWidth: "20ch",
            }}
          >
            {meta.title}
          </h1>

          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "var(--text-2)", maxWidth: "56ch" }}
          >
            {meta.summary}
          </p>
        </FadeIn>

        {/* ═══ Metadata Grid (Rachel Chen style) ═══ */}
        <FadeIn delay={120}>
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden border border-[var(--border)]"
            style={{ backgroundColor: "var(--border)", borderRadius: "6px" }}
          >
            {[
              { label: "Role", value: meta.role },
              { label: "Timeline", value: meta.duration },
              { label: "Company", value: meta.company },
              {
                label: "Team",
                value: meta.tags.slice(0, 4).join(", "),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="px-5 py-5"
                style={{ backgroundColor: "var(--surface)" }}
              >
                <p
                  className="text-xs font-medium uppercase tracking-widest mb-2"
                  style={{ color: "var(--text-3)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--text-1)" }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ═══ Cover Image ═══ */}
      <FadeIn delay={180}>
        <section className="container-page mt-12">
          <div
            className="w-full aspect-[16/9] overflow-hidden border border-[var(--border)]"
            style={{ backgroundColor: "var(--gray-1)", borderRadius: "6px" }}
          >
            {meta.coverImage && meta.coverImage !== "/images/work/onboarding-cover.jpg" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={meta.coverImage}
                alt={`${meta.title} cover`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full relative">
                <span
                  className="absolute bottom-4 left-5 text-xs font-medium uppercase tracking-widest"
                  style={{ color: "var(--text-3)" }}
                >
                  {meta.company}
                </span>
              </div>
            )}
          </div>
        </section>
      </FadeIn>

      {/* ═══ Metrics Strip ═══ */}
      {meta.metrics && meta.metrics.length > 0 && (
        <FadeIn delay={220}>
          <section className="container-page mt-10">
            <div
              className="grid gap-px overflow-hidden border border-[var(--border)]"
              style={{
                gridTemplateColumns: `repeat(${meta.metrics.length}, 1fr)`,
                backgroundColor: "var(--border)",
                borderRadius: "6px",
              }}
            >
              {meta.metrics.map((m) => (
                <div
                  key={m.label}
                  className="px-6 py-6 text-center"
                  style={{ backgroundColor: "var(--surface)" }}
                >
                  <p
                    className="text-xs font-medium uppercase tracking-widest mb-3"
                    style={{ color: "var(--text-3)" }}
                  >
                    {m.label}
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span
                      className="text-lg font-medium tabular-nums"
                      style={{
                        color: "var(--text-3)",
                        textDecoration: "line-through",
                      }}
                    >
                      {m.before}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-3)" }}
                    >
                      →
                    </span>
                    <span
                      className="text-2xl font-bold tabular-nums"
                      style={{ color: "var(--accent)" }}
                    >
                      {m.after}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {/* ═══ MDX Body ═══ */}
      <section className="container-page mt-16 pb-24">
        {meta.externalUrl && (
          <div className="mx-auto mb-8" style={{ maxWidth: "76ch" }}>
            <a
              href={meta.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-notion-primary"
              data-cursor="pointer"
            >
              Open App ↗
            </a>
          </div>
        )}

        <div className="case-study-content prose mx-auto" style={{ maxWidth: "76ch" }}>
          {content}
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-[var(--border)]">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--text-3)" }}
          >
            Filed under
          </p>
          <div className="flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <Tag key={tag} variant="outline">
                {tag}
              </Tag>
            ))}
          </div>
        </div>


        {/* Prev / Next navigation */}
        <PostNavigation
          prev={prev ? { title: prev.title, slug: prev.slug } : null}
          next={next ? { title: next.title, slug: next.slug } : null}
          basePath="/work"
          allPath="/"
          allLabel="All Work"
        />
      </section>
    </main>
  );
}
