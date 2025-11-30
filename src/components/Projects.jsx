import React from "react";
import Section from "./Section";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = ({ data, title }) => {
    return (
        <Section id="projects" title={title}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {data.map((project, index) => (
                    <div
                        key={index}
                        className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                        {/* Title */}
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                            {project.title}
                        </h4>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.split(',').map((tech, i) => (
                                <span
                                    key={i}
                                    className="tag-modern"
                                >
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        {(project.demo || project.repo) && (
                            <div className="flex gap-3">
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded transition-colors"
                                    >
                                        <FaExternalLinkAlt className="w-3 h-3" />
                                        Demo
                                    </a>
                                )}
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 rounded transition-colors"
                                    >
                                        <FaGithub className="w-4 h-4" />
                                        Code
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
