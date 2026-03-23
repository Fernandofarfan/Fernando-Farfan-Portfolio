import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const Skills = ({ data }) => {
  // Extract all skills from categories into a single array
  const allSkills = data.skills.flatMap(category => category.items);
  
  // Split into two arrays for opposite scrolling rows
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  // Duplicate items to ensure a seamless infinite scrolling loop
  const renderMarqueeItems = (items) => (
    <>
      {items.map((item, i) => (
        <div key={`a-${i}`} className="glass-card px-6 py-3 rounded-xl flex items-center justify-center min-w-max border-accent/20 text-accent font-mono text-sm hover:bg-accent/10 hover:-translate-y-1 transition-all duration-300 cursor-default">
          {item}
        </div>
      ))}
      {items.map((item, i) => (
        <div key={`b-${i}`} className="glass-card px-6 py-3 rounded-xl flex items-center justify-center min-w-max border-accent/20 text-accent font-mono text-sm hover:bg-accent/10 hover:-translate-y-1 transition-all duration-300 cursor-default">
          {item}
        </div>
      ))}
    </>
  );

  return (
    <Section id="skills" title={data.nav.skills}>
      <div className="flex flex-col gap-6 relative py-4 overflow-hidden rounded-2xl">
        {/* Decorative gradient masks for smooth fade in/out at edges */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-container">
          <div className="marquee-content py-2">
            {renderMarqueeItems(row1)}
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-content-reverse py-2 mt-2">
            {renderMarqueeItems(row2)}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
