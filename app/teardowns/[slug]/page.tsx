import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getTeardownBySlug, getTeardownSlugs } from "@/lib/mdx";
import { TeardownHeader } from "@/components/teardowns/TeardownHeader";

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

  return (
    <main>
      <TeardownHeader meta={meta} />

      {/* MDX content */}
      <div className="container-page py-12">
        <div className="prose">{content}</div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <Link
            href="/teardowns"
            className="text-sm transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-2)" }}
          >
            ← All Teardowns
          </Link>
        </div>
      </div>
    </main>
  );
}
