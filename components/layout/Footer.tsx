"use client";

import { FOOTER_TEXT } from "@/constants/components/layout/footer";
import { cn } from "@/utils/cn";

export const Footer = () => {
  return (
    <div
      className={cn(
        "py-6 min-h-[unset] lg:py-10 bg-white/90 text-neutral-950 w-full text-xs flex flex-col items-center justify-center"
      )}
    >
      <p>{FOOTER_TEXT}</p>
    </div>
  );
};
