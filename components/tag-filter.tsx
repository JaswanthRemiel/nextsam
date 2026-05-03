"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface TagFilterProps {
  tags: string[];
  tagCounts: Record<string, number>;
}

export default function TagFilter({ tags, tagCounts }: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag") || "all";
  const [isOpen, setIsOpen] = useState(false);

  const handleTagClick = (tag: string) => {
    if (tag === "all") {
      router.push("/blog");
    } else {
      router.push(`/blog?tag=${tag}`);
    }
    setIsOpen(false);
  };

  const allCount = Object.values(tagCounts).reduce((sum, count) => sum + count, 0);

  return (
    <div className="space-y-4">
      {/* Desktop - Horizontal buttons */}
      <div className="hidden md:flex flex-wrap gap-2 items-center pb-4 border-b border-zinc-800">
        <button
          onClick={() => handleTagClick("all")}
          className={`px-3 py-1.5 text-sm rounded transition-colors ${
            selectedTag === "all"
              ? "bg-orange-500 text-white"
              : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
          }`}
        >
          All ({allCount})
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1.5 text-sm rounded transition-colors ${
              selectedTag === tag
                ? "bg-orange-500 text-white"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
            }`}
          >
            {tag} ({tagCounts[tag] || 0})
          </button>
        ))}
      </div>

      {/* Mobile - Dropdown */}
      <div className="md:hidden pb-4 border-b border-zinc-800">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-zinc-900 text-zinc-400 rounded text-sm hover:bg-zinc-800 transition-colors w-full"
        >
          {selectedTag === "all" ? "All Tags" : selectedTag}
          <ChevronDown
            size={16}
            className={`ml-auto transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="mt-2 space-y-1">
            <button
              onClick={() => handleTagClick("all")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                selectedTag === "all"
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              All ({allCount})
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                  selectedTag === tag
                    ? "bg-orange-500 text-white"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                }`}
              >
                {tag} ({tagCounts[tag] || 0})
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
