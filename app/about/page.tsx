import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { MinimalSection } from '@/components/landing/sections/MinimalSection';
import { MinimalTeam } from '@/components/landing/sections/MinimalTeam';
import { Reveal } from '@/components/landing/Reveal';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/30 font-sans">
      <Navbar />

      <main className="pt-32">
        <section className="bg-white py-32 md:py-64">
           <div className="container mx-auto px-6 max-w-6xl">
              <Reveal>
                <div className="text-right">
                   <h1 className="text-8xl md:text-[14rem] font-black text-slate-900 tracking-tighter leading-none mb-12">
                     من نحن
                   </h1>
                   <p className="text-3xl md:text-5xl text-blue-600 font-black leading-tight tracking-tight uppercase max-w-4xl ml-auto mr-0">
                     نحن مهندسو نمو، نؤمن بأن التقنية هي لغة السيادة الرقمية والتميز المؤسسي.
                   </p>
                </div>
              </Reveal>
           </div>
        </section>

        <MinimalSection 
          id="mission"
          title="مهمتنا"
          description="توفير بنية تحتية هندسية متينة تمكن الشركات السعودية من الريادة في الاقتصاد الرقمي العالمي بمشاريع تفوق التوقعات."
          svg={
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M50 10V90M10 50H90" />
              <rect x="25" y="25" width="50" height="50" />
            </svg>
          }
        />

        <MinimalTeam />
      </main>

      <Footer />
    </div>
  );
}
