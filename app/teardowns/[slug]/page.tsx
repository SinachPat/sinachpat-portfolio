import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTeardownBySlug, getTeardownPosts, getTeardownSlugs } from "@/lib/mdx";
import { TeardownHeader } from "@/components/teardowns/TeardownHeader";
import { PostNavigation } from "@/components/ui/PostNavigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getTeardownSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getTeardownBySlug(slug);
    return { title: meta.title, description: meta.tldr };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function TeardownPage({ params }: Props) {
  const { slug } = await params;

  let data;
  try {
    data = await getTeardownBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = data;

  // Prev / next navigation (sorted newest-first, so prev = newer, next = older)
  const allPosts = await getTeardownPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const next = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <main>
      <TeardownHeader meta={meta} />

      {/* MDX content */}
      <div className="container-page py-12">
        <div className="prose">{content}</div>

        {/* Prev / Next navigation */}
        <PostNavigation
          prev={prev ? { title: prev.title, slug: prev.slug } : null}
          next={next ? { title: next.title, slug: next.slug } : null}
          basePath="/teardowns"
          allPath="/teardowns"
          allLabel="All Teardowns"
        />
      </div>
    </main>
  );
}
