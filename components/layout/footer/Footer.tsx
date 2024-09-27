"use client";

import { cn } from "@/utils/cn";
import { FOOTER_TEXT } from "./_constants/footer";

export const Footer = () => {
  return (
    <div
      className={cn(
        "py-16 min-h-[unset] bg-neutral-900 lg:py-12 text-primary-color w-full text-xs flex flex-col items-center justify-center font-semibold"
      )}
    >
      <p>{FOOTER_TEXT}</p>
    </div>
  );
};
