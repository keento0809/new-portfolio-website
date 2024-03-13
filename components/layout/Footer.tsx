"use client";

import { FOOTER_TEXT } from "@/constants/components/layout/footer";

export const Footer = () => {
  return (
    <div className="text-xs bg-neutral-950 text-primary-color w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <p>{FOOTER_TEXT}</p>
    </div>
  );
};
