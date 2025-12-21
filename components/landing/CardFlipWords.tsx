'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const CardFlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [duration, words.length]);

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <motion.div
        layout
        transition={{ duration: 0.8, type: "spring", stiffness: 150, damping: 30 }}
        className="
            relative inline-flex items-center justify-center
            px-10 py-5 md:px-12 md:py-8 rounded-3xl
            bg-white/[0.02] border border-white/10 backdrop-blur-3xl
            shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            overflow-hidden
            group
            min-w-[280px] md:min-w-[600px]
            w-full
        "
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-cyan-500/10 opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />

        {/* Shiny Edge Effect */}
        <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />

        {/* Internal Flare */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={words[currentIndex]}
            initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, y: -40, filter: "blur(12px)", scale: 0.9 }}
            transition={{
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for smoother feel
            }}
            className="relative z-10 px-16 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-emerald-200 font-black whitespace-nowrap drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] pb-1"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
