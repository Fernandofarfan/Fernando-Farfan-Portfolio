import React from "react";
import Section from "./Section";

const Skills = ({ data }) => {
    return (
        <Section id="skills" title="Tecnologías que manejo">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-textSecondary">
                {data.map((category, index) => (
                    <div key={index}>
                        <h4 className="text-lg font-semibold text-white">{category.category}</h4>
                        <ul className="list-disc list-inside">
                            {category.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
