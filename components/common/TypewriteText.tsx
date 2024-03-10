"use client";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export const TypewriterText = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
};
