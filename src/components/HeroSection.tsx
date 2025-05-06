
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  items: {
    image: string;
    title: string;
    description: string;
    link: string;
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
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full relative">
            {items.map((item, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{ opacity: index === activeIndex ? 1 : 0, zIndex: index === activeIndex ? 10 : 0 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent">
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                  <p className="mb-4">{item.description}</p>
                  <Link
                    to={item.link}
                    className="inline-block bg-white text-klin-primary px-6 py-3 font-medium transition-colors hover:bg-gray-100"
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
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full"
          aria-label="Précédent"
        >
          <ChevronLeft size={20} className="text-klin-primary" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full"
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
                index === activeIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
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
          className="relative overflow-hidden group animate-fade-in"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h2>
            <p className="mb-4 max-w-md">{item.description}</p>
            <Link
              to={item.link}
              className="inline-block bg-white text-klin-primary px-6 py-3 font-medium transition-colors hover:bg-gray-100"
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
