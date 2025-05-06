
import React from 'react';
import { Truck, Phone, Users, Lock } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Livraison offerte dès 25 €",
    description: "Mondial Relay & Colissimo",
  },
  {
    icon: Phone,
    title: "Service client 7j/7",
    description: "Chat & téléphone",
  },
  {
    icon: Users,
    title: "Parrainage",
    description: "5 € pour vous & vos amis",
  },
  {
    icon: Lock,
    title: "Paiement sécurisé",
    description: "Partenaires de confiance",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center bg-klin-light p-8 animate-fade-in"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <feature.icon size={36} className="text-klin-primary mb-4" />
          <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
