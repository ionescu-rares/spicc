import { blogPosts } from "$db/blogPosts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  // Fetch data from MongoDB
  const data = await blogPosts.find().toArray();

  // Convert the `_id` field from `ObjectId` to string for each blog post
  const serializedData = data.map((post) => ({
    ...post,
    _id: post._id.toString(), // Convert ObjectId to string
  }));

  return {
    blogPosts: serializedData,
  };
};
