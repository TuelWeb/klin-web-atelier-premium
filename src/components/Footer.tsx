
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Merci de vous être inscrit avec l'adresse: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-klin-light mt-24">
      <div className="container-klin py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-medium">Newsletter</h4>
            <p className="text-sm">Inscrivez-vous pour recevoir nos nouveautés, promos et infos en avant-première.</p>
            
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre e-mail"
                className="flex-1 py-3 px-4 border border-klin-primary focus:ring-1 focus:ring-klin-primary outline-none"
                required
              />
              <button 
                type="submit"
                className="bg-klin-primary text-white p-3"
                aria-label="S'inscrire"
              >
                <ArrowRight size={20} />
              </button>
            </form>
            
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-klin-primary hover:text-klin-hover transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-klin-primary hover:text-klin-hover transition-colors" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                <Youtube className="text-klin-primary hover:text-klin-hover transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Liens utiles */}
          <div className="space-y-6">
            <h4 className="text-xl font-medium">Liens utiles</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/contact" className="hover:underline">Nous contacter</Link>
              <Link to="/livraison" className="hover:underline">Livraison & retours</Link>
              <Link to="/faq" className="hover:underline">FAQ</Link>
              <Link to="/a-propos" className="hover:underline">À propos de nous</Link>
            </nav>
          </div>
          
          {/* Légal */}
          <div className="space-y-6">
            <h4 className="text-xl font-medium">Informations légales</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/cookies" className="hover:underline">Cookies</Link>
              <Link to="/donnees-personnelles" className="hover:underline">Données personnelles</Link>
              <Link to="/cgv" className="hover:underline">Conditions générales de vente</Link>
              <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
            </nav>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/" className="text-2xl font-bold tracking-tighter font-bricolage mb-4 md:mb-0">KLIN</Link>
            <p className="text-sm">© {new Date().getFullYear()} KLIN. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
