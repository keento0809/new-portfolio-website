import { useEffect, useState } from "react";
import { useContentful } from "@/app/(locale)/_hooks/useContentful";

export const useContactMeSection = () => {
  const { getResume, getThumbnails } = useContentful();
  const [resumeURL, setResumeURL] = useState("");

  useEffect(() => {
    getThumbnails();
    getResume()
      .then((res) => setResumeURL(res?.myResume.fields.file.url ?? ""))
      .catch((e) => console.log(e));
  }, [getResume]);

  return { resumeURL };
};
