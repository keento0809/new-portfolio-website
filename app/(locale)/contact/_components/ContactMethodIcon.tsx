import {
  GitHubIcon,
  LinkedInIcon,
  ResumeIcon,
  PhoneIcon,
  DevIcon,
} from "@/components/icons";

export const ContactMethodIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "PHONE": {
      return <PhoneIcon className="text-white" />;
    }
    case "DEV": {
      return <DevIcon className="text-white" />;
    }
    case "LINKEDIN": {
      return <LinkedInIcon />;
    }
    case "GITHUB": {
      return <GitHubIcon />;
    }
    case "RESUME": {
      return <ResumeIcon className="text-white" />;
    }
    default: {
      return null;
    }
  }
};
