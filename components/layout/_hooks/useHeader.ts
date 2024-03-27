import { useEffect, useState } from "react";
import { useContentful } from "@/app/(locale)/_hooks/useContentful";
import { useRouter } from "next/navigation";

export const useHeader = () => {
  const { getResume } = useContentful();
  const [resumeURL, setResumeURL] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const handleClickMenu = (link: string) => {
    router.push(link);
    setTimeout(() => {
      closeMenu();
    }, 500);
  };

  useEffect(() => {
    getResume()
      .then((res) => setResumeURL(res?.myResume.fields.file.url ?? ""))
      .catch((e) => console.log(e));
  }, [getResume]);

  return { resumeURL, isMenuOpen, openMenu, closeMenu, handleClickMenu };
};
