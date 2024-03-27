"use client";

import { FC } from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HEADER_MENU_ITEMS } from "@/constants/components/layout/header";
import { usePathname } from "next/navigation";
import { useHeader } from "./_hooks/useHeader";
import { MenuIcon } from "../icons";
import { CancelIcon } from "../icons/cancelIcon";
import { motion } from "framer-motion";

export const Header: FC = () => {
  const pathname = usePathname();
  const { resumeURL, isMenuOpen, openMenu, closeMenu } = useHeader();

  return (
    <div className="absolute top-2 inset-x-0 mx-auto z-50">
      <Menu>
        <div className="">
          <Link href={"/"} className="text-sm lg:text-base text-white/80">
            K.H
          </Link>
        </div>

        <div
          className="relative text-sm md:hidden transition-all"
          onClick={!isMenuOpen ? openMenu : closeMenu}
        >
          {!isMenuOpen ? (
            <MenuIcon className={cn("text-white/80")} />
          ) : (
            <CancelIcon className="relative z-50" />
          )}
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full bg-gradient-to-br from-neutral-950 to-neutral-700 lg:hidden z-40">
            <motion.div
              initial={{ opacity: 0.0, y: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col w-full h-svh items-center gap-16 justify-center pb-12"
            >
              {HEADER_MENU_ITEMS.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.name === "Resume" ? resumeURL : menu.link}
                  className={cn(
                    "block hover:text-blue-500 text-primary-color font-medium text-base ease-in-out transition-all"
                  )}
                  target={menu.target}
                  rel="noopener noreferrer"
                  locale={false}
                >
                  {menu.name}
                </Link>
              ))}
            </motion.div>
          </div>
        )}

        <div className="hidden text-primary-color text-xs w-full md:flex justify-end items-center gap-x-12">
          {HEADER_MENU_ITEMS.map((menu) => (
            <Link
              key={menu.name}
              href={menu.name === "Resume" ? resumeURL : menu.link}
              className={cn(
                "block hover:text-blue-500 ease-in-out transition-all",
                menu.link === pathname && "text-blue-500"
              )}
              target={menu.target}
              rel="noopener noreferrer"
              locale={false}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </Menu>
    </div>
  );
};
