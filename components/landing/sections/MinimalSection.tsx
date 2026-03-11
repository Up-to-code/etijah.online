'use client';

import React from 'react';
import { Reveal } from '@/components/landing/Reveal';

interface MinimalSectionProps {
  id: string;
  title: string;
  description: string;
  svg: React.ReactNode;
  reverse?: boolean;
}

export const MinimalSection = ({ id, title, description, svg, reverse }: MinimalSectionProps) => {
  return (
    <section id={id} className="bg-white py-32 md:py-64 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-24 md:gap-32`}>
          
          <div className="w-full md:w-1/2">
            <Reveal>
              <div className="text-right">
                <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                  {title}
                </h2>
                <p className="text-xl md:text-3xl text-slate-500 font-bold leading-relaxed tracking-tight">
                  {description}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Reveal delay={0.2}>
              <div className="text-blue-600 opacity-80 group hover:opacity-100 transition-opacity duration-700">
                {svg}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
