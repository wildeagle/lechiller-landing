import React from 'react';

const Hero: React.FC = () => {
    const scrollToBooking = () => {
        document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const heroVideoUrl = "https://storage.googleapis.com/msgsndr/8ixipiZIelY1viRZue1K/media/6905f38729ca95376320c14a.mp4";

    return (
        <section className="relative text-white min-h-screen flex flex-col justify-center text-center overflow-hidden fade-in-section pt-24 pb-12" id="home">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6 tracking-tighter">
                        La fin de l'ère de la glace.
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 text-gray-400">
                        Pour Wine Paris, servez la perfection. Sans glace, sans compromis.
                    </p>
                    <button
                        onClick={scrollToBooking}
                        className="bg-cyan-400 text-white font-bold py-4 px-10 text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 shadow-lg shadow-cyan-500/20"
                    >
                        Réserver votre unité
                    </button>
                    <p className="mt-4 text-sm text-amber-400/80 font-semibold">
                      ⚠️ Unités limitées. Premier arrivé, premier servi.
                    </p>
                </div>
                <div className="mt-16 flex justify-center">
                    <video 
                        key={heroVideoUrl}
                        src={heroVideoUrl} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-auto h-96 max-w-full object-contain rounded-lg shadow-2xl shadow-cyan-900/20"
                    >
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Hero;
