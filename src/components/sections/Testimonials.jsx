import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const Testimonials = ({ data }) => {
  return (
    <Section id="testimonials" title={data.nav.testimonials}>
      <div className="grid grid-cols-1 gap-6">
        {data.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="glass-card rounded-xl p-6 relative overflow-hidden group transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {/* Decorative quote mark */}
            <div className="absolute top-4 right-6 text-accent/10 text-7xl font-serif leading-none select-none">"</div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#64ffda" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>

            <p className="text-textSecondary italic leading-relaxed relative z-10 mb-5">
              "{testimonial.quote}"
            </p>

            <div className="flex items-center gap-3 relative z-10">
              {/* Avatar placeholder */}
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent/30 to-emerald-700/30 flex items-center justify-center text-accent font-bold text-sm border border-accent/20">
                {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                <p className="text-xs text-accent">{testimonial.role}</p>
                <p className="text-[11px] text-textSecondary mt-0.5">{testimonial.relation} · {testimonial.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
