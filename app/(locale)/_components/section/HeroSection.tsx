"use client";
import { TypewriterText } from "@/components/common/TypewriteText";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  TYPEWRITER_TEXT_FIRST_PARAGRAPH,
  TYPEWRITER_TEXT_SECOND_PARAGRAPH,
  TYPEWRITER_TEXT_THIRD_PARAGRAPH,
} from "@/constants/components/section/heroSection";

export const HeroSection = () => {
  return (
    <div
      id="hero"
      className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="mx-auto lg:min-w-[600px] flex flex-col gap-8 p-2">
        <div className="w-full">
          <TypewriterText words={TYPEWRITER_TEXT_FIRST_PARAGRAPH} />
          <TypewriterText words={TYPEWRITER_TEXT_SECOND_PARAGRAPH} delay={3} />
          <TypewriterText words={TYPEWRITER_TEXT_THIRD_PARAGRAPH} delay={5} />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};
