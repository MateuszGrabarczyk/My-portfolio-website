import NavItems from "@/components/NavItems";
import { BsFillMoonStarsFill, BsDownload } from "react-icons/bs";
import { toast, Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useDarkMode } from "@/context/DarkModeContext";

function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const handleResumeDownload = () => {
    toast.dismiss();
    toast.success("Resume download started!", {
      icon: <BsDownload className="text-teal-500" />,
    });
  };

  const handleDarkModeToggle = () => {
    toast.dismiss();
    toggleDarkMode();
    toast(darkMode ? "Switched to Light Mode" : "Switched to Dark Mode", {
      icon: darkMode ? "☀️" : "🌙",
      duration: 1500,
    });
  };

  return (
    <nav className="py-6 mb-12 flex justify-between items-center px-6 md:px-12 lg:px-20">
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl dark:text-white z-50"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <NavItems menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="flex items-center space-x-6">
        <BsFillMoonStarsFill
          onClick={handleDarkModeToggle}
          className="cursor-pointer text-2xl dark:text-white"
        />
        <a
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
          href="/resume.pdf"
          download="Mateusz_Grabarczyk_Resume.pdf"
          onClick={handleResumeDownload}
        >
          Resume
        </a>
      </div>

      <Toaster />
    </nav>
  );
}

export default Navbar;
