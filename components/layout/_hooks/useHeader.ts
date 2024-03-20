import { IResumeFields } from "@/@types/generated/contentful";
import { useContentful } from "@/app/(locale)/_hooks/useContentful";
import { useEffect, useState } from "react";

export const useHeader = () => {
  const { getResume } = useContentful();
  const [resumeURL, setResumeURL] = useState<string>("");

  useEffect(() => {
    getResume()
      .then((res: IResumeFields | undefined) => {
        setResumeURL(res ? res.myResume.fields.file.url : "");
      })
      .catch((error) => console.log(error));
  }, [getResume]);

  return { resumeURL };
};
