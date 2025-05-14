import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import FeaturesGrid from '@/components/FeaturesGrid';
import { getBestsellers, getNewProducts } from '@/data/products';
import Accordion from '@/components/Accordion';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const heroItems = [
  {
    title: 'L\'Élégance au Masculin',
    description: 'Découvrez notre nouvelle collection de costumes raffinés, créés pour les hommes qui comprennent que le style est une déclaration de caractère et d\'assurance.',
    link: '/categories/costumes',
    accentColor: '#D18F55'
  },
  {
    title: 'Accessoires Distinctifs',
    description: 'Complétez votre style avec notre gamme d\'accessoires soigneusement sélectionnés pour apporter cette touche finale qui transforme le beau en exceptionnel.',
    link: '/categories/accessoires',
    accentColor: '#5A7D7C'
  },
  {
    title: 'L\'Excellence Vestimentaire',
    description: 'Chemises, pantalons et vestes confectionnés avec précision dans des matériaux nobles pour vous accompagner dans chaque moment important de votre vie.',
    link: '/categories/chemises',
    accentColor: '#9b87f5'
  }
];

const faqItems = [
  {
    title: "Est-ce que KLIN livre à l'étranger ?",
    content: (
      <p>
        Non, actuellement nous livrons uniquement en France métropolitaine. 
        L'option de livraison internationale arrivera bientôt, restez informés 
        via notre newsletter !
      </p>
    )
  },
  {
    title: "Quel est le délai de livraison ?",
    content: (
      <div>
        <p>
          Le délai de livraison standard est de 5 à 7 jours ouvrables. Tous les détails 
          concernant votre commande seront disponibles dans l'email de confirmation que 
          vous recevrez après votre achat.
        </p>
        <p className="mt-2">
          Nous proposons deux options de livraison :
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Mondial Relay : 3-5 jours ouvrables (gratuit dès 25€ d'achat)</li>
          <li>Colissimo : 1-3 jours ouvrables (gratuit dès 60€ d'achat)</li>
        </ul>
      </div>
    )
  },
  {
    title: "Comment retourner un article ?",
    content: (
      <div>
        <p>
          Vous disposez de 30 jours à compter de la réception de votre commande pour 
          effectuer un retour. Les articles doivent être retournés dans leur état 
          d'origine, avec l'étiquette attachée.
        </p>
        <p className="mt-2">
          Pour initier un retour, connectez-vous à votre compte ou contactez notre 
          service client pour obtenir une étiquette de retour.
        </p>
      </div>
    )
  },
  {
    title: "Quels sont les modes de paiement acceptés ?",
    content: (
      <div>
        <p>Nous acceptons les modes de paiement suivants :</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Cartes bancaires (Visa, Mastercard, CB)</li>
          <li>PayPal</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
          <li>Paiement en 3 ou 4 fois via Klarna (sans frais)</li>
        </ul>
      </div>
    )
  }
];

const Index = () => {
  const newProducts = getNewProducts(8);
  const bestsellers = getBestsellers(4);
  
  return (
    <div>
      {/* Hero Section - No top padding for full-screen effect */}
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
      
      {/* FAQ Section */}
      <section className="container-klin mb-24 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Questions fréquemment posées</h2>
          
          <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-100 mb-10">
            <p className="text-lg mb-6">
              Vous avez une question ? Consultez notre FAQ ci-dessous.
              Sinon, contactez notre service client – disponible 7j/7, de 9h à 20h.
            </p>
            
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="container-klin mb-24 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Besoin d'aide ou d'informations ? Notre équipe est à votre disposition pour répondre à toutes vos questions.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="space-y-8">
            <div className="bg-klin-light p-6">
              <h2 className="text-xl font-medium mb-4">Coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-klin-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">KLIN Paris</p>
                    <p className="text-gray-600">24 Rue de la Mode</p>
                    <p className="text-gray-600">75008 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-klin-primary mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a href="tel:+33123456789" className="text-gray-600 hover:text-klin-primary">
                      +33 (0)1 23 45 67 89
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="text-klin-primary mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:contact@klin.fr" className="text-gray-600 hover:text-klin-primary">
                      contact@klin.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-klin-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Horaires</p>
                    <p className="text-gray-600">Service client disponible</p>
                    <p className="text-gray-600">7j/7 de 9h à 20h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-klin-light p-6">
              <h2 className="text-xl font-medium mb-4">Discussion instantanée</h2>
              <p className="text-gray-600 mb-4">
                Besoin d'une réponse immédiate ? Discutez avec l'un de nos conseillers.
              </p>
              <a 
                href="https://wa.me/33123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center inline-flex items-center"
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
