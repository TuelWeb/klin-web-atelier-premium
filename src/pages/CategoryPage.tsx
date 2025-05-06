
import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryBanner from '@/components/CategoryBanner';
import ProductGrid from '@/components/ProductGrid';
import { getProductsByCategory } from '@/data/products';

// Mapping des slugs vers les noms de catégories et images
const categoryMap: Record<string, { title: string; description: string; image: string }> = {
  'chemises': {
    title: 'Chemises',
    description: 'Découvrez notre collection de chemises élégantes et confortables',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1025&auto=format&fit=crop'
  },
  'costumes': {
    title: 'Costumes',
    description: 'Notre sélection de costumes pour toutes vos occasions',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1160&auto=format&fit=crop'
  },
  'tee-shirts': {
    title: 'Tee-shirts',
    description: 'Des t-shirts de qualité pour un style décontracté',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop'
  },
  'pulls-et-gilets': {
    title: 'Pulls & Gilets',
    description: 'Restez au chaud avec style grâce à notre collection de pulls et gilets',
    image: 'https://images.unsplash.com/photo-1614975059251-992f11792b9f?q=80&w=1287&auto=format&fit=crop'
  },
  'pantalons': {
    title: 'Pantalons',
    description: 'Des pantalons confortables pour tous les styles',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1287&auto=format&fit=crop'
  },
  'shorts': {
    title: 'Shorts',
    description: 'Notre collection de shorts élégants pour l\'été',
    image: 'https://images.unsplash.com/photo-1487744137800-5dab162e5da7?q=80&w=1287&auto=format&fit=crop'
  },
  'accessoires': {
    title: 'Accessoires & Chaussures',
    description: 'Complétez votre look avec nos accessoires de qualité',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60acc26?q=80&w=1287&auto=format&fit=crop'
  }
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Récupérer les informations de la catégorie
  const categoryInfo = slug ? categoryMap[slug] : undefined;
  
  // Récupérer les produits de la catégorie
  const products = slug ? getProductsByCategory(categoryInfo?.title || '') : [];
  
  if (!categoryInfo) {
    return (
      <div className="container-klin py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Catégorie non trouvée</h1>
        <p>La catégorie que vous recherchez n'existe pas.</p>
      </div>
    );
  }
  
  return (
    <div className="pt-20">
      {/* Banner */}
      <CategoryBanner 
        title={categoryInfo.title}
        description={categoryInfo.description}
        image={categoryInfo.image}
      />
      
      {/* Products */}
      <section className="container-klin py-16">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Notre collection {categoryInfo.title.toLowerCase()}</h2>
            <p className="text-gray-600 mt-2">{products.length} produits</p>
          </div>
        </div>
        
        {products.length > 0 ? (
          <ProductGrid products={products} columns={3} />
        ) : (
          <p className="text-center py-12 text-gray-500">Aucun produit disponible pour le moment.</p>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;
