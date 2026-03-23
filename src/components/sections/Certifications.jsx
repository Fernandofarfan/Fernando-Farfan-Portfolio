import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const Certifications = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const featured = data.certifications.filter(c => c.featured);
  const others = data.certifications.filter(c => !c.featured);
  const displayCerts = showAll ? data.certifications : featured;

  return (
    <Section id="certifications" title={data.nav.certifications}>
      {/* Badge counter */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-emerald-900/20 border border-accent/30 text-accent font-semibold text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
          {data.certBadge}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayCerts.map((cert, index) => (
          <motion.div
            key={index}
            className="glass-card rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5 group"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${cert.featured ? 'bg-accent/15 text-accent' : 'bg-slate-700/50 text-textSecondary'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors leading-tight">{cert.title}</h4>
                <p className="text-xs text-textSecondary mt-1 font-mono">{cert.date}</p>
                {cert.id && (
                  <p className="text-xs text-textSecondary/60 mt-0.5 truncate" title={cert.id}>ID: {cert.id}</p>
                )}
                <div className="flex flex-wrap gap-1 mt-2">
                  {cert.skills.split(', ').map((skill, i) => (
                    <span key={i} className="text-[10px] text-accent/70 bg-accent/5 px-1.5 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-white border border-accent/30 hover:border-accent px-5 py-2 rounded-lg transition-all duration-300"
          >
            {showAll 
              ? (data.nav.certifications === 'Certificaciones' ? 'Ver menos' : 'Show less')
              : (data.nav.certifications === 'Certificaciones' ? `Ver todas las ${data.certifications.length} certificaciones` : `View all ${data.certifications.length} certifications`)
            }
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>
      )}
    </Section>
  );
};

export default Certifications;
