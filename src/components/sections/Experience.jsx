import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const Experience = ({ data }) => {
  return (
    <Section id="experience" title={data.nav.experience}>
      <div className="relative border-l-2 border-slate-800 ml-3 space-y-8 py-2">
        {data.experience.map((job, index) => (
          <motion.div
            key={index}
            className="ml-8 relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-accent transition-all duration-300">
              <span className="h-2 w-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300"></span>
            </span>
            <div className="glass-card rounded-xl p-5 transition-all duration-300">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h4 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300">{job.role}</h4>
              </div>
              <p className="text-accent/80 text-sm mb-3 font-mono flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                {job.company} · {job.period}
              </p>
              <p className="text-textSecondary mb-4 leading-relaxed text-sm">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, i) => (
                  <span key={i} className="bg-emerald-900/20 text-emerald-300 px-2.5 py-1 text-xs rounded-md border border-emerald-500/20 hover:border-emerald-400/40 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
