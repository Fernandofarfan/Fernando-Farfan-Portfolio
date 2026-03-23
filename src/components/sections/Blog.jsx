import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const Blog = ({ data }) => {
  return (
    <Section id="blog" title={data.blog.sectionTitle}>
      <p className="text-textSecondary text-sm mb-6">{data.blog.subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.blog.articles.map((article, index) => (
          <motion.div
            key={index}
            className="glass-card rounded-xl p-5 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Coming soon overlay if no link */}
            {!article.link && (
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-mono text-amber-400/80 bg-amber-900/20 px-2 py-0.5 rounded-full border border-amber-500/20">
                  Coming Soon
                </span>
              </div>
            )}

            <div className="flex items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              <span className="text-[11px] text-textSecondary font-mono">{article.date}</span>
            </div>

            <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors mb-2 leading-tight">
              {article.title}
            </h4>

            <p className="text-textSecondary text-xs leading-relaxed mb-4">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {article.tags.map((tag, i) => (
                <span key={i} className="text-[10px] font-mono text-accent/70 bg-accent/5 px-1.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-textSecondary/50 text-xs text-center mt-6 font-mono italic">
        {data.blog.comingSoon}
      </p>
    </Section>
  );
};

export default Blog;
