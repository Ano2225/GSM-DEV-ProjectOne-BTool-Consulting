'use client'

import React, { useState } from 'react';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    tel: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
  };

  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-primary-blue mb-8">Nous Contacter</h2>
        <p className="text-lg text-gray-700 mb-8">
          Vous avez une question ou besoin d&apos;informations supplémentaires ? Remplissez ce formulaire et nous vous répondrons rapidement.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Votre Nom"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Votre Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="tel"
              name="tel"
              placeholder="Votre Numero de telephone"
              value={formData.tel}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Votre Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-blue text-white py-3 rounded-lg font-bold hover:bg-secondary-turquoise transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
