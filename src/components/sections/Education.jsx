import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const Education = ({ data }) => {
  return (
    <Section id="education" title={data.nav.education}>
      <div className="space-y-4">
        {data.education.map((edu, index) => (
          <motion.div
            key={index}
            className="glass-card rounded-xl p-5 group transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></svg>
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-white group-hover:text-accent transition-colors">{edu.title}</h4>
                <p className="text-accent/80 text-sm font-mono mt-1">{edu.institution}</p>
                <p className="text-textSecondary text-xs mt-0.5">{edu.period}</p>
                {edu.description && (
                  <p className="text-textSecondary text-sm mt-2 leading-relaxed">{edu.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
