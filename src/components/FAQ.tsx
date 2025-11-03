import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon.tsx';

const faqData = [
  { question: "Comment LeChiller® Pro est-il livré et installé ?", answer: "Nous nous occupons de tout. LeChiller® Pro sera livré, installé et prêt à l'emploi directement sur votre stand avant le début de Wine Paris. Après l'événement, nous viendrons le récupérer. Zéro logistique pour vous." },
  { question: "Combien de bouteilles peut-il contenir ?", answer: "LeChiller® Pro peut accueillir et rafraîchir simultanément jusqu'à 3 bouteilles de format standard (75cl), y compris les bouteilles de Champagne plus larges." },
  { question: "Quelle est la durée de la location ?", answer: "L'offre de 980€ HT couvre toute la durée du salon Wine Paris, soit 3 jours. Vous disposez de l'appareil du premier au dernier jour de l'événement." },
  { question: "Quelle est votre politique d'annulation ?", answer: "Vous pouvez annuler sans frais jusqu'à 30 jours avant le début de l'événement. Pour toute annulation effectuée après cette date, des frais de 50% seront retenus. Aucun remboursement ne sera possible pour les annulations à moins de 7 jours de l'événement." },
  { question: "Un support technique est-il disponible sur place ?", answer: "Oui, absolument. Une équipe technique sera présente sur le site de Wine Paris pendant toute la durée du salon pour répondre à toute question ou intervenir rapidement en cas de besoin." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 sm:py-32 bg-black fade-in-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Questions fréquentes.</h2>
          <p className="mt-4 text-lg text-gray-400">
            Trouvez ici les réponses à vos questions.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <ChevronDownIcon className={`h-6 w-6 text-cyan-400 transform transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-6 pt-0 text-gray-400">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
