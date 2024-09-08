import { json } from "@sveltejs/kit";
import { start_mongo } from "$db/mongo.js";
import type { BlogPostType } from "../../blog/types";
import { marked } from "marked";
import { formatDate } from "$lib/utils/formatDate";

export async function POST({ request }) {
  const db = await start_mongo();
  const blogPosts = db.collection("blogPosts");
  let blogPost: BlogPostType = await request.json();

  const htmlContent = await marked(blogPost.content);
  blogPost.content = htmlContent;

  const date = new Date();
  blogPost.date = formatDate(date);

  try {
    const result = await blogPosts.insertOne(blogPost);
    return json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("Error saving blog post:", error);
    return json(
      { success: false, error: "Failed to save blog post" },
      { status: 500 }
    );
  }
}
