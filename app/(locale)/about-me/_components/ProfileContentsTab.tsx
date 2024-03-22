"use client";

import { Tabs } from "@/components/ui/tabs";
import { MY_HOBBY_CONTENTS } from "@/constants/components/section/aboutMe/myHobby";
import { FC } from "react";

type ProfileContentsTabProps = {
  skillSets: Record<"name", string>[];
};

type Tab = {
  title: string;
  value: string;
  content: JSX.Element;
};

const TabWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: String;
}) => {
  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-neutral-800 to-neutral-900">
      <h2 className="text-xl md:text-2xl">{title}</h2>
      {children}
    </div>
  );
};

type TabContentProps<T> = {
  array: T[];
};

export const ProfileContentsTab: FC<ProfileContentsTabProps> = ({
  skillSets,
}) => {
  const tabs: Tab[] = [
    {
      title: "Skills",
      value: "skills",
      content: (
        <TabWrapper title="Skills">
          <div className="mt-4 w-full flex flex-wrap gap-4 overflow-y-auto max-h-[480px]">
            {skillSets.map((s) => {
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
            })}
          </div>
        </TabWrapper>
      ),
    },
    {
      title: "Experiences",
      value: "experiences",
      content: (
        <TabWrapper title="Experiences">
          <div className="">aaa</div>
        </TabWrapper>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <TabWrapper title="Education">
          <div className="">bbb</div>
        </TabWrapper>
      ),
    },
    {
      title: "Hobby",
      value: "hobby",
      content: (
        <TabWrapper title="Hobby">
          <div className="flex flex-col gap-4">
            {MY_HOBBY_CONTENTS.map((hobby) => {
              return (
                <div className="flex flex-col gap-3" key={hobby.title}>
                  <h3 className="text-base font-semibold md:text-xl">
                    {hobby.title}
                  </h3>
                  <p className="font-normal">{hobby.description}</p>
                </div>
              );
            })}
          </div>
        </TabWrapper>
      ),
    },
  ];

  return (
    <div className="h-[20rem] w-[calc(100vw-4rem)] lg:max-w-5xl z-50 md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto items-start justify-start">
      <Tabs tabs={tabs} skillSets={skillSets} />
    </div>
  );
};
