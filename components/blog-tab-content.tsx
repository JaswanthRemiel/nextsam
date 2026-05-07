"use client";

import BlogCard from "@/components/blog-card";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogTabContentProps {
  posts: BlogPostMeta[];
}

export function BlogTabContent({ posts }: BlogTabContentProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.length === 0 ? (
        <p className="text-center text-gray-400">No posts found</p>
      ) : (
        <>
          {posts.map((post) => (
            <div
              key={post.slug}
              className="p-4 bg-white/2 border border-gray-800 rounded-lg"
            >
              <BlogCard {...post} />
            </div>
          ))}
        </>
      )}
    </section>
  );
}
