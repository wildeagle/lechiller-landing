import React from 'react';
import { StarIcon } from './icons/StarIcon.tsx';

const testimonials = [
  { quote: "Révolutionnaire. Nous avons loué 2 LeChiller® pour notre stand à Wine Paris et nous sommes absolument conquis. Plus besoin de glace, plus d'eau sur le stand... C'est un outil formidable, efficace, silencieux et design.", author: "Champagne Gremillet", rating: 5 },
  { quote: "Zéro contrainte, discret, efficace et très design ! Idéal pour un stand de salon ou pour un événement. Plus besoin de se soucier de la glace et de l'eau partout... Je recommande !", author: "Maison R&C", rating: 5 },
  { quote: "Une solution idéale, plus de contrainte de glace, les bouteilles sont toujours à la bonne température et l'objet est design. Nous recommandons vivement !", author: "Champagne Paul Launois", rating: 5 },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-black fade-in-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Approuvé par les meilleurs.</h2>
          <p className="mt-6 text-xl text-gray-400">
            Des exposants comme vous ont déjà fait le saut vers le futur.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 text-center">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="text-gray-300 text-xl italic mb-4 leading-relaxed">“{testimonial.quote}”</blockquote>
              <footer className="mt-6">
                <p className="font-bold text-cyan-400 text-lg">— {testimonial.author}</p>
              </footer>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
            <button
              onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-400 text-white font-bold py-4 px-10 text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Je veux la même expérience
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
