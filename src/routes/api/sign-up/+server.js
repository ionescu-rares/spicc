// src/routes/api/signup/+server.ts
import bcrypt from "bcrypt";
import { json } from "@sveltejs/kit";
import { MONGO_URI } from "$env/static/private";
import { MongoClient } from "mongodb";

const client = new MongoClient(MONGO_URI || "");
await client.connect();
const db = client.db("Spicc"); // Replace with your DB name
const accountCollection = db.collection("account");

export async function POST({ request }) {
  const { username, password } = await request.json();

  // Check if an account already exists
  const existingUser = await accountCollection.findOne({});

  if (existingUser) {
    return json({ error: "An account already exists" }, { status: 403 });
  }

  // Hash the password
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  // Insert the user into the database
  await accountCollection.insertOne({ username, passwordHash });

  return json({ message: "User account created successfully" });
}
