import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, children, delay = 0 }) => (
    <motion.section
        id={id}
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
            duration: 0.4,
            delay,
            ease: "easeOut"
        }}
    >
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
            {title}
        </h3>
        {children}
    </motion.section>
);

export default Section;
