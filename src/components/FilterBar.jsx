import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';

const FilterBar = ({
    categories = [],
    activeCategory,
    onCategoryChange,
    searchQuery = '',
    onSearchChange,
    placeholder = 'Search...'
}) => {
    return (
        <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full pl-12 pr-12 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg outline-none focus:border-primary-500 dark:focus:border-primary-400 text-slate-900 dark:text-slate-100 placeholder-slate-400 transition-colors"
                />
                <AnimatePresence>
                    {searchQuery && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => onSearchChange('')}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        >
                            <FaTimes />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Category Pills */}
            {categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => onCategoryChange(category.id)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === category.id
                                ? 'bg-primary-600 text-white dark:bg-primary-500'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                                }`}
                        >
                            {category.label}
                            {category.count !== undefined && (
                                <span className="ml-2 opacity-70">({category.count})</span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterBar;
