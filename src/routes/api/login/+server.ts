import { ObjectId } from "mongodb";
import { json } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { start_mongo } from "$db/mongo.js";
import { JWT_SECRET } from "$env/static/private";

// Assuming you have set up your MongoDB client

export async function POST({ request, cookies }) {
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

  const userId = new ObjectId(user._id);

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "1h",
  });
  cookies.set("jwt", token, {
    httpOnly: true, // Prevents client-side JS access to this cookie
    secure: process.env.NODE_ENV === "production", // Ensure the cookie is secure in production
    maxAge: 60 * 60, // 1 hour
    path: "/", // Cookie will be available site-wide
    sameSite: "strict", // Prevent CSRF
  });

  return json({ token });
}
