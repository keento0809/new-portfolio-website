"use client";

import { Button } from "@/components/common/Button";
import { Title } from "@/components/common/Title";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  CONTACT_METHOD_ARRAY,
  CONTACT_ME_FIRST_DESCRIPTION,
  CONTACT_ME_SECOND_DESCRIPTION,
} from "@/constants/components/section/contactMeSection";
import Link from "next/link";

const ContactMethodIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "PHONE": {
      return <PhoneIcon />;
    }
    case "EMAIL": {
      return <EmailIcon />;
    }
    case "LINKEDIN": {
      return <LinkedInIcon />;
    }
    case "GITHUB": {
      return <GitHubIcon />;
    }
    case "DEV": {
      return null;
    }
    default: {
      return null;
    }
  }
};

export const ContactMeSection = () => {
  return (
    <section
      id="contact"
      className="pt-20 min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-start antialiased"
    >
      <div className="mt-6">
        <Title titleText="Contact" />
      </div>
      <div className="flex flex-col md:gap-8 lg:gap-14">
        <div className="text-center text-base md:text-lg font-medium">
          <TextGenerateEffect
            className="z-50"
            words={CONTACT_ME_FIRST_DESCRIPTION}
          />
          <TextGenerateEffect delay={2} words={CONTACT_ME_SECOND_DESCRIPTION} />
        </div>
        <div className="flex justify-center items-center md:gap-8 z-30">
          {CONTACT_METHOD_ARRAY.map((method) => {
            return (
              <Link
                key={method.name}
                href={method.href ?? ""}
                target="_blank"
                className="cursor-pointer hover:scale-125 transition-all ease-in-out"
              >
                <ContactMethodIcon name={method.name} />
              </Link>
            );
          })}
        </div>
        <div className="w-full flex justify-center items-center">
          <Button buttonText="Say Hello" />
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};
