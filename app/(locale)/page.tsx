"use client";

import { useEffect } from "react";
import { HomepageScreen } from "./_components/HomepageScreen";
import { useContentful } from "./_hooks/useContentful";

export default function Home() {
  const { getResume, getProjects } = useContentful();
  useEffect(() => {
    getProjects();
    getResume().then((res) => console.log(res?.myResume.fields.file.url));
  }, [getResume, getProjects]);
  return <HomepageScreen />;
}
