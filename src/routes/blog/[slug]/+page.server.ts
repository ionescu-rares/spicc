import { blogPosts } from "$db/blogPosts";
import { ObjectId } from "mongodb";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const id = params.slug;
  // Fetch data from MongoDB
  const post = await blogPosts.findOne({ _id: new ObjectId(id) });
  let serializedPost;

  // Convert the `_id` field from `ObjectId` to string for each blog post
  if (post) {
    serializedPost = { ...post, _id: post._id.toString() };
  }
  return {
    blogPost: serializedPost,
  };
};
