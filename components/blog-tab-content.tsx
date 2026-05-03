"use client";

import BlogCard from "@/components/blog-card";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogTabContentProps {
  posts: BlogPostMeta[];
}

export function BlogTabContent({ posts }: BlogTabContentProps) {
  const calculateGridBorders = (index: number, cols: number) => {
    const showBottom = true;
    const showRight = (index + 1) % cols !== 0;
    return { showBottom, showRight };
  };

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-center text-gray-400">No posts found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800">
          {posts.map((post, index) => {
            const { showBottom, showRight } = calculateGridBorders(
              index,
              typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 2
            );
            return (
              <BlogCard
                key={post.slug}
                {...post}
                showBottomBorder={showBottom}
                showRightBorder={showRight}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
