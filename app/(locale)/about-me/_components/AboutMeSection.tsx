import { Title } from "@/components/common/Title";
import { Profile } from "@/app/(locale)/about-me/_components/Profile";
import { MySkills } from "./MySkills";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ProfileContentsTab } from "./ProfileContentsTab";

export const AboutMeSection = () => {
  return (
    <section
      id="aboutMe"
      className="pt-20 pb-32 min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="mt-10">
        <Title titleText="About Me" />
      </div>
      <div className="flex flex-col lg:gap-14">
        <Profile />
        <ProfileContentsTab />
      </div>
      <BackgroundBeams />
    </section>
  );
};
