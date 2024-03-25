"use client";

import { Title } from "@/components/common/Title";
import { ProjectLayout } from "./ProjectLayout";
import { useProjects } from "../_hooks/useProjects";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export const ProjectSection = () => {
  const { projects, thumbnails } = useProjects();
  return (
    <AuroraBackground className="min-h-svh w-full pb-48">
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="optimized-for-animation relative w-full max-w-[100vw] flex flex-col gap-8 lg:pb-4 px-4"
      >
        <div>
          <Title titleText="Projects" />
        </div>
        <div className="z-30">
          <ProjectLayout projects={projects} thumbnails={thumbnails} />
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
