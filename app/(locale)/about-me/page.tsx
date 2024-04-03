import { Metadata } from "next";
import { AboutMeSection } from "./_components/AboutMeSection";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutMe() {
  return <AboutMeSection />;
}
