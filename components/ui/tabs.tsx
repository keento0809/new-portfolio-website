"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab | null>(null);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [first, setFirst] = useState(false);

  const checkFirstClick = () => {
    if (!first) setFirst(true);
  };

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row min-h-10 lg:gap-5 items-center justify-start md:justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full no-scrollbar h-auto",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              checkFirstClick();
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active !== null && active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "keyframes", bounce: 0.3, duration: 0.3 }}
                className={cn(
                  "absolute inset-0 dark:bg-gray-100 bg-black border-black rounded-full",
                  activeTabClassName
                )}
              />
            )}

            <span
              className={cn(
                "relative block text-base font-medium text-primary-color",
                active !== null && active.value === tab.value && "text-blue-600"
              )}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active !== null ? active.value : null}
        hovering={hovering}
        className={cn("mt-20 lg:mt-14", contentClassName)}
        first={first}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
  first,
}: {
  className?: string;
  key?: string | null;
  tabs: Tab[];
  active: Tab | null;
  hovering?: boolean;
  first: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div
      className={cn(
        "relative w-full mx-auto max-w-5xl h-[25rem] lg:h-[35rem] mb-20 md:mb-0",
        !first && "hidden"
      )}
    >
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
