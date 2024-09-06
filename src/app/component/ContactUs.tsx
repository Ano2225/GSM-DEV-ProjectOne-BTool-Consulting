'use client';

import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { BeatLoader } from 'react-spinners';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    tel: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    tel: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const validateForm = () => {
    let formErrors = { name: '', email: '', message: '', tel: '' };
    let isValid = true;

    if (!form.name) {
      formErrors.name = 'Le nom est requis';
      isValid = false;
    }

    if (!form.email) {
      formErrors.email = 'L\'email est requis';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = 'L\'email est invalide';
      isValid = false;
    }

    if (!form.tel) {
      formErrors.tel = 'Le numéro de téléphone est requis';
      isValid = false;
    }

    if (!form.message) {
      formErrors.message = 'Le message est requis';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(form)
      });

      setIsLoading(false);

      if (response.ok) {
        toast.success('Votre message a bien été envoyé', {
          className: 'bg-green-600 text-white',
          progressClassName: 'bg-blue-500'
        });
        setForm({ name: '', email: '', message: '', tel: '' });
        setErrors({ name: '', email: '', message: '', tel: '' });
      } else {
        throw new Error('Une erreur s\'est produite lors de l\'envoi de votre message.');
      }
    } catch (error: any) {
      toast.error(error.message, {
        className: 'bg-red-600 text-white',
        progressClassName: 'bg-blue-500'
      });
    }
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
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm text-start">{errors.name}</p>}
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Votre Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm text-start">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <input
              type="tel"
              name="tel"
              placeholder="Votre Numéro de téléphone"
              value={form.tel}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                errors.tel ? 'border-red-500' : ''
              }`}
            />
            {errors.tel && <p className="text-red-500 text-sm text-start">{errors.tel}</p>}
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Votre Message"
              value={form.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                errors.message ? 'border-red-500' : ''
              }`}
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm text-start">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-blue text-white py-3 rounded-lg font-bold hover:bg-secondary-turquoise transition"
          >
            {isLoading ? <BeatLoader color="#fff" loading={isLoading} size={12} /> : 'Envoyer'}
          </button>
          <ToastContainer position="top-center" />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
