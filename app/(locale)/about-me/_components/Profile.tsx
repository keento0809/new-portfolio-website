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
      <div className="flex-1 flex items-center justify-center">
        <div className="p-3 relative inline-block tracking-tight text-slate-100/50 bg-black rounded-2xl cursor-none">
          <Image
            src="/assets/myself-picture.png"
            className="rounded-xl md:w-[250px] md:h-[250px]"
            width={180}
            height={180}
            alt="test-image"
          />
        </div>
      </div>
      <div className="flex-1">
        {descriptions[0]
          ? Object.values(descriptions[0]).map((d, idx) => {
              return idx < 2 ? (
                <div
                  className="text-base md:text-lg font-medium text-white/80 py-3 text-wrap"
                  key={d}
                >
                  {PROFILE_SUB_TEXTS[idx].title} {d}
                </div>
              ) : null;
            })
          : null}
      </div>
    </div>
  );
};
