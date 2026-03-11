import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { Reveal } from '@/components/landing/Reveal';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/30 font-sans">
      <Navbar />

      <main className="pt-32">
        <section className="bg-white py-32 md:py-64">
           <div className="container mx-auto px-6 max-w-6xl">
              <Reveal>
                <div className="text-right">
                   <h1 className="text-8xl md:text-[12rem] font-black text-slate-900 tracking-tighter leading-none mb-12">
                     مشاريعنا
                   </h1>
                   <p className="text-2xl md:text-4xl text-slate-500 font-bold leading-tight tracking-tight max-w-3xl ml-auto mr-0">
                     استعراض لبروتوكولات النمو التي قمنا بهندستها لتحويل الرؤى إلى واقع رقمي متين.
                   </p>
                </div>
              </Reveal>
           </div>
        </section>

        <section className="bg-white py-32 border-t border-slate-50">
           <div className="container mx-auto px-6 max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                 {[1, 2, 3, 4].map((i) => (
                   <Reveal key={i} delay={i * 0.1}>
                      <div className="group cursor-pointer">
                         <div className="aspect-video bg-slate-50 relative overflow-hidden mb-8">
                            <div className="absolute inset-0 border-[32px] border-white opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center">
                               <span className="text-8xl md:text-[12rem] font-black text-slate-100 group-hover:text-blue-600/10 transition-colors uppercase leading-none">{i}</span>
                            </div>
                         </div>
                         <h3 className="text-4xl font-black text-slate-900 mb-2 text-right">عنوان المشروع {i}</h3>
                         <p className="text-xl font-bold text-slate-400 text-right uppercase tracking-widest">تصميم الأنظمة /// الربط السحابي</p>
                      </div>
                   </Reveal>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
