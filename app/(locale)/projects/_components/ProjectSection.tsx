"use client";

import { Title } from "@/components/common/Title";
import { ProjectLayout } from "./ProjectLayout";
import { useProjects } from "../_hooks/useProjects";
import { motion } from "framer-motion";
import { PROJECT_DESCRIPTION } from "@/constants/components/section/projects/projectSection";
import { ptSelf } from "../../ui/font";
import { cn } from "@/utils/cn";

export const ProjectSection = () => {
  const { projects, thumbnails } = useProjects();
  return (
    <div className="min-h-svh bg-gradient-to-br from-neutral-950 to-neutral-700 w-full relative pt-24 lg:pt-28 flex flex-col gap-8 pb-20 lg:pb-32 px-6">
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <Title titleText="Projects" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="z-30"
      >
        <div
          className={cn(
            ptSelf.className,
            "pb-8 text-center text-sm lg:text-base whitespace-pre-wrap"
          )}
        >
          {PROJECT_DESCRIPTION}
        </div>
        <ProjectLayout projects={projects} thumbnails={thumbnails} />
      </motion.div>
    </div>
  );
};
