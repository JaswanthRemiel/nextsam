import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  featured?: boolean;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  featured?: boolean;
}

export function getAllPosts(): BlogPostMeta[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        description: data.description || "",
        tags: data.tags || [],
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      description: data.description || "",
      tags: data.tags || [],
      content,
    };
  } catch {
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    if (post.tags && post.tags.length > 0) {
      post.tags.forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags).sort();
}

export function getTagCounts(): Record<string, number> {
  const posts = getAllPosts();
  const counts: Record<string, number> = {};

  posts.forEach((post) => {
    if (post.tags && post.tags.length > 0) {
      post.tags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    }
  });

  return counts;
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  const posts = getAllPosts();
  if (tag === "all" || !tag) {
    return posts;
  }

  return posts.filter((post) => post.tags && post.tags.includes(tag));
}

export function getFeaturedPosts(): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.featured === true);
}
