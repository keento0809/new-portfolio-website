"use client";

import { Title } from "@/components/common/Title";
import { ProfileContentsTab } from "./ProfileContentsTab";
import { useAboutMe } from "../_hooks/useAboutMeSection";
import { Profile } from "./Profile";
import { motion } from "framer-motion";

export const AboutMeSection = () => {
  const { skillSets, descriptions, skillDataArray } = useAboutMe();
  return (
    <>
      <div className="min-h-svh bg-gradient-to-tr from-neutral-950 to-neutral-700 w-full relative pt-20 flex flex-col gap-8 pb-6 px-4">
        <motion.div
          initial={{ opacity: 0.0, y: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <Title titleText="About Me" />
        </motion.div>
        <div className="flex flex-col w-full lg:gap-14">
          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <Profile descriptions={descriptions} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <ProfileContentsTab
              skillSets={skillSets}
              skillDataArray={skillDataArray}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};
