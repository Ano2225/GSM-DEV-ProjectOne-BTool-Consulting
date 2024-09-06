'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image 
          src="/assets/hero-background.jpg"
          alt="Background Image"
          fill 
          style={{ objectFit: 'cover' }} 
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <motion.div 
        className="relative z-10 text-center text-white max-w-3xl px-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Facilitez Vos Projets Avec Nos Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          Immigration, Visas, RH, Formations, etc. Un accompagnement professionnel pour vos besoins.
        </p>
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
          <Link href="#immigration-services" className="bg-primary-blue text-white px-6 py-3 rounded-full font-bold hover:bg-secondary-turquoise transition">
            Commencez Maintenant
          </Link>
          <Link href="#contact" className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-primary-blue transition">
            Contactez un Expert
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
