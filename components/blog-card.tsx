import Link from "next/link";
import { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps extends BlogPostMeta {}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  tags,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <Link href={`/blog/${slug}`} className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors">
        <h3 className="text-sm underline underline-offset-4">{title}</h3>
      </Link>
      <div className="text-xs text-gray-500 mt-1">{formattedDate}</div>
      <p className="text-sm font-mono text-gray-400 mt-1">{description}</p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-600 dark:text-gray-300 border border-orange-200 dark:border-orange-600 rounded-sm px-3 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
