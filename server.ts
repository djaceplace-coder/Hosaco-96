import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import Stripe from 'stripe';
import crypto from 'crypto';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Supabase service_role key for webhooks (server-side only)
  const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://zuutgwcuyobgysbnvixv.supabase.co';
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'dummy_service_key';

  // Providers
  let stripeClient: Stripe | null = null;
  const getStripe = () => {
    if (!stripeClient) {
       if (process.env.STRIPE_SECRET_KEY) {
         stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);
       }
    }
    return stripeClient;
  };

  const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;

  // Webhooks need raw body for signature verification
  app.post('/api/webhooks/stripe', express.raw({type: 'application/json'}), (req, res) => {
    const stripe = getStripe();
    if (!stripe) return res.status(500).send('Stripe not configured');
    const sig = req.headers['stripe-signature'];
    
    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, sig as string, process.env.STRIPE_WEBHOOK_SECRET || '');
    } catch (err: any) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      console.log('Stripe Payment succeeded:', session.id);
      // Update supabase via service role here...
    }

    res.json({received: true});
  });

  // Body parser for rest
  app.use(express.json());

  app.post('/api/webhooks/paystack', (req, res) => {
    const hash = crypto.createHmac('sha512', PAYSTACK_SECRET || '')
                       .update(JSON.stringify(req.body))
                       .digest('hex');
    
    if (hash === req.headers['x-paystack-signature']) {
      const event = req.body;
      if (event.event === 'charge.success') {
        console.log('Paystack Payment succeeded:', event.data.reference);
        // Update supabase via service role here...
      }
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  });

  app.post('/api/checkout/stripe', async (req, res) => {
    const stripe = getStripe();
    if (!stripe) return res.json({ url: '/donate?error=StripeNotConfigured' });
    
    const { amount, type, tier_id, program_id, email, user_id } = req.body;
    
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'ngn',
              product_data: {
                name: type === 'subscription' ? `Membership: ${tier_id}` : `Donation${program_id ? ' to ' + program_id : ''}`,
              },
              unit_amount: amount * 100, // Stripe expects lowest denomination
            },
            quantity: 1,
          },
        ],
        mode: 'payment', // using payment mode for one-offs. Subscriptions might need recurring.
        success_url: `http://${req.headers.host}/account/donations?success=true`,
        cancel_url: `http://${req.headers.host}/donate?canceled=true`,
        customer_email: email,
        metadata: { type, tier_id, program_id, user_id }
      });

      res.json({ url: session.url });
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  });

  app.post('/api/checkout/paystack', async (req, res) => {
    if (!PAYSTACK_SECRET) return res.json({ url: '/donate?error=PaystackNotConfigured' });

    const { amount, type, tier_id, program_id, email, user_id } = req.body;
    
    try {
      const response = await fetch('https://api.paystack.co/transaction/initialize', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          amount: amount * 100, // Paystack expects lowest denomination (kobo)
          callback_url: `http://${req.headers.host}/account/donations?success=true`,
          metadata: { type, tier_id, program_id, user_id }
        })
      });

      const data = await response.json();
      if (data.status) {
         res.json({ url: data.data.authorization_url });
      } else {
         throw new Error(data.message);
      }
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
