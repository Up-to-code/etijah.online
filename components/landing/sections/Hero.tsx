'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/landing/Reveal';
import { CardFlipWords } from '@/components/landing/CardFlipWords';

export const Hero = () => {
  const words = ["خطوة ذكية", "تقنية بسيطة", "أثر فوري", "قرار صائب", "تجربة مختلفة"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32">

      {/* Dynamic 3D Grid Background */}
      <div className="absolute inset-0 preserve-3d">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:5rem_5rem] [transform:perspective(1000px)_rotateX(65deg)] origin-[50%_0%] h-[200%] pointer-events-none opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        {/* Floating Light Blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />

        <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.25),transparent_65%)]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-20 flex flex-col items-center justify-center">
        <Reveal width="100%">

          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] hover:border-emerald-500/50 hover:bg-white/[0.06] transition-all duration-500 cursor-default mb-16 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)]"></span>
            </span>
            <span className="text-sm font-semibold text-emerald-100 tracking-wide brightness-110">
              رؤيتنا المستدامة نحو التحول الرقمي
            </span>
          </div>

          <h1 className="flex flex-col items-center justify-center gap-6 md:gap-8 mb-12 relative z-10">
            <span className="text-4xl px-10 sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-2xl leading-[1]">
              نموك، يبدأ بـ
            </span>

            <div className="relative mt-2">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full animate-pulse-slow mix-blend-screen" />
              <CardFlipWords words={words} className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl" />
            </div>
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed font-medium">
              برمجيات ذكية، صُممت لتنمو معك بلا تعقيد. نبتكر التقنية التي تخدمك، <span className="text-emerald-400 font-bold">لا ترهقك.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

            <Link href="/auth/signup" className="group relative px-10 py-5 bg-white text-black rounded-2xl font-black text-xl shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] transition-all hover:scale-105 hover:bg-emerald-50 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                ابدأ رحلتك مجاناً <ArrowRight className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 via-white to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>

            <Link href="#demo" className="group relative px-10 py-5 bg-black/40 text-white rounded-2xl font-bold text-xl border border-white/10 hover:border-emerald-500/30 backdrop-blur-md transition-all hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 group-hover:bg-emerald-500/20 transition-colors">
                <Play className="w-4 h-4 fill-current ml-1 group-hover:text-emerald-400" />
              </span>
              شاهد العرض التجريبي
            </Link>

          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer animate-bounce-slow">
        <span className="text-[11px] uppercase tracking-[0.4em] text-white font-medium">تصفح المزيد</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          />
        </div>
      </div>
    </section>
  );
};
