import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    className="mb-12 md:mb-16"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center gap-3 mb-6">
      <span className="h-2 w-2 rounded-full bg-accent animate-glow-pulse"></span>
      <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
      <span className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></span>
    </div>
    {children}
  </motion.section>
);

export default Section;
