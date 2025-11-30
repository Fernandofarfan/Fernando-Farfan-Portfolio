import React from "react";
import Section from "./Section";

const About = ({ data, title }) => {
    return (
        <Section id="about" title={title}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-4">
                    {data.map((paragraph, index) => (
                        <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                            className="text-slate-600 dark:text-slate-400 leading-relaxed"
                        />
                    ))}
                </div>

                {/* Stats Column */}
                <div className="space-y-4">
                    <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 text-center">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">6+</h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">Years Experience</p>
                    </div>
                    <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 text-center">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">20+</h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">Projects Completed</p>
                    </div>
                    <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 text-center">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">100%</h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
