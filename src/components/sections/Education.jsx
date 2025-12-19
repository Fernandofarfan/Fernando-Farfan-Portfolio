import React from 'react';
import Section from '../Section';

const Education = ({ data }) => {
  return (
    <Section id="education" title={data.nav.education}>
      <ul className="space-y-6 text-textSecondary">
        {data.education.map((edu, index) => (
          <li key={index}>
            <h4 className="text-lg font-semibold text-white">{edu.title}</h4>
            <p className="italic">{edu.institution} · {edu.period}</p>
            <p>{edu.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Education;
