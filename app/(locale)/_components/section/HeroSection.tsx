"use client";
import { TypewriterText } from "@/components/common/TypewriteText";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const HeroSection = () => {
  return (
    <div
      id="hero"
      className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="mx-auto lg:min-w-[600px] p-4">
        <TypewriterText
          words={[
            {
              text: "Hi, ",
            },
            {
              text: "I'm",
            },
            {
              text: "KENTO",
              className: "text-blue-500",
            },
          ]}
        />
        <TypewriterText
          words={[
            {
              text: "Web Developer",
            },
          ]}
          delay={3}
        />
        <TypewriterText
          words={[
            {
              text: "Based in Vancouver",
            },
          ]}
          delay={5}
        />
      </div>
      <BackgroundBeams />
    </div>
  );
};
