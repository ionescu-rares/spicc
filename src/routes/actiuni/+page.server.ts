import { start_mongo } from "$db/mongo";
import type { PageServerLoad } from "./$types";
import type { ActionType } from "./types";

export const load: PageServerLoad = async () => {
  const db = await start_mongo();
  // Fetch data from MongoDB
  const actions = db.collection("actions");
  const data = await actions.find().sort({ _id: -1 }).toArray();

  // Convert the `_id` field from `ObjectId` to string for each blog post
  const serializedData = data.map((post: ActionType) => ({
    ...post,
    _id: post._id.toString(), // Convert ObjectId to string
  }));

  return {
    actions: serializedData,
  };
};
