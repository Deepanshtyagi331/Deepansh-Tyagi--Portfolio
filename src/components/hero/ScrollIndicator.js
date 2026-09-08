import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollIndicator({ onClick }) {
  const handleScroll = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo({
        top: window.innerHeight * 0.85,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group z-20"
      onClick={handleScroll}
      role="button"
      tabIndex={0}
      aria-label="Scroll down to explore"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleScroll();
        }
      }}
    >
      <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 mb-2.5 select-none">
        Scroll To Explore
      </span>

      {/* Mouse Capsule Icon */}
      <div className="w-5 h-9 sm:w-6 sm:h-10 rounded-full border-2 border-gray-400/60 dark:border-gray-500/60 group-hover:border-purple-500 dark:group-hover:border-purple-400 flex items-start justify-center p-1.5 transition-colors duration-300 backdrop-blur-sm bg-white/20 dark:bg-gray-900/30 shadow-sm">
        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [1, 0.2, 1]
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-purple-600 to-blue-600 dark:from-purple-400 dark:to-cyan-400"
        />
      </div>

      {/* Subtle Down Chevrons */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        className="mt-1 text-gray-400 dark:text-gray-500 group-hover:text-purple-500 transition-colors"
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
