"use client";

import { FOOTER_TEXT } from "@/constants/components/layout/footer";
import { cn } from "@/utils/cn";

export const Footer = () => {
  return (
    <div
      className={cn(
        "py-16 min-h-[unset] lg:py-12 text-primary-color w-full text-xs flex flex-col items-center justify-center font-semibold"
      )}
    >
      <p>{FOOTER_TEXT}</p>
    </div>
  );
};
