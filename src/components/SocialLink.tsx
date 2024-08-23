import React from "react";

interface SocialLinkProps {
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, Icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="cursor-pointer text-4xl" />
    </a>
  );
};

export default SocialLink;
