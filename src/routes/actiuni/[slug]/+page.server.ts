import { ObjectId } from "mongodb";
import type { PageServerLoad } from "./$types";
import { start_mongo } from "$db/mongo";

export const load: PageServerLoad = async ({ params }) => {
  const db = await start_mongo();
  const actions = db.collection("actions");
  const id = params.slug;
  // Fetch data from MongoDB
  const post = await actions.findOne({ _id: new ObjectId(id) });
  let serializedPost;

  // Convert the `_id` field from `ObjectId` to string for each blog post
  if (post) {
    serializedPost = { ...post, _id: post._id.toString() };
  }
  return {
    action: serializedPost,
  };
};
