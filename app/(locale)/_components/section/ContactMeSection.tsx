import { Button } from "@/components/common/Button";
import { Title } from "@/components/common/Title";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { BackgroundBeams } from "@/components/ui/background-beams";
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
    <div
      id="contact"
      className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <Title titleText="Contact" />
      <div className="flex flex-col gap-12">
        <div className="text-center text-base md:text-xl font-medium">
          <p>{CONTACT_ME_FIRST_DESCRIPTION}</p>
          <p>{CONTACT_ME_SECOND_DESCRIPTION}</p>
        </div>
        <div className="flex justify-center items-center md:gap-8">
          {CONTACT_METHOD_ARRAY.map((method) => {
            return (
              <Link key={method.name} href={method.href ?? ""} target="_blank">
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
    </div>
  );
};
