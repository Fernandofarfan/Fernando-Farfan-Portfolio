import React from "react";
import Section from "./Section";

const About = ({ data }) => {
    return (
        <Section id="about" title="Sobre mí">
            <div className="text-textSecondary space-y-4">
                {data.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
            </div>
        </Section>
    );
};

export default About;
