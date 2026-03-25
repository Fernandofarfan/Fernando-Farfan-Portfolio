import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2, Layers, Cpu, Code, LayoutGrid } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Section from '../Section';

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('ui'); // 'ui' or 'api'
  
  // Dynamically extract unique categories
  const categories = ['All', ...new Set(data.projects.map(p => p.category).filter(Boolean))];
  
  // Filter projects
  const filteredProjects = data.projects.filter(p => filter === 'All' || p.category === filter);
  
  // Determine layout: first item is featured (if it exists in the filtered array)
  const featuredProject = filteredProjects.find(p => p.featured) || filteredProjects[0];
  const otherProjects = filteredProjects.filter(p => p !== featuredProject);

  return (
    <Section id="projects" title={data.nav.projects}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-[11px] md:text-xs font-mono transition-all duration-300 ${
                filter === cat 
                  ? 'bg-accent/20 text-accent border border-accent/50 shadow-[0_0_15px_rgba(100,255,218,0.2)]' 
                  : 'bg-slate-800/50 text-textSecondary border border-slate-700/50 hover:text-white hover:border-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-slate-900/80 p-1 rounded-lg border border-slate-700/50 w-fit shrink-0 backdrop-blur-sm">
          <button 
            onClick={() => setViewMode('ui')} 
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${viewMode === 'ui' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <LayoutGrid className="w-3.5 h-3.5" /> UI
          </button>
          <button 
            onClick={() => setViewMode('api')} 
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${viewMode === 'api' ? 'bg-slate-700 text-emerald-400 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Code className="w-3.5 h-3.5" /> JSON API
          </button>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {viewMode === 'api' ? (
          <motion.div
            key="api-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#0d1117] rounded-xl border border-slate-700 overflow-hidden shadow-2xl"
          >
            <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-slate-700 select-none">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-mono text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded">GET</span>
                <span className="text-slate-400 font-mono text-xs">https://api.gfarfan.dev/v1/projects?category={filter.toLowerCase()}</span>
              </div>
              <span className="text-slate-500 font-mono text-xs hidden md:block">Status: 200 OK</span>
            </div>
            <div className="max-h-[600px] overflow-y-auto custom-scrollbar text-xs md:text-sm">
              <SyntaxHighlighter 
                language="json" 
                style={vscDarkPlus}
                customStyle={{ margin: 0, background: 'transparent', padding: '1.5rem' }}
                showLineNumbers={true}
              >
                {JSON.stringify({ 
                  _links: { self: { href: `/api/v1/projects?category=${filter.toLowerCase()}` } },
                  status: 200, 
                  count: filteredProjects.length, 
                  data: filteredProjects 
                }, null, 2)}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        ) : (
          <motion.div key="ui-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full">
            {/* Featured Project */}
            {featuredProject && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={`feat-${featuredProject.title}`}
                className="mb-5"
              >
                <div
                  onClick={() => setSelectedProject(featuredProject)}
                  className="group block relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-emerald-500/10 to-accent/20 rounded-xl"></div>
                  <div className="relative m-[1px] bg-slate-900/90 backdrop-blur-xl rounded-xl p-6 h-full border border-transparent group-hover:border-accent/30 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20 uppercase tracking-wider">
                        ⭐ {data.nav.projects === 'Proyectos' ? 'Proyecto Destacado' : 'Featured Project'}
                      </span>
                      {featuredProject.category && (
                        <span className="text-[10px] font-mono text-textSecondary/80 border border-slate-700/50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {featuredProject.category}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {featuredProject.title}
                      </h4>
                      <ExternalLink className="h-5 w-5 text-textSecondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    <p className="text-textSecondary text-sm mb-5 leading-relaxed">{featuredProject.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {featuredProject.tech.split(', ').map((t, i) => (
                        <span key={i} className="text-[11px] font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other Projects Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {otherProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.title}
                    className="h-full"
                  >
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="group flex flex-col h-full glass-card rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 gradient-border cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Code2 className="h-4 w-4 text-accent flex-shrink-0" />
                          <h4 className="text-base font-semibold text-white group-hover:text-accent transition-colors duration-300 line-clamp-1">
                            {project.title}
                          </h4>
                        </div>
                        <ExternalLink className="h-4 w-4 text-textSecondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                      </div>
                      
                      {project.category && (
                        <span className="text-[10px] font-mono text-textSecondary/60 mb-3 block uppercase tracking-wider">
                          [{project.category}]
                        </span>
                      )}
                      
                      <p className="text-textSecondary text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tech.split(', ').map((t, i) => (
                          <span key={i} className="text-[11px] font-mono text-textSecondary bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 text-center md:text-left">
        <a href="https://github.com/Fernandofarfan?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors group text-sm font-mono border-b border-white hover:border-accent pb-0.5">
          <span>{data.nav.projects === 'Proyectos' ? 'Ver todos los repositorios en GitHub' : 'View all repositories on GitHub'}</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-emerald-400 to-accent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1 rounded-full bg-slate-800 text-textSecondary hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
                    <Layers className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{selectedProject.title}</h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-accent">
                      <Cpu className="w-3 h-3" />
                      {selectedProject.category || "Full Stack"}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">
                      {data.nav.projects === 'Proyectos' ? 'Resumen del Proyecto' : 'Project Overview'}
                    </h4>
                    <p className="text-textSecondary leading-relaxed bg-slate-800/30 p-4 rounded-xl border border-slate-700/30">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                      {data.nav.projects === 'Proyectos' ? 'Tecnologías Clave' : 'Key Technologies'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.split(', ').map((t, i) => (
                        <span key={i} className="text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded-lg border border-accent/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-accent text-slate-900 px-6 py-2.5 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      {data.nav.projects === 'Proyectos' ? 'Ver Código Fuente' : 'View Source Code'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
