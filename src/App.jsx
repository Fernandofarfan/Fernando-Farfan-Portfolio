
import React, { useState, useEffect } from "react";
import { Toaster } from "sonner";
import "./index.css";
import { content } from "./data";

// Components
import Sidebar from "./components/Sidebar";
import MobileMenu from "./components/MobileMenu";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Testimonials from "./components/sections/Testimonials";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');

  const data = content[language];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "education", "projects", "certifications", "testimonials", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      // Show/Hide Scroll to Top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Detectar si estamos al final de la página
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection("contact");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleLanguage = () => setLanguage(prev => prev === 'es' ? 'en' : 'es');

  return (
    <main className="bg-background text-textPrimary font-sans min-h-screen">
      <Toaster position="top-right" richColors />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        language={language}
        toggleLanguage={toggleLanguage}
        activeSection={activeSection}
        data={data}
      />

      <div className="grid grid-cols-12 max-w-6xl mx-auto">
        <Sidebar
          data={data}
          language={language}
          toggleLanguage={toggleLanguage}
          activeSection={activeSection}
        />

        <div className="col-span-12 md:col-span-8 p-6 md:p-8 space-y-12 md:space-y-20">
          <About data={data} />
          <Experience data={data} />
          <Education data={data} />
          <Projects data={data} />
          <Certifications data={data} />
          <Testimonials data={data} />
          <Skills data={data} />
          <Contact data={data} />

          <footer className="text-center text-textSecondary text-sm py-8 mt-12 border-t border-slate-800">
            <p>© {new Date().getFullYear()} {data.profile.name}. All rights reserved. v1.1.0</p>
          </footer>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-accent text-black p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
      </button>
    </main>
  );
}