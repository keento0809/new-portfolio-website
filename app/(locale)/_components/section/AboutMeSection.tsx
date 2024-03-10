import { Title } from "@/components/common/Title";
import { MyHobby } from "./aboutMe/MyHobby";
import { Profile } from "@/app/(locale)/_components/section/aboutMe/Profile";
import { MySkills } from "./aboutMe/MySkills";

export const AboutMeSection = () => {
  return (
    <div id="aboutMe" className="min-h-screen bg-[#0A0A0A]">
      <div>
        <Title titleText="About Me" />
      </div>
      <Profile />
      <div>Description will be here.</div>
      <MySkills />
      <MyHobby />
    </div>
  );
};
