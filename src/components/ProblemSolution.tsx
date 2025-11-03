import React from 'react';

const ProblemSolution: React.FC = () => {
  const problemImageUrl = "https://storage.googleapis.com/msgsndr/8ixipiZIelY1viRZue1K/media/69050ba89faf01db3649fad3.png";
  return (
    <section className="py-20 sm:py-32 bg-black fade-in-section">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Laissez l'ère de la glace derrière vous.
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Adieu les sols mouillés, le rafraîchissement inégal et la logistique constante. Adoptez le futur du service.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-cyan-900/20">
              <img
                src={problemImageUrl}
                alt="Comparaison des seaux à glace et du LeChiller® Pro"
                className="w-full"
              />
              <div className="absolute top-0 left-0 right-0 h-[12%] bg-cyan-500 flex items-center text-white font-bold text-2xl tracking-wider">
                <span className="flex-1 text-center">AVANT</span>
                <span className="flex-shrink-0">/</span>
                <span className="flex-1 text-center">APRÈS</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
