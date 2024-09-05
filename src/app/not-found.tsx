import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-8xl md:text-9xl font-extrabold text-primary-blue mb-4">
        404
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
        Oops! La page que vous recherchez n&apos;existe pas.
      </p>
      <Link href="/" className="bg-primary-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-turquoise transition-all duration-300 transform hover:scale-105">
          Retour à l&apos;accueil
      </Link>
    </section>
  );
}
