import React from "react";

interface NavItemProps {
  href: string;
  label: string;
  onClick: () => void;
  menuOpen: boolean;
}

function NavItem({ href, label, onClick, menuOpen }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className={`font-medium text-gray-800 dark:text-gray-300 transition-colors duration-300 ease-in-out hover:text-teal-500 dark:hover:text-teal-300 ${
          menuOpen ? "text-3xl md:text-base" : "text-3xl md:text-base"
        }`}
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
}

export default NavItem;
