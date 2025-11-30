import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import useTheme from "../hooks/useTheme";

const ThemeToggle = ({ t }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full glass-card hover:bg-white/15 transition-all duration-300 group"
            aria-label={t.theme.toggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Toggle Background with Gradient */}
            <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                    background: isDark
                        ? 'linear-gradient(to right, rgb(51, 65, 85), rgb(30, 41, 59))'
                        : 'linear-gradient(to right, rgb(96, 165, 250), rgb(147, 197, 253))'
                }}
                transition={{ duration: 0.5 }}
            />

            {/* Sliding Circle */}
            <motion.div
                className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-lg flex items-center justify-center"
                animate={{
                    x: isDark ? 0 : 28
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                }}
            >
                {/* Icon with rotation animation */}
                <motion.div
                    key={isDark ? 'moon' : 'sun'}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isDark ? (
                        <FaMoon className="w-3 h-3 text-slate-700" />
                    ) : (
                        <FaSun className="w-3 h-3 text-yellow-500" />
                    )}
                </motion.div>
            </motion.div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow"></div>
        </motion.button>
    );
};

export default ThemeToggle;
