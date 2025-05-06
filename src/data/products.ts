
import { Product } from '@/types/product';

// Générer un ID unique
const generateId = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

export const products: Product[] = [
  {
    id: generateId('Chemise Havana'),
    name: 'Chemise Havana',
    price: 79,
    description: 'Chemise élégante en coton premium.',
    longDescription: 'Notre chemise Havana allie élégance et confort. Fabriquée en coton premium, elle est parfaite pour toutes les occasions, du bureau aux sorties en ville. Sa coupe régulière offre une silhouette moderne et élégante.',
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1025&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604695573706-53170668f6a6?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563630423918-b58f07336ac5?q=80&w=1287&auto=format&fit=crop',
    ],
    category: 'Chemises',
    colors: ['Blanc', 'Bleu ciel', 'Noir'],
    sizes: ['S', 'M', 'L', 'XL'],
    isBestseller: true,
    inStock: true,
    details: {
      material: '100% coton',
      care: ['Lavage à 30°C', 'Pas de sèche-linge', 'Repassage à température moyenne'],
      fit: 'Coupe régulière',
      features: ['Col italien', 'Boutons nacrés', 'Poignets ajustables']
    },
    related: ['chemise-milano', 'chemise-oxford', 'chemise-linen-breeze']
  },
  {
    id: generateId('Costume Élégance'),
    name: 'Costume Élégance',
    price: 189,
    description: 'Costume sur mesure pour un style impeccable.',
    longDescription: 'Notre costume Élégance est conçu pour faire impression. Avec sa laine italienne de première qualité et sa coupe semi-ajustée, il vous offrira une allure élégante et moderne pour toutes vos occasions importantes.',
    images: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1160&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1160&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop',
    ],
    category: 'Costumes',
    colors: ['Bleu marine', 'Gris', 'Noir'],
    sizes: ['46', '48', '50', '52', '54'],
    isBestseller: true,
    inStock: true,
    details: {
      material: '80% laine, 20% polyester',
      care: ['Nettoyage à sec uniquement'],
      fit: 'Coupe semi-ajustée',
      features: ['Doublure en viscose', 'Deux fentes arrière', 'Deux boutons']
    },
    related: ['costume-milano', 'costume-paris', 'costume-london']
  },
  {
    id: generateId('Tee-shirt Urban Soft'),
    name: 'Tee-shirt Urban Soft',
    price: 39,
    description: 'T-shirt en coton bio ultra doux.',
    longDescription: 'Le T-shirt Urban Soft est l\'incarnation du confort urbain. Conçu en coton bio ultra doux, il est parfait pour un look décontracté mais soigné. Sa coupe relaxed modern s\'adapte à toutes les morphologies.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1287&auto=format&fit=crop',
    ],
    category: 'Tee-shirts',
    colors: ['Blanc', 'Noir', 'Gris', 'Bleu marine'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    inStock: true,
    details: {
      material: '100% coton bio',
      care: ['Lavage à 30°C', 'Pas de sèche-linge', 'Repassage doux sur l\'envers'],
      fit: 'Relaxed modern fit',
      features: ['Col rond', 'Manches courtes', 'Tissu pré-rétréci']
    },
    related: ['tee-shirt-essential', 'tee-shirt-vintage', 'tee-shirt-premium']
  },
  {
    id: generateId('Pull Milano'),
    name: 'Pull Milano',
    price: 89,
    description: 'Pull en laine mérinos de qualité supérieure.',
    longDescription: 'Notre pull Milano est fabriqué à partir de laine mérinos de qualité supérieure pour vous offrir une chaleur naturelle et un confort optimal. Sa finition soignée et sa coupe élégante en font un incontournable de votre garde-robe.',
    images: [
      'https://images.unsplash.com/photo-1614975059251-992f11792b9f?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1287&auto=format&fit=crop',
    ],
    category: 'Pulls & Gilets',
    colors: ['Gris', 'Bleu marine', 'Bordeaux'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    details: {
      material: '100% laine mérinos',
      care: ['Lavage à la main', 'Séchage à plat', 'Ne pas repasser'],
      fit: 'Coupe régulière',
      features: ['Col rond', 'Finition côtelée aux poignets et à la taille']
    },
    related: ['pull-cashmere', 'gilet-hudson', 'cardigan-soft']
  },
  {
    id: generateId('Pantalon Chino Classic'),
    name: 'Pantalon Chino Classic',
    price: 69,
    description: 'Pantalon chino confortable pour le quotidien.',
    longDescription: 'Le Chino Classic est un pantalon polyvalent parfait pour toutes les occasions. Sa coupe droite et son tissu en coton stretch offrent à la fois style et confort toute la journée. Un indispensable de la garde-robe masculine moderne.',
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1287&auto=format&fit=crop',
    ],
    category: 'Pantalons',
    colors: ['Beige', 'Kaki', 'Bleu marine', 'Noir'],
    sizes: ['38', '40', '42', '44', '46'],
    isBestseller: true,
    inStock: true,
    details: {
      material: '98% coton, 2% élasthanne',
      care: ['Lavage à 30°C', 'Repassage à température moyenne'],
      fit: 'Coupe droite',
      features: ['Poches italiennes', 'Fermeture à bouton et zip', 'Passants pour ceinture']
    },
    related: ['pantalon-business', 'pantalon-casual', 'jean-premium']
  },
  {
    id: generateId('Short Bermuda'),
    name: 'Short Bermuda',
    price: 59,
    description: 'Short bermuda élégant pour l\'été.',
    longDescription: 'Notre Short Bermuda est le compagnon parfait pour les journées chaudes. Fabriqué en coton léger de qualité supérieure, il allie style et confort pour toutes vos activités estivales. Sa longueur classique et sa coupe soignée en font un choix élégant.',
    images: [
      'https://images.unsplash.com/photo-1487744137800-5dab162e5da7?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=1335&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?q=80&w=1160&auto=format&fit=crop',
    ],
    category: 'Shorts',
    colors: ['Beige', 'Bleu ciel', 'Kaki'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    inStock: true,
    details: {
      material: '100% coton',
      care: ['Lavage à 30°C', 'Repassage à basse température'],
      fit: 'Coupe régulière',
      features: ['2 poches latérales', '2 poches arrière', 'Longueur au genou']
    },
    related: ['short-plage', 'bermuda-cargo', 'short-sport']
  },
  {
    id: generateId('Chemise Oxford'),
    name: 'Chemise Oxford',
    price: 75,
    description: 'Chemise Oxford blanche intemporelle.',
    longDescription: 'Cette chemise Oxford au tissage caractéristique est un classique intemporel. Son tissu robuste mais doux offre confort et durabilité, tandis que sa coupe slim moderne assure une silhouette élégante. Parfaite du bureau aux sorties décontractées.',
    images: [
      'https://images.unsplash.com/photo-1620012150748-c759a494c2dc?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563630423918-b58f07336ac5?q=80&w=1287&auto=format&fit=crop',
    ],
    category: 'Chemises',
    colors: ['Blanc', 'Bleu clair', 'Rayé'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    details: {
      material: '100% coton Oxford',
      care: ['Lavage à 40°C', 'Repassage nécessaire'],
      fit: 'Slim fit',
      features: ['Col boutonné', 'Poche poitrine', 'Boutons nacrés']
    },
    related: ['chemise-havana', 'chemise-milano', 'chemise-linen-breeze']
  },
  {
    id: generateId('Veste Blazer Marine'),
    name: 'Veste Blazer Marine',
    price: 149,
    description: 'Blazer marine polyvalent de qualité supérieure.',
    longDescription: 'Notre Blazer Marine est une pièce incontournable pour tout homme élégant. Confectionné dans un tissu italien premium, il offre une silhouette structurée mais confortable. Parfait pour les occasions professionnelles comme pour les soirées.',
    images: [
      'https://images.unsplash.com/photo-1619603364904-c0498317e6f9?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1287&auto=format&fit=crop',
    ],
    category: 'Costumes',
    subcategory: 'Vestes',
    colors: ['Bleu marine'],
    sizes: ['46', '48', '50', '52', '54'],
    isBestseller: true,
    inStock: true,
    details: {
      material: '70% laine, 30% polyester',
      care: ['Nettoyage à sec uniquement'],
      fit: 'Coupe ajustée',
      features: ['Deux boutons', 'Poches à rabat', 'Fente dorsale']
    },
    related: ['costume-elegance', 'veste-casual', 'costume-paris']
  },
  {
    id: generateId('Tee-shirt Essential'),
    name: 'Tee-shirt Essential',
    price: 35,
    description: 'T-shirt essentiel en coton pima.',
    longDescription: 'Le T-shirt Essential est fabriqué en coton pima de la plus haute qualité pour un confort inégalé. Sa coupe classique avec une touche contemporaine en fait une base parfaite pour n\'importe quelle tenue. Disponible dans une gamme de couleurs essentielles.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=1158&auto=format&fit=crop',
    ],
    category: 'Tee-shirts',
    colors: ['Blanc', 'Noir', 'Gris anthracite', 'Bleu marine', 'Kaki'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    details: {
      material: '100% coton pima',
      care: ['Lavage à 30°C', 'Séchage à basse température'],
      fit: 'Regular fit',
      features: ['Col rond', 'Coutures renforcées', 'Finition double-aiguille']
    },
    related: ['tee-shirt-urban-soft', 'tee-shirt-premium', 'tee-shirt-vintage']
  },
  {
    id: generateId('Pull Cashmere'),
    name: 'Pull Cashmere',
    price: 129,
    description: 'Pull en cachemire pur d\'une douceur exceptionnelle.',
    longDescription: 'Notre Pull Cashmere est confectionné à partir de cachemire mongol de la plus haute qualité, offrant une douceur et une chaleur incomparables. Sa finition soignée et sa coupe élégante en font un investissement durable pour votre garde-robe.',
    images: [
      'https://images.unsplash.com/photo-1614975059251-992f11792b9f?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614975058789-64858ef239e9?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1638391440514-06959e6f8b7c?q=80&w=1287&auto=format&fit=crop',
    ],
    category: 'Pulls & Gilets',
    colors: ['Camel', 'Gris clair', 'Noir', 'Bordeaux'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    inStock: true,
    details: {
      material: '100% cachemire',
      care: ['Lavage à la main uniquement', 'Séchage à plat'],
      fit: 'Coupe slim',
      features: ['Col V', 'Finition côtelée', 'Texture légère mais chaude']
    },
    related: ['pull-milano', 'gilet-hudson', 'cardigan-soft']
  },
  {
    id: generateId('Ceinture Cuir Premium'),
    name: 'Ceinture Cuir Premium',
    price: 59,
    description: 'Ceinture en cuir pleine fleur avec boucle italienne.',
    longDescription: 'Notre Ceinture Cuir Premium est fabriquée en cuir pleine fleur italien de la plus haute qualité. Sa boucle en métal brossé et ses finitions soignées en font un accessoire élégant et durable qui complètera parfaitement vos tenues professionnelles ou décontractées.',
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60acc26?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605965504312-9ef02e52df78?q=80&w=1287&auto=format&fit=crop',
    ],
    category: 'Accessoires',
    colors: ['Noir', 'Marron', 'Cognac'],
    sizes: ['85', '90', '95', '100', '105', '110'],
    isBestseller: true,
    inStock: true,
    details: {
      material: '100% cuir pleine fleur',
      care: ['Nettoyer avec un chiffon doux', 'Appliquer occasionnellement un produit d\'entretien pour cuir'],
      features: ['Boucle en métal brossé', 'Largeur: 3,5 cm', 'Cuir Italien']
    },
    related: ['cravate-soie', 'chaussures-oxford', 'portefeuille-premium']
  },
];

// Helpers pour récupérer les produits par catégorie
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getNewProducts = (limit: number = 8): Product[] => {
  return products.filter(product => product.isNew).slice(0, limit);
};

export const getBestsellers = (limit: number = 4): Product[] => {
  return products.filter(product => product.isBestseller).slice(0, limit);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product || !product.related) return [];
  
  return product.related
    .map(id => products.find(p => p.id === id))
    .filter((p): p is Product => p !== undefined)
    .slice(0, limit);
};
