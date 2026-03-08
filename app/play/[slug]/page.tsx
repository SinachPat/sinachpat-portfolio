import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getPlayBySlug, getPlaySlugs, getPlayPosts } from "@/lib/mdx";
import { StatusTag } from "@/components/work/StatusTag";
import { Tag } from "@/components/ui/Tag";
import { FadeIn } from "@/components/ui/FadeIn";
import { PostNavigation } from "@/components/ui/PostNavigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPlaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getPlayBySlug(slug);
    return { title: meta.title, description: meta.description };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function PlayPage({ params }: Props) {
  const { slug } = await params;

  let data;
  try {
    data = await getPlayBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = data;

  const allPosts = await getPlayPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const next = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <main>
      <section className="container-page pt-12 pb-0">
        <FadeIn>
          <Link
            href="/play"
            className="inline-flex items-center gap-1 text-xs transition-colors hover:text-[var(--accent)] mb-10"
            style={{ color: "var(--text-3)" }}
            data-cursor="pointer"
          >
            ← Back to Playground
          </Link>
        </FadeIn>

        <FadeIn delay={50}>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              {meta.category}
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
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
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
            {meta.description}
          </p>
        </FadeIn>
      </section>

      <section className="container-page mt-16 pb-24">
        <div className="case-study-content prose" style={{ maxWidth: "68ch" }}>
          {content}
        </div>

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

        {meta.url && (
          <div className="mt-6">
            <a
              href={meta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-2)" }}
              data-cursor="pointer"
            >
              View Live ↗
            </a>
          </div>
        )}

        <PostNavigation
          prev={prev ? { title: prev.title, slug: prev.slug } : null}
          next={next ? { title: next.title, slug: next.slug } : null}
          basePath="/play"
          allPath="/play"
          allLabel="All Projects"
        />
      </section>
    </main>
  );
}
