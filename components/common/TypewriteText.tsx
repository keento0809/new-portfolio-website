"use client";

import { FC } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export type TypewriteWords =
  | { text: string; className?: undefined }
  | { text: string; className: string };

type TypewriteTextProps = {
  words: TypewriteWords[];
  delay?: number;
};

export const TypewriterText: FC<TypewriteTextProps> = ({ words, delay }) => {
  return <TypewriterEffectSmooth words={words} delay={delay} />;
};
