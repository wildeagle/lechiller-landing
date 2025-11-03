import React from 'react';

export const PrivacyPolicy: React.FC = () => (
    <>
      <h3>1. Collecte de l'information</h3>
      <p>Nous recueillons des informations lorsque vous remplissez le formulaire de réservation sur notre site...</p>
      {/* (rest of privacy policy text is omitted for brevity but should be included) */}
      <p className="mt-6 p-4 bg-yellow-900/30 text-yellow-300 border-yellow-700/50 rounded-md">
        <strong>AVERTISSEMENT :</strong> Ceci est un texte générique. Veuillez consulter un professionnel du droit.
      </p>
    </>
);
