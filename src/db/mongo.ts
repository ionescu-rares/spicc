import { MongoClient } from "mongodb";
import { MONGO_URI } from "$env/static/private";
let cachedClient: any = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    // Use the existing cached connection

    return { client: cachedClient, db: cachedDb };
  }
  const client = new MongoClient(MONGO_URI);

  await client.connect();
  const db = client.db("Spicc");

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function start_mongo() {
  const { db } = await connectToDatabase();
  return db;
}
