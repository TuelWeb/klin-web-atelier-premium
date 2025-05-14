
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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

  // Single full-width hero with animated transitions for both mobile and desktop
  return (
    <div className="relative h-[85vh] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")", backgroundSize: "24px 24px" }}></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full relative">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center p-8",
                activeIndex === index ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              )}
              style={{ zIndex: index === activeIndex ? 10 : 0 }}
            >
              <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <h1 
                  className="text-4xl md:text-7xl font-bold mb-6 text-white tracking-tight"
                  style={{ 
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="relative inline-block">
                    {item.title}
                    <span 
                      className="absolute bottom-0 left-0 w-full h-1 transform -translate-y-2"
                      style={{ background: item.accentColor }}
                    ></span>
                  </span>
                </h1>
                
                <p 
                  className="mb-10 text-gray-100 text-xl md:text-2xl max-w-2xl mx-auto font-light"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
                >
                  {item.description}
                </p>
                
                <Link
                  to={item.link}
                  className={cn(
                    "inline-block text-white px-10 py-4 text-lg font-medium transition-all border-2 hover:bg-white hover:text-gray-900",
                    "transform hover:scale-105 hover:shadow-xl"
                  )}
                  style={{ 
                    borderColor: item.accentColor,
                    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)` 
                  }}
                >
                  Découvrir la Collection
                </Link>
              </div>
              
              {/* Large styled letter in the background */}
              <div 
                className="absolute text-[25rem] font-bold opacity-10 pointer-events-none select-none"
                style={{ color: item.accentColor }}
              >
                {item.title.charAt(0)}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation arrows */}
      <div className="absolute z-20 bottom-10 left-0 right-0 flex justify-center space-x-8">
        <button
          onClick={prevSlide}
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all hover:scale-110"
          aria-label="Précédent"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex items-center space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === activeIndex 
                  ? "bg-white scale-125" 
                  : "bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Aller à l'élément ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all hover:scale-110"
          aria-label="Suivant"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
