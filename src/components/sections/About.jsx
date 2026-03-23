import React from 'react';
import Section from '../Section';

const About = ({ data }) => {
  return (
    <Section id="about" title={data.nav.about}>
      <div className="text-textSecondary space-y-4 leading-relaxed">
        {data.about.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} className="text-sm md:text-base" />
        ))}
      </div>
    </Section>
  );
};

export default About;
