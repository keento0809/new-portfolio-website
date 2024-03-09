import { ProjectCard } from "@/components/common/ProjectCard";
import { Title } from "@/components/common/Title";

export const AboutMeSection = () => {
  return (
    <div id="aboutMe" className="min-h-screen">
      <Title titleText="About Me" />
      <div className="">
        <ProjectCard />
      </div>
    </div>
  );
};
