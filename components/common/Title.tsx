"use client";

import { FC } from "react";

type TitleProps = {
  titleText: string;
};

export const Title: FC<TitleProps> = ({ titleText }) => {
  return (
    <div className="w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-2xl text-xl lg:text-4xl font-bold text-center text-primary-color relative z-20">
        {titleText}
      </h1>
    </div>
  );
};
