
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

const ProductGrid = ({ products, columns = 4 }: ProductGridProps) => {
  const gridClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };
  
  return (
    <div className={`grid ${gridClass[columns]} gap-x-6 gap-y-12`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.images[0]}
          category={product.category}
          isBestseller={product.isBestseller}
          isNew={product.isNew}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
