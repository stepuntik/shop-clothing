import { loadStripe } from '@stripe/stripe-js';

const publicKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

export const stripePromise = loadStripe(`${publicKey}`);
