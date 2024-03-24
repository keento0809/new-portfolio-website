"use client";

import Image from "next/image";
import { FC } from "react";
import { PROFILE_SUB_TEXTS } from "@/constants/components/section/aboutMe/profile";

type ProfileProps = {
  descriptions: Record<string, string>[];
};

export const Profile: FC<ProfileProps> = ({ descriptions }) => {
  return (
    <div className="w-full max-w-[100vw] flex md:flex-row flex-col items-center justify-center md:max-w-5xl gap-8 mx-auto pb-14">
      <div className="flex basis-full flex-col p-3 tracking-tight text-slate-100/50 sm:basis-1/2 w-[14rem] h-[14rem] bg-neutral-800 rounded-2xl">
        <Image
          src="/assets/myself-picture.png"
          className="rounded-xl"
          width={300}
          height={300}
          alt="test-image"
        />
      </div>
      <div className="flex-1">
        {descriptions[0]
          ? Object.values(descriptions[0]).map((d, idx) => {
              return idx < 2 ? (
                <div
                  className="text-base md:text-lg font-medium text-white/80 py-3 text-wrap"
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
