"use client";

import { FC } from "react";
import { Button as Component } from "../ui/moving-border";

type ButtonProps = {
  buttonText: string;
};

export const Button: FC<ButtonProps> = ({ buttonText }) => {
  return (
    <Component
      borderRadius="1.75rem"
      className=" dark:bg-slate-900 text-white dark:border-slate-800"
    >
      {buttonText}
    </Component>
  );
};
