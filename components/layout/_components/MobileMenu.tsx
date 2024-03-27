"use client";

import { HEADER_MENU_ITEMS } from "@/constants/components/layout/header";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { FC } from "react";

type MobileMenuProps = {
  handleClick: (link: string) => void;
  resumeURL: string;
};

export const MobileMenu: FC<MobileMenuProps> = ({ resumeURL, handleClick }) => {
  return (
    <div className="fixed top-0 left-0 h-svh w-full bg-gradient-to-br from-neutral-950 to-neutral-700 lg:hidden z-50">
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="flex flex-col w-full h-svh items-center gap-16 justify-center pb-12"
      >
        {HEADER_MENU_ITEMS.map((menu) => (
          <span
            key={menu.name}
            className={cn(
              "block hover:text-blue-500 text-primary-color font-medium text-base ease-in-out transition-all cursor-pointer"
            )}
            rel="noopener noreferrer"
            onClick={() =>
              handleClick(menu.name === "Resume" ? resumeURL : menu.link)
            }
          >
            {menu.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
