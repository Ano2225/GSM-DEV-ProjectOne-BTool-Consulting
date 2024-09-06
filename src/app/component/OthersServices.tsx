'use client';

import React from 'react';
import Link from 'next/link';
import { FaBuilding, FaSuitcase, FaChalkboardTeacher, FaPlane } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const OthersServices = () => {
  return (
    <section id="other-services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-turquoise-blue mb-12">Nos Autres Services</h2>
        <p className="text-lg text-gray-700 mb-12">
          En plus de nos services d&apos;immigration, nous proposons des services dans l&apos;immobilier, les ressources humaines, la formation, et le voyage. Cliquez sur un service pour plus de détails.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.8, delay: 0.2 }}  
          >
            <FaBuilding className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Service Immobilier</h3>
            <p className="text-gray-700 mb-4">
              Achats, ventes, locations, et gestion de biens immobiliers.
            </p>
            <Link href="/services/immobilier" className="text-turquoise-blue font-bold hover:underline">
              En savoir plus
            </Link>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FaSuitcase className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Services RH</h3>
            <p className="text-gray-700 mb-4">
              Recrutement, formation, externalisation des RH, gestion des contrats et procédures.
            </p>
            <Link href="/services/rh" className="text-turquoise-blue font-bold hover:underline">
              En savoir plus
            </Link>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FaChalkboardTeacher className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Formations</h3>
            <p className="text-gray-700 mb-4">
              Formations en anglais, informatique (Word, Excel), traduction de documents, et interprétariat.
            </p>
            <Link href="/services/formations" className="text-turquoise-blue font-bold hover:underline">
              En savoir plus
            </Link>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <FaPlane className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Services de Voyage</h3>
            <p className="text-gray-700 mb-4">
              Réservation de billets d&apos;avion et autres services de voyage pour vos déplacements.
            </p>
            <Link href="/services/voyages" className="text-turquoise-blue font-bold hover:underline">
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OthersServices;
