"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import { PROFILE_SUB_TEXTS } from "@/constants/components/section/aboutMe/profile";
import Image from "next/image";
import { FC } from "react";

type ProfileProps = {
  descriptions: Record<string, string>[];
};

export const Profile: FC<ProfileProps> = ({ descriptions }) => {
  console.log("dsc: ", descriptions);
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-center md:max-w-5xl mx-auto">
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
        {descriptions[0]
          ? Object.values(descriptions[0]).map((d, idx) => {
              return idx < 2 ? (
                <div
                  className="text-base md:text-lg font-medium text-white/80 py-3"
                  key={d}
                >
                  {/* TODO: Add subtext here */}
                  {PROFILE_SUB_TEXTS[idx].title} {d}
                </div>
              ) : null;
            })
          : null}
      </div>
    </div>
  );
};
