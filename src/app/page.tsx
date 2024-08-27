"use client";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import ProfilePicture from "@/components/ProfilePicture";
import Contact from "@/components/Contact";
import { useDarkMode } from "@/context/DarkModeContext";

function Home() {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 transition-colors duration-300">
        <section className="min-h-screen">
          <Navbar />
          <Header />
          <SocialLinks />
          <ProfilePicture />
        </section>
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
