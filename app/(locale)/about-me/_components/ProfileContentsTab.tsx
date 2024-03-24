"use client";

import { Tabs } from "@/components/ui/tabs";
import { MY_HOBBY_CONTENTS } from "@/constants/components/section/aboutMe/myHobby";
import { MY_EDUCATION_HISTORY } from "@/constants/components/section/aboutMe/education";
import { FC } from "react";
import { Divider } from "@/components/common/Divider";
import { MY_WORK_EXPERIENCE } from "@/constants/components/section/aboutMe/experience";
import { IDataArrayFields } from "@/@types/generated/contentful";

type ProfileContentsTabProps = {
  skillSets: Record<"name", string>[];
  skillDataArray: IDataArrayFields[];
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
    <div className="w-full flex flex-col gap-8 overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-blue-600 to-blue-900 overflow-y-auto">
      <h2 className="text-xl md:text-2xl">{title}</h2>
      {children}
    </div>
  );
};

export const ProfileContentsTab: FC<ProfileContentsTabProps> = ({
  skillSets,
  skillDataArray,
}) => {
  console.log("skda: ", skillDataArray);
  const tabs: Tab[] = [
    {
      title: "Skills",
      value: "skills",
      content: (
        <TabWrapper title="Skills">
          <div className="flex flex-col gap-8">
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
            <div className="flex flex-wrap gap-2">
              {skillDataArray.map((skillD) => {
                return (
                  <>
                    {skillD.fields.array.map((s) => {
                      return (
                        <div
                          key={s.name}
                          className="py-1.5 px-3 text-sm border rounded-lg border-white"
                        >
                          {s.name}
                        </div>
                      );
                    })}
                  </>
                );
              })}
            </div>
          </div>
        </TabWrapper>
      ),
    },
    {
      title: "Experiences",
      value: "experiences",
      content: (
        <TabWrapper title="Experiences">
          {MY_WORK_EXPERIENCE.map((exp) => {
            return (
              <div key={exp.companyName} className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold md:text-xl">
                      {exp.companyName}
                    </h3>
                    <Divider />
                    <h3 className="text-base font-semibold md:text-xl">
                      {exp.jobRole}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 font-normal text-sm">
                    <span className="">{exp.term}</span>
                    <Divider />
                    <span className="">{exp.place}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </TabWrapper>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <TabWrapper title="Education">
          <div className="flex flex-col gap-8">
            {MY_EDUCATION_HISTORY.map((e) => {
              return (
                <div key={e.schoolName} className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-lg md:text-xl">
                    <span>{e.term}</span>
                    <Divider />
                    <span>{e.schoolName}</span>
                  </div>
                  <div className="text-lg md:text-xl">
                    <span className="inline-block">{e.majorAndDegree}</span>
                  </div>
                </div>
              );
            })}
          </div>
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
    <div className="h-[20rem] w-[calc(100vw-2rem)] lg:w-[calc(100vw-4rem)] lg:max-w-5xl z-50 md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto items-start justify-start">
      <Tabs
        tabs={tabs}
        skillSets={skillSets}
        activeTabClassName="text-blue-500"
      />
    </div>
  );
};
