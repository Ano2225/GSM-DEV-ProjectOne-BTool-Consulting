import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+14025105742" 
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default FloatingWhatsAppButton;
