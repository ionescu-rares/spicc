import { ObjectId } from "mongodb";
import { json } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { start_mongo } from "$db/mongo.js";
import { JWT_SECRET } from "$env/static/private";

// Assuming you have set up your MongoDB client

export async function POST({ request }) {
  const db = await start_mongo();
  const usersCollection = db.collection("account");
  const { username, password } = await request.json();

  // Find the user by username
  const user = await usersCollection.findOne({ username });

  if (!user) {
    return json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Compare passwords using bcrypt
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordValid) {
    return json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Convert _id to ObjectId if you're querying by _id elsewhere
  const userId = new ObjectId(user._id);

  // Generate JWT
  const token = jwt.sign({ userId }, JWT_SECRET || "", {
    expiresIn: "1h",
  });

  return json({ token });
}
