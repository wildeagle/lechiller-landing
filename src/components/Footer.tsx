import React, { useState } from 'react';
import { LegalModal } from './LegalModal.tsx';
import { PrivacyPolicy } from './PrivacyPolicy.tsx';

type ModalContent = 'privacy' | null;

const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<ModalContent>(null);
  const logoUrl = "https://storage.googleapis.com/msgsndr/8ixipiZIelY1viRZue1K/media/6904d7263db4b553c5f9b49c.png";
  const openModal = (content: ModalContent) => setModalContent(content);
  const closeModal = () => setModalContent(null);
  const currentModal = modalContent === 'privacy' ? { title: 'Politique de Confidentialité', content: <PrivacyPolicy /> } : null;

  return (
    <>
      <footer className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 py-8 text-center text-gray-500">
           <div className="logo-sweep h-10 w-44 mx-auto mb-6 opacity-70">
              <img src={logoUrl} alt="LeChiller® Logo" className="h-full w-full object-contain" />
          </div>
          <p>&copy; {new Date().getFullYear()} LeChiller®. Tous droits réservés.</p>
          <p className="text-sm mt-2">Ceci est une page de location promotionnelle pour l'événement Wine Paris.</p>
          <div className="mt-6 border-t border-gray-800 pt-6 flex justify-center items-center space-x-4 sm:space-x-6 text-xs">
            <a href="https://lechiller.com/en/policies/legal-notice" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mentions Légales</a>
            <span className="text-gray-600">|</span>
            <a href="https://lechiller.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Conditions Générales de Vente</a>
            <span className="text-gray-600">|</span>
            <a href="#" onClick={(e) => { e.preventDefault(); openModal('privacy'); }} className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </footer>
      {currentModal && (
        <LegalModal title={currentModal.title} onClose={closeModal}>
          {currentModal.content}
        </LegalModal>
      )}
    </>
  );
};

export default Footer;
