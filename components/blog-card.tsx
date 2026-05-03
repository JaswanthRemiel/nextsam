import Link from "next/link";
import { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps extends BlogPostMeta {
  showRightBorder?: boolean;
  showBottomBorder?: boolean;
}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  tags,
  showRightBorder = true,
  showBottomBorder = true,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`}>
      <article className={`group relative p-6 transition-colors hover:bg-zinc-900/50 cursor-pointer ${
        showBottomBorder ? "border-b border-zinc-800" : ""
      } ${showRightBorder ? "border-r border-zinc-800" : ""}`}>
        <div className="space-y-3">
          {/* Title */}
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors line-clamp-2">
              {title}
            </h3>
            <time className="text-xs text-zinc-500 font-mono">
              {formattedDate}
            </time>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-400 line-clamp-2 group-hover:text-zinc-300 transition-colors">
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-zinc-900 text-zinc-400 rounded border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
