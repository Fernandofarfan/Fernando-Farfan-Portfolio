import React from 'react';

const MobileMenu = ({ mobileMenuOpen, toggleMobileMenu, language, toggleLanguage, toggleTheme, isDark, activeSection, data }) => {
  const sections = ['about', 'experience', 'education', 'projects', 'certifications', 'testimonials', 'skills', 'blog', 'github', 'contact'];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 right-4 z-50 bg-slate-800/80 backdrop-blur-md p-2.5 rounded-xl border border-slate-700/50 text-white shadow-lg hover:border-accent/30 transition-colors"
        aria-label="Menu"
      >
        {mobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-5 text-lg font-medium">
          <div className="flex gap-3">
            <button onClick={toggleTheme} className="text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 hover:border-accent/30 transition-all duration-300 text-sm">
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button onClick={toggleLanguage} className="text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 hover:border-accent/30 transition-all duration-300 text-sm">
              {language === 'es' ? '🇺🇸 English' : '🇪🇸 Español'}
            </button>
          </div>

          {sections.map(section => (
            <a
              key={section}
              href={`#${section}`}
              onClick={toggleMobileMenu}
              className={`transition-colors duration-300 ${activeSection === section ? 'text-accent' : 'text-white hover:text-accent/70'}`}
            >
              {data.nav[section]}
            </a>
          ))}

          {/* Dual CV buttons */}
          <div className="flex flex-col gap-3 mt-4 w-48">
            <a href={data.profile.cvLinkEs} download className="px-5 py-2.5 bg-accent text-background font-bold rounded-full text-center text-sm">
              {data.profile.downloadCvEs}
            </a>
            <a href={data.profile.cvLinkEn} download className="px-5 py-2.5 border border-accent/50 text-accent font-bold rounded-full text-center text-sm hover:bg-accent/10 transition-colors">
              {data.profile.downloadCvEn}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
