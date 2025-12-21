import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Reveal } from '@/components/landing/Reveal';
import { TeamCard } from '@/components/landing/TeamCard';
import { SpotlightCard } from '@/components/landing/SpotlightCard';

export const Team = () => {
  return (
    <section id="team" className="container mx-auto px-6 max-w-7xl mb-24 md:mb-32 relative z-10">
      <div className="text-right mb-12 md:mb-20">
        <Reveal>
          <div className="inline-block mb-4">
            <span className="text-emerald-400 font-mono text-xs md:text-sm tracking-wider uppercase">/// TEAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">فريقنا</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl ml-auto mr-0 font-normal">خبراء يجمعهم الشغف بالتقنية والنجاح، يعملون يداً بيد لتحقيق رؤيتكم.</p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto items-start">
        {/* Ahmed Profile */}
        <Reveal delay={0.2}>
          <TeamCard
            name="أحمد"
            role="الشريك المؤسس & CTO"
            image="https://lxlnvkv63w.ufs.sh/f/mB2esVAwkuPDJojhtaltbn4X3B0T7va2ZgQMFq8rKPj6AC9N"
            description="مسؤول عن الرؤية التقنية، بناء الأنظمة، وهندسة المنتجات الذكية. يركّز على تحويل الأفكار التقنية إلى أدوات عملية تخدم النمو الحقيقي للأعمال."
          />
        </Reveal>

        {/* Abdelmonem Profile */}
        <Reveal delay={0.3}>
          <TeamCard
            name="عبد المنعم"
            role="الشريك المؤسس - التسويق"
            image="https://lxlnvkv63w.ufs.sh/f/mB2esVAwkuPDMsLcRAUQBOms8PtoWrSvNkdCT3HiLuA7fZK4"
            description="مسؤول عن التسويق، نمو المنتجات، وبناء تجربة مستخدم قوية. يركّز على فهم السوق، احتياجات العملاء، وربط التقنية بالقيمة التجارية."
          />
        </Reveal>
      </div>
    </section>
  );
};
