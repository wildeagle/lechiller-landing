import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon.tsx';
import { XCircleIcon } from './icons/XCircleIcon.tsx';

const Comparison: React.FC = () => {
  const comparisonData = [
    { feature: 'Gestion de la glace', lechillerText: 'Aucune', iceBucketText: 'Achat, stockage, remplissage constant' },
    { feature: 'Propreté du stand', lechillerText: 'Impeccable', iceBucketText: 'Sols mouillés, flaques d\'eau' },
    { feature: 'Température', lechillerText: 'Constante et parfaite', iceBucketText: 'Inégale, souvent trop froide' },
    { feature: 'Image de marque', lechillerText: 'Moderne et premium', iceBucketText: 'Traditionnelle et datée' },
    { feature: 'Effort requis', lechillerText: 'Brancher et servir', iceBucketText: 'Surveillance et logistique' },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-900 fade-in-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">La décision est claire.</h2>
          <p className="mt-6 text-xl text-gray-400">
            Comparez LeChiller® Pro à la méthode traditionnelle et voyez la différence par vous-même.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/20 rounded-xl overflow-hidden border border-gray-800">
            <div className="grid grid-cols-3 text-center font-bold text-white text-lg p-5 bg-gray-800/50">
              <span className="text-left">Critère</span>
              <span>LeChiller® Pro</span>
              <span>Seau à glace</span>
            </div>
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-3 text-center items-center p-5 border-t border-gray-800">
                <span className="text-left text-gray-300 font-semibold">{item.feature}</span>
                <div className="flex flex-col items-center justify-center">
                  <CheckCircleIcon />
                  <span className="text-sm text-gray-400 mt-1">{item.lechillerText}</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <XCircleIcon />
                  <span className="text-sm text-gray-400 mt-1">{item.iceBucketText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
