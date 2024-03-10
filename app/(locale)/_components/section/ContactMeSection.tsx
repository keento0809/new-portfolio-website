import { Button } from "@/components/common/Button";
import { Title } from "@/components/common/Title";
import {
  CONTACT_ME_FIRST_DESCRIPTION,
  CONTACT_ME_SECOND_DESCRIPTION,
} from "@/constants/components/section/contactMeSection";

export const ContactMeSection = () => {
  return (
    <div id="contact" className="min-h-screen bg-[#0A0A0A]">
      <div className="pt-10">
        <Title titleText="Contact Me" />
      </div>
      <div className="text-center">
        <p>{CONTACT_ME_FIRST_DESCRIPTION}</p>
        <p>{CONTACT_ME_SECOND_DESCRIPTION}</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Button buttonText="Say Hello" />
      </div>
    </div>
  );
};
