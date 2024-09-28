import {
  IProjectFields,
  IThumbnailFields,
} from "@/@types/generated/contentful";
import { LayoutGrid } from "@/components/ui/aceturnityUI/layoutGrid/layout-grid";
import React, { FC, Suspense } from "react";
import { ProjectCard } from "./_components/projectCard/ProjectCard";

type ProjectLayoutProps = {
  projects: IProjectFields[];
  thumbnails: IThumbnailFields[];
};

export const ProjectLayout: FC<ProjectLayoutProps> = ({
  projects,
  thumbnails,
}) => {
  const cards = projects.map((project, idx) => {
    const correspondThumbnail = thumbnails.find(
      (t) => t.fields.title === project.fields.title
    );
    const thumbnailURL = correspondThumbnail
      ? "https:" + correspondThumbnail.fields.file.url
      : "";
    return {
      id: idx + 1,
      content: (
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectCard project={project} />
        </Suspense>
      ),
      className: "col-span-1",
      thumbnail: thumbnailURL,
    };
  });
  return (
    <div className="h-[80vh] xl:w-[1024px] mx-auto z-50">
      <LayoutGrid cards={cards} />
    </div>
  );
};
