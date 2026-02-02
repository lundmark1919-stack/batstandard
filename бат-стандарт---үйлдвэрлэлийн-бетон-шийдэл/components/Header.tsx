
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { PageView } from '../App';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: PageView }[] = [
    { name: 'Нүүр', id: 'home' },
    { name: 'Бүтээгдэхүүн', id: 'products' },
    { name: 'Үйлчилгээ', id: 'services' },
    { name: 'Бидний тухай', id: 'about' },
    { name: 'Холбоо барих', id: 'contact' },
  ];

  const headerTheme = isScrolled || currentView !== 'home' 
    ? 'bg-white shadow-md py-2' 
    : 'bg-transparent py-4';

  const textTheme = isScrolled || currentView !== 'home'
    ? 'text-slate-700'
    : 'text-white';

  const logoTitleTheme = isScrolled || currentView !== 'home'
    ? 'text-[#1D3196]'
    : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerTheme}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <Logo className="w-10 h-10 md:w-12 md:h-12 rounded-sm" />
          <div className="flex flex-col items-start leading-none">
            <span className={`text-sm md:text-lg font-bold tracking-tight uppercase ${logoTitleTheme}`}>
              Бат стандарт
            </span>
            <span className={`text-[8px] md:text-[10px] font-semibold tracking-[0.2em] uppercase ${isScrolled || currentView !== 'home' ? 'text-blue-500' : 'text-blue-300'}`}>
              Төмөр бетон эдлэл үйлдвэрлэл
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-xs font-bold uppercase tracking-wider transition-all hover:text-blue-500 relative py-1 ${
                currentView === link.id ? 'text-blue-600' : textTheme
              }`}
            >
              {link.name}
              {currentView === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 animate-in fade-in zoom-in duration-300"></span>
              )}
            </button>
          ))}
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#1D3196] hover:bg-blue-800 text-white px-6 py-2.5 rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all transform hover:shadow-lg"
          >
            Үнийн санал
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled || currentView !== 'home' ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled || currentView !== 'home' ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-6 absolute top-full left-0 right-0 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col items-center gap-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`font-bold uppercase tracking-wider py-2 w-full text-center transition-colors ${
                  currentView === link.id ? 'text-blue-600 bg-blue-50' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className="bg-[#1D3196] text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest mt-2"
            >
              Үнийн санал авах
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
