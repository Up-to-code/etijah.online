'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md h-24 flex items-center transition-all duration-500">
      <div className="container mx-auto px-6 max-w-6xl w-full flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-black text-slate-900 tracking-tighter">
            اتجاه
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-[11px] font-black text-slate-400 uppercase tracking-widest">
          <Link href="/about" className="hover:text-blue-600 transition-colors">عن الشركة</Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">المشاريع</Link>
          <Link href="/vision" className="hover:text-blue-600 transition-colors">الرؤية</Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:block">
            <Link href="https://wa.me/message/YOUR_WHATSAPP_LINK" className="text-sm font-black text-blue-600 hover:text-slate-900 transition-colors uppercase tracking-widest px-6 py-3 border-2 border-blue-600 hover:border-slate-900">
              ابدأ الآن
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 left-0 right-0 bg-white border-b-2 border-slate-50 md:hidden z-40"
          >
            <div className="flex flex-col p-10 gap-6 text-right">
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-4xl font-black text-slate-900">عن الشركة</Link>
              <Link href="/projects" onClick={() => setIsOpen(false)} className="text-4xl font-black text-slate-900">المشاريع</Link>
              <Link href="/vision" onClick={() => setIsOpen(false)} className="text-4xl font-black text-slate-900">الرؤية</Link>
              <div className="pt-8">
                <Link href="https://wa.me/message/YOUR_WHATSAPP_LINK" onClick={() => setIsOpen(false)} className="text-xl font-black text-blue-600">
                  ابدأ الآن
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
