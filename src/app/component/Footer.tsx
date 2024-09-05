import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
       <div>
          <div className='bg-white'>
          <Image
            alt='tool-consulting'
            width={150}
            height={90}
            src='/assets/logo.webp'
            className='cursor-pointer'
           />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Liens Rapides</h3>
          <ul className="space-y-2 uppercase">
            <li>
              <Link href="/services/immigration" className="hover:underline text-white">Services Immigration</Link>
            </li>
            <li>
              <Link href="/services/immobilier" className="hover:underline text-white">Services Immobilier</Link>
            </li>
            <li>
              <Link href="/services/rh" className="hover:underline text-white">Services RH</Link>
            </li>
            <li>
              <Link href="/services/voyages" className="hover:underline text-white">Services Agence de voyage</Link>
            </li>
            <li>
              <Link href="/services/formations" className="hover:underline text-white">Formations</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl text-white font-bold mb-4">Nous Suivre</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/bigacademiebf?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-3xl hover:text-secondary-turquoise transition" />
            </a>
            <a href="https://wa.me/+14025105742" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-white text-3xl hover:text-secondary-turquoise transition" />
            </a>
          </div>
          <p className="text-white">Téléphone: +140 251 057 42</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
        <p>&copy; 2024 B.tool Consulting. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
