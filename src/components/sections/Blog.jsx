import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Tag, ExternalLink } from 'lucide-react';
import Section from '../Section';

const Blog = ({ data }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Attempt to fetch articles from Dev.to API
    fetch('https://dev.to/api/articles?username=fernandofarfan&per_page=3')
      .then(res => res.json())
      .then(devArticles => {
        if (devArticles && devArticles.length > 0) {
          const formatted = devArticles.map(article => ({
            title: article.title,
            excerpt: article.description,
            date: new Date(article.published_at).toLocaleDateString(),
            tags: article.tag_list.slice(0, 3), // max 3 tags
            link: article.url,
            coverImage: article.cover_image || article.social_image,
            readTime: `${article.reading_time_minutes} min read`
          }));
          setArticles(formatted);
        } else {
          setArticles(data.blog.articles);
        }
      })
      .catch(() => {
        setArticles(data.blog.articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [data.blog.articles]);

  return (
    <Section id="blog" title={data.blog.sectionTitle}>
      <p className="text-textSecondary text-sm mb-8">{data.blog.subtitle}</p>
      
      {isLoading ? (
        <div className="flex justify-center py-10">
          <div className="w-8 h-8 border-2 border-accent/20 border-t-accent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article, index) => (
            <motion.a
              href={article.link || '#'}
              target={article.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              key={index}
              className={`glass-card rounded-2xl group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 relative overflow-hidden flex flex-col h-full ${!article.link ? 'cursor-default' : 'cursor-pointer'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Cover Image or Gradient Placeholder */}
              <div className="h-32 w-full bg-slate-800/80 relative overflow-hidden group-hover:bg-slate-800 transition-colors">
                {article.coverImage ? (
                  <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" loading="lazy" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-accent/10 opacity-50"></div>
                )}
                
                {!article.link && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-400 bg-amber-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-amber-500/30">
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-white/90 bg-slate-900/60 backdrop-blur-md px-2 py-1 rounded flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-accent" />
                    {article.date}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-base font-bold text-white group-hover:text-accent transition-colors leading-tight line-clamp-2">
                    {article.title}
                  </h4>
                  {article.link && <ExternalLink className="w-4 h-4 text-textSecondary group-hover:text-accent shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />}
                </div>

                <p className="text-textSecondary text-xs leading-relaxed mb-5 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-accent/80 bg-accent/5 px-2 py-0.5 rounded flex items-center gap-1">
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}

      {articles === data.blog.articles && (
        <p className="text-textSecondary/40 text-xs text-center mt-8 font-mono italic">
          {data.blog.comingSoon}
        </p>
      )}
    </Section>
  );
};

export default Blog;
