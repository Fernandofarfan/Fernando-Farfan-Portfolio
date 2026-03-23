import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const GitHubStats = ({ data }) => {
  const username = data.profile.githubUsername;

  return (
    <Section id="github" title={data.githubSection.title}>
      <p className="text-textSecondary text-sm mb-6">{data.githubSection.subtitle}</p>

      <div className="space-y-5">
        {/* GitHub Contribution Graph */}
        <motion.div
          className="glass-card rounded-xl p-5 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={`https://ghchart.rshah.org/64ffda/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="glass-card rounded-xl p-1 overflow-hidden relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&include_all_commits=true&count_private=true&hide_rank=true&theme=transparent&hide_border=true&title_color=64ffda&text_color=8892b0&icon_color=64ffda&bg_color=00000000`}
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 text-[10px] text-accent/70 font-mono flex items-center gap-1 bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Org: @ffarfan-labs
            </div>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-1 overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=64ffda&text_color=8892b0&bg_color=00000000`}
              alt="Top Languages"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* GitHub Streak */}
        <motion.div
          className="glass-card rounded-xl p-1 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=64ffda&fire=64ffda&currStreakLabel=64ffda&sideLabels=8892b0&currStreakNum=ccd6f6&sideNums=ccd6f6&dates=8892b0&background=00000000`}
            alt="GitHub Streak"
            className="w-full"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* View Profile Link */}
      <div className="mt-6 text-center md:text-left">
        <a
          href={data.profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <span className="underline underline-offset-4">{data.githubSection.viewProfile}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </Section>
  );
};

export default GitHubStats;
