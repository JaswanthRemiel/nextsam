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

  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <main className="flex-grow w-full max-w-4xl lg:max-w-7xl mx-auto px-10 sm:px-6 lg:px-12 py-20 space-y-12">
          {/* Header Section */}
          <div className="space-y-6 mb-12">
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

          {/* Blog Posts */}
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
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="p-4 bg-white/2 border border-gray-800 rounded-lg"
                >
                  <BlogCard {...post} />
                </div>
              ))}
            </section>
          )}
      </main>
    </div>
  );
}
