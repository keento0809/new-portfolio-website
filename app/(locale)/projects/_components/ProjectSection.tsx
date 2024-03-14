"use client";

import { Title } from "@/components/common/Title";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ProjectLayout } from "./ProjectLayout";

export const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="pt-20 pb-32 min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <Title titleText="Projects" />
      <div className="z-30 py-4">
        <ProjectLayout />
      </div>
      <BackgroundBeams />
    </section>
  );
};
