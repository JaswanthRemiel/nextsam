"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BlogCard from "@/components/blog-card";
import TagFilter from "@/components/tag-filter";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogContentProps {
  posts: BlogPostMeta[];
  tags: string[];
  tagCounts: Record<string, number>;
}

export function BlogContent({ posts, tags, tagCounts }: BlogContentProps) {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag") || "all";

  const filteredPosts =
    selectedTag === "all"
      ? posts
      : posts.filter((post) => post.tags && post.tags.includes(selectedTag));

  const calculateGridBorders = (index: number, total: number, cols: number) => {
    const showBottom = true;
    const showRight = (index + 1) % cols !== 0;

    return { showBottom, showRight };
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <main className="flex-grow w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Header Section */}
          <div className="space-y-6 mb-12 border-b border-zinc-800 pb-8">
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

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                blog
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                thoughts on development, design, and everything in between.
              </p>
            </div>
          </div>

          {/* Tag Filter */}
          {tags.length > 0 && (
            <TagFilter tags={tags} tagCounts={tagCounts} />
          )}

          {/* Blog Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-gray-500 py-12 text-center">
              <p className="text-lg font-medium">no posts found</p>
              {selectedTag !== "all" && (
                <p className="text-sm mt-2 text-gray-600">
                  try a different tag or{" "}
                  <Link href="/blog" className="text-orange-400 hover:text-orange-300">
                    view all
                  </Link>
                </p>
              )}
              {posts.length === 0 && (
                <p className="text-sm mt-2 text-gray-600">
                  add .mdx files to <code className="text-orange-500">/content/blog</code> to get started.
                </p>
              )}
            </div>
          ) : (
            <div className="border border-zinc-800 rounded-lg overflow-hidden">
              {/* Grid Layout */}
              <div className="hidden lg:grid lg:grid-cols-3 [&>*]:border-b [&>*]:border-zinc-800">
                {filteredPosts.map((post, index) => {
                  const borders = calculateGridBorders(index, filteredPosts.length, 3);
                  return (
                    <div
                      key={post.slug}
                      className={borders.showRight ? "border-r border-zinc-800" : ""}
                    >
                      <BlogCard {...post} showRightBorder={false} showBottomBorder={false} />
                    </div>
                  );
                })}
              </div>

              {/* 2-Column Layout for Tablet */}
              <div className="hidden md:grid md:grid-cols-2 lg:hidden [&>*]:border-b [&>*]:border-zinc-800">
                {filteredPosts.map((post, index) => (
                  <div
                    key={post.slug}
                    className={index % 2 === 0 ? "border-r border-zinc-800" : ""}
                  >
                    <BlogCard {...post} showRightBorder={false} showBottomBorder={false} />
                  </div>
                ))}
              </div>

              {/* Single Column for Mobile */}
              <div className="md:hidden [&>*]:border-b [&>*]:border-zinc-800">
                {filteredPosts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    {...post}
                    showRightBorder={false}
                    showBottomBorder={false}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
