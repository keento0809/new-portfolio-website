"use client";
import { TypewriterText } from "@/components/common/TypewriteText";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  TYPEWRITER_TEXT_FIRST_PARAGRAPH,
  TYPEWRITER_TEXT_SECOND_PARAGRAPH,
  TYPEWRITER_TEXT_THIRD_PARAGRAPH,
} from "@/constants/components/section/heroSection";
import { MotionLinkButton } from "@/app/_components/ui/MotionLinkButton";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="mx-auto min-w-[calc(100vw_-_3rem)] md:min-w-[600px] flex flex-col gap-8 p-2">
        <div className="w-full">
          <TypewriterText words={TYPEWRITER_TEXT_FIRST_PARAGRAPH} />
          <TypewriterText words={TYPEWRITER_TEXT_SECOND_PARAGRAPH} delay={3} />
          <TypewriterText words={TYPEWRITER_TEXT_THIRD_PARAGRAPH} delay={5} />
        </div>
        <div className="z-50">
          <MotionLinkButton buttonText="Explore" link="/projects" delay={7} />
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};
