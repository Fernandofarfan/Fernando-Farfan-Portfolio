import React from 'react';
import Section from '../Section';

const Projects = ({ data }) => {
  return (
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
  );
};

export default Projects;
