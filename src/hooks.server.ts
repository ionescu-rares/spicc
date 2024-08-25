import { start_mongo } from "$db/mongo";
// src/hooks.server.ts
import jwt from "jsonwebtoken";
import { redirect } from "@sveltejs/kit";

start_mongo()
  .then(() => {
    console.log("Mongo started");
  })
  .catch((e) => console.log(e));

export async function handle({ event, resolve }) {
  const protectedRoutes = ["/protected"];

  if (protectedRoutes.includes(event.url.pathname)) {
    const authorization = event.request.headers.get("Authorization");

    if (!authorization || !authorization.startsWith("Bearer ")) {
      throw redirect(302, "/login");
    }

    const token = authorization.split(" ")[1];

    try {
      jwt.verify(token, process.env.JWT_SECRET || "");
    } catch (error) {
      console.error("JWT verification failed:", error);
      throw redirect(302, "/login");
    }
  }

  return resolve(event);
}
