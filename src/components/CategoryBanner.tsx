
import React from 'react';

interface CategoryBannerProps {
  title: string;
  description?: string;
  image: string;
}

const CategoryBanner = ({ title, description, image }: CategoryBannerProps) => {
  return (
    <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg max-w-2xl">{description}</p>}
      </div>
    </div>
  );
};

export default CategoryBanner;
