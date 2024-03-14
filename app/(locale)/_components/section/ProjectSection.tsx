"use client";

import { Title } from "@/components/common/Title";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ProjectLayout } from "./project/ProjectLayout";

export const ProjectSection = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <Title titleText="Projects" />
      <div className="z-30 py-10">
        <ProjectLayout />
      </div>
      <BackgroundBeams />
    </div>
  );
};
