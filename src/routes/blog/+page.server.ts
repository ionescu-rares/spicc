import { start_mongo } from "$db/mongo";
import type { PageServerLoad } from "./$types";
import type { BlogPostType } from "./types";

export const load: PageServerLoad = async () => {
  const db = await start_mongo();
  // Fetch data from MongoDB
  const blogPosts = db.collection("blogPosts");
  const data = await blogPosts.find().toArray();

  // Convert the `_id` field from `ObjectId` to string for each blog post
  const serializedData = data.map((post: BlogPostType) => ({
    ...post,
    _id: post._id.toString(), // Convert ObjectId to string
  }));

  return {
    blogPosts: serializedData,
  };
};
