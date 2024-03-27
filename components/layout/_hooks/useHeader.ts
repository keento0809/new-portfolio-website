import { useEffect, useState } from "react";
import { useContentful } from "@/app/(locale)/_hooks/useContentful";

export const useHeader = () => {
  const { getResume } = useContentful();
  const [resumeURL, setResumeURL] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    getResume()
      .then((res) => setResumeURL(res?.myResume.fields.file.url ?? ""))
      .catch((e) => console.log(e));
  }, [getResume]);

  return { resumeURL, isMenuOpen, openMenu, closeMenu };
};
