import React from 'react';
import Section from '../Section';

const Skills = ({ data }) => {
  return (
    <Section id="skills" title={data.nav.skills}>
      <div className="grid grid-cols-1 gap-8 text-textSecondary">
        {data.skills.map((skillGroup, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold text-white mb-3">{skillGroup.category}</h4>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="bg-slate-800 text-accent px-3 py-1.5 rounded text-sm border border-slate-700 hover:border-accent transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
