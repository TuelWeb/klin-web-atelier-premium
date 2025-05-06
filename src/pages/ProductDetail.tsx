
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id) : [];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  
  // Navigation des images
  const nextImage = () => {
    if (!product) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    if (!product) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };
  
  const handleBuyNow = () => {
    alert("Redirection vers la plateforme de paiement. Produit: " + product?.name);
    // Ici, vous intégreriez la redirection vers Shopify, Stripe, etc.
  };
  
  if (!product) {
    return (
      <div className="container-klin py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Produit non trouvé</h1>
        <p>Le produit que vous recherchez n'existe pas.</p>
        <Link to="/" className="btn-primary inline-block mt-6">Retour à l'accueil</Link>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-klin">
        {/* Breadcrumbs */}
        <div className="mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-klin-primary">Accueil</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to={`/categories/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-500 hover:text-klin-primary">
            {product.category}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-klin-primary">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Images */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={20} className="text-klin-primary" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={20} className="text-klin-primary" />
                </button>
                
                {/* Thumbnails */}
                <div className="flex justify-center mt-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-16 h-16 border-2 ${
                        index === currentImageIndex 
                          ? 'border-klin-primary' 
                          : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - vue ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold font-bricolage">{product.name}</h1>
            <p className="text-2xl font-medium">{product.price} €</p>
            
            <div className="prose prose-lg">{product.description}</div>
            
            {product.longDescription && (
              <div className="prose prose-gray max-w-none">
                <p>{product.longDescription}</p>
              </div>
            )}
            
            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-medium">Couleur: {selectedColor}</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border ${
                        selectedColor === color
                          ? 'border-klin-primary bg-klin-light'
                          : 'border-gray-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-medium">Taille: {selectedSize}</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center border ${
                        selectedSize === size
                          ? 'border-klin-primary bg-klin-light'
                          : 'border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Buy Button */}
            <div className="pt-4">
              <button 
                onClick={handleBuyNow}
                className="btn-primary w-full md:w-auto"
              >
                Acheter
              </button>
            </div>
            
            {/* Product Details */}
            {product.details && (
              <div className="space-y-4 border-t border-gray-200 pt-6 mt-8">
                <h3 className="text-xl font-medium">Détails du produit</h3>
                <dl className="space-y-4">
                  {product.details.material && (
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="font-medium">Matière:</dt>
                      <dd className="col-span-2">{product.details.material}</dd>
                    </div>
                  )}
                  
                  {product.details.fit && (
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="font-medium">Coupe:</dt>
                      <dd className="col-span-2">{product.details.fit}</dd>
                    </div>
                  )}
                  
                  {product.details.features && product.details.features.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="font-medium">Caractéristiques:</dt>
                      <dd className="col-span-2">
                        <ul className="list-disc pl-5 space-y-1">
                          {product.details.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                  
                  {product.details.care && product.details.care.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="font-medium">Entretien:</dt>
                      <dd className="col-span-2">
                        <ul className="list-disc pl-5 space-y-1">
                          {product.details.care.map((care, idx) => (
                            <li key={idx}>{care}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">Vous aimerez aussi</h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
