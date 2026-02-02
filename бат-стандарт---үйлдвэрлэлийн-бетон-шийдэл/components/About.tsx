
import React from 'react';
import { ShieldCheck, Award, Target, Zap, ArrowRight, Construction, Factory } from 'lucide-react';

interface AboutProps {
  isLanding?: boolean;
  onMoreClick?: () => void;
}

const About: React.FC<AboutProps> = ({ isLanding = false, onMoreClick }) => {
  return (
    <section className="bg-white">
      {/* Intro Section */}
      <div className={`${isLanding ? 'py-20' : 'py-24'} border-b border-slate-100`}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
              <div className="rounded-sm shadow-2xl relative z-10 w-full h-[500px] overflow-hidden bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" 
                  alt="Industrial Concrete Production" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 md:p-12 rounded-sm shadow-2xl z-20 text-white max-w-xs animate-in slide-in-from-bottom duration-1000">
                <p className="text-5xl font-bold mb-2">11+</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed opacity-80">Жилийн туршлага ба найдвартай ажиллагаа</p>
              </div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h2 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-2">
                  <span className="w-10 h-px bg-blue-600"></span> БИДНИЙ ТУХАЙ
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-950 mb-8 leading-[1.1]">Эрчим хүчний дэд бүтцийн бетон шийдэл</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                  "Бат Стандарт" ХХК нь 11 жилийн турш эрчим хүчний салбарт 35-220кВ-ын ЦДАШ болон дэд станцын төмөр бетон хийц үйлдвэрлэж байна. Бидний үйлдвэрлэсэн бүтээгдэхүүн бүр Монгол орны эрс тэс уур амьсгалд тэсвэртэй, ГОСТ стандартыг бүрэн хангасан байдаг.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-blue-600">
                            <Construction className="w-5 h-5" />
                            <span className="font-bold uppercase tracking-widest text-[10px]">ХҮЧИН ЧАДАЛ</span>
                        </div>
                        <p className="text-sm text-slate-600">Өдөрт 50-80м³ чанартай бетон зуурмаг, хийц үйлдвэрлэх хүчин чадалтай.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-blue-600">
                            <Factory className="w-5 h-5" />
                            <span className="font-bold uppercase tracking-widest text-[10px]">ҮЙЛДВЭРЛЭЛ</span>
                        </div>
                        <p className="text-sm text-slate-600">Сонгинохайрхан дүүрэгт байрлах орчин үеийн үйлдвэрийн цогцолбор.</p>
                    </div>
                </div>
                {isLanding && (
                  <button 
                    onClick={onMoreClick}
                    className="flex items-center gap-4 text-slate-950 font-bold text-xs uppercase tracking-[0.25em] hover:text-blue-600 transition-all group"
                  >
                    ДЭЛГЭРЭНГҮЙ <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isLanding && (
        <>
          {/* Values Section */}
          <div className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-950 mb-8 tracking-tighter">Манай үнэт зүйлс</h2>
                <p className="text-slate-500 text-lg font-light">Бидний өдөр тутмын үйл ажиллагаа, шийдвэр гаргалт бүхэн дараах гурван зарчим дээр үндэслэгддэг.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  { icon: <ShieldCheck className="w-12 h-12" />, title: "ГОСТ Стандарт", desc: "ОХУ-ын ГОСТ болон MNS 1073:2001 стандартыг ягштал мөрдөж, багц бүр дээр чанарын лабораторийн сорилт хийдэг." },
                  { icon: <Target className="w-12 h-12" />, title: "Найдвартай байдал", desc: "35-220кВ-ын хүнд даацын тулгуур сууриудын аюулгүй ажиллагааг 50+ жилийн эдэлгээтэйгээр баталгаажуулдаг." },
                  { icon: <Zap className="w-12 h-12" />, title: "Цогц Шийдэл", desc: "Анкер суурь (Ф цуврал), УБК суваг, УСО багана, ПС/БС суурь зэрэг эрчим хүчний бүх төрлийн хийцийг нэг дороос." }
                ].map((value, i) => (
                  <div key={i} className="bg-white p-12 rounded-sm shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group">
                    <div className="text-blue-600 mb-8 group-hover:scale-110 transition-transform">{value.icon}</div>
                    <h4 className="text-2xl font-bold mb-5 tracking-tight">{value.title}</h4>
                    <p className="text-slate-500 leading-relaxed font-light">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default About;
