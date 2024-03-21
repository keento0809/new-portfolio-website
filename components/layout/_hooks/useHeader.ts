import { useEffect, useState } from "react";
import { useContentful } from "@/app/(locale)/_hooks/useContentful";

export const useHeader = () => {
  const { getResume } = useContentful();
  const [resumeURL, setResumeURL] = useState("");

  useEffect(() => {
    getResume()
      .then((res) => setResumeURL(res?.myResume.fields.file.url ?? ""))
      .catch((e) => console.log(e));
  }, [getResume]);

  return { resumeURL };
};
