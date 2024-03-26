"use client";

import { FOOTER_TEXT } from "@/constants/components/layout/footer";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "py-3 bg-white text-neutral-950 w-full text-xs flex flex-col items-center justify-center",
        pathname === "/" && "bg-[#181818]"
      )}
    >
      <p>{FOOTER_TEXT}</p>
    </div>
  );
};
