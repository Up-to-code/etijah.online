'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/landing/Reveal';

export const MinimalHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-32">
      {/* Abstract Saudi Motif SVG (Lines) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10V90" stroke="currentColor" strokeWidth="0.5" />
          <path d="M20 40L50 10L80 40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal width="100%">
          <div className="flex flex-col items-center">
            <h1 className="flex flex-col gap-2 mb-12">
              <span className="text-8xl md:text-[14rem] font-black text-slate-900 leading-none tracking-tighter">
                نهندس
              </span>
              <span className="text-8xl md:text-[14rem] font-black text-blue-600 leading-none tracking-tighter -mt-4">
                المستقبل
              </span>
            </h1>

            <p className="max-w-3xl text-2xl md:text-4xl text-slate-900 font-bold leading-tight mb-16 tracking-tight">
              أنظمة نمو تقنية مبنية ببروتوكولات هندسية صارمة لمستقبل الأعمال الرقمي في المملكة.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-8"
            >
              <a href="#solutions" className="px-12 py-5 bg-slate-900 text-white font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all duration-500">
                الحلول التقنية
              </a>
              <a href="https://wa.me/message/YOUR_WHATSAPP_LINK" className="px-12 py-5 border-2 border-slate-900 text-slate-900 font-black text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-500">
                ابدأ الآن
              </a>
            </motion.div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-12 left-12">
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] vertical-rl">ETIJAH_PROTOCOL_v2.0</span>
      </div>
    </section>
  );
};
