
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  items: {
    title: string;
    description: string;
    link: string;
    accentColor: string;
  }[];
}

const HeroSection = ({ items }: HeroProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  if (isMobile) {
    return (
      <div className="relative h-[70vh] overflow-hidden bg-klin-light">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full relative">
            {items.map((item, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-500 ease-in-out flex flex-col items-center justify-center p-6"
                style={{ 
                  opacity: index === activeIndex ? 1 : 0, 
                  zIndex: index === activeIndex ? 10 : 0,
                }}
              >
                <div className="text-center max-w-md mx-auto">
                  <span 
                    className="block mb-4 text-4xl font-bold"
                    style={{ color: item.accentColor }}
                  >
                    {item.title}
                  </span>
                  <p className="mb-8 text-klin-text text-lg">{item.description}</p>
                  <Link
                    to={item.link}
                    className="inline-block bg-klin-primary text-white px-8 py-3 font-medium transition-colors hover:bg-klin-hover"
                    style={{ 
                      background: item.accentColor,
                      boxShadow: `0 4px 14px rgba(0, 0, 0, 0.2)` 
                    }}
                  >
                    Découvrir
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-lg"
          aria-label="Précédent"
        >
          <ChevronLeft size={20} className="text-klin-primary" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-lg"
          aria-label="Suivant"
        >
          <ChevronRight size={20} className="text-klin-primary" />
        </button>
        
        <div className="absolute bottom-24 left-0 right-0 z-20 flex justify-center space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === activeIndex ? 'bg-klin-primary' : 'bg-klin-primary/30'
              }`}
              aria-label={`Aller à l'élément ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4 h-[70vh]">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden group animate-fade-in flex flex-col items-center justify-center p-8"
          style={{ 
            animationDelay: `${index * 200}ms`,
            background: `linear-gradient(135deg, white, ${item.accentColor}15)`,
            borderTop: `4px solid ${item.accentColor}`,
          }}
        >
          <div className="text-center">
            <h2 
              className="text-2xl md:text-4xl font-bold mb-4 transition-transform duration-300 group-hover:scale-105"
              style={{ color: item.accentColor }}
            >
              {item.title}
            </h2>
            <div className="w-16 h-1 mx-auto mb-6" style={{ background: item.accentColor }}></div>
            <p className="mb-8 max-w-md text-lg">{item.description}</p>
            <Link
              to={item.link}
              className="inline-block text-white px-8 py-3 font-medium transition-all hover:scale-105"
              style={{ 
                background: item.accentColor,
                boxShadow: `0 4px 14px rgba(0, 0, 0, 0.15)` 
              }}
            >
              Découvrir
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
