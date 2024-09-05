import React from 'react';
import { FaPassport, FaPlane } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const ImmigrationAndTravelServices = () => {
  return (
    <section id="immigration-services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-blue">
          Nos Services d&apos;Immigration et de Voyage
        </h2>
        <p className="text-center text-lg mb-8 text-gray-700">
          Nous vous accompagnons pour vos démarches d&apos;immigration et de voyage pour les USA, le Canada, Schengen, et Dubaï.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <Image 
              src="/assets/flight-reservation-poster.jpg"
              alt="Immigration Assistance Poster"
              width={400}
              height={300}
              className="mb-4 rounded-lg"
            />
            <FaPassport className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Assistance Visa</h3>
            <p className="text-gray-700 mb-4">
              Nous vous aidons à préparer et à soumettre vos demandes de visa pour les USA, Canada, Schengen et Dubaï (visiteur, étudiant, ou touriste).
            </p>
            <Link href="#contact" className="text-secondary-turquoise font-bold hover:underline cursor-pointer">
              En savoir plus
            </Link>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <Image 
              src="/assets/immigration-poster.jpg" 
              alt="Flight Reservation Poster"
              width={400}
              height={300}
              className="mb-4 rounded-lg"
            />
            <FaPlane className="text-primary-blue text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Réservation de Billets d&apos;Avion</h3>
            <p className="text-gray-700 mb-4">
              Nous vous aidons à trouver les meilleurs tarifs et à réserver vos vols vers vos destinations pour une expérience sans stress.
            </p>
            <Link href="#contact" className="text-secondary-turquoise font-bold hover:underline cursor-pointer">
              Réservez votre vol maintenant
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ImmigrationAndTravelServices;
