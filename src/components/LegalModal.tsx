import React, { useEffect } from 'react';

interface LegalModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const LegalModal: React.FC<LegalModalProps> = ({ title, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-gray-700 sticky top-0 bg-gray-900">
          <h2 id="modal-title" className="text-2xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Fermer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-8 overflow-y-auto text-gray-300 prose prose-invert prose-p:text-gray-300 max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};
