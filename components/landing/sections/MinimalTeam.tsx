'use client';

import React from 'react';
import { Reveal } from '@/components/landing/Reveal';

export const MinimalTeam = () => {
  const team = [
    {
      name: "أحمد",
      role: "الرؤية التقنية والهندسة",
      image: "https://lxlnvkv63w.ufs.sh/f/mB2esVAwkuPD0bWXvWPmr7qen1Cs3u8xDVvH5Ij9QEXKYfac"
    },
    {
      name: "عبد المنعم",
      role: "النمو الرقمي وتجربة المستخدم",
      image: "https://lxlnvkv63w.ufs.sh/f/mB2esVAwkuPDMsLcRAUQBOms8PtoWrSvNkdCT3HiLuA7fZK4"
    }
  ];

  return (
    <section id="team" className="bg-white py-32 md:py-64">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-right mb-24">
          <Reveal>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase mb-6">فريق القيادة</h2>
            <p className="text-2xl md:text-3xl text-slate-500 font-bold tracking-tight">خبراء في تحويل التحديات التقنية إلى فرص نمو استراتيجي.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 0.2}>
              <div className="group text-right">
                <div className="aspect-[4/5] bg-slate-50 mb-8 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 border-[24px] border-white opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-2">{member.name}</h3>
                <p className="text-xl font-bold text-blue-600 tracking-widest">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
