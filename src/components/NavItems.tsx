import NavItem from "@/components/NavItem";

type NavItem = {
  href: string;
  label: string;
};

interface NavItemsProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const items: NavItem[] = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function NavItems({ menuOpen, setMenuOpen }: NavItemsProps) {
  return (
    <ul
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out z-40 md:static md:flex md:flex-row md:items-center md:space-x-8 md:bg-transparent md:dark:bg-transparent ${
        menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
      } md:transform-none`}
    >
      {items.map((item, index) => (
        <NavItem
          key={index}
          href={item.href}
          label={item.label}
          onClick={() => setMenuOpen(false)}
          menuOpen={menuOpen}
        />
      ))}
    </ul>
  );
}

export default NavItems;
