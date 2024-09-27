"use client";

import { Title } from "@/components/common/Title";
import { ptSelf } from "../../../_ui/font";

import Link from "next/link";
import { useContactMeSection } from "../../_hooks/useContactMeSection";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { ContactMethodIcon } from "../ContactMethodIcon";
import { cn } from "@/utils/cn";
import { LinkButton } from "@/components/common/LinkButton";
import {
  CONTACT_ME_FIRST_DESCRIPTION,
  CONTACT_ME_SECOND_DESCRIPTION,
  CONTACT_METHOD_ARRAY,
} from "./_constants/contactMeSection";

export const ContactMeSection = () => {
  const { resumeURL } = useContactMeSection();
  return (
    <>
      <AuroraBackground className="pt-24 lg:pt-28 w-full bg-neutral-950">
        <div className="min-h-[calc(100svh_-_74px)] w-full flex flex-col gap-12 lg:gap-10 px-4 max-w-[343px] mx-auto xl:max-w-[600px] items-center justify-center pb-32">
          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            viewport={{ once: true }}
            className=""
          >
            <Title titleText="Contact" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeIn",
            }}
            viewport={{ once: true }}
            className=""
          >
            <div className="flex flex-col gap-12 lg:gap-10">
              <div
                className={cn(
                  ptSelf.className,
                  "flex flex-col gap-4 xl:gap-2 text-center text-base lg:text-xl text-neutral-300 leading-snug font-medium"
                )}
              >
                <p>{CONTACT_ME_FIRST_DESCRIPTION}</p>
                <p>{CONTACT_ME_SECOND_DESCRIPTION}</p>
              </div>
              <div className="flex justify-center items-center gap-4 lg:gap-8 z-30">
                {CONTACT_METHOD_ARRAY.map((method) => {
                  return (
                    <Link
                      key={method.name}
                      href={method.name === "RESUME" ? resumeURL : method.href}
                      target="_blank"
                      className="cursor-pointer hover:scale-125 transition-all ease-in-out"
                    >
                      <ContactMethodIcon name={method.name} />
                    </Link>
                  );
                })}
              </div>
              <div className="w-full flex items-center justify-center z-30">
                <LinkButton title="Say Hello" />
              </div>
            </div>
          </motion.div>
        </div>
      </AuroraBackground>
    </>
  );
};
