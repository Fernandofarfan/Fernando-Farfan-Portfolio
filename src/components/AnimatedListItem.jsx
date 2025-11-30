import React from 'react';
import { motion } from 'framer-motion';

/**
 * Optimized wrapper component for list items with animations
 * Uses stable keys and memoization for better performance
 */
const AnimatedListItem = ({
    children,
    index,
    delay = 0.05,
    className = '',
    layoutId
}) => {
    return (
        <motion.div
            layoutId={layoutId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default React.memo(AnimatedListItem);
