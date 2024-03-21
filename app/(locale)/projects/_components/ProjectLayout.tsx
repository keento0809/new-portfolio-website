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
      content: <Skeleton project={project} />,
      className: "col-span-1",
      thumbnail: thumbnailURL,
    };
  });
  return (
    // TODO: fix height with calc later
    <div className="h-[80vh] w-[1024px] mx-auto z-50">
      <LayoutGrid cards={cards} />
    </div>
  );
};

const Skeleton = ({ project }: { project: IProjectFields }) => {
  return (
    <div className="cursor-pointer">
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};
