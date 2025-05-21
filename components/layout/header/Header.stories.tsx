import { Menu } from "@/components/ui/aceturnityUI/navbarMenu/navbar-menu";
import type { Meta, StoryObj } from "@storybook/react";
import { MobileMenu } from "./_components/MobileMenu";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "../../../utils/cn";
import { HEADER_MENU_ITEMS } from "./_constants/header";
import { MenuIcon } from "@/components/icons";
import { CancelIcon } from "@/components/icons/cancelIcon";

const HeaderWithMock = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const resumeURL = "https://example.com/resume.pdf";
  const pathname = "/"; // Mock current path

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const handleClickMenu = (link: string) => {
    console.log(`Navigating to: ${link}`);
    closeMenu();
  };

  return (
    <header className="absolute top-0 lg:top-2 inset-x-0 mx-auto z-40">
      <Menu>
        {isMenuOpen && (
          <MobileMenu resumeURL={resumeURL} handleClick={handleClickMenu} />
        )}

        <div>
          <Link href={"/"} className="text-sm lg:text-base text-white/80">
            <Image
              src="/assets/header-logo.png"
              alt="logo"
              width={60}
              height={60}
              className="inline aspect-auto"
            />
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
    </header>
  );
};

const meta = {
  title: "Components/Layout/Header",
  component: HeaderWithMock,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeaderWithMock>;

export default meta;
type Story = StoryObj<typeof HeaderWithMock>;

export const Default: Story = {};
