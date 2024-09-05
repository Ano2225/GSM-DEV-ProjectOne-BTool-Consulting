import React from 'react';
import { FaShieldAlt, FaUsers, FaGlobe, FaRegClock } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-blue mb-12">Pourquoi Nous Choisir ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <FaUsers className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expertise et Expérience</h3>
            <p className="text-gray-700">
              Une équipe d&apos;experts dédiée avec une grande expérience dans le domaine de l&apos;immigration et des voyages.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <FaRegClock className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support 24/7</h3>
            <p className="text-gray-700">
              Un support disponible 24/7 pour répondre à toutes vos questions et vous accompagner à chaque étape.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <FaGlobe className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Présence Globale</h3>
            <p className="text-gray-700">
              Nos services couvrent plusieurs pays à travers le monde, offrant des solutions adaptées à vos besoins.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <FaShieldAlt className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Honnêteté et Intégrité</h3>
            <p className="text-gray-700">
              Nous opérons avec transparence et honnêteté.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
