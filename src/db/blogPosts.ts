import db from "$db/mongo";

export const blogPosts = db.collection("blogPosts");
