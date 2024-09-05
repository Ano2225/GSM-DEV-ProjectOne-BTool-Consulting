'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPassport, FaPlane } from 'react-icons/fa';
import Link from 'next/link';

const VisaAssistance = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setActiveService(activeService === service ? null : service);
  };

  return (
    <section id="visa-assistance" className="pt-40 pb-16 bg-gray-100">
      <div className="container mx-auto px-6 pt-18">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary-blue">
          Assistance Application VISA
        </h1>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Cliquez sur chaque carte ci-dessous pour obtenir plus d&apos;informations sur les services d&apos;immigration que nous offrons
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16"> 
          <div
            onClick={() => toggleService('usa')}
            className="bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer transition-all h-full flex flex-col justify-between"
          >
            <Image
              src="/assets/usa-visa.jpg"
              alt="Assistance Visa USA"
              width={400}
              height={250}
              className="mb-4 rounded-lg mx-auto"
            />
            <FaPassport className="text-primary-blue text-4xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Visa USA</h3>
            <p className="text-gray-700 mb-4 flex-grow">
              Accompagnement complet pour vos demandes de visa américain.
            </p>

            {activeService === 'usa' && (
              <div className="mt-4 text-left text-gray-700">
                <p>
                  Nous vous aidons à préparer et à soumettre vos demandes de visa pour les États-Unis, que ce soit pour des séjours de courte durée (visiteur, tourisme) ou des études. Nos experts veillent à ce que votre dossier soit complet et conforme aux exigences du service d&apos;immigration américain.
                </p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Green Card</li>
                  <li>Visa visiteur (B-1, B-2)</li>
                  <li>Visa étudiant (F-1)</li>
                  <li>Accompagnement pour les entretiens d&apos;ambassade</li>
                </ul>
              </div>
            )}
          </div>

          <div
            onClick={() => toggleService('canada')}
            className="bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer transition-all h-full flex flex-col justify-between"
          >
            <Image
              src="/assets/immigration-poster.jpg"
              alt="Assistance Visa Canada"
              width={400}
              height={250}
              className="mb-4 rounded-lg mx-auto"
            />
            <FaPassport className="text-primary-blue text-4xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Visa Canada</h3>
            <p className="text-gray-700 mb-4 flex-grow">
              Démarches simplifiées pour l&apos;obtention de visas pour le Canada.
            </p>
            {activeService === 'canada' && (
              <div className="mt-4 text-left text-gray-700">
                <p>
                  Nous vous assistons dans vos démarches pour obtenir un visa canadien, que ce soit pour des études, un voyage ou une immigration. Nos services comprennent la préparation du dossier, l&apos;assistance avec les formulaires et le suivi de la demande.
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Visa visiteur</li>
                  <li>Visa étudiant</li>
                  <li>Résidence permanente</li>
                </ul>
              </div>
            )}
          </div>
          <div
            onClick={() => toggleService('dubai')}
            className="bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer transition-all h-full flex flex-col justify-between"
          >
            <Image
              src="/assets/dubai-visa.jpg"
              alt="Assistance Visa Dubai"
              width={400}
              height={250}
              className="mb-4 rounded-lg mx-auto"
            />
            <FaPlane className="text-primary-blue text-4xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Visa Dubaï</h3>
            <p className="text-gray-700 mb-4 flex-grow">
              Aide à la préparation des demandes de visa pour Dubaï.
            </p>
            {activeService === 'dubai' && (
              <div className="mt-4 text-left text-gray-700">
                <p>
                  Nous vous proposons un accompagnement personnalisé pour vos demandes de visa pour Dubaï, que ce soit pour des voyages touristiques, des études ou d&apos;autres types de visas. Notre équipe vous guide tout au long du processus.
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Visa de tourisme</li>
                  <li>Visa d&apos;étudiant</li>
                  <li>Accompagnement dans la soumission de la demande</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="text-center mt-50 py-10 bg-red-200"> 
          <h2 className="text-3xl font-bold text-primary-blue mb-4">
            Besoin d&apos;aide pour votre demande de visa ?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Contactez-nous dès aujourd&apos;hui pour obtenir une assistance rapide et professionnelle.
          </p>
          <Link  
          href="https://wa.me/+14025105742?text=Besoin%20d'assistance%20pour%20une%20demande%20de%20visa" 
            className="px-8 py-4 bg-primary-blue text-white font-bold rounded-md hover:bg-secondary-turquoise transition-colors">
              Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisaAssistance;
