import React from "react";
import Section from "./Section";

const Testimonials = ({ testimonials, title }) => {
    return (
        <Section id="testimonials" title={title}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                        {/* Testimonial Text */}
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 italic text-sm">
                            "{testimonial.text}"
                        </p>

                        {/* Author Info */}
                        <div className="flex items-start gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                            {/* Avatar */}
                            <div className="w-10 h-10 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center text-white font-semibold text-sm">
                                {testimonial.name.charAt(0)}
                            </div>

                            {/* Author Details */}
                            <div className="flex-1">
                                <h4 className="text-slate-900 dark:text-slate-100 font-semibold text-sm">
                                    {testimonial.name}
                                </h4>
                                <p className="text-xs text-slate-600 dark:text-slate-400">
                                    {testimonial.role}
                                </p>
                                {testimonial.date && (
                                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                                        {testimonial.date}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
