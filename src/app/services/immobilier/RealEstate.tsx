'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RealEstateSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section id="real-estate" className="pt-40 pb-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary-blue">
          Nos Services Immobiliers
        </h1>
        <p className="text-center mb-8 text-lg">Cliquez sur une offre pour plus de détails</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
          <div
            onClick={() => toggleSection('acheter')}
            className={`bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between ${
              activeSection === 'acheter' ? 'h-auto' : 'h-72'
            }`}
          >
            <div className="relative w-full h-72 mb-4">
              <Image
                src="/assets/acheter.jpg"
                alt="Acheter Immobilier"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Acheter</h3>
            <p className="text-lg text-gray-700 mb-4">
              APPARTEMENT - VILLA - TERRAIN
            </p>
            {activeSection === 'acheter' && (
              <div className="mt-4 text-left text-gray-700">
                <p>
                  Découvrez nos offres d&apos;appartements, villas et terrains disponibles à l&apos;achat.
                </p>
              </div>
            )}
          </div>
          <div
            onClick={() => toggleSection('louer')}
            className={`bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between ${
              activeSection === 'louer' ? 'h-auto' : 'h-72'
            }`}
          >
            <div className="relative w-full h-72 mb-4">
              <Image
                src="/assets/louer.jpg"
                alt="Louer Immobilier"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Louer</h3>
            <p className="text-lg text-gray-700 mb-4">APPARTEMENT - VILLA</p>

            {activeSection === 'louer' && (
              <div className="mt-4 text-left text-gray-700">
                <p>
                  Explorez nos options de location d&apos;appartements et villas dans différents quartiers.
                </p>
              </div>
            )}
          </div>
          <div
            onClick={() => toggleSection('vendre')}
            className={`bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between ${
              activeSection === 'vendre' ? 'h-auto' : 'h-72'
            }`}
          >
            <div className="relative w-full h-72 mb-4">
              <Image
                src="/assets/vendre.jpg"
                alt="Vendre Immobilier"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Vendre</h3>
            <p className="text-lg text-gray-700 mb-4">
              APPARTEMENT - VILLA - TERRAIN
            </p>
            {activeSection === 'vendre' && (
              <div className="mt-4 text-left text-gray-700">
                <p>
                  Vous souhaitez vendre votre bien ? Nous vous accompagnons dans la vente de votre appartement, villa ou terrain.
                </p>
              </div>
            )}
          </div>
          <div
            onClick={() => toggleSection('investir')}
            className={`bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between ${
              activeSection === 'investir' ? 'h-auto' : 'h-72'
            }`}
          >
            <div className="relative w-full h-72 mb-4">
              <Image
                src="/assets/investir.jpg"
                alt="Investir Immobilier"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Investir</h3>
            <p className="text-lg text-gray-700 mb-4">
              Opportunités d&apos;investissement immobilier
            </p>
            {activeSection === 'investir' && (
              <div className="mt-4 text-left text-gray-700">
                <p>
                  Explorez nos opportunités d&apos;investissement dans l&apos;immobilier et faites fructifier votre capital.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="text-center mt-16 py-10 bg-red-200">
          <h2 className="text-3xl font-bold text-primary-blue mb-4">
            Besoin de plus d&apos;informations ?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Contactez-nous dès aujourd&apos;hui pour obtenir une assistance personnalisée.
          </p>
          <Link href="#contact" className="px-8 py-4 bg-primary-blue text-white font-bold rounded-md hover:bg-secondary-turquoise transition-colors">
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;
