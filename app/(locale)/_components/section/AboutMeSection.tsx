import { Title } from "@/components/common/Title";
import { useContentful } from "../../_hooks/useContentful";
import { useEffect } from "react";
import { MovingButton } from "@/components/common/MovingButton";
import { TypewriteText } from "@/components/common/TypewriteText";

export const AboutMeSection = () => {
  const { getResume } = useContentful();
  useEffect(() => {
    getResume();
  }, [getResume]);
  return (
    <div id="aboutMe" className="min-h-screen">
      <Title titleText="About Me" />
      <TypewriteText />
      <MovingButton />
    </div>
  );
};
