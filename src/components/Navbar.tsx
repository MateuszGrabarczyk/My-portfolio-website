import { BsFillMoonStarsFill, BsDownload } from "react-icons/bs";
import { toast, Toaster } from "react-hot-toast";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const handleResumeDownload = () => {
    toast.dismiss();
    toast.success("Resume download started!", {
      duration: 1500,
      position: "top-center",
      icon: <BsDownload className="text-teal-500" />,
      style: {
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
      },
    });
  };

  const handleDarkModeToggle = () => {
    toast.dismiss();
    setDarkMode(!darkMode);
    toast(darkMode ? "Switched to Light Mode" : "Switched to Dark Mode", {
      icon: darkMode ? "☀️" : "🌙",
      duration: 1500,
      position: "top-center",
      style: {
        background: darkMode ? "#fff" : "#333",
        color: darkMode ? "#333" : "#fff",
      },
    });
  };

  return (
    <nav className="py-10 mb-12 flex justify-end">
      <Toaster />
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={handleDarkModeToggle}
            className="cursor-pointer text-2xl dark:text-white"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="/resume.pdf"
            download="Mateusz_Grabarczyk_Resume.pdf"
            onClick={handleResumeDownload}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
