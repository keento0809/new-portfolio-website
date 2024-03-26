"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  HERO_TEXT_NAME,
  HERO_TEXT_START,
  HERO_TEXT_TITLE_AND_LOCATION,
} from "@/constants/components/section/heroSection";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <AuroraBackground className="w-full bg-neutral-950 relative flex items-center justify-center pb-16">
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
        className="optimized-for-animation relative flex items-center justify-center px-4 pb-6 lg:pb-4"
      >
        <div className="flex items-center lg:items-start flex-col gap-4 lg:gap-5">
          <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-color text-center">
            {HERO_TEXT_START}{" "}
            <span className="text-blue-500">{HERO_TEXT_NAME}</span>
          </div>
          <div className="text-base lg:text-xl 2xl:text-2xl font-medium text-neutral-400">
            {HERO_TEXT_TITLE_AND_LOCATION}
          </div>
          <div>
            <Link
              href="/projects"
              className="block mt-2 bg-neutral-950 px-4 py-2 lg:px-6 lg:py-3 border-neutral-500 border rounded-full w-fit text-primary-color text-sm 2xl:text-base cursor-pointer z-50 hover:scale-105 transition-all"
            >
              Explore
            </Link>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
