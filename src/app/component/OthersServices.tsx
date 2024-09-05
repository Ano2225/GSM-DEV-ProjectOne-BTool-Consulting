import React from 'react';
import Link from 'next/link';
import { FaBuilding, FaSuitcase, FaChalkboardTeacher, FaPlane } from 'react-icons/fa';

const OthersServices = () => {
  return (
    <section id="other-services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-turquoise-blue mb-12">Nos Autres Services</h2>
        <p className="text-lg text-gray-700 mb-12">
          En plus de nos services d'immigration, nous proposons des services dans l'immobilier, les ressources humaines, la formation, et le voyage. Cliquez sur un service pour plus de détails.
        </p> 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaBuilding className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Service Immobilier</h3>
            <p className="text-gray-700 mb-4">
              Achats, ventes, locations, et gestion de biens immobiliers.
            </p>
            <Link href="/services/immobilier" className="text-turquoise-blue font-bold hover:underline">
              En savoir plus
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaSuitcase className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Services RH</h3>
            <p className="text-gray-700 mb-4">
              Recrutement, formation, externalisation des RH, gestion des contrats et procédures.
            </p>
            <Link href="/services/rh" className="text-turquoise-blue font-bold hover:underline">
              En savoir plus
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaChalkboardTeacher className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Formations</h3>
            <p className="text-gray-700 mb-4">
              Formations en anglais, informatique (Word, Excel), traduction de documents, et interprétariat.
            </p>
            <Link href="/services/formations" className="text-turquoise-blue font-bold hover:underline">
              En savoir plus
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaPlane className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Services de Voyage</h3>
            <p className="text-gray-700 mb-4">
              Réservation de billets d'avion et autres services de voyage pour vos déplacements.
            </p>
            <Link href="/services/voyage" className="text-turquoise-blue font-bold hover:underline">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OthersServices;
