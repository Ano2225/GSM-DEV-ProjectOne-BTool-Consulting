import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt, FaQuoteRight } from 'react-icons/fa'

const VoyageAgence = () => {
  return (
    <section className="bg-gray-100 pb-16 pt-48">
      <div className='container mx-auto px-6 md:px-12'>
        <h1 className='text-primary-blue text-4xl text-center font-bold mb-12'>
        Réservation ou Paiement de Billet d&apos;Avion
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>  
          <div className='flex flex-col items-center text-center'>
            <Image 
              src='/assets/reserver.jpg'
              alt="Réservation Billet d'Avion"
              width={300}
              height={300}
              className='rounded-lg shadow-lg'
              priority
            />
          </div>
          <div className='flex flex-col justify-center space-y-8'>
        <div className='flex items-center bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300'>
            <FaPhoneAlt className='text-primary-blue text-5xl mr-6' />
            <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Parler à un agent</h2>
            <Link 
                href="https://wa.me/+14025105742?text=Je%20veux%20parler%20à%20un%20agent" 
                passHref 
                className="inline-block px-6 py-3 bg-primary-blue text-white font-bold rounded-lg hover:bg-secondary-turquoise transition-colors duration-300">
                Contactez-nous via WhatsApp
            </Link>
            </div>
         </div>
        <div className='flex items-center bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300'>
            <FaQuoteRight className='text-primary-blue text-5xl mr-6' />
            <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Demander une quotation</h2>
            <Link 
                href="https://wa.me/+14025105742?text=Je%20veux%20une%20quotation" 
                passHref 
                className="inline-block px-6 py-3 bg-primary-blue text-white font-bold rounded-lg hover:bg-secondary-turquoise transition-colors duration-300">
                Obtenez une estimation
            </Link>
     </div>
  </div>
</div>


        </div>
      </div>
    </section>
  )
}

export default VoyageAgence
