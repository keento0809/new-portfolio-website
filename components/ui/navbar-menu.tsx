"use client";

import { motion } from "framer-motion";

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: "easeIn",
      }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      className="optimized-for-animation w-full relative rounded-full dark:bg-black dark:border-white/[0.2] bg-transparent shadow-input flex items-center justify-between lg:justify-end gap-x-12 px-6 lg:px-32 py-6 lg:max-w-5xl xl:max-w-7xl mx-auto"
    >
      {children}
    </motion.div>
  );
};
