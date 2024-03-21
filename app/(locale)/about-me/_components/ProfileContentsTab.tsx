"use client";

import { Tabs } from "@/components/ui/tabs";
import { FC } from "react";

type ProfileContentsTabProps = {
  skillSets: Record<"name", string>[];
};

export const ProfileContentsTab: FC<ProfileContentsTabProps> = ({
  skillSets,
}) => {
  const tabs = [
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-800 to-neutral-900">
          <h2>Skills</h2>
          <div className="mt-4 w-full flex flex-wrap gap-4 overflow-scroll max-h-[480px]">
            {skillSets
              ? skillSets.map((s) => {
                  return (
                    <div
                      key={s.name}
                      className="py-2 text-white text-2xl flex items-center justify-center"
                    >
                      <i
                        className={`devicon-${s.name} text-white text-2xl w-6 h-6`}
                      ></i>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ),
    },
    {
      title: "Experiences",
      value: "experiences",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-800 to-neutral-900">
          <p>Experiences</p>
        </div>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-800 to-neutral-900">
          <p>Education</p>
        </div>
      ),
    },
    {
      title: "Hobby",
      value: "hobby",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-800 to-neutral-900">
          <p>Hobby</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] w-[calc(100vw-4rem)] lg:max-w-5xl z-50 md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
};
