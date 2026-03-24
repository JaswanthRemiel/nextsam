import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata = {
  title: "Blog — Remiel",
  description: "Thoughts on development, design, and everything in between.",
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <main className="flex-grow max-w-4xl mx-auto px-10 sm:px-6 py-20 space-y-12 w-full">
        <div className="space-y-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-600" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="space-y-3">
            <h1 className="text-2xl font-sf-medium text-white">blog</h1>
            <p className="text-gray-400 font-sf-regular">
              thoughts on development, design, and everything in between.
            </p>
          </header>
        </div>

        {posts.length === 0 ? (
          <div className="text-gray-500 font-sf-regular py-12">
            <p>no posts yet. check back soon!</p>
            <p className="text-sm mt-2 text-gray-600">
              add .mdx files to <code className="text-orange-500">/content/blog</code> to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block space-y-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-lg font-sf-regular text-white group-hover:text-orange-500 transition-colors underline underline-offset-4">
                      {post.title}
                    </h2>
                    <time className="text-sm text-gray-500 shrink-0 font-mono">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <p className="text-gray-400 text-sm font-sf-regular line-clamp-2">
                    {post.description}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-zinc-800 text-gray-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
