import { json } from "@sveltejs/kit";
import { start_mongo } from "$db/mongo.js";
import type { BlogPostType } from "../../blog/types";
import { marked } from "marked";
import { formatDate } from "$lib/utils/formatDate";
import { ObjectId } from "mongodb";
import { fetchProtectedData } from "../../protected/util.js";

export async function POST({ request, cookies, fetch }) {
  await fetchProtectedData(cookies, fetch);
  const db = await start_mongo();
  const blogPosts = db.collection("blogPosts");

  // Get the blog post data from the request
  let blogPost: BlogPostType = await request.json();

  // Process and format the blog content
  const htmlContent = await marked(blogPost.content);
  blogPost.content = htmlContent;

  // Set the current date for the blog post
  const date = new Date();
  blogPost.date = formatDate(date);

  try {
    // Insert the blog post into the database
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

export async function PUT({ request, url, cookies, fetch }) {
  await fetchProtectedData(cookies, fetch);

  const postId = url.searchParams.get("id");
  if (!postId) {
    return json({
      success: false,
      error: "API didn't receive the postId in query params",
    });
  }
  const db = await start_mongo();
  const blogPosts = db.collection("blogPosts");

  // Get the blog post data from the request
  let blogPost: BlogPostType = await request.json();

  // Process and format the blog content
  const htmlContent = await marked(blogPost.content);
  blogPost.content = htmlContent;

  // Set the current date for the blog post
  const date = new Date();
  blogPost.date = formatDate(date);

  try {
    // Find the blog post by id and update it
    const result = await blogPosts.updateOne(
      { _id: new ObjectId(postId) },
      { $set: blogPost }
    );

    if (result.matchedCount === 0) {
      return json(
        { success: false, error: "Blog post not found" },
        { status: 404 }
      );
    }
    return json({ success: true, updatedId: blogPost._id });
  } catch (error) {
    console.error("Error saving blog post:", error);
    return json(
      { success: false, error: "Failed to save blog post" },
      { status: 500 }
    );
  }
}
