import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const iconStyle = (Icon: IconType) => <Icon />;

export const footerSocialData = [
  {
    name: "GitHub",
    icon: iconStyle(FaGithub),
    link: "https://github.com/MefjuS22",
  },
  {
    name: "LinkedIn",
    icon: iconStyle(FaLinkedin),
    link: "https://www.linkedin.com/in/mateuszsmyda/",
  },
];
