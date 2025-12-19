import React from 'react';

const Sidebar = ({ data, language, toggleLanguage, activeSection }) => {
  const navLinkClass = (section) => 
    `block hover:text-accent transition-all duration-300 ${activeSection === section ? 'text-accent font-bold translate-x-2' : ''}`;

  return (
    <aside className="col-span-12 md:col-span-4 md:sticky md:top-0 md:h-screen p-6 md:p-8 flex flex-col md:justify-between bg-background">
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
            <button onClick={toggleLanguage} className="hidden md:block text-xs font-bold text-textSecondary hover:text-white border border-slate-700 px-2 py-1 rounded transition-colors">
                {language === 'es' ? 'EN' : 'ES'}
            </button>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">{data.profile.name}</h1>
        <h2 className="text-accent text-sm mt-1">{data.profile.role}</h2>
        <p className="text-textSecondary mt-6">
          {data.profile.description}
        </p>
        <nav className="mt-8 md:mt-10 space-y-2 text-sm uppercase tracking-widest text-textSecondary hidden md:block">
          <a href="#about" className={navLinkClass('about')}>{data.nav.about}</a>
          <a href="#experience" className={navLinkClass('experience')}>{data.nav.experience}</a>
          <a href="#education" className={navLinkClass('education')}>{data.nav.education}</a>
          <a href="#projects" className={navLinkClass('projects')}>{data.nav.projects}</a>
          <a href="#certifications" className={navLinkClass('certifications')}>{data.nav.certifications}</a>
          <a href="#testimonials" className={navLinkClass('testimonials')}>{data.nav.testimonials}</a>
          <a href="#skills" className={navLinkClass('skills')}>{data.nav.skills}</a>
          <a href="#contact" className={navLinkClass('contact')}>{data.nav.contact}</a>
        </nav>
      </div>
      <div className="text-sm text-textSecondary mt-8 md:mt-10 text-center md:text-left">
        <p className="text-white font-semibold">{data.nav.contact}</p>
        <p>Email: <a href={`mailto:${data.profile.email}`} className="text-accent">{data.profile.email}</a></p>
        <p>Location: {data.profile.location}</p>
        <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
          <a href={data.profile.social.github} target="_blank" className="hover:text-accent transition-colors" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href={data.profile.social.linkedin} target="_blank" className="hover:text-accent transition-colors" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href={data.profile.social.instagram} target="_blank" className="hover:text-accent transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href={data.profile.social.credly} target="_blank" className="hover:text-accent transition-colors" aria-label="Credly">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          </a>
        </div>
        <div className="pt-6">
          <a href={data.profile.cvLink} download className="px-4 py-2 bg-accent text-black font-semibold rounded hover:opacity-80 transition inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            {data.profile.downloadCv}
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
