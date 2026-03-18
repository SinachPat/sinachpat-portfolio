import { Hero } from "@/components/home/Hero";
import { WorkList } from "@/components/home/WorkList";
import { ExperienceList } from "@/components/home/ExperienceList";
import { getWorkPosts } from "@/lib/mdx";

export default async function HomePage() {
  const posts = await getWorkPosts();

  return (
    <main>
      <Hero />
      <WorkList posts={posts} />
      <ExperienceList />
    </main>
  );
}
