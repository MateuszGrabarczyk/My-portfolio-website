"use client";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import { useState } from "react";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import ProfilePicture from "@/components/ProfilePicture";
import Contact from "@/components/Contact";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 transition-colors duration-300">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
