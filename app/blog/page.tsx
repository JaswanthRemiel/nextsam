import { Suspense } from "react";
import { BlogContent } from "@/components/blog-content";

function BlogSkeleton() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <main className="flex-grow w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="animate-pulse space-y-6">
            <div className="h-12 bg-zinc-800 rounded w-1/3"></div>
            <div className="h-20 bg-zinc-800 rounded"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<BlogSkeleton />}>
      <BlogContent />
    </Suspense>
  );
}
