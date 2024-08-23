// @ts-nocheck
// src/routes/api/like-post/+server.ts
import { blogPosts } from "$db/blogPosts";
import { json } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

export async function POST({ request }) {
  const { postId } = await request.json();

  // Validate the postId and update the likes count
  if (!postId) {
    return json({ success: false, error: "Invalid postId" }, { status: 400 });
  }

  try {
    let result = await blogPosts.updateOne(
      { _id: new ObjectId(postId) },
      { $inc: { views: 1 } }
    );

    if (result.modifiedCount === 1) {
      return json({ success: true });
    } else {
      return json({ success: false, error: "Post not found" }, { status: 404 });
    }
  } catch (error) {
    return json(
      { success: false, error: "Failed to update likes" },
      { status: 500 }
    );
  }
}
