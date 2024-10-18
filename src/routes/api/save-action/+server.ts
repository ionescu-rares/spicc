import { json } from "@sveltejs/kit";
import { start_mongo } from "$db/mongo.js";
import type { ActionType } from "../../actiuni/types.js";
import { marked } from "marked";
import { ObjectId } from "mongodb";
import { fetchProtectedData } from "../../protected/util";

export async function POST({ request, cookies, fetch }) {
  await fetchProtectedData(cookies, fetch);

  const db = await start_mongo();
  const actions = db.collection("actions");

  // Get the blog post data from the request
  let action: ActionType = await request.json();

  // Process and format the blog content
  const htmlContent = await marked(action.content);
  action.content = htmlContent;

  try {
    // Insert the blog post into the database
    const result = await actions.insertOne(action);
    return json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("Error saving action:", error);
    return json(
      { success: false, error: "Failed to save action" },
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
  const actions = db.collection("actions");

  // Get the blog post data from the request
  let action: ActionType = await request.json();

  // Process and format the blog content
  const htmlContent = await marked(action.content);
  action.content = htmlContent;

  try {
    // Find the blog post by id and update it
    const result = await actions.updateOne(
      { _id: new ObjectId(postId) },
      { $set: action }
    );

    if (result.matchedCount === 0) {
      return json(
        { success: false, error: "Action not found" },
        { status: 404 }
      );
    }
    return json({ success: true, updatedId: action._id });
  } catch (error) {
    console.error("Error saving action:", error);
    return json(
      { success: false, error: "Failed to save action" },
      { status: 500 }
    );
  }
}

export async function DELETE({ url, cookies, fetch }) {
  await fetchProtectedData(cookies, fetch);

  const postId = url.searchParams.get("id");
  if (!postId) {
    return json({
      success: false,
      error: "API didn't receive the postId in query params",
    });
  }
  const db = await start_mongo();
  const actions = db.collection("actions");

  try {
    const result = await actions.deleteOne({ _id: new ObjectId(postId) });

    if (result.matchedCount === 0) {
      return json(
        { success: false, error: "Action not found" },
        { status: 404 }
      );
    }
    return json({ success: true, message: "Action deleted successfully" });
  } catch (error) {
    console.error("Error saving action:", error);
    return json(
      { success: false, error: "Failed to save action" },
      { status: 500 }
    );
  }
}
