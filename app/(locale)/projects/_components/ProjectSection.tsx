"use client";

import { Title } from "@/components/common/Title";
import { ProjectLayout } from "./ProjectLayout";
import { useProjects } from "../_hooks/useProjects";
import { motion } from "framer-motion";

export const ProjectSection = () => {
  const { projects, thumbnails } = useProjects();
  return (
    <div className="min-h-svh bg-gradient-to-br from-neutral-950 to-neutral-700 w-full relative pt-24 lg:pt-28 flex flex-col gap-8 pb-6 px-4">
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
        <ProjectLayout projects={projects} thumbnails={thumbnails} />
      </motion.div>
    </div>
  );
};
