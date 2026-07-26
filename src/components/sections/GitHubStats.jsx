import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const LANG_COLORS = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  PowerShell: '#012456',
  Dockerfile: '#384d54',
  Vue: '#41b883',
  Go: '#00ADD8',
};

const StatCard = ({ icon, label, value, sub, delay = 0 }) => (
  <motion.div
    className="glass-card rounded-xl p-5 flex flex-col gap-1 items-start"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-2xl font-bold text-white font-mono mt-1">{value}</span>
    <span className="text-xs text-accent font-semibold uppercase tracking-wider">{label}</span>
    {sub && <span className="text-[11px] text-textSecondary">{sub}</span>}
  </motion.div>
);

const GitHubStats = ({ data }) => {
  const username = data.profile.githubUsername;
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error('API error');
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        setStats(userData);
        setRepos(reposData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  // Aggregate language bytes from all repos
  const langMap = {};
  repos.forEach((repo) => {
    if (repo.language) {
      langMap[repo.language] = (langMap[repo.language] || 0) + 1;
    }
  });
  const totalLangRepos = Object.values(langMap).reduce((a, b) => a + b, 0);
  const topLangs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7);

  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  const totalForks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);

  return (
    <Section id="github" title={data.githubSection.title}>
      <p className="text-textSecondary text-sm mb-6">{data.githubSection.subtitle}</p>

      <div className="space-y-5">
        {/* Contribution Graph — still from ghchart (simple & stable) */}
        <motion.div
          className="glass-card rounded-xl p-5 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-accent mb-3 uppercase tracking-wider">GitHub Contribution Graph</p>
          <img
            src={`https://ghchart.rshah.org/64ffda/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Stats Grid — from GitHub REST API */}
        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-card rounded-xl p-5 h-28 bg-slate-800/40" />
            ))}
          </div>
        )}

        {!loading && !error && stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon="📦" label="Repositorios" value={stats.public_repos} sub="Públicos" delay={0.1} />
            <StatCard icon="👥" label="Seguidores" value={stats.followers} sub={`Siguiendo: ${stats.following}`} delay={0.15} />
            <StatCard icon="⭐" label="Stars totales" value={totalStars} sub="En todos los repos" delay={0.2} />
            <StatCard icon="🍴" label="Forks totales" value={totalForks} sub="En todos los repos" delay={0.25} />
          </div>
        )}

        {!loading && error && (
          <div className="glass-card rounded-xl p-5 text-textSecondary text-sm text-center">
            No se pudieron cargar las stats de GitHub. <a href={data.profile.social.github} target="_blank" rel="noopener noreferrer" className="text-accent underline">Ver perfil directamente →</a>
          </div>
        )}

        {/* Top Languages — calculado de repos */}
        {!loading && !error && topLangs.length > 0 && (
          <motion.div
            className="glass-card rounded-xl p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-mono text-accent uppercase tracking-wider">Top Languages</p>
              <span className="text-[10px] text-textSecondary font-mono bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                🏢 Org: @ffarfan-labs
              </span>
            </div>

            {/* Bar chart */}
            <div className="flex h-3 rounded-full overflow-hidden mb-4 gap-0.5">
              {topLangs.map(([lang, count]) => {
                const pct = ((count / totalLangRepos) * 100).toFixed(1);
                return (
                  <div
                    key={lang}
                    style={{
                      width: `${pct}%`,
                      backgroundColor: LANG_COLORS[lang] || '#64ffda',
                    }}
                    title={`${lang}: ${pct}%`}
                    className="transition-all duration-500"
                  />
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {topLangs.map(([lang, count]) => {
                const pct = ((count / totalLangRepos) * 100).toFixed(1);
                return (
                  <div key={lang} className="flex items-center gap-1.5">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: LANG_COLORS[lang] || '#64ffda' }}
                    />
                    <span className="text-xs text-textSecondary">{lang}</span>
                    <span className="text-[11px] text-accent/60 font-mono">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Streak — from streak stats (stable service) */}
        <motion.div
          className="glass-card rounded-xl p-1 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=64ffda&fire=64ffda&currStreakLabel=64ffda&sideLabels=8892b0&currStreakNum=ccd6f6&sideNums=ccd6f6&dates=8892b0&background=00000000`}
            alt="GitHub Streak"
            className="w-full"
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; }}
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
