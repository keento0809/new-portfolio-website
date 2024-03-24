"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-svh w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <AuroraBackground className="">
        <motion.div
          initial={{ opacity: 0.0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="relative min-w-[100vw] flex items-center justify-center px-4 pb-6 lg:pb-4"
        >
          <div className="flex items-center lg:items-start flex-col gap-4 lg:gap-6">
            <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-color text-center">
              Hi, I&apos;m <span className="text-blue-500">Kento</span>
            </div>
            <div className="text-base lg:text-xl xl:text-2xl font-medium text-neutral-400">
              Web Developer based in Vancouver
            </div>
            <button className="border-neutral-200 dark:border-neutral-500 rounded-full w-fit text-primary-color font-medium px-4 py-2 lg:px-6 lg:py-3">
              <Link href="/projects">Explore</Link>
            </button>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};
