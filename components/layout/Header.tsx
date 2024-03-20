"use client";

import { FC } from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HEADER_MENU_ITEMS } from "@/constants/components/layout/header";
import { usePathname } from "next/navigation";

export const Header: FC = () => {
  const pathname = usePathname();
  const isResume = (resumeURL: string | undefined): resumeURL is string => {
    return !!resumeURL;
  };
  return (
    <div className="absolute top-2 inset-x-0 mx-auto z-50">
      <Menu>
        <Link href={"/"}>K.H</Link>
        <div className="text-primary-color text-xs w-full flex justify-end items-center gap-x-12 ">
          {HEADER_MENU_ITEMS.map((menu) => (
            <Link
              key={menu.name}
              href={
                menu.name === "Resume" &&
                isResume(process.env.NEXT_PUBLIC_RESUME_URL)
                  ? process.env.NEXT_PUBLIC_RESUME_URL
                  : menu.link
              }
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
