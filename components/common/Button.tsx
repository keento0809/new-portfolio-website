"use client";

import { FC } from "react";

type ButtonProps = {
  buttonText: string;
};

export const Button: FC<ButtonProps> = ({ buttonText }) => {
  return (
    <button className="block dark:bg-slate-900 text-white dark:border-slate-800">
      {buttonText}
    </button>
  );
};
