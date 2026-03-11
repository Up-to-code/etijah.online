'use client';

export default function Loading() {
  console.log('[Loading] System initializing...')
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-slate-900 font-sans z-[100]">
      <div className="flex flex-col items-center gap-8 relative">
        {/* Sharp Institutional Loader */}
        <div className="relative h-20 w-20 border-2 border-slate-100 p-1">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 animate-[loading-bar_2s_infinite]" />
          <div className="w-full h-full border-2 border-slate-900 flex items-center justify-center">
             <span className="text-[12px] font-black text-slate-900 animate-pulse">الاتجاه</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-sm font-black tracking-widest text-blue-600 uppercase animate-pulse">
            جاري تهيئة بروتوكول النظام
          </div>
          <div className="text-[10px] font-black text-slate-300 tracking-[0.4em] uppercase">
            تأسيس الربط الهيكلي_١.١
          </div>
        </div>

        {/* Decorative Grid Element */}
        <div className="absolute -top-24 -left-24 w-48 h-48 border border-slate-50 pointer-events-none -z-10" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 border border-slate-50 pointer-events-none -z-10" />
      </div>
      
      <style jsx>{`
        @keyframes loading-bar {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          50.1% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}</style>
    </div>
  )
}
