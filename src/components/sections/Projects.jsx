import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const Projects = ({ data }) => {
  const featuredProject = data.projects.find(p => p.featured);
  const otherProjects = data.projects.filter(p => !p.featured);

  return (
    <Section id="projects" title={data.nav.projects}>
      {/* Featured Project - Full Width */}
      {featuredProject && (
        <motion.a
          href={featuredProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-5 relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-emerald-500/10 to-accent/20 rounded-xl"></div>
          <div className="relative m-[1px] bg-slate-900/90 backdrop-blur-xl rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20 uppercase tracking-wider">
                ⭐ {data.nav.projects === 'Proyectos' ? 'Proyecto Destacado' : 'Featured Project'}
              </span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                {featuredProject.title}
              </h4>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-textSecondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <p className="text-textSecondary text-sm mb-4 leading-relaxed">{featuredProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {featuredProject.tech.split(', ').map((t, i) => (
                <span key={i} className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      )}

      {/* Other Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {otherProjects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block glass-card rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 gradient-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-textSecondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <p className="text-textSecondary text-xs mb-3 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.split(', ').map((t, i) => (
                <span key={i} className="text-[10px] font-mono text-accent/90 bg-accent/10 px-2 py-0.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-6 text-center md:text-left">
        <a href="https://github.com/Fernandofarfan?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors group text-sm">
          <span className="underline underline-offset-4">
            {data.nav.projects === 'Proyectos' ? 'Ver todos los repositorios en GitHub' : 'View all repositories on GitHub'}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </Section>
  );
};

export default Projects;
