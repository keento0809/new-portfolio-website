"use client";

import { Title } from "@/components/common/Title";
import { ProfileContentsTab } from "./ProfileContentsTab";
import { useAboutMe } from "../_hooks/useAboutMeSection";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { Profile } from "./Profile";

export const AboutMeSection = () => {
  const { skillSets, descriptions, skillDataArray } = useAboutMe();
  return (
    <AuroraBackground className="min-h-svh w-full pb-48">
      <motion.div
        initial={{ opacity: 0.0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="relative w-full max-w-[100vw] flex flex-col lg:pb-4"
      >
        <div className="mt-6">
          <Title titleText="About Me" />
        </div>
        <div className="flex flex-col w-full lg:gap-14">
          <Profile descriptions={descriptions} />
          <ProfileContentsTab
            skillSets={skillSets}
            skillDataArray={skillDataArray}
          />
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
