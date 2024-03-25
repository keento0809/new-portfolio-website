"use client";

import { Title } from "@/components/common/Title";
import { ProjectLayout } from "./ProjectLayout";
import { useProjects } from "../_hooks/useProjects";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export const ProjectSection = () => {
  const { projects, thumbnails } = useProjects();
  return (
    <AuroraBackground>
      <div className="min-h-svh w-full pb-48 relative pt-6 flex flex-col gap-8 lg:pb-4 px-4">
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
    </AuroraBackground>
  );
};
