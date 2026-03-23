import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const Skills = ({ data }) => {
  return (
    <Section id="skills" title={data.nav.skills}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            className="glass-card rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{skillGroup.icon}</span>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">{skillGroup.category}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="bg-slate-800/80 text-accent px-3 py-1.5 rounded-lg text-xs border border-slate-700/50 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
