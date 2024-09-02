import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  Icon: IconType;
}

function SocialLink({ href, Icon }: SocialLinkProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transform transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Icon className="cursor-pointer text-4xl transform transition-transform duration-500 hover:scale-110 hover:text-teal-500" />
    </a>
  );
}

export default SocialLink;
