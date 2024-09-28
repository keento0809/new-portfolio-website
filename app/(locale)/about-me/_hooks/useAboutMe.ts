import { useEffect } from "react";
import { useContentful } from "../../_hooks/useContentful";

export const useAboutMe = () => {
  const { getResume } = useContentful();
  useEffect(() => {
    getResume()
      .then((res) => console.log("response: ", res))
      .catch((error) => console.log(error));
  }, [getResume]);
};
