
import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Factory } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Image with optimized visibility for text */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
          alt="Transmission Support Towers" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-30 grayscale-[20%]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-white space-y-10 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-blue-600/20 border border-blue-400/30 text-blue-200 font-bold text-[10px] uppercase tracking-[0.3em]">
            <Zap className="w-3 h-3 text-blue-400" />
            35/110/220кВ Анкер тулгуурын суурь үйлдвэрлэл
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter drop-shadow-2xl">
              Бат <br />
              <span className="text-blue-500">Стандарт</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-lexend font-semibold text-slate-300 tracking-tight">
              ЦДАШ-ын Төмөр Бетон Суурийн Төрөлжсөн Шийдэл
            </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed font-light drop-shadow-md border-l-2 border-blue-600/50 pl-6">
            Бид эрчим хүчний стратегийн бүтээн байгуулалтад зориулсан, өндөр нарийвчлалтай төмөр бетон анкер суурь (Ф-цуврал) болон дэд станцын иж бүрэн хийцлэлийг ГОСТ стандартын дагуу үйлдвэрлэж байна.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#products" 
              className="px-10 py-5 bg-blue-600 text-white hover:bg-blue-700 rounded-sm font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-2xl shadow-blue-600/40"
            >
              Бүтээгдэхүүн үзэх <ArrowRight className="w-4 h-4" />
            </a>
            <button 
              onClick={onContactClick}
              className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-sm font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all"
            >
              Үнийн санал авах
            </button>
          </div>

          <div className="grid grid-cols-3 gap-10 pt-10 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white">11</span>
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mt-2">Жилийн туршлага</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white">150+</span>
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mt-2">Төсөлд нийлүүлсэн</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white">ГОСТ</span>
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mt-2">Стандартын баталгаа</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-sm p-10 relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-5 mb-10">
              <div className="p-4 bg-blue-600 rounded-sm">
                <Factory className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl uppercase tracking-tighter italic">СТРАТЕГИЙН ҮЙЛДВЭРЛЭЛ</h3>
                <p className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em]">REINFORCED ANCHOR BASES</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Анкер суурь (Ф-цуврал)', desc: '35-220кВ-ын ЦДАШ-ын зориулалттай' },
                { title: 'Төмөр бетон шон', desc: 'СВ, СК цувралын конусан болон цилиндр' },
                { title: 'Дэд станцын тоноглол', desc: 'УБК, УСО, ПС, БС иж бүрэн шийдэл' }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white/5 rounded-sm border border-white/5 hover:border-blue-500/50 transition-all cursor-default group">
                  <p className="text-white font-bold text-sm uppercase tracking-wider group-hover:text-blue-400 transition-colors">{item.title}</p>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed uppercase tracking-widest">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
