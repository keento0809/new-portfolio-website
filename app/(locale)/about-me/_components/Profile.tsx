"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import { FC } from "react";

type ProfileProps = {
  descriptions: Record<string, string>[];
};

export const Profile: FC<ProfileProps> = ({ descriptions }) => {
  return (
    <div className="w-full flex items-center justify-center md:max-w-5xl mx-auto">
      <PinContainer
        className="flex-1"
        title="Kento Honda：Web Developer"
        href="#"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[14rem] h-[14rem] ">
          <Image
            src="/assets/myself-picture.png"
            className="rounded-md"
            fill
            alt="test-image"
          />
        </div>
      </PinContainer>
      <div className="z-50 flex-1">
        {Object.values(descriptions[0]).map((d, idx) => {
          return idx < 2 ? (
            <div className="text-base text-white py-3" key={d}>
              {d}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};
