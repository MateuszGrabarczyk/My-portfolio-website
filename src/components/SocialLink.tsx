import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  Icon: IconType;
}

function SocialLink({ href, Icon }: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="cursor-pointer text-4xl" />
    </a>
  );
}

export default SocialLink;
