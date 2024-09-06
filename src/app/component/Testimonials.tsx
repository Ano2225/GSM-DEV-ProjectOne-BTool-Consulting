'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import testimonials from '../../../utils/testimonials';

const Testimonials = () => {
  return (
    <div className="mx-auto text-center md:max-w-xl lg:max-w-5xl py-10 px-2">
      <h3 className="mb-6 text-4xl font-bold">Nos Témoignages</h3>
      <p className="mb-6 pb-2 text-black md:mb-12 md:pb-0">
        Ils nous ont fait confiance
      </p>
      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
        {testimonials.map((testimonial:any, index:any) => (
          <Fade delay={index * 200} key={index}>
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <Image
                  src={testimonial.image}
                  alt={`Photo de ${testimonial.name}`} 
                  className="w-52 h-52 rounded-full shadow-lg dark:shadow-black/30"
                  width={192}
                  height={192}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold">{testimonial.name}</h5>
              <div className="max-h-72 overflow-y-auto">
                <p className="italic text-gray-700">
                  “ {testimonial.message} ”
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
