import { getAllPosts, getAllTags, getTagCounts, getPostsByTag } from "@/lib/blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const tag = searchParams.get("tag") || "all";

    const allPosts = getAllPosts();
    const tags = getAllTags();
    const tagCounts = getTagCounts();
    const filteredPosts = getPostsByTag(tag);

    return NextResponse.json({
      posts: allPosts,
      tags,
      tagCounts,
      filteredPosts,
    });
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog data" },
      { status: 500 }
    );
  }
}
