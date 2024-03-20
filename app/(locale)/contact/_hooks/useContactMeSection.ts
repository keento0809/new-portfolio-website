import { useEffect, useState } from "react";
import { useContentful } from "../../_hooks/useContentful";

export const useContactMeSection = () => {
  const { getResume } = useContentful();
  const [resume, setResume] = useState("");
  useEffect(() => {
    getResume()
      .then((res) => setResume(res?.myResume.fields.file.url ?? "aaaa"))
      .catch((e) => console.log(e));
  }, [getResume]);
  return { resume };
};
