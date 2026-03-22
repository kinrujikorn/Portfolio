import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-surface/40 border border-surface-border rounded-xl p-6 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.06)] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Index number */}
        {index !== undefined && (
          <span className="font-mono text-4xl font-bold text-surface-border group-hover:text-primary/30 transition-colors duration-300 leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[11px] text-text-secondary">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-surface-border" />
            <span className="font-mono text-[11px] text-text-secondary">{post.readTime}</span>
          </div>

          <h3 className="text-base font-bold text-text-primary mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 bg-primary/5 border border-primary/15 text-primary-light rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono text-xs text-text-secondary group-hover:text-primary transition-colors duration-300">
              &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
