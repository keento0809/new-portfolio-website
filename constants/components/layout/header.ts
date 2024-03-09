type HeaderMenuName = "Home" | "Projects" | "About Me" | "Contact" | "Resume";

export type HeaderMenuItem = {
  name: HeaderMenuName;
  link: string;
  icon?: JSX.Element | undefined;
};

const HEADER_MENU_ITEMS: HeaderMenuItem[] = [
  { name: "Home", link: "#hero" },
  { name: "Projects", link: "#projects" },
  { name: "About Me", link: "#aboutMe" },
  { name: "Contact", link: "#contact" },
];

export { HEADER_MENU_ITEMS };
