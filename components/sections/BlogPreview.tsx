import SectionReveal from "@/components/ui/SectionReveal";
import BlogCard from "@/components/ui/BlogCard";
import { getAllPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-mono text-3xl font-semibold text-text-primary text-center mb-2">
            <span className="text-primary">&gt;_</span> blog
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
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
            <a
              href="/blog"
              className="font-mono text-sm text-primary hover:text-primary-light transition-colors"
            >
              view_all_posts() &rarr;
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
