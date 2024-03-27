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
import { MobileMenu } from "./_components/MobileMenu";

export const Header: FC = () => {
  const pathname = usePathname();
  const { resumeURL, isMenuOpen, openMenu, closeMenu, handleClickMenu } =
    useHeader();

  return (
    <div className="absolute top-0 lg:top-2 inset-x-0 mx-auto z-40">
      <Menu>
        {isMenuOpen && (
          <MobileMenu resumeURL={resumeURL} handleClick={handleClickMenu} />
        )}

        <div>
          <Link href={"/"} className="text-sm lg:text-base text-white/80">
            {/* TODO: replace to logo later */}
            K.H
          </Link>
        </div>

        <div
          className="relative text-sm md:hidden transition-all"
          onClick={!isMenuOpen ? openMenu : closeMenu}
        >
          {!isMenuOpen ? (
            <MenuIcon className="text-white/80 cursor-pointer" />
          ) : (
            <CancelIcon className="relative z-[60] text-white/80 cursor-pointer" />
          )}
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
