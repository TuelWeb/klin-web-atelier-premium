
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };
  
  return (
    <div className="bg-white p-6 md:p-8 lg:p-10 shadow-sm border border-gray-100">
      {isSubmitted ? (
        <div className="bg-green-50 text-green-800 p-4 mb-6">
          <p className="font-medium">Message envoyé avec succès!</p>
          <p>Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-klin-primary focus:border-klin-primary"
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-klin-primary focus:border-klin-primary"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-klin-primary focus:border-klin-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium">
            Objet
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-klin-primary focus:border-klin-primary bg-white"
            required
          >
            <option value="">Sélectionnez un objet</option>
            <option value="question">Question sur un produit</option>
            <option value="order">Question sur ma commande</option>
            <option value="return">Retour produit</option>
            <option value="other">Autre</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-klin-primary focus:border-klin-primary"
            required
          ></textarea>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex justify-center items-center"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
