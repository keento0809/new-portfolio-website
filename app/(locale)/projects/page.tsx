import { Metadata } from "next";
import { ProjectSection } from "./_components/ProjectSection";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return <ProjectSection />;
}
