import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-surface/80 border border-surface-border rounded-xl p-6 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs text-primary">{post.date}</span>
        <span className="text-surface-border">|</span>
        <span className="font-mono text-xs text-text-secondary">{post.readTime}</span>
      </div>
      <h3 className="font-mono text-lg font-bold text-text-primary mb-2">{post.title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary-light rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
