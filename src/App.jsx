
import React, { useState, useEffect } from "react";
import "./index.css";
import Section from "./components/Section";
import { content } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'submitting', 'success', 'error'

  const data = content[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('https://send.pageclip.co/83aEvugDvi52U8eu3bb3L3UdW4wj9jeZ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/vnd.pageclip.v1+json',
          'X-REQ-METHOD': 'form-v1'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmissionStatus('success');
        e.target.reset();
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };

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
        setActiveSection("contact"); // Or skills if contact is not last
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

  const navLinkClass = (section) => 
    `block hover:text-accent transition-all duration-300 ${activeSection === section ? 'text-accent font-bold translate-x-2' : ''}`;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleLanguage = () => setLanguage(prev => prev === 'es' ? 'en' : 'es');

  return (
    <main className="bg-background text-textPrimary font-sans min-h-screen">
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

      <div className="grid grid-cols-12 max-w-6xl mx-auto">
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

        <div className="col-span-12 md:col-span-8 p-6 md:p-8 space-y-12 md:space-y-20">
          <Section id="about" title={data.nav.about}>
            <div className="text-textSecondary space-y-4">
              {data.about.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </Section>

          <Section id="experience" title={data.nav.experience}>
            <div className="relative border-l border-slate-800 ml-3 space-y-12 py-2">
              {data.experience.map((job, index) => (
                <div key={index} className="ml-8 relative group">
                  <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 border border-slate-700 group-hover:border-accent transition-colors">
                    <span className="h-2 w-2 rounded-full bg-accent group-hover:scale-125 transition-transform"></span>
                  </span>
                  <h4 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">{job.role}</h4>
                  <p className="text-accent/80 text-sm mb-3 font-mono">{job.company} · {job.period}</p>
                  <p className="text-textSecondary mb-4 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="bg-emerald-900/20 text-emerald-300 px-2.5 py-1 text-xs rounded-md border border-emerald-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="education" title={data.nav.education}>
            <ul className="space-y-6 text-textSecondary">
              {data.education.map((edu, index) => (
                <li key={index}>
                  <h4 className="text-lg font-semibold text-white">{edu.title}</h4>
                  <p className="italic">{edu.institution} · {edu.period}</p>
                  <p>{edu.description}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="projects" title={data.nav.projects}>
            <div className="grid grid-cols-1 gap-6">
              {data.projects.map((project, index) => (
                <a 
                  key={index} 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block bg-slate-800/40 p-6 rounded-lg border border-slate-700/50 hover:border-accent hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-textSecondary group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-textSecondary text-sm mb-4 leading-relaxed">{project.description}</p>
                  <p className="text-xs font-mono text-accent/90 bg-accent/10 inline-block px-2 py-1 rounded">
                    {project.tech}
                  </p>
                </a>
              ))}
            </div>
            <div className="mt-8 text-center md:text-left">
                <a href="https://github.com/Fernandofarfan?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent underline underline-offset-4 transition-colors">
                  Ver todos los repositorios en GitHub →
                </a>
            </div>
          </Section>

          <Section id="certifications" title={data.nav.certifications}>
            <ul className="space-y-6 text-textSecondary">
              {data.certifications.map((cert, index) => (
                <li key={index}>
                  <h4 className="text-lg font-semibold">{cert.title}</h4>
                  <p>{cert.date} {cert.id && `· ID: ${cert.id}`}</p>
                  <p>Aptitudes: {cert.skills}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="testimonials" title={data.nav.testimonials}>
            <div className="grid grid-cols-1 gap-6">
              {data.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                  <p className="text-textSecondary italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-accent">{testimonial.role}</p>
                    <p className="text-xs text-textSecondary mt-1">{testimonial.relation} · {testimonial.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="skills" title={data.nav.skills}>
            <div className="grid grid-cols-1 gap-8 text-textSecondary">
              {data.skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-white mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="bg-slate-800 text-accent px-3 py-1.5 rounded text-sm border border-slate-700 hover:border-accent transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" title={data.contact.title}>
            <div className="grid grid-cols-1 gap-12">
              <div>
                <p className="text-textSecondary mb-8 text-lg">{data.contact.description}</p>
                
                {submissionStatus === 'success' ? (
                  <div className="bg-green-500/10 border border-green-500 text-green-500 p-6 rounded-lg text-center">
                    <h4 className="text-xl font-semibold mb-2">¡Mensaje enviado!</h4>
                    <p>Gracias por contactarme. Te responderé a la brevedad.</p>
                    <button 
                      onClick={() => setSubmissionStatus(null)}
                      className="mt-4 text-sm underline hover:text-green-400"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-2">{data.contact.nameLabel}</label>
                        <input type="text" name="name" id="name" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-2">{data.contact.emailLabel}</label>
                        <input type="email" name="email" id="email" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-2">{data.contact.messageLabel}</label>
                      <textarea name="message" id="message" rows="4" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"></textarea>
                    </div>
                    
                    {submissionStatus === 'error' && (
                      <p className="text-red-500 text-sm">Hubo un error al enviar el mensaje. Por favor intenta nuevamente.</p>
                    )}

                    <button 
                      type="submit" 
                      disabled={submissionStatus === 'submitting'}
                      className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submissionStatus === 'submitting' ? 'Enviando...' : data.contact.sendButton}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Section>

          <footer className="text-center text-textSecondary text-sm py-8 mt-12 border-t border-slate-800">
            <p>© {new Date().getFullYear()} {data.profile.name}. All rights reserved.</p>
          </footer>

        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-accent text-black p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
      </button>
    </main>
  );
}
