import React from "react";
import Section from "./Section";

const Skills = ({ skills, title }) => {
    return (
        <Section id="skills" title={title}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skillGroup, groupIndex) => (
                    <div key={groupIndex}>
                        {/* Category Header */}
                        <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-3">
                            {skillGroup.category}
                        </h4>

                        {/* Skills List */}
                        <ul className="space-y-2">
                            {skillGroup.items.map((skill, skillIndex) => (
                                <li
                                    key={skillIndex}
                                    className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                                >
                                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
