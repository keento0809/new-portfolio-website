"use client";

import {
  IProjectFields,
  IThumbnailFields,
} from "@/@types/generated/contentful";
import { GitHubIcon, LinkIcon } from "@/components/icons";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Link from "next/link";
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
  const { summary, linkUrl, languages, gitHubUrl } =
    project.fields.projectData[0];
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {languages.map((lang) => {
            return (
              <div key={lang.name} className="text-white">
                <i
                  className={`devicon-${lang.name}-${lang.type ? lang.type : "original"} text-white text-xl w-5 h-5`}
                ></i>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cursor-pointer flex flex-col gap-4">
        <div>
          <p className="font-bold text-xl lg:text-2xl lg:pb-2 text-neutral-300">
            {projectTitle}
          </p>
          <p className="font-normal text-sm lg:text-base max-w-lg text-neutral-400">
            {summary}
          </p>
        </div>
        <div className="self-end flex items-center gap-4">
          <Link
            href={`https://github.com/${gitHubUrl}`}
            className="block hover:scale-110 transition-all"
          >
            <GitHubIcon className="w-5 h-5 text-white" />
          </Link>
          <Link
            href={`${linkUrl}`}
            className="block hover:scale-110 transition-all"
          >
            <LinkIcon className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>
    </>
  );
};
