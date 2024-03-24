"use client";

import {
  IProjectFields,
  IThumbnailFields,
} from "@/@types/generated/contentful";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { FC } from "react";

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
      content: <ProjectCard project={project} />,
      className: "col-span-1",
      thumbnail: thumbnailURL,
    };
  });
  return (
    // TODO: fix height with calc later
    <div className="h-[80vh] xl:w-[1024px] mx-auto z-50">
      <LayoutGrid cards={cards} />
    </div>
  );
};

const ProjectCard = ({ project }: { project: IProjectFields }) => {
  const projectTitle = project.fields.title;
  const { summary } = project.fields.projectData[0];
  return (
    <div className="cursor-pointer flex flex-col gap-2 lg:gap-4">
      <p className="font-bold text-xl lg:text-4xl text-white">{projectTitle}</p>
      <p className="font-normal text-sm lg:text-base max-w-lg text-neutral-200">
        {summary}
      </p>
    </div>
  );
};
