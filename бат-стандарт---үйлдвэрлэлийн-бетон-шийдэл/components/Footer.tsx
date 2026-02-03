
import React from 'react';
import { Linkedin, Twitter, Facebook, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { PageView } from '../App';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-8">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Logo className="w-12 h-12 rounded-sm" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-lg font-bold text-white tracking-tight uppercase">
                  Бат Стандарт
                </span>
                <span className="text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase">
                  Монгол Бетон
                </span>
              </div>
            </button>
            <div className="space-y-4 text-xs">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <p>Сонгинохайрхан дүүрэг 32-р хороо, Ulaanbaatar, Mongolia, 976</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="tel:+97699059856" className="hover:text-blue-400 transition-colors">+976 9905 9856</a>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="mailto:batstandart@gmail.com" className="hover:text-blue-400 transition-colors">batstandart@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100054413862816" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Цэс</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">Нүүр хуудас</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-blue-400 transition-colors">Бүтээгдэхүүн</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">Үйлчилгээ</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">Бидний тухай</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">Холбоо барих</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Шуурхай хандалт</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider">
              <li><button onClick={() => onNavigate('products')} className="hover:text-blue-400 transition-colors">Б-цуврал суурь</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-blue-400 transition-colors">ЛТ кабелийн суваг</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-blue-400 transition-colors">ПТ сувгийн таг</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">Үнийн санал авах</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Мэдээлэл авах</h4>
            <p className="text-xs mb-6 leading-relaxed font-light">Шинэ бүтээгдэхүүн болон техникийн шинэчлэлийн мэдээллийг имэйлээр аваарай.</p>
            <form className="relative" onSubmit={(e) => {
              e.preventDefault();
              const email = (e.target as any).querySelector('input').value;
              if (email) window.location.href = `mailto:batstandart@gmail.com?subject=Newsletter Subscription&body=Please add ${email} to your newsletter list.`;
            }}>
              <input 
                type="email" 
                placeholder="Имэйл хаяг"
                className="w-full bg-slate-900 border border-slate-800 rounded-sm py-4 px-5 pr-14 focus:outline-none focus:border-blue-700 transition-all text-xs font-light"
              />
              <button type="submit" className="absolute right-2 top-2 p-2 bg-blue-600 rounded-sm text-white hover:bg-blue-500 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
          <p>© {currentYear} "Бат Стандарт" ХХК. Бүх эрх хуулиар хамгаалагдсан.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-blue-400 transition-colors">Нууцлалын бодлого</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Үйлчилгээний нөхцөл</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Стандарт</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
