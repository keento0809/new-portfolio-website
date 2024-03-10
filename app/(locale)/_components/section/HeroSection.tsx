"use client";
import { TypewriterText } from "@/components/common/TypewriteText";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const HeroSection = () => {
  return (
    <div
      id="hero"
      className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="mx-auto p-4">
        <TypewriterText />
      </div>
      <BackgroundBeams />
    </div>
  );
};
