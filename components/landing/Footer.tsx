'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-white py-32 border-t-2 border-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
          
          <div className="text-right">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">اتجاه</h2>
            <p className="text-slate-400 text-lg font-bold">هندسة المستقبل الرقمي للمملكة.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-right">
             <div className="flex flex-col gap-4">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">الروابط</span>
                <Link href="#solutions" className="text-sm font-bold text-slate-900">الحلول</Link>
                <Link href="#vision" className="text-sm font-bold text-slate-900">الرؤية</Link>
                <Link href="#team" className="text-sm font-bold text-slate-900">الفريق</Link>
             </div>
             <div className="flex flex-col gap-4">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">تواصل</span>
                <span className="text-sm font-bold text-slate-900">INFO@ETIJAH.ONLINE</span>
                <span className="text-sm font-bold text-slate-900">الرياض، المملكة</span>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-50">
           <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
             جميع الحقوق محفوظة © ٢٠٢٤ اتجاه
           </span>
           <div className="flex gap-8">
             <Link href="#" className="text-[10px] font-black text-slate-300 hover:text-blue-600 transition-colors uppercase tracking-widest">LINNKEDIN</Link>
             <Link href="#" className="text-[10px] font-black text-slate-300 hover:text-blue-600 transition-colors uppercase tracking-widest">TWITTER_X</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};
