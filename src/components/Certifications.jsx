import React from "react";
import Section from "./Section";

const Certifications = ({ data }) => {
    return (
        <Section id="certifications" title="Certificaciones Destacadas">
            <ul className="space-y-6 text-textSecondary">
                {data.map((cert, index) => (
                    <li key={index}>
                        <h4 className="text-lg font-semibold">{cert.title}</h4>
                        <p>{cert.date}</p>
                        <p>Aptitudes: {cert.skills}</p>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Certifications;
