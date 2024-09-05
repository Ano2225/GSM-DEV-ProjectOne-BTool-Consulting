"use client"

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleInput = () => {
    setIsOpen(!isOpen);
  };
  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+14025105742?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={toggleInput}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp className="text-3xl" />
      </button>
      {isOpen && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg w-64">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Entrez votre message..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-blue mb-4"
            rows={3}
          />
          <button
            onClick={handleSendMessage}
            className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Envoyer
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsAppButton;
