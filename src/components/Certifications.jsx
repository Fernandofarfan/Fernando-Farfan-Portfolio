import React from "react";
import Section from "./Section";

const Certifications = ({ certifications, title }) => {
    return (
        <Section id="certifications" title={title}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                        {/* Header */}
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                                {cert.id}
                            </p>
                            {cert.date && (
                                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                    {cert.date}
                                </p>
                            )}
                        </div>

                        {/* Skills */}
                        {cert.skills && (
                            <div className="flex flex-wrap gap-2">
                                {(typeof cert.skills === 'string' ? cert.skills.split(',') : cert.skills).map((skill, i) => (
                                    <span
                                        key={i}
                                        className="tag-modern"
                                    >
                                        {skill.trim()}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
