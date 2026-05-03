import { getAllPosts, getAllTags, getTagCounts } from "@/lib/blog";
import { BlogContent } from "@/components/blog-content";

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();
  const tagCounts = getTagCounts();

  return (
    <BlogContent
      posts={posts}
      tags={tags}
      tagCounts={tagCounts}
    />
  );
}
