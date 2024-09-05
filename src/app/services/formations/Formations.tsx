import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaHeadphones, FaMicrophone, FaBook, FaPen, FaDesktop } from 'react-icons/fa'

const Formations = () => {
  return (
    <div className="bg-white container mx-auto pt-48 pb-16 px-4 md:px-0">
      <h1 className="text-primary-blue text-4xl text-center font-extrabold mb-12">
        Formation
      </h1>
      <div className="mb-16 px-4">
        <h2 className="text-3xl text-primary-blue font-semibold mb-8 text-center">
          1 - Services Linguistiques : Anglais/Français
        </h2>
        <div className="mb-8 text-center">
          <Image 
            src='/assets/formationenglais.jpg'
            alt="Services linguistiques"
            width={800}
            height={400}
            className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            priority
          />
        </div>

        <ul className="list-disc list-inside text-gray-700 mb-8 text-lg space-y-2">
          <li>Traduction de documents</li>
          <li>Interprétariat</li>
          <li>Formations</li>
        </ul>

        <h3 className="text-2xl text-gray-800 mb-6 font-semibold">Les modules de formation pour améliorer la fluidité :</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="group flex flex-col items-center">
            <Image 
              src='/assets/listening.png'
              alt="Listening"
              width={180}
              height={180}
              className="rounded-full shadow-md mb-4 transform group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <FaHeadphones className="text-primary-blue text-5xl mb-2 group-hover:text-secondary-turquoise transition-colors duration-300" />
            <p className="text-lg text-gray-700 font-medium">Listening 👂</p>
          </div>

          <div className="group flex flex-col items-center">
            <Image 
              src='/assets/speaking.png'
              alt="Speaking"
              width={180}
              height={180}
              className="rounded-full shadow-md mb-4 transform group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <FaMicrophone className="text-primary-blue text-5xl mb-2 group-hover:text-secondary-turquoise transition-colors duration-300" />
            <p className="text-lg text-gray-700 font-medium">Speaking 🗣</p>
          </div>

          <div className="group flex flex-col items-center">
            <Image 
              src='/assets/reading.png'
              alt="Reading"
              width={180}
              height={180}
              className="rounded-full shadow-md mb-4 transform group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <FaBook className="text-primary-blue text-5xl mb-2 group-hover:text-secondary-turquoise transition-colors duration-300" />
            <p className="text-lg text-gray-700 font-medium">Reading 📖</p>
          </div>

          <div className="group flex flex-col items-center">
            <Image 
              src='/assets/writing.png'
              alt="Writing"
              width={180}
              height={180}
              className="rounded-full shadow-md mb-4 transform group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <FaPen className="text-primary-blue text-5xl mb-2 group-hover:text-secondary-turquoise transition-colors duration-300" />
            <p className="text-lg text-gray-700 font-medium">Writing ✍</p>
          </div>
        </div>

        <h3 className="text-2xl text-gray-800 mt-8 mb-6 font-semibold">Programmes de formation :</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Cours individuel</li>
          <li>Cours collectifs</li>
          <li>Préparation aux examens (IELTS, TOEFL…)</li>
        </ul>
      </div>
      <div className='mx-4'>
        <h2 className="text-3xl text-primary-blue font-semibold mb-8 text-center">
          2 - Informatique (Microsoft Pack)
        </h2>
        <div className="mb-8 text-center">
          <Image 
            src='/assets/informatique.jpg'
            alt="Formation informatique"
            width={800}
            height={400}
            className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            priority
          />
        </div>

        <div className="flex flex-col items-center">
          <FaDesktop className="text-primary-blue text-5xl mb-4" />
          <p className="text-lg text-gray-700 text-center">
            Apprenez à maîtriser les outils bureautiques de Microsoft comme Word, Excel, PowerPoint et bien plus encore.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-3xl text-primary-blue font-semibold mb-6">
          Intéressé par l'une de nos formations ?
        </h3>
        <p className="text-lg text-gray-700 mb-8">
          Contactez-nous dès maintenant via WhatsApp et parlez avec un conseiller.
        </p>
        <Link href="https://wa.me/+14025105742?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20l'une%20de%20vos%20formations." passHref className="px-12 py-4 bg-primary-blue text-white font-bold rounded-lg hover:bg-secondary-turquoise transition-colors duration-300 text-xl">
            Je suis intéressé
          
        </Link>
      </div>
    </div>
  )
}

export default Formations
