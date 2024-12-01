import { getLocaleFromCookies } from "@/utils/utils";
import { HomepageScreen } from "./_components/homepageScreen/HomepageScreen";

export default function Home() {
  const locale = getLocaleFromCookies();
  return <HomepageScreen />;
}
