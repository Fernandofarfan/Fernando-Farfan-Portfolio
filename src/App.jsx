import React, { useState } from "react";
import "./index.css";

// Data
import {
  profile,
  experience,
  education,
  projects,
  certifications,
  skills
} from "./data";

// Components
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";

export default function App() {
  const [lang, setLang] = useState("es"); // Default language

  return (
    <main className="bg-background text-textPrimary font-sans min-h-screen">
      <div className="grid grid-cols-12 max-w-6xl mx-auto">

        <Sidebar profile={profile[lang]} lang={lang} setLang={setLang} />

        <div className="col-span-12 md:col-span-8 p-8 space-y-20">
          <About data={profile[lang].about} />
          <Experience data={experience[lang]} />
          <Education data={education[lang]} />
          <Projects data={projects[lang]} />
          <Certifications data={certifications[lang]} />
          <Skills data={skills[lang]} />
        </div>

      </div>
    </main>
  );
}
