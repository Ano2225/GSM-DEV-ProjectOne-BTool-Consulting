'use client';

import React, { FC, memo } from 'react';
import Slider from 'react-slick';
import { testimonials } from '../../../utils/testimonials';
import { FaQuoteLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  feedback: string;
  name: string;
  title: string;
}

const Testimonials: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-blue mb-12">Nos Témoignages</h2>
        <Slider {...settings}>
          {testimonials.map(({ feedback, name, title }: Testimonial, index: number) => (
            <div
              key={index}
              className="bg-white p-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 mx-auto max-w-md"
            >
              <FaQuoteLeft className="text-primary-blue text-3xl mb-6 animate-pulse" />
              <p className="text-lg text-gray-700 italic mb-6">"{feedback}"</p>
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default memo(Testimonials);
