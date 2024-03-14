"use client";

import { FOOTER_TEXT } from "@/constants/components/layout/footer";

export const Footer = () => {
  return (
    <div className="pb-3 bg-[#0a0a0a] w-full text-xs rounded-md flex flex-col items-center justify-center antialiased">
      <p className="text-primary-color">{FOOTER_TEXT}</p>
    </div>
  );
};
