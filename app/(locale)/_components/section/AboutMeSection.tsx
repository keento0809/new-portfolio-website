import { Title } from "@/components/common/Title";
import { Profile } from "@/app/(locale)/_components/section/aboutMe/Profile";
import { MySkills } from "./aboutMe/MySkills";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const AboutMeSection = () => {
  return (
    <div
      id="aboutMe"
      className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="mt-10">
        <Title titleText="About Me" />
      </div>
      <div className="flex flex-col lg:gap-14">
        <Profile />
        <MySkills />
      </div>
      <BackgroundBeams />
    </div>
  );
};
