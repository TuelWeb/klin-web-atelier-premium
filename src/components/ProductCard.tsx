
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

const ProductCard = ({ id, name, price, image, category, isBestseller, isNew }: ProductCardProps) => {
  return (
    <div className="group animate-fade-in">
      <div className="relative overflow-hidden mb-4">
        <Link to={`/produits/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-[400px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        {/* Badges */}
        {(isBestseller || isNew) && (
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isBestseller && (
              <span className="bg-klin-primary text-white px-3 py-1 text-xs font-medium">
                BEST-SELLER
              </span>
            )}
            {isNew && (
              <span className="bg-black text-white px-3 py-1 text-xs font-medium">
                NOUVEAU
              </span>
            )}
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Link 
            to={`/produits/${id}`}
            className="block w-full text-center text-klin-primary hover:text-klin-hover border border-klin-primary py-2 transition-colors font-medium"
          >
            Voir le produit
          </Link>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <Link to={`/produits/${id}`} className="block hover:underline">
            <h3 className="font-medium text-lg">{name}</h3>
          </Link>
          <p className="text-sm text-gray-500 mt-1">{category}</p>
        </div>
        <p className="font-medium">{price} €</p>
      </div>
    </div>
  );
};

export default ProductCard;
