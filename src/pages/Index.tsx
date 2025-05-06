
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import FeaturesGrid from '@/components/FeaturesGrid';
import { getBestsellers, getNewProducts } from '@/data/products';

const heroItems = [
  {
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1160&auto=format&fit=crop',
    title: 'Costumes',
    description: 'Élégance et raffinement pour toutes les occasions',
    link: '/categories/costumes'
  },
  {
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60acc26?q=80&w=1287&auto=format&fit=crop',
    title: 'Accessoires',
    description: 'Le détail qui fait la différence',
    link: '/categories/accessoires'
  },
  {
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1025&auto=format&fit=crop',
    title: 'Chemises',
    description: 'Qualité et style au quotidien',
    link: '/categories/chemises'
  }
];

const Index = () => {
  const newProducts = getNewProducts(8);
  const bestsellers = getBestsellers(4);
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="mb-24">
        <HeroSection items={heroItems} />
      </section>
      
      {/* New Collection */}
      <section className="container-klin mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Nouvelle Collection</h2>
        <ProductGrid products={newProducts} columns={4} />
      </section>
      
      {/* Best Sellers */}
      <section className="container-klin mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Meilleures Ventes</h2>
        <ProductGrid products={bestsellers} columns={4} />
      </section>
      
      {/* Features Grid */}
      <section className="container-klin mb-24">
        <FeaturesGrid />
      </section>
    </div>
  );
};

export default Index;
