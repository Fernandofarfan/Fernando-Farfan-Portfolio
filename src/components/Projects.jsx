import React from "react";
import Section from "./Section";

const Projects = ({ data }) => {
    return (
        <Section id="projects" title="Proyectos Destacados">
            <ul className="space-y-6 text-textSecondary">
                {data.map((project, index) => (
                    <li key={index}>
                        <h4 className="text-lg font-semibold">{project.title}</h4>
                        <p>{project.description}</p>
                        <p className="text-sm text-accent">{project.tech}</p>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Projects;
