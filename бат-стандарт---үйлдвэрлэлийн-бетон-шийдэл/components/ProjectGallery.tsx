
import React from 'react';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: '220кВ-ын ЦДАШ-ын Өргөтгөл',
    location: 'Дархан-Уул аймаг',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000&auto=format&fit=crop',
    category: 'Анкер суурь Ф6-А'
  },
  {
    title: '35/10кВ-ын Дэд станц',
    location: 'Улаанбаатар, СХД',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1541888941255-6580182d1e8c?q=80&w=1000&auto=format&fit=crop',
    category: 'УБК Сувагчлал'
  },
  {
    title: '110кВ-ын Шинэ Шугам',
    location: 'Өмнөговь аймаг',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop',
    category: 'Ф-цуврал сууриуд'
  }
];

const ProjectGallery: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-blue-600"></span> ТӨСЛИЙН ТҮҮХ
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6 leading-tight">
              Бидний <span className="text-blue-600">туршлага</span>
            </h3>
          </div>
          <p className="text-slate-500 font-light text-lg max-w-sm">
            Монгол орны өнцөг булан бүрт хэрэгжсэн эрчим хүчний томоохон төслүүдийн найдвартай суурь нь бидний бүтээгдэхүүн юм.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-slate-900 rounded-sm aspect-[4/5] shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-blue-600 text-[9px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-widest mb-4 inline-block">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-bold mb-2 leading-tight">{project.title}</h4>
                </div>
                
                <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                    <MapPin className="w-3 h-3 text-blue-500" /> {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                    <Calendar className="w-3 h-3 text-blue-500" /> {project.year}
                  </div>
                </div>

                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-3 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
