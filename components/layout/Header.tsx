"use client";

import { Menu } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HEADER_MENU_ITEMS } from "@/constants/components/layout/header";
import { usePathname } from "next/navigation";
import { useHeader } from "./_hooks/useHeader";

export const Header = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const { resumeURL } = useHeader();
  return (
    <div className={cn("absolute top-2 inset-x-0 mx-auto z-50", className)}>
      <Menu>
        {/* TODO: fix this later */}
        <Link href={"/"}>K.H</Link>
        <div className="text-primary-color text-xs w-full flex justify-end items-center gap-x-12 ">
          {HEADER_MENU_ITEMS.map((menu) => (
            <Link
              key={menu.name}
              href={menu.name !== "Resume" ? menu.link : resumeURL}
              className={cn(
                "block hover:text-blue-500 ease-in-out transition-all",
                menu.link === pathname && "text-blue-500"
              )}
              // target={menu.target}
              // passHref
              // rel="noopener noreferrer"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </Menu>
    </div>
  );
};
