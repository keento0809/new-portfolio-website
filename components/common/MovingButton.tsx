"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export const MovingButton = () => {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className=" dark:bg-slate-900 text-white dark:text-white dark:border-slate-800"
      >
        Borders are cool
      </Button>
    </div>
  );
};
