import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon.tsx';

const WhatsAppButton: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);
  useEffect(() => {
    const faqSection = document.getElementById('faq-section');
    if (!faqSection) return;
    const observer = new IntersectionObserver(([entry]) => setShowBubble(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(faqSection);
    return () => observer.unobserve(faqSection);
  }, []);
  
  const phoneNumber = '33644601704'; 
  const message = "Bonjour, j'ai une question concernant la location du LeChiller® Pro pour Wine Paris.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-4">
      {showBubble && (
        <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg animate-bubble-enter relative">
          <p className="text-sm font-semibold">Une question ? Discutez avec nous !</p>
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-800"></div>
        </div>
      )}
      <a
        href={whatsappUrl} target="_blank" rel="noopener noreferrer"
        className={`bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 ${showBubble ? 'animate-pulse-whatsapp' : ''}`}
        aria-label="Contacter sur WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default WhatsAppButton;
