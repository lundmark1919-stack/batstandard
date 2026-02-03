
import React from 'react';
import { Factory, Truck, Microscope, Award, ShieldCheck, Ruler, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: <Factory className="w-7 h-7" />,
    title: 'ГОСТ Стандарт Үйлдвэрлэл',
    description: 'ОХУ-ын ГОСТ стандартын дагуу Ф-цуврал болон УБК, УСО, УБ сууриудыг өндөр чанартай үйлдвэрлэдэг.'
  },
  {
    icon: <Microscope className="w-7 h-7" />,
    title: 'Техникийн Хяналт',
    description: '35-220кВ-ын өндөр хүчдлийн тоноглолын суурийн бат бэхийг лабораторийн сорилтоор баталгаажуулдаг.'
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: 'Төслийн Нийлүүлэлт',
    description: 'ЦДАШ-ын трасс болон дэд станцын талбайд хүнд даацын сууриудыг зориулалтын техникээр хүргэдэг.'
  },
  {
    icon: <Ruler className="w-7 h-7" />,
    title: 'Захиалгат Хийцүүд',
    description: 'Элегазын суурь болон тусгай зориулалтын төмөр бетон эдлэлийг зургийн дагуу захиалгаар хийнэ.'
  }
];

interface ServicesProps {
  isLanding?: boolean;
  onMoreClick?: () => void;
}

const Services: React.FC<ServicesProps> = ({ isLanding = false, onMoreClick }) => {
  return (
    <section id="services" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <Factory className="w-[400px] h-[400px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Бидний чадамж</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Эрчим хүчний салбарын найдвартай түнш</h3>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Бид 35-220кВ-ын ЦДАШ-ын анкер суурь (Ф2-2 - Ф6-А) болон дэд станцын иж бүрэн төмөр бетон хийцийг стандартаар хангадаг.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="bg-blue-600/10 text-blue-500 p-4 rounded-sm w-max mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {isLanding ? (
          <div className="mt-16 text-center">
            <button 
              onClick={onMoreClick}
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl group"
            >
              Үйлчилгээ дэлгэрэнгүй үзэх <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ) : (
          <div className="mt-16 p-8 bg-blue-600 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/20 rounded-sm">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white uppercase tracking-tight">ГОСТ СТАНДАРТ</h4>
                <p className="text-blue-100 text-sm">ОХУ болон Монгол Улсын стандартын баталгаажуулалттай</p>
              </div>
            </div>
            <button className="px-10 py-4 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-widest transition-all">
              Стандарт үзэх
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
