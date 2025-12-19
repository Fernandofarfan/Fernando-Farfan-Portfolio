import React from 'react';

const MobileMenu = ({ mobileMenuOpen, toggleMobileMenu, language, toggleLanguage, activeSection, data }) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 right-4 z-50 bg-slate-800/80 backdrop-blur-md p-2 rounded-lg border border-slate-700 text-white shadow-lg"
        aria-label="Menu"
      >
        {mobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-medium">
          <button onClick={toggleLanguage} className="text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
            {language === 'es' ? '🇺🇸 English' : '🇪🇸 Español'}
          </button>
          <a href="#about" onClick={toggleMobileMenu} className={activeSection === 'about' ? 'text-accent' : 'text-white'}>{data.nav.about}</a>
          <a href="#experience" onClick={toggleMobileMenu} className={activeSection === 'experience' ? 'text-accent' : 'text-white'}>{data.nav.experience}</a>
          <a href="#education" onClick={toggleMobileMenu} className={activeSection === 'education' ? 'text-accent' : 'text-white'}>{data.nav.education}</a>
          <a href="#projects" onClick={toggleMobileMenu} className={activeSection === 'projects' ? 'text-accent' : 'text-white'}>{data.nav.projects}</a>
          <a href="#certifications" onClick={toggleMobileMenu} className={activeSection === 'certifications' ? 'text-accent' : 'text-white'}>{data.nav.certifications}</a>
          <a href="#testimonials" onClick={toggleMobileMenu} className={activeSection === 'testimonials' ? 'text-accent' : 'text-white'}>{data.nav.testimonials}</a>
          <a href="#skills" onClick={toggleMobileMenu} className={activeSection === 'skills' ? 'text-accent' : 'text-white'}>{data.nav.skills}</a>
          <a href="#contact" onClick={toggleMobileMenu} className={activeSection === 'contact' ? 'text-accent' : 'text-white'}>{data.nav.contact}</a>
          <a href={data.profile.cvLink} download className="mt-8 px-6 py-3 bg-accent text-black font-bold rounded-full">{data.profile.downloadCv}</a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
