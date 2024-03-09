"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { HEADER_MENU_ITEMS } from "@/constants/components/layout/header";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function Header() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={HEADER_MENU_ITEMS} />
    </div>
  );
}
