import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | kin.dev`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <a
          href="/blog"
          className="font-mono text-sm text-primary hover:text-primary-light transition-colors mb-8 inline-block"
        >
          &larr; back_to_blog()
        </a>

        <div className="mb-8">
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-text-secondary">
            <span className="font-mono text-sm">{post.date}</span>
            <span className="text-surface-border">|</span>
            <span className="font-mono text-sm">{post.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary-light rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-invert prose-violet max-w-none
          prose-headings:font-mono prose-headings:text-text-primary
          prose-p:text-text-secondary prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-light
          prose-code:text-primary-light prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-surface prose-pre:border prose-pre:border-surface-border prose-pre:rounded-xl
          prose-strong:text-text-primary
          prose-li:text-text-secondary
        ">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [rehypePrettyCode, { theme: "github-dark-dimmed" }],
                ],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}
