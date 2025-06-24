
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Элеон Лифт
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Профессиональный монтаж лифтового оборудования: 
                <span className="text-purple-300 font-semibold"> качество и безопасность</span> в каждом шаге
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
              >
                Наши услуги
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('contact-form')}
                className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg"
              >
                Получить консультацию
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">15+</div>
                <div className="text-sm text-gray-400">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">500+</div>
                <div className="text-sm text-gray-400">установок</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">24/7</div>
                <div className="text-sm text-gray-400">поддержка</div>
              </div>
            </div>
          </div>

          {/* Animated Elevator */}
          <div className="relative">
            <div className="relative mx-auto w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden">
              {/* Elevator Shaft */}
              <div className="absolute inset-2 bg-gray-700 rounded-md">
                {/* Floor Indicators */}
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute right-2 w-1 h-8 bg-gray-600 rounded"
                    style={{ top: `${15 + i * 12}%` }}
                  >
                    <div className="absolute -right-6 top-1 text-xs text-gray-400">
                      {6 - i}
                    </div>
                  </div>
                ))}
                
                {/* Animated Elevator Car */}
                <div 
                  className="absolute left-2 right-8 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded shadow-lg transition-all duration-1000 ease-in-out"
                  style={{ 
                    top: `${15 + (scrollY * 0.05) % 60}%`,
                    transform: 'translateY(-50%)'
                  }}
                >
                  <div className="absolute inset-1 bg-purple-400 rounded opacity-30"></div>
                  <div className="absolute top-2 left-2 right-2 h-1 bg-purple-200 rounded"></div>
                  <Icon name="Users" className="absolute top-4 left-4 text-white" size={16} />
                </div>
              </div>

              {/* Building Structure */}
              <div className="absolute -top-4 -left-8 -right-8 h-8 bg-gray-800 rounded-t-lg"></div>
              <div className="absolute -bottom-4 -left-8 -right-8 h-8 bg-gray-900 rounded-b-lg"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-12 -right-8 bg-purple-600/20 rounded-full p-4">
              <Icon name="Shield" className="text-purple-300" size={24} />
            </div>
            <div className="absolute bottom-12 -left-8 bg-orange-600/20 rounded-full p-4">
              <Icon name="Wrench" className="text-orange-300" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
