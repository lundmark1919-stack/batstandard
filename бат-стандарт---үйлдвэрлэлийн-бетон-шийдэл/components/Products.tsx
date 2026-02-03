
import React, { useState, useMemo, useEffect } from 'react';
import { Product } from '../types';
import { ArrowUpRight, LayoutGrid, UtilityPole, ArrowRight, Layers, Box, Columns, Info, X, CheckCircle2, Shield } from 'lucide-react';

const CATEGORY_IMAGES = {
  foundation: 'https://images.unsplash.com/photo-1541888941255-6580182d1e8c?q=80&w=800&auto=format&fit=crop',
  tray: 'https://images.unsplash.com/photo-1517089596392-db215233e63f?q=80&w=800&auto=format&fit=crop',
  pole: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
  accessory: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop'
};

const ALL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    category: 'accessory',
    name: 'Татуурганы блок ТТ-А3',
    assemblyMark: '0,4-35кВ-ын ЦДАШ-ын татуурганы блок',
    technicalMark: 'ТТ-А3: 180*500*1400',
    description: 'Цахилгаан дамжуулах агаарын шугамын татуурга бэхлэх зориулалттай хүчитгэсэн бетон блок. Өндөр ачаалал даах чадвартай, газар доорх чийгшил болон идэмхий орчинд тэсвэртэй B30 ангиллын бетоноор хийгдсэн.',
    image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800&auto=format&fit=crop',
    specs: ['B30 Бетон', 'Хүчитгэсэн', 'Татуургад', 'Урт: 1-1.4м']
  },
  {
    id: 'p2',
    category: 'foundation',
    name: 'Ул хавтан ОП-1',
    assemblyMark: '35-110кВ-ын тулгуурын ул хавтан',
    technicalMark: 'ОП-1 Ф1600, Ф2000, Ф2500',
    description: 'Тулгуурын доор суурилуулж, хөрсөнд ирэх ачааллыг жигд хуваарилах зориулалттай хавтан. Тулгуурыг суултаас хамгаалж, тогтворжилтыг хангана.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop',
    specs: ['Ф1600-2500', 'B25-B30', 'ГОСТ 13015', 'Зэврэлт тэсвэртэй']
  },
  {
    id: 'p3',
    category: 'tray',
    name: 'Кабелийн суваг УБК',
    assemblyMark: 'Дэд станцын кабелийн лотки, таг, дэр',
    technicalMark: 'УБК-1А, УБК-2А, ГСХ-6, Д5',
    description: 'Дэд станцын доторх кабелийг механик гэмтлээс хамгаалах иж бүрэн сувагчлалын систем. Угсрахад хялбар, кабель залгахад зориулагдсан дэр болон тагны сонголттой.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    specs: ['B25 Бетон', 'Угсармал', 'ГОСТ 23009', 'Олон төрлийн хэмжээ']
  },
  {
    id: 'p4',
    category: 'pole',
    name: 'Тулгуур УСО, УБ-1',
    assemblyMark: 'Дэд станцын тоноглолын тулгуур шон',
    technicalMark: 'УСО-1А..5А, УБ-1',
    description: 'Тоноглолуудыг суурилуулахад ашиглагддаг дөрвөлжин огтлолтой багана болон суурь. Дэд станцын доторх тоноглолуудын үндсэн тулгуур болно.',
    image: 'https://images.unsplash.com/photo-1534335343439-0ba0510526e0?q=80&w=800&auto=format&fit=crop',
    specs: ['B30 Бетон', 'h=2.2-5.2м', 'Дэд станцад', 'Чанарын гэрчилгээтэй']
  },
  {
    id: 'p5',
    category: 'accessory',
    name: 'Чагт /Ригель/ АР-5',
    assemblyMark: '35-220кВ-ын чагт АР-5, Р1-А, АР-6',
    technicalMark: 'АР-5 (200*400*3000), АР-6',
    description: 'Тулгуур шонг хөрсөнд бэхлэх, тогтворжилтыг хангах зориулалттай хөндлөн хийц. Салхины болон механик ачааллын эсрэг эсэргүүцлийг нэмэгдүүлнэ.',
    image: 'https://images.unsplash.com/photo-1584464431055-66170425a1e7?q=80&w=800&auto=format&fit=crop',
    specs: ['B30 Бетон', 'MNS 4225', 'L=1-3.5м', 'Арматурчлагдсан']
  },
  {
    id: 'p6',
    category: 'foundation',
    name: 'Тоноглолын ПС-2 суурь',
    assemblyMark: 'Портал, аянгын хийцлэлийн суурь',
    technicalMark: '1600*1600 h=2280',
    description: 'Портал, аянгын хийцлэл, таслуур зэрэг хүнд тоноглолын үндсэн угсармал суурь. Гүнзгийрүүлж суурилуулна.',
    image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800&auto=format&fit=crop',
    specs: ['h=2.28м', 'B30 Бетон', 'ГОСТ 13015', 'Даац: 10тн+']
  }
];

interface ProductsProps {
  isLanding?: boolean;
  onMoreClick?: () => void;
}

const Products: React.FC<ProductsProps> = ({ isLanding = false, onMoreClick }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'foundation' | 'tray' | 'pole' | 'accessory'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (isLanding) return ALL_PRODUCTS.slice(0, 6);
    if (activeTab === 'all') return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter(p => p.category === activeTab);
  }, [isLanding, activeTab]);

  const tabs = [
    { id: 'all', label: 'Бүгд', icon: <LayoutGrid className="w-4 h-4" /> },
    { id: 'foundation', label: 'Суурь / Хавтан', icon: <Box className="w-4 h-4" /> },
    { id: 'tray', label: 'Суваг / Таг', icon: <Columns className="w-4 h-4" /> },
    { id: 'pole', label: 'Тулгуур / Шон', icon: <UtilityPole className="w-4 h-4" /> },
    { id: 'accessory', label: 'Ригель / Бусад', icon: <Layers className="w-4 h-4" /> },
  ];

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct]);

  return (
    <section id="products" className={`py-24 bg-white ${!isLanding && 'min-h-screen'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-blue-600"></span> БҮТЭЭГДЭХҮҮНИЙ КАТАЛОГ
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6 leading-tight">
              Инженерчлэлийн <span className="text-blue-600">бетон хийц</span>
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              Бид 35-220кВ-ын эрчим хүчний дэд бүтцэд зориулагдсан стандартаар баталгаажсан бетон эдлэлүүдийг үйлдвэрлэдэг.
            </p>
          </div>
          
          {!isLanding && (
            <div className="flex flex-wrap bg-slate-50 p-1.5 rounded-sm border border-slate-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-[10px] uppercase tracking-wider transition-all ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-xl' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => setSelectedProduct(product)}
              className="group bg-white border border-slate-100 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 rounded-sm overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden bg-slate-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = CATEGORY_IMAGES[product.category];
                    target.className = "w-full h-full object-cover grayscale opacity-50";
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-slate-950/80 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-widest">
                    {product.category === 'foundation' ? 'Суурь' : product.category === 'tray' ? 'Суваг' : product.category === 'pole' ? 'Тулгуур' : 'Дагалдах'}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-4">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-tight block mb-1 line-clamp-1">{product.assemblyMark}</span>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {product.name}
                    </h4>
                </div>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed line-clamp-3 font-light italic">
                  {product.description}
                </p>
                
                <div className="mt-auto">
                  <div className="bg-slate-50 p-4 border border-slate-100 mb-8 rounded-sm">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                      <Info className="w-3 h-3" /> Хийцлэлийн марк
                    </p>
                    <p className="text-xs font-bold text-slate-700 truncate">{product.technicalMark}</p>
                  </div>
                  
                  <div className="flex flex-col gap-4 pt-6 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                        {product.specs.slice(0, 3).map((s, i) => (
                            <span key={i} className="text-[9px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded-sm uppercase tracking-tight">{s}</span>
                        ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">MNS/ГОСТ Стандарт</span>
                      <button className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] hover:gap-3 transition-all shrink-0">
                        Дэлгэрэнгүй <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isLanding && (
          <div className="mt-20 text-center">
            <button 
              onClick={onMoreClick}
              className="inline-flex items-center gap-4 bg-slate-950 text-white px-12 py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl group"
            >
              БҮХ БҮТЭЭГДЭХҮҮН ҮЗЭХ <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300"
              onClick={() => setSelectedProduct(null)}
            ></div>
            
            {/* Modal Content */}
            <div className="relative w-full max-w-5xl bg-white rounded-sm shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-500">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-all border border-slate-100"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Side: Product Image */}
              <div className="md:w-1/2 bg-slate-50 flex items-center justify-center p-12">
                <div className="relative w-full aspect-square max-h-[400px]">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover rounded-sm shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = CATEGORY_IMAGES[selectedProduct.category];
                      target.className = "w-full h-full object-cover grayscale opacity-50";
                    }}
                  />
                  <div className="absolute -bottom-6 -left-6 bg-blue-600 p-6 shadow-xl hidden lg:block">
                    <Shield className="text-white w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-50 border border-blue-100 text-blue-600 font-bold text-[9px] uppercase tracking-widest mb-4">
                    <CheckCircle2 className="w-3 h-3" /> {selectedProduct.category === 'foundation' ? 'Бетон суурь' : selectedProduct.category === 'tray' ? 'Кабелийн суваг' : selectedProduct.category === 'pole' ? 'Тулгуур шон' : 'Дагалдах хэрэгсэл'}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-950 mb-4 leading-tight">{selectedProduct.name}</h2>
                  <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-6 border-l-2 border-blue-600 pl-4">{selectedProduct.assemblyMark}</p>
                  <p className="text-slate-500 leading-relaxed font-light italic">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-10">
                  <div className="bg-slate-50 p-6 border border-slate-100 rounded-sm">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                      <Info className="w-3 h-3" /> Техникийн үзүүлэлт (Марк)
                    </h4>
                    <p className="text-sm font-bold text-slate-800 leading-relaxed">{selectedProduct.technicalMark}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Давуу тал, Шинж чанар</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProduct.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-sm">
                          <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                          <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-slate-100">
                  <button 
                    onClick={() => {
                        window.location.hash = 'contact';
                        setSelectedProduct(null);
                    }}
                    className="flex-grow bg-blue-600 text-white py-4 rounded-sm font-bold text-[11px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                  >
                    Үнийн санал авах
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
