"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCard from "@/components/blog-card";
import TagFilter from "@/components/tag-filter";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogData {
  posts: BlogPostMeta[];
  tags: string[];
  tagCounts: Record<string, number>;
  filteredPosts: BlogPostMeta[];
}

export function BlogTabContent() {
  const [selectedTag, setSelectedTag] = useState("all");
  const [data, setData] = useState<BlogData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/blog?tag=${selectedTag}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const blogData = await response.json();
        setData(blogData);
        setError(null);
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError("Failed to load blog posts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, [selectedTag]);

  if (isLoading) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  if (error || !data) {
    return <p className="text-center text-red-400">{error || "Error loading blog"}</p>;
  }

  const { posts, tags, tagCounts, filteredPosts } = data;

  const calculateGridBorders = (index: number, total: number, cols: number) => {
    const showBottom = true;
    const showRight = (index + 1) % cols !== 0;

    return { showBottom, showRight };
  };

  return (
    <div className="space-y-6">
      {/* Tag Filter */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${
                selectedTag === tag
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tag} ({tagCounts[tag] || 0})
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div>
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-400">No posts found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800">
            {filteredPosts.map((post, index) => {
              const { showBottom, showRight } = calculateGridBorders(
                index,
                filteredPosts.length,
                window.innerWidth < 768 ? 1 : 2
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
    </div>
  );
}
