import React from 'react';
import Section from '../Section';

const Experience = ({ data }) => {
  return (
    <Section id="experience" title={data.nav.experience}>
      <div className="relative border-l border-slate-800 ml-3 space-y-12 py-2">
        {data.experience.map((job, index) => (
          <div key={index} className="ml-8 relative group">
            <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 border border-slate-700 group-hover:border-accent transition-colors">
              <span className="h-2 w-2 rounded-full bg-accent group-hover:scale-125 transition-transform"></span>
            </span>
            <h4 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">{job.role}</h4>
            <p className="text-accent/80 text-sm mb-3 font-mono">{job.company} · {job.period}</p>
            <p className="text-textSecondary mb-4 leading-relaxed">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, i) => (
                <span key={i} className="bg-emerald-900/20 text-emerald-300 px-2.5 py-1 text-xs rounded-md border border-emerald-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
