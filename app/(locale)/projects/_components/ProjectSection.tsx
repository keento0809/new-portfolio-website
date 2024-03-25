"use client";

import { Title } from "@/components/common/Title";
import { ProjectLayout } from "./ProjectLayout";
import { useProjects } from "../_hooks/useProjects";
import { motion } from "framer-motion";

export const ProjectSection = () => {
  const { projects, thumbnails } = useProjects();
  return (
    <>
      <div className="min-h-svh bg-gradient-to-tr from-neutral-950 to-neutral-800 w-full relative pt-20 flex flex-col gap-8 pb-6 px-4">
        <motion.div
          initial={{ opacity: 0.0, y: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <Title titleText="Projects" />
        </motion.div>
        <div className="z-30">
          <ProjectLayout projects={projects} thumbnails={thumbnails} />
        </div>
      </div>
    </>
  );
};
