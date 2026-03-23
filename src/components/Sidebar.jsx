import React from 'react';
import TypingAnimation from './TypingAnimation';

const Sidebar = ({ data, language, toggleLanguage, toggleTheme, isDark, activeSection }) => {
  const navLinkClass = (section) =>
    `group flex items-center gap-3 hover:text-accent transition-all duration-300 py-1 ${activeSection === section ? 'text-accent font-bold' : ''}`;

  const navIndicator = (section) =>
    `h-px transition-all duration-300 ${activeSection === section ? 'w-8 bg-accent' : 'w-4 bg-slate-600 group-hover:w-6 group-hover:bg-accent/50'}`;

  const sections = ['about', 'experience', 'education', 'projects', 'certifications', 'testimonials', 'skills', 'blog', 'github', 'contact'];

  return (
    <aside className="col-span-12 md:col-span-4 md:sticky md:top-0 md:h-screen overflow-y-auto p-6 md:p-8 flex flex-col md:justify-between bg-background z-10 custom-scrollbar-sidebar">
      <div className="text-center md:text-left">
        <div className="flex justify-between items-start mb-4">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {data.profile.status}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="flex items-center justify-center text-textSecondary hover:text-accent border border-slate-700 hover:border-accent/50 p-1.5 rounded-lg transition-all duration-300" aria-label="Toggle theme">
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            {/* Language Toggle */}
            <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-xs font-bold text-textSecondary hover:text-accent border border-slate-700 hover:border-accent/50 px-3 py-1.5 rounded-lg transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center md:justify-start mb-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/40 to-emerald-600/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300 opacity-60"></div>
            <img
              src={data.profile.avatarUrl}
              alt={data.profile.name}
              className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-accent/30 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight gradient-text">{data.profile.name}</h1>
        
        {/* Typing Animation */}
        <div className="mt-2 h-6">
          <TypingAnimation roles={data.profile.typingRoles} />
        </div>

        {/* Stats badges */}
        <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
          <span className="stat-badge px-3 py-1.5 rounded-lg text-xs font-mono text-accent">
            {data.profile.yearsExp} {language === 'es' ? 'años exp.' : 'years exp.'}
          </span>
          <span className="stat-badge px-3 py-1.5 rounded-lg text-xs font-mono text-accent">
            {data.profile.certCount} certs
          </span>
        </div>

        <p className="text-textSecondary mt-4 leading-relaxed text-sm">
          {data.profile.description}
        </p>

        <nav className="mt-6 md:mt-8 space-y-2 text-xs uppercase tracking-widest text-textSecondary hidden md:block">
          {sections.map(section => (
            <a key={section} href={`#${section}`} className={navLinkClass(section)}>
              <span className={navIndicator(section)}></span>
              {data.nav[section]}
            </a>
          ))}
        </nav>
      </div>

      <div className="text-sm text-textSecondary mt-6 md:mt-8 text-center md:text-left">
        <p className="text-white font-semibold mb-1">{data.nav.contact}</p>
        <p>Email: <a href={`mailto:${data.profile.email}`} className="text-accent hover:underline">{data.profile.email}</a></p>
        <p>📍 {data.profile.location}</p>

        <div className="flex items-center justify-center md:justify-start gap-4 pt-3">
          <a href={data.profile.social.github} target="_blank" className="text-textSecondary hover:text-accent hover:scale-110 transition-all duration-300" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href={data.profile.social.linkedin} target="_blank" className="text-textSecondary hover:text-accent hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href={data.profile.social.instagram} target="_blank" className="text-textSecondary hover:text-accent hover:scale-110 transition-all duration-300" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href={data.profile.social.credly} target="_blank" className="text-textSecondary hover:text-accent hover:scale-110 transition-all duration-300" aria-label="Credly">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          </a>
        </div>

        {/* Dual CV Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-4">
          <a href={data.profile.cvLinkEs} download className="w-full sm:w-auto px-3 py-2 bg-accent text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 inline-flex items-center justify-center gap-2 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            {data.profile.downloadCvEs}
          </a>
          <a href={data.profile.cvLinkEn} download className="w-full sm:w-auto px-3 py-2 bg-transparent text-accent font-semibold rounded-lg border border-accent/50 hover:bg-accent/10 hover:border-accent transition-all duration-300 inline-flex items-center justify-center gap-2 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            {data.profile.downloadCvEn}
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
