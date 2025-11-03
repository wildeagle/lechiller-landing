import React from 'react';

const Header: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const logoUrl = "https://storage.googleapis.com/msgsndr/8ixipiZIelY1viRZue1K/media/6904d7263db4b553c5f9b49c.png"; 

  return (
    <header className="bg-black/80 backdrop-blur-lg sticky top-0 z-50 w-full border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="logo-sweep h-8 w-36">
           <img src={logoUrl} alt="LeChiller® Logo" className="h-full w-full object-contain" />
        </div>
        <button
          onClick={scrollToBooking}
          className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
        >
          Réserver
        </button>
      </div>
    </header>
  );
};

export default Header;
