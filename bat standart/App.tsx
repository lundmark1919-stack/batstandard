
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import ProjectGallery from './components/ProjectGallery';

export type PageView = 'home' | 'products' | 'services' | 'about' | 'contact';

const App: React.FC = () => {
  const [view, setView] = useState<PageView>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageView;
      if (['home', 'products', 'services', 'about', 'contact'].includes(hash)) {
        setView(hash as PageView);
      } else if (!hash) {
        setView('home');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (newView: PageView) => {
    window.location.hash = newView;
  };

  const renderContent = () => {
    switch (view) {
      case 'products':
        return <div className="pt-20"><Products /></div>;
      case 'services':
        return <div className="pt-20"><Services /></div>;
      case 'about':
        return <div className="pt-20"><About /></div>;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero onContactClick={() => navigateTo('contact')} />
            
            <div className="relative">
              <About isLanding onMoreClick={() => navigateTo('about')} />
            </div>

            <div className="relative">
              <ProjectGallery />
            </div>

            <div className="relative">
              <Services isLanding onMoreClick={() => navigateTo('services')} />
            </div>

            <div className="relative">
              <Products isLanding onMoreClick={() => navigateTo('products')} />
            </div>

            <section className="py-20 bg-blue-600 text-white">
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Танд техникийн зөвлөгөө эсвэл үнийн санал хэрэгтэй юу?</h2>
                <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
                  Манай мэргэжлийн инженерүүд таны төсөлд тохирох хамгийн оновчтой бетон шийдлийг санал болгоход бэлэн байна.
                </p>
                <button 
                  onClick={() => navigateTo('contact')}
                  className="bg-white text-blue-600 px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl"
                >
                  Холбоо барих
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header currentView={view} onNavigate={navigateTo} />
      <main className="flex-grow">
        <div className="animate-in fade-in duration-500">
          {renderContent()}
        </div>
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
