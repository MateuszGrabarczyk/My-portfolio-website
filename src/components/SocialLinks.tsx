import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import SocialLink from "@/components/SocialLink";
import { IconType } from "react-icons";

type SocialLinkItem = {
  href: string;
  Icon: IconType;
};

const socialLinks: SocialLinkItem[] = [
  {
    href: "https://github.com/MateuszGrabarczyk",
    Icon: AiFillGithub,
  },
  {
    href: "https://www.linkedin.com/in/mateusz-grabarczyk-361851210/",
    Icon: AiFillLinkedin,
  },
];

function SocialLinks() {
  return (
    <div className="text-5xl flex justify-center gap-14 dark:text-gray-400">
      {socialLinks.map((link, index) => (
        <SocialLink key={index} href={link.href} Icon={link.Icon} />
      ))}
    </div>
  );
}

export default SocialLinks;
