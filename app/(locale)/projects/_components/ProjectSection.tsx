"use client";

import { Title } from "@/components/common/Title";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ProjectLayout } from "./ProjectLayout";
import { useProjects } from "../_hooks/useProjects";

export const ProjectSection = () => {
  const { projects, thumbnails } = useProjects();
  return (
    <section
      id="projects"
      className="pt-20 pb-32 min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="mt-6">
        <Title titleText="Projects" />
      </div>
      <div className="z-30 py-4">
        <ProjectLayout projects={projects} thumbnails={thumbnails} />
      </div>
      <BackgroundBeams />
    </section>
  );
};
