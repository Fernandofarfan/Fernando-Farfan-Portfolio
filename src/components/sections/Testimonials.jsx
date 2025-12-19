import React from 'react';
import Section from '../Section';

const Testimonials = ({ data }) => {
  return (
    <Section id="testimonials" title={data.nav.testimonials}>
      <div className="grid grid-cols-1 gap-6">
        {data.testimonials.map((testimonial, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <p className="text-textSecondary italic mb-4">"{testimonial.quote}"</p>
            <div>
              <h4 className="text-white font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-accent">{testimonial.role}</p>
              <p className="text-xs text-textSecondary mt-1">{testimonial.relation} · {testimonial.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
