import React from "react";
import Section from "./Section";

const Education = ({ education, title }) => {
    return (
        <Section id="education" title={title}>
            <div className="space-y-6">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 last:pb-0"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400"></div>

                        {/* Content */}
                        <div className="pb-6">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                                        {edu.title}
                                    </h3>
                                    <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">
                                        {edu.institution}
                                    </p>
                                </div>
                                <span className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                    {edu.period}
                                </span>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
