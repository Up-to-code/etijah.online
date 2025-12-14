'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavbarProps {
    user: any;
    signOutAction: () => Promise<void>;
}

export const Navbar = ({ user, signOutAction }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4 flex items-center justify-between border-b border-white/5 relative bg-black/50 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white glow-text">اتجاه التقنية</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="#about" className="hover:text-white hover:scale-105 transition-all">عن الشركة</Link>
          <Link href="#services" className="hover:text-white hover:scale-105 transition-all">خدماتنا</Link>
          <Link href="#team" className="hover:text-white hover:scale-105 transition-all">فريق العمل</Link>
          <Link href="#vision" className="hover:text-white hover:scale-105 transition-all">الرؤية</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:block">
              {user ? (
                 <form action={signOutAction}>
                 <button type="submit" className="text-sm font-medium hover:text-white text-gray-400 transition-colors">
                   تسجيل الخروج
                 </button>
               </form>
              ) : (
                <Link href="/auth/signup" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-emerald-50 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all">
                  ابدأ رحلتك
                </Link>
              )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-6 right-6 md:hidden"
          >
            <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-center">
              <Link href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-white/5">عن الشركة</Link>
              <Link href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-white/5">خدماتنا</Link>
              <Link href="#team" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-white/5">فريق العمل</Link>
              <Link href="#vision" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-white/5">الرؤية</Link>
              
              <div className="pt-2">
                {user ? (
                   <form action={signOutAction}>
                   <button type="submit" className="w-full text-lg font-medium text-red-400 hover:text-red-300 transition-colors py-2">
                     تسجيل الخروج
                   </button>
                 </form>
                ) : (
                  <Link href="/auth/signup" onClick={() => setIsOpen(false)} className="block w-full text-center text-lg font-bold bg-white text-black px-4 py-3 rounded-xl hover:bg-emerald-50 transition-all">
                    ابدأ رحلتك
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
