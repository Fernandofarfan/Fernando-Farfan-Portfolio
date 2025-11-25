import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, children }) => (
    <motion.section
        id={id}
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <h3 className="text-2xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">{title}</h3>
        {children}
    </motion.section>
);

export default Section;
