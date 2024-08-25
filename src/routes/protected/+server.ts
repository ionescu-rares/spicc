import { json } from "@sveltejs/kit";
import jwt from "jsonwebtoken";

export async function GET({ request }) {
  const authorization = request.headers.get("Authorization");

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authorization.split(" ")[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "");

    // Return the protected data
    return json({ message: "This is protected data", user: decoded });
  } catch (error) {
    return json({ error: "Invalid token" }, { status: 403 });
  }
}
