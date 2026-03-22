import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/ui/BlogCard";

export const metadata = {
  title: "Blog | kin.dev",
  description: "Thoughts on software development, projects, and learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-mono text-4xl font-bold text-text-primary mb-2">
          <span className="text-primary">&gt;_</span> blog
        </h1>
        <p className="text-text-secondary mb-12">
          Thoughts on software development, projects, and learning.
        </p>

        {posts.length === 0 ? (
          <p className="font-mono text-text-secondary">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
