import { cookies } from "next/headers";

export function getLocaleFromCookies() {
  const cookiesStore = cookies();
  const locale = cookiesStore.get("locale")?.value || "en";

  return locale;
}
