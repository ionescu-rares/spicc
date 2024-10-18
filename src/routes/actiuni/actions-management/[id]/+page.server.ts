import { start_mongo } from "$db/mongo";
import type { Cookies } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { ObjectId } from "mongodb";
import { fetchProtectedData } from "../../../protected/util";

export const load: PageServerLoad = async ({
  params,
  cookies,
  fetch,
}: {
  params: { id: string };
  cookies: Cookies;
  fetch: typeof globalThis.fetch;
}) => {
  const db = await start_mongo();

  await fetchProtectedData(cookies, fetch);

  // Fetch data from MongoDB
  const actions = db.collection("actions");

  const id = params.id;
  const data = await actions.findOne({ _id: new ObjectId(id) });
  if (data) {
    const serializedData = { ...data, _id: data._id.toString() };

    return {
      action: serializedData,
    };
  }
};
