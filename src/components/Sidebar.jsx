import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaAward } from "react-icons/fa";

const Sidebar = ({ profile, lang, setLang, t, activeSection }) => {
  const { name, title, summary, contact } = profile;

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'education', label: t.nav.education },
    { id: 'projects', label: t.nav.projects },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'skills', label: t.nav.skills },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { href: contact.social.github, icon: FaGithub, label: "GitHub" },
    { href: contact.social.linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { href: contact.social.credly, icon: FaAward, label: "Credly" },
    { href: contact.social.instagram, icon: FaInstagram, label: "Instagram" },
  ];

  return (
    <aside className="col-span-12 md:col-span-3 xl:col-span-3 sticky top-0 h-screen p-8 flex flex-col justify-between bg-white dark:bg-slate-900 overflow-y-auto border-r border-slate-200 dark:border-slate-800">
      {/* Top Content */}
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            {name}
          </h1>
          <h2 className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Language Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setLang("es")}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${lang === "es"
              ? "bg-primary-600 text-white dark:bg-primary-500"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
          >
            ES
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${lang === "en"
              ? "bg-primary-600 text-white dark:bg-primary-500"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
          >
            EN
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`block py-2 px-3 text-sm font-medium rounded transition-colors ${activeSection === item.id
                ? 'bg-slate-100 text-primary-600 dark:bg-slate-800 dark:text-primary-400'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Content */}
      <div className="space-y-4 pt-8 border-t border-slate-200 dark:border-slate-800">
        {/* Contact Info */}
        <div className="space-y-2 text-sm">
          <p className="text-slate-600 dark:text-slate-400">
            <a
              href={`mailto:${contact.email}`}
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              {contact.email}
            </a>
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            {contact.location}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
              aria-label={social.label}
              title={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Download CV Button */}
        <a
          href={contact.cv}
          download
          className="block text-center px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white text-sm font-medium rounded transition-colors"
        >
          {t.contact.downloadCV}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
