import { HTMLAttributeAnchorTarget } from "react";

type HeaderMenuName = "Home" | "Projects" | "About Me" | "Contact" | "Resume";

export type HeaderMenuItem = {
  name: HeaderMenuName;
  link: string;
  target?: HTMLAttributeAnchorTarget;
};

const HEADER_MENU_ITEMS: HeaderMenuItem[] = [
  { name: "Projects", link: "/projects" },
  { name: "About Me", link: "/about-me" },
  { name: "Contact", link: "/contact" },
  { name: "Resume", link: "/" },
];

export { HEADER_MENU_ITEMS };
