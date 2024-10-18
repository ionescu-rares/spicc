import { json } from "@sveltejs/kit";
import { start_mongo } from "$db/mongo.js";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "$env/static/private";
import { fetchProtectedData } from "../../../protected/util.js";

export async function DELETE({ cookies, fetch, params }) {
  // Added "params"
  await fetchProtectedData(cookies, fetch);
  const db = await start_mongo();
  const blogPosts = db.collection("blogPosts");

  const { id } = params;

  const objectId = new ObjectId(id);

  if (!objectId) {
    return json(
      { success: false, error: "ID parameter missing" },
      { status: 400 }
    );
  }

  try {
    const result = await blogPosts.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      return json(
        { success: false, error: "Blog post not found" },
        { status: 404 }
      );
    }

    return json({ success: true, message: "Blog post deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return json(
      { success: false, error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}
