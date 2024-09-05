import React, { memo } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../../utils/testimonials';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-blue mb-8">Nos Témoignages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(({ feedback, name, title }, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <FaQuoteLeft className="text-primary-blue text-3xl mb-4 animate-pulse" />
              <p className="text-lg text-gray-700 italic mb-4">"{feedback}"</p>
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
