
import React from "react";
import "./index.css";
import Section from "./components/Section";
import { profile, about, experience, education, projects, certifications, skills } from "./data";

export default function App() {
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
              <a href="#about" className="block hover:text-accent">Sobre mí</a>
              <a href="#experience" className="block hover:text-accent">Experiencia</a>
              <a href="#education" className="block hover:text-accent">Educación</a>
              <a href="#projects" className="block hover:text-accent">Proyectos</a>
              <a href="#certifications" className="block hover:text-accent">Certificaciones</a>
              <a href="#skills" className="block hover:text-accent">Habilidades</a>
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
            <ul className="space-y-6 text-textSecondary">
              {projects.map((project, index) => (
                <li key={index}>
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p>{project.description}</p>
                  <p className="text-sm text-accent">{project.tech}</p>
                </li>
              ))}
            </ul>
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

          <Section id="skills" title="Tecnologías que manejo">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-textSecondary">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-white">{skillGroup.category}</h4>
                  <ul className="list-disc list-inside">
                    {skillGroup.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

        </div>
      </div>
    </main>
  );
}
