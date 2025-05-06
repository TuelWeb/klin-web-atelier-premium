
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="pt-24">
      <div className="container-klin py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h1>
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
      </div>
    </div>
  );
};

export default ContactPage;
