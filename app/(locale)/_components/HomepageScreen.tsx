"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AboutMeSection } from "./section/AboutMeSection";
import { HeroSection } from "./section/HeroSection";
import { ProjectSection } from "./section/ProjectSection";
import { ContactMeSection } from "./section/ContactMeSection";

export const HomepageScreen = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <AboutMeSection />
      <ContactMeSection />
    </>
  );
};
