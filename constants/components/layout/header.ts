type HeaderMenuName = "Home" | "Projects" | "About Me" | "Contact" | "Resume";

export type HeaderMenuItem = {
  name: HeaderMenuName;
  link: string;
  icon?: JSX.Element | undefined;
};

const HEADER_MENU_ITEMS: HeaderMenuItem[] = [
  { name: "Projects", link: "/projects" },
  { name: "About Me", link: "/about-me" },
  { name: "Contact", link: "/contact" },
  { name: "Resume", link: "/resume" },
];

export { HEADER_MENU_ITEMS };
