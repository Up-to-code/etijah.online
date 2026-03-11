import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { MinimalSection } from '@/components/landing/sections/MinimalSection';
import { Reveal } from '@/components/landing/Reveal';

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/30 font-sans">
      <Navbar />

      <main className="pt-32">
        <section className="bg-white py-32 md:py-64">
           <div className="container mx-auto px-6 max-w-6xl">
              <Reveal>
                <div className="text-right">
                   <h1 className="text-8xl md:text-[14rem] font-black text-slate-900 tracking-tighter leading-none mb-12">
                     الرؤية
                   </h1>
                   <p className="text-3xl md:text-5xl text-blue-600 font-black leading-tight tracking-tight uppercase max-w-4xl ml-auto mr-0">
                      نحن نوائم كل كود برمجي مع طموحات رؤية المملكة العربية السعودية ۲۰۳۰.
                   </p>
                </div>
              </Reveal>
           </div>
        </section>

        <MinimalSection 
          id="digital-transformation"
          title="التحول الرقمي"
          description="قيادة التغيير التقني من خلال ابتكار حلول سحابية وبرمجية تساهم في بناء اقتصاد معرفي رائد ومستدام."
          svg={
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 90L90 10" />
              <path d="M10 10H30V30H10V10Z" />
              <path d="M70 70H90V90H70V70Z" />
            </svg>
          }
        />

        <MinimalSection 
          id="sovereignty"
          title="السيادة الرقمية"
          description="تأسيس أنظمة سيادية تضمن أمان البيانات واستقلالية البنية التحتية للمشاريع الكبيرة والريادية في المملكة."
          reverse
          svg={
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="50" cy="50" r="40" />
              <path d="M50 10V90M10 50H90" />
            </svg>
          }
        />
      </main>

      <Footer />
    </div>
  );
}
