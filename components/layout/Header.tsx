"use client";

import { FC } from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HEADER_MENU_ITEMS } from "@/constants/components/layout/header";
import { usePathname } from "next/navigation";
import { useHeader } from "./_hooks/useHeader";
import { MenuIcon } from "../icons";

export const Header: FC = () => {
  const pathname = usePathname();
  const { resumeURL } = useHeader();

  return (
    <div className="absolute top-2 inset-x-0 mx-auto z-50">
      <Menu>
        <div className="">
          <Link href={"/"} className="text-sm lg:text-base text-white/80">
            K.H
          </Link>
        </div>

        <div className="text-sm md:hidden">
          <MenuIcon className="text-white/80" />
        </div>

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
