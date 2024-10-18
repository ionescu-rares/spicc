import type { PageServerLoad } from "./$types";
import { fetchProtectedData } from "../../protected/util";

export const load: PageServerLoad = async ({ cookies, fetch }) => {
  await fetchProtectedData(cookies, fetch);
};
