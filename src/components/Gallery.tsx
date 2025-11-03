import React from 'react';

const imageUrls = [
  "https://storage.googleapis.com/msgsndr/8ixipiZIelY1viRZue1K/media/6905f7aa4e2acbf9f1bea85e.jpeg",
  "https://storage.googleapis.com/msgsndr/8ixipiZIelY1viRZue1K/media/6905f7aac94f8b29347a4a60.jpeg",
  "https://storage.googleapis.com/msgsndr/8ixipiZIelY1viRZue1K/media/6905f7aa29ca9567a1212b0d.jpeg",
  "https://storage.googleapis.com/msgsndr/8ixipiZIelY1viRZue1K/media/6905f7aa29ca956856212b0c.jpeg"
];

const GalleryImage: React.FC<{ src: string, alt: string, className: string }> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} loading="lazy" className={`${className} w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500`} />;
};

const Gallery: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-black fade-in-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">L'élégance en action.</h2>
          <p className="mt-6 text-xl text-gray-400">
            Découvrez comment LeChiller® Pro sublime l'expérience lors des événements professionnels.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
            <div className="col-span-2 md:col-span-2 row-span-2 rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                 <GalleryImage src={imageUrls[0]} alt="LeChiller® Pro dans un stand d'événement" className="aspect-[4/3]" />
            </div>
            <div className="col-span-1 rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                 <GalleryImage src={imageUrls[1]} alt="Clients servis avec du vin parfaitement frais" className="aspect-square" />
            </div>
             <div className="col-span-1 rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                 <GalleryImage src={imageUrls[2]} alt="Gros plan sur LeChiller® Pro" className="aspect-square" />
            </div>
             <div className="col-span-2 rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                 <GalleryImage src={imageUrls[3]} alt="Vue de dessus du LeChiller® Pro avec bouteilles" className="aspect-[16/9]" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
