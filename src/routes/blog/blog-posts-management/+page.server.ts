import { start_mongo } from "$db/mongo";
import type { PageServerLoad } from "./$types";
import type { BlogPostType } from "../types";
import { fetchProtectedData } from "../../protected/util";

export const load: PageServerLoad = async ({ cookies, fetch }) => {
  const db = await start_mongo();

  await fetchProtectedData(cookies, fetch);
  // Fetch data from MongoDB
  const blogPosts = db.collection("blogPosts");
  const data = await blogPosts.find().sort({ _id: -1 }).toArray();

  // Convert the `_id` field from `ObjectId` to string for each blog post
  const serializedData = data.map((post: BlogPostType) => ({
    ...post,
    _id: post._id.toString(), // Convert ObjectId to string
  }));

  return {
    blogPosts: serializedData,
  };
};
