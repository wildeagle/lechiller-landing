import React from 'react';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const Pricing: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-black fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Offre exclusive Wine Paris.</h2>
          <p className="text-gray-400 text-xl mb-8">
            Location tout compris pour les 3 jours du salon.
          </p>
          <div className="text-6xl md:text-7xl font-black text-white mb-2">
            <span className="text-cyan-400">
              980€ HT
            </span>
          </div>
          <p className="text-gray-500 mb-8">(1176€ TTC)</p>
          <ul className="text-gray-300 space-y-3 mb-10 inline-block text-left text-lg">
            <li className="flex items-center"><CheckIcon /> Livraison et installation sur votre stand</li>
            <li className="flex items-center"><CheckIcon /> Reprise après l'événement</li>
            <li className="flex items-center"><CheckIcon /> Support technique sur site</li>
          </ul>
          <div>
            <button
              onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-400 text-white font-bold py-4 px-10 text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 shadow-lg shadow-cyan-500/20"
            >
              Sécurisez votre unité
            </button>
            <p className="mt-4 text-sm font-semibold text-amber-400/80">
              ⚠️ Unités limitées. Premier arrivé, premier servi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
