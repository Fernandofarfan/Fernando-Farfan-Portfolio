import React from "react";
import Section from "./Section";

const Experience = ({ experiences, title }) => {
    return (
        <Section id="experience" title={title}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                                    {exp.role}
                                </h3>
                                <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">
                                    {exp.company}
                                </p>
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                {exp.period}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm">
                            {exp.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="tag-modern"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
