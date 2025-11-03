import React from 'react';
import { BoltIcon } from './icons/BoltIcon.tsx';
import { SparklesIcon } from './icons/SparklesIcon.tsx';
import { ThermometerIcon } from './icons/ThermometerIcon.tsx';
import { TruckIcon } from './icons/TruckIcon.tsx';

const features = [
  { icon: <ThermometerIcon />, title: 'Température parfaite', description: 'Chaque bouteille est servie à la température de dégustation idéale, à chaque fois.' },
  { icon: <TruckIcon />, title: 'Zéro logistique', description: 'Pas de glace, pas d\'eau, pas de désordre. Nous livrons, vous branchez. C\'est tout.' },
  { icon: <SparklesIcon />, title: 'Design élégant', description: 'Son design épuré et moderne met en valeur votre stand et reflète la qualité de votre marque.' },
  { icon: <BoltIcon />, title: 'Utilisation sans effort', description: 'Des commandes intuitives et un refroidissement rapide pour vous concentrer sur vos clients.' },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-black fade-in-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Une expérience inégalée.</h2>
          <p className="mt-6 text-xl text-gray-400">
            LeChiller® Pro est plus qu'un rafraîchisseur. C'est une déclaration de qualité et de professionnalisme.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-900 text-cyan-400 mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <button
            onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-800 text-white font-bold py-3 px-8 text-lg rounded-full hover:bg-cyan-500 hover:text-black border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
          >
            Je réserve mon unité
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
