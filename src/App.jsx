import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./index.css";

// Context
import { ThemeProvider } from "./context/ThemeContext";

// Hooks
import { useActiveSection } from "./hooks/useActiveSection";

// Data
import {
  profile,
  experience,
  education,
  projects,
  certifications,
  skills,
  testimonials,
  translations
} from "./data";

// Components
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import ScrollProgress from "./components/ScrollProgress";

function AppContent() {
  const [lang, setLang] = useState("es");
  const activeSection = useActiveSection();
  const t = translations[lang];

  return (
    <>
      <ScrollProgress />
      <main className="bg-background text-textPrimary font-sans min-h-screen">
        <div className="grid grid-cols-12 max-w-screen-2xl mx-auto gap-0">

          <Sidebar
            profile={profile[lang]}
            lang={lang}
            setLang={setLang}
            t={t}
            activeSection={activeSection}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="col-span-12 md:col-span-9 xl:col-span-9 p-8 space-y-20 max-w-5xl"
            >
              <About data={profile[lang].about} title={t.sections.about} />
              <Experience experiences={experience[lang]} title={t.sections.experience} />
              <Education education={education[lang]} title={t.sections.education} />
              <Projects data={projects[lang]} title={t.sections.projects} t={t} />
              <Certifications certifications={certifications[lang]} title={t.sections.certifications} t={t} />
              <Skills skills={skills[lang]} title={t.sections.skills} />
              <Testimonials testimonials={testimonials[lang]} title={t.sections.testimonials} />
              <ContactForm t={t} />
              <Footer t={t} />
            </motion.div>
          </AnimatePresence>

        </div>
      </main>

      <ScrollToTop />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
