"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <AuroraBackground className="min-h-svh w-full bg-neutral-950 relative flex items-center justify-center pb-16">
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
        className="optimized-for-animation relative min-w-[100vw] flex items-center justify-center px-4 pb-6 lg:pb-4"
      >
        <div className="flex items-center lg:items-start flex-col gap-4 lg:gap-6">
          <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-color text-center">
            Hi, I&apos;m <span className="text-blue-500">Kento</span>
          </div>
          <div className="text-base lg:text-xl xl:text-2xl font-medium text-neutral-400">
            Web Developer based in Vancouver
          </div>
          <div>
            <Link
              href="/projects"
              className="block mt-2 bg-neutral-950 px-4 py-2 lg:px-6 lg:py-3 border-neutral-500 border rounded-full w-fit text-primary-color text-base cursor-pointer z-50 hover:scale-105 transition-all"
            >
              Explore
            </Link>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
