import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée.' });
  }

  try {
    const { email, contactName, phone, companyName, units, paymentMethodId } = req.body;

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      // FIX: Updated Stripe API version to match the expected type from the library.
      apiVersion: '2025-10-29.clover',
    });

    const amount = units * 980 * 100;

    await stripe.paymentIntents.create({
      amount: amount,
      currency: 'eur',
      payment_method: paymentMethodId,
      confirm: true,
      description: `Location LeChiller® x${units} pour Wine Paris - ${companyName}`,
      automatic_payment_methods: { enabled: true, allow_redirects: 'never' },
    });

    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_API_URL = 'https://rest.gohighlevel.com/v1/contacts/';

    const contactData = {
      email: email,
      name: contactName,
      phone: phone,
      companyName: companyName,
      tags: ['Achat-LeChiller-WineParis-Test'],
      source: 'Landing Page Wine Paris'
    };
    
    await fetch(GHL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GHL_API_KEY}`
      },
      body: JSON.stringify(contactData)
    });

    res.status(200).json({ message: 'Réservation créée avec succès !' });

  } catch (error: any) {
    console.error('Erreur lors de la création de la réservation:', error);
    res.status(500).json({ message: error.message || 'Une erreur interne est survenue.' });
  }
}
