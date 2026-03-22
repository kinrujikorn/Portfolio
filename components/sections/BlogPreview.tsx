import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import BlogCard from "@/components/ui/BlogCard";
import { getAllPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-2 tracking-tight">
            <span className="text-gradient">Blog</span>
          </h2>
          <p className="font-mono text-sm text-text-secondary text-center mb-16">
            Thoughts and learnings
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <SectionReveal key={post.slug} delay={index * 0.1}>
              <BlogCard post={post} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="font-mono text-sm text-primary hover:text-primary-light transition-colors"
            >
              view_all_posts() &rarr;
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
