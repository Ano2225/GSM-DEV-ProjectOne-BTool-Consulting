import Link from 'next/link'
import React from 'react'
import { FaUsers, FaTasks, FaFolderOpen, FaChartLine, FaClipboardCheck, FaComments, FaFileAlt, FaEnvelopeOpenText } from 'react-icons/fa'

const RH = () => {
  return (
    <div className='container mx-auto bg-gray-100 pt-48 pb-16'>
      <h1 className='text-4xl text-center mb-8 font-bold text-primary-blue'>Nos services RHCOM</h1>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-6 p-4'>
        <div className='bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer'>
          <FaUsers className='text-5xl text-primary-blue mb-4' />
          <p className='text-gray-700 font-semibold text-lg hover:text-primary-blue transition-colors duration-300'>RECRUTEMENT</p>
        </div>
        <div className='bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer'>
          <FaTasks className='text-5xl text-primary-blue mb-4' />
          <p className='text-gray-700 font-semibold text-lg hover:text-primary-blue transition-colors duration-300'>EXTERNALISATION DE LA FONCTION RH</p>
        </div>
        <div className='bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer'>
          <FaFolderOpen className='text-5xl text-primary-blue mb-4' />
          <p className='text-gray-700 font-semibold text-lg hover:text-primary-blue transition-colors duration-300'>GESTION ADMINISTRATIVE</p>
        </div>
        <div className='bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer'>
          <FaChartLine className='text-5xl text-primary-blue mb-4' />
          <p className='text-gray-700 font-semibold text-lg hover:text-primary-blue transition-colors duration-300'>ACCOMPAGNEMENT EN DÉVELOPPEMENT DE CARRIERE</p>
        </div>
        <div className='bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer'>
          <FaClipboardCheck className='text-5xl text-primary-blue mb-4' />
          <p className='text-gray-700 font-semibold text-lg hover:text-primary-blue transition-colors duration-300'>AUDIT RESSOURCES HUMAINES</p>
        </div>
        <div className='bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer'>
          <FaComments className='text-5xl text-primary-blue mb-4' />
          <p className='text-gray-700 font-semibold text-lg hover:text-primary-blue transition-colors duration-300'>PRÉPARATION AUX ENTRETIENS D&apos;EMBAUCHE</p>
        </div>
        <div className='bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer'>
          <FaFileAlt className='text-5xl text-primary-blue mb-4' />
          <p className='text-gray-700 font-semibold text-lg hover:text-primary-blue transition-colors duration-300'>RÉDACTION / RELOOKING PROFESSIONNEL DE CV</p>
        </div>
        <div className='bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer'>
          <FaEnvelopeOpenText className='text-5xl text-primary-blue mb-4' />
          <p className='text-gray-700 font-semibold text-lg hover:text-primary-blue transition-colors duration-300'>LETTRE DE MOTIVATION</p>
        </div>
      </div>
      <div className="text-center mt-16 py-10 bg-red-200">
        <h2 className="text-3xl font-bold text-primary-blue mb-4">
          Besoin de nos services ?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Contactez-nous maintenant 😎
        </p>
        <Link href="https://wa.me/+14025105742?text=Je%20suis%20interessé%20par%20l'%20un%20de%20vos%20services" className="px-8 py-4 bg-primary-blue text-white font-bold rounded-md hover:bg-secondary-turquoise transition-colors">
          Contactez-nous
        </Link>
      </div>
    </div>
  );
};

export default RH;
