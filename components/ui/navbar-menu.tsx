"use client";

import { motion } from "framer-motion";

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-transparent shadow-input flex items-center justify-between lg:justify-end gap-x-12 px-6 lg:px-32 py-6"
    >
      {children}
    </motion.div>
  );
};
