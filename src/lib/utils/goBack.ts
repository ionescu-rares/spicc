import { page } from "$app/stores";
import { goto } from "$app/navigation";
import { get } from "svelte/store";

export const goBack = () => {
  const currentPage = get(page);
  goto(
    currentPage.url.pathname.substring(
      0,
      currentPage.url.pathname.lastIndexOf("/")
    )
  );
};
