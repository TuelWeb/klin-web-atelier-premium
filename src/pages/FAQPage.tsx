
import React from 'react';
import Accordion from '@/components/Accordion';
import { Link } from 'react-router-dom';

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
  },
  {
    title: "Comment connaître ma taille ?",
    content: (
      <div>
        <p>
          Vous trouverez un guide des tailles sur chaque page produit. Ce guide 
          vous aidera à sélectionner la taille qui vous convient le mieux en 
          fonction de vos mensurations.
        </p>
        <p className="mt-2">
          Si vous avez toujours des doutes, n'hésitez pas à contacter notre service 
          client qui pourra vous conseiller personnellement.
        </p>
      </div>
    )
  },
  {
    title: "Les produits KLIN sont-ils éco-responsables ?",
    content: (
      <p>
        Nous nous engageons dans une démarche d'amélioration continue de notre impact 
        environnemental. Une partie de notre collection est fabriquée à partir de 
        matières organiques ou recyclées, et nous travaillons avec des partenaires 
        qui respectent des normes sociales et environnementales strictes. Nous affichons 
        clairement les caractéristiques éco-responsables de nos produits sur leurs fiches.
      </p>
    )
  },
];

const FAQPage = () => {
  return (
    <div className="pt-24">
      <div className="container-klin py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Questions fréquemment posées</h1>
          
          <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-100 mb-10">
            <p className="text-lg mb-6">
              Vous avez une question ? Consultez notre FAQ ci-dessous.
              Sinon, contactez notre service client – disponible 7j/7, de 9h à 20h.
            </p>
            
            <Accordion items={faqItems} />
          </div>
          
          <div className="text-center mt-12">
            <h2 className="text-xl font-medium mb-4">Vous avez d'autres questions ?</h2>
            <Link to="/contact" className="btn-primary">Contactez-nous</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
