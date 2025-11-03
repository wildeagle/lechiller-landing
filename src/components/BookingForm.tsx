import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { LockIcon } from './icons/LockIcon.tsx';

declare global { interface Window { Stripe?: any; } }

const STRIPE_PUBLIC_KEY = 'pk_test_51Rfz0cFZsNAKix7FYI15VbwUMfA31ixIcCjj4S6u1omKBv3XU2f5TmA5HE0vDlPxDBs0UnH0KOPqxuUJRfNdB2gz00no0XgJnR';

const SuccessMessage: React.FC = () => (
    <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">Félicitations. Votre expérience Wine Paris sera parfaite.</h2>
        <div className="text-lg text-gray-300 max-w-2xl mx-auto space-y-4">
            <p>Votre LeChiller® Pro est réservé.</p>
            <p>Concentrez-vous sur l’essentiel : vos clients. Nous nous occupons du reste.</p>
            <p>Un récapitulatif de votre réservation vient d’être envoyé à votre <span className="whitespace-nowrap">adresse e-mail</span>.</p>
        </div>
    </div>
);

const FormContent: React.FC<any> = memo(({
    formData,
    status,
    errorMessage,
    cardContainerRef,
    handleSubmit,
    handleChange,
    handleUnitChange
}) => (
    <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Réservez votre LeChiller®.</h2>
            <p className="mt-4 text-lg text-gray-400">Finalisez votre réservation pour Wine Paris. Disponibilité limitée.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="companyName" placeholder="Nom de l'entreprise" value={formData.companyName} onChange={handleChange} required onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Veuillez remplir ce champ.')} onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700" />
            <input type="text" name="contactName" placeholder="Nom du contact" value={formData.contactName} onChange={handleChange} required onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Veuillez remplir ce champ.')} onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="email" name="email" placeholder="Adresse e-mail" value={formData.email} onChange={handleChange} required onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Veuillez remplir ce champ.')} onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700" />
                <input type="tel" name="phone" placeholder="Numéro de téléphone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700" />
            </div>
            <div>
                <label className="block text-gray-300 mb-2 font-medium text-center">Nombre d'unités</label>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={() => handleUnitChange(-1)} className="bg-gray-700 text-white font-bold p-3 rounded-l-md hover:bg-gray-600">-</button>
                    <input type="number" name="units" value={formData.units} readOnly className="w-24 text-center bg-gray-800 text-white p-3 border-t border-b border-gray-700" />
                    <button type="button" onClick={() => handleUnitChange(1)} className="bg-gray-700 text-white font-bold p-3 rounded-r-md hover:bg-gray-600">+</button>
                </div>
            </div>
            <div>
                <label className="block text-gray-300 mb-2 font-medium">Informations de paiement</label>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <div ref={cardContainerRef}></div>
                </div>
            </div>
            {status === 'error' && <div className="text-red-400 text-center p-3 bg-red-900/20 rounded-md">{errorMessage}</div>}
            <div className="text-center pt-4">
                <div className="flex items-center justify-center text-gray-400 mb-4"><LockIcon /><span className="ml-2 text-sm">Paiement 100% sécurisé par Stripe</span></div>
                <button type="submit" disabled={status === 'loading'} className="w-full md:w-auto bg-cyan-400 text-white font-bold py-4 px-12 text-lg rounded-full disabled:bg-gray-600">
                    {status === 'loading' ? 'Paiement en cours...' : `Payer ${formData.units * 980}€ HT`}
                </button>
            </div>
        </form>
    </div>
));

const BookingForm: React.FC = () => {
    const [formData, setFormData] = useState({ companyName: '', contactName: '', email: '', phone: '', units: 1 });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    
    const stripeRef = useRef<any>(null);
    const cardElementRef = useRef<any>(null);
    const cardContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.Stripe && !stripeRef.current) {
            const stripe = window.Stripe(STRIPE_PUBLIC_KEY);
            stripeRef.current = stripe;
            const elements = stripe.elements({ locale: 'fr' });
            const cardElement = elements.create('card', {
                style: {
                    base: { color: '#ffffff', fontFamily: '"Montserrat", sans-serif', fontSize: '16px', '::placeholder': { color: '#6b7280' } },
                    invalid: { color: '#f87171', iconColor: '#f87171' },
                },
            });
            cardElementRef.current = cardElement;
            if (cardContainerRef.current) {
                cardElement.mount(cardContainerRef.current);
            }
        }
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    const handleUnitChange = useCallback((amount: number) => {
        setFormData(prev => ({ ...prev, units: Math.max(1, prev.units + amount) }));
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!stripeRef.current || !cardElementRef.current) {
            setErrorMessage("Le service de paiement n'est pas prêt."); setStatus('error'); return;
        }
        setStatus('loading'); setErrorMessage('');
        const { error, paymentMethod } = await stripeRef.current.createPaymentMethod({
            type: 'card', card: cardElementRef.current,
            billing_details: { name: formData.contactName, email: formData.email, phone: formData.phone },
        });
        if (error) { setErrorMessage(error.message || "Une erreur est survenue."); setStatus('error'); } 
        else {
            try {
                const response = await fetch('/api/create-booking', {
                    method: 'POST', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...formData, paymentMethodId: paymentMethod.id }),
                });
                if (!response.ok) {
                    const errorData = await response.json(); throw new Error(errorData.message || 'Une erreur est survenue.');
                }
                setStatus('success');
            } catch (backendError: any) {
                setErrorMessage(backendError.message || "Erreur de communication."); setStatus('error');
            }
        }
    }, [formData]);

    return (
        <section id="booking-form" className="py-20 sm:py-32 bg-gray-900 fade-in-section relative">
             <div className="container mx-auto px-6 grid grid-cols-1 grid-rows-1 items-center justify-items-center min-h-[850px]">
                <div className={`transition-opacity duration-700 [grid-area:1/1] w-full ${status === 'success' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <SuccessMessage />
                </div>
                <div className={`transition-opacity duration-700 [grid-area:1/1] w-full ${status === 'success' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <FormContent
                        formData={formData}
                        status={status}
                        errorMessage={errorMessage}
                        cardContainerRef={cardContainerRef}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleUnitChange={handleUnitChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
