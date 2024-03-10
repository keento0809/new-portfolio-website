import { Title } from "@/components/common/Title";
import { MyHobby } from "./aboutMe/MyHobby";
import { Profile } from "@/app/_components/ui/Profile";

export const AboutMeSection = () => {
  return (
    <div id="aboutMe" className="min-h-screen bg-[#0A0A0A]">
      <Title titleText="About Me" />
      <Profile />
      <MyHobby />
    </div>
  );
};
