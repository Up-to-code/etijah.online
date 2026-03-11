import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

// New Minimalist Sections
import { MinimalHero } from '@/components/landing/sections/MinimalHero';
import { MinimalSection } from '@/components/landing/sections/MinimalSection';
import { MinimalTeam } from '@/components/landing/sections/MinimalTeam';

export default async function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600/30 selection:text-slate-900 font-sans relative">
      <Navbar />

      <main className="relative z-10">
        <MinimalHero />

        {/* Section 01: Solutions */}
        <MinimalSection
          id="solutions"
          title="الحلول التقنية"
          description="هندسة واجهات خلفية معقدة وأنظمة سحابية مؤمنة وفق أعلى معايير السيادة الرقمية والذكاء الاصطناعي."
          svg={
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="10" y="10" width="80" height="80" />
              <path d="M10 50H90" />
              <path d="M50 10V90" />
              <circle cx="50" cy="50" r="10" fill="currentColor" />
            </svg>
          }
        />

        {/* Section 02: Vision */}
        <MinimalSection
          id="vision"
          title="الرؤية الوطنية"
          description="نسعى لبناء معمارية رقمية وطنية تدعم طموحات رؤية المملكة ۲۰۳۰ من خلال التميز الهندسي المطلق."
          reverse
          svg={
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 90L50 10L90 90H10Z" />
              <path d="M30 90V60H70V90" />
              <circle cx="50" cy="35" r="5" fill="currentColor" />
            </svg>
          }
        />

        {/* Section 03: Values */}
        <MinimalSection
          id="values"
          title="قيمنا"
          description="البساطة المطلقة، الكفاءة الهيكلية، والسيادة الرقمية هي الأعمدة التي نبني عليها كل سلك برمجى."
          svg={
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 20L80 80M80 20L20 80" />
              <rect x="35" y="35" width="30" height="30" strokeDasharray="4 4" />
            </svg>
          }
        />

        <MinimalTeam />
      </main>

      <Footer />
    </div>
  );
}
