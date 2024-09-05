import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-primary-blue mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-8">
        Oops! La page que vous recherchez n&apos;existe pas.
      </p>
      <Link href="/" className="bg-primary-blue text-white px-6 py-2 rounded-lg font-bold hover:bg-secondary-turquoise transition">
          Retour à l&apos;accueil
      </Link>
    </section>
  );
}
