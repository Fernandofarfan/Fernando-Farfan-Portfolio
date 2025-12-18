import React, { useState, useEffect } from "react";
import "./index.css";
import Section from "./components/Section";
import { profile, about, experience, education, projects, certifications, skills, testimonials } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "education", "projects", "certifications", "testimonials", "skills"];
      const scrollPosition = window.scrollY + 200;

      // Detectar si estamos al final de la página
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection("skills");
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

  const navLinkClass = (section) => 
    `block hover:text-accent transition-all duration-300 ${activeSection === section ? 'text-accent font-bold translate-x-2' : ''}`;

  return (
    <main className="bg-background text-textPrimary font-sans min-h-screen">
      <div className="grid grid-cols-12 max-w-6xl mx-auto">
        <aside className="col-span-12 md:col-span-4 md:sticky md:top-0 md:h-screen p-6 md:p-8 flex flex-col md:justify-between bg-background">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{profile.name}</h1>
            <h2 className="text-accent text-sm mt-1">{profile.role}</h2>
            <p className="text-textSecondary mt-6">
              {profile.description}
            </p>
            <nav className="mt-8 md:mt-10 space-y-2 text-sm uppercase tracking-widest text-textSecondary hidden md:block">
              <a href="#about" className={navLinkClass('about')}>Sobre mí</a>
              <a href="#experience" className={navLinkClass('experience')}>Experiencia</a>
              <a href="#education" className={navLinkClass('education')}>Educación</a>
              <a href="#projects" className={navLinkClass('projects')}>Proyectos</a>
              <a href="#certifications" className={navLinkClass('certifications')}>Certificaciones</a>
              <a href="#testimonials" className={navLinkClass('testimonials')}>Testimonios</a>
              <a href="#skills" className={navLinkClass('skills')}>Habilidades</a>
            </nav>
          </div>
          <div className="text-sm text-textSecondary mt-8 md:mt-10 text-center md:text-left">
            <p className="text-white font-semibold">Contacto</p>
            <p>Email: <a href={`mailto:${profile.email}`} className="text-accent">{profile.email}</a></p>
            <p>Ubicación: {profile.location}</p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <a href={profile.social.github} target="_blank" className="hover:text-accent">GitHub</a>
              <a href={profile.social.linkedin} target="_blank" className="hover:text-accent">LinkedIn</a>
              <a href={profile.social.instagram} target="_blank" className="hover:text-accent">Instagram</a>
              <a href={profile.social.credly} target="_blank" className="hover:text-accent">Credly</a>
            </div>
            <div className="pt-6">
              <a href={profile.cvLink} download className="px-4 py-2 bg-accent text-black font-semibold rounded hover:opacity-80 transition">Descargar CV</a>
            </div>
          </div>
        </aside>

        <div className="col-span-12 md:col-span-8 p-6 md:p-8 space-y-12 md:space-y-20">
          <Section id="about" title="Sobre mí">
            <div className="text-textSecondary space-y-4">
              {about.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </Section>

          <Section id="experience" title="Experiencia Profesional">
            <ul className="space-y-8 md:space-y-10 text-textSecondary">
              {experience.map((job, index) => (
                <li key={index}>
                  <h4 className="text-lg font-semibold text-white">{job.role}</h4>
                  <p className="italic">{job.company} · {job.period}</p>
                  <p>{job.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">{tag}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="education" title="Educación">
            <ul className="space-y-6 text-textSecondary">
              {education.map((edu, index) => (
                <li key={index}>
                  <h4 className="text-lg font-semibold text-white">{edu.title}</h4>
                  <p className="italic">{edu.institution} · {edu.period}</p>
                  <p>{edu.description}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="projects" title="Proyectos Destacados">
            <ul className="space-y-8 text-textSecondary">
              {projects.map((project, index) => (
                <li key={index} className="group">
                  <h4 className="text-lg font-semibold text-white group-hover:text-accent transition-colors inline-flex items-center gap-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {project.title}
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </h4>
                  <p className="mt-2">{project.description}</p>
                  <p className="text-sm text-accent mt-2 font-mono">{project.tech}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center md:text-left">
                <a href="https://github.com/Fernandofarfan?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent underline underline-offset-4 transition-colors">
                  Ver todos los repositorios en GitHub →
                </a>
            </div>
          </Section>

          <Section id="certifications" title="Certificaciones Destacadas">
            <ul className="space-y-6 text-textSecondary">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <h4 className="text-lg font-semibold">{cert.title}</h4>
                  <p>{cert.date} {cert.id && `· ID: ${cert.id}`}</p>
                  <p>Aptitudes: {cert.skills}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="testimonials" title="Recomendaciones">
            <div className="grid grid-cols-1 gap-6">
              {testimonials.map((testimonial, index) => (
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

          <Section id="skills" title="Tecnologías que manejo">
            <div className="grid grid-cols-1 gap-8 text-textSecondary">
              {skills.map((skillGroup, index) => (
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

        </div>
      </div>
    </main>
  );
}
