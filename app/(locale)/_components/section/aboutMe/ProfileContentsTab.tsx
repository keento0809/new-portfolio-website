"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export const ProfileContentsTab = () => {
  const tabs = [
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-800 to-neutral-900">
          <h2>Skills</h2>
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

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
