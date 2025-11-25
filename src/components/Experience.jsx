import React from "react";
import Section from "./Section";

const Experience = ({ data }) => {
    return (
        <Section id="experience" title="Experiencia Profesional">
            <ul className="space-y-10 text-textSecondary">
                {data.map((job, index) => (
                    <li key={index}>
                        <h4 className="text-lg font-semibold text-white">{job.role}</h4>
                        <p className="italic">{job.company} · {job.period}</p>
                        <p>{job.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {job.tags.map((tag, i) => (
                                <span key={i} className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Experience;
