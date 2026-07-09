import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';
import { supabase } from '../lib/supabase';

const PRESET_AMOUNTS = [5000, 25000, 100000];

export default function Donate() {
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('program');
  const navigate = useNavigate();
  
  const [type, setType] = useState<'donation' | 'subscription'>('donation');
  const [amount, setAmount] = useState<number | ''>(5000);
  const [tier, setTier] = useState<string>('basic');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [programName, setProgramName] = useState<string | null>(null);

  useEffect(() => {
    if (programId) {
      // Mock fetch, ideally fetch from Supabase
      const names: any = { 'vision': 'Vision for All', 'hep-b': 'Hepatitis B Awareness' };
      setProgramName(names[programId] || 'Selected Program');
    }
  }, [programId]);

  const handleCheckout = async (provider: 'paystack' | 'stripe') => {
    setLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const payload = {
        type,
        amount: type === 'donation' ? Number(amount) : null,
        tier_id: type === 'subscription' ? tier : null,
        program_id: type === 'donation' && programId ? programId : null,
        user_id: session?.user?.id || null,
        email: session?.user?.email || 'guest@example.com' // Should collect email if guest
      };

      const res = await fetch(`/api/checkout/${provider}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      console.error(err);
      alert('Error initiating checkout. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-12">
            <h1 className="font-serif italic text-4xl md:text-5xl text-ink-navy mb-4">Support Our Cause</h1>
            <p className="text-lg text-ink-navy/70">
              {programName ? `You are donating to: ${programName}` : 'Your contribution makes a lasting impact.'}
            </p>
            {programName && (
              <button onClick={() => navigate('/donate')} className="mt-2 text-sm text-brick-clay hover:underline">
                Change to General Fund
              </button>
            )}
          </div>

          <Card className="p-8 md:p-12 border border-ink-navy/10 shadow-xl bg-white relative overflow-hidden">
            {step === 1 ? (
              <div className="space-y-8 relative z-10">
                {/* Type Toggle */}
                <div className="flex p-1 bg-ink-navy/5 rounded-lg w-full max-w-sm mx-auto">
                  <button 
                    onClick={() => setType('donation')} 
                    className={`flex-1 py-2 text-sm font-bold tracking-wider uppercase rounded-md transition-all ${type === 'donation' ? 'bg-white text-ink-navy shadow' : 'text-ink-navy/60 hover:text-ink-navy'}`}
                  >
                    One-Time
                  </button>
                  <button 
                    onClick={() => setType('subscription')} 
                    className={`flex-1 py-2 text-sm font-bold tracking-wider uppercase rounded-md transition-all ${type === 'subscription' ? 'bg-white text-ink-navy shadow' : 'text-ink-navy/60 hover:text-ink-navy'}`}
                  >
                    Subscribe
                  </button>
                </div>

                {type === 'donation' ? (
                  <div className="space-y-6">
                    <h3 className="font-serif text-2xl text-ink-navy text-center">Select an Amount</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {PRESET_AMOUNTS.map(amt => (
                        <button
                          key={amt}
                          onClick={() => setAmount(amt)}
                          className={`py-4 rounded-xl border-2 font-mono text-xl transition-all ${amount === amt ? 'border-harmattan-gold bg-harmattan-gold/10 text-ink-navy' : 'border-ink-navy/10 text-ink-navy/60 hover:border-ink-navy/30'}`}
                        >
                          ₦{amt.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-ink-navy/50 font-mono text-xl">₦</span>
                      </div>
                      <input 
                        type="number" 
                        value={amount} 
                        onChange={e => setAmount(Number(e.target.value))}
                        placeholder="Custom Amount" 
                        className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-ink-navy/10 focus:border-harmattan-gold focus:ring-0 font-mono text-xl text-ink-navy outline-none"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                     <h3 className="font-serif text-2xl text-ink-navy text-center">Select Membership Tier</h3>
                     <div className="grid gap-4">
                        <button onClick={() => setTier('basic')} className={`p-4 text-left border-2 rounded-xl flex justify-between items-center transition-all ${tier === 'basic' ? 'border-harmattan-gold bg-harmattan-gold/10' : 'border-ink-navy/10 hover:border-ink-navy/30'}`}>
                          <div>
                            <div className="font-serif text-xl text-ink-navy font-semibold">Basic Member</div>
                            <div className="text-ink-navy/70 text-sm">Annual subscription</div>
                          </div>
                          <div className="font-mono text-xl text-ink-navy font-bold">₦10,000<span className="text-sm font-sans font-normal text-ink-navy/60">/yr</span></div>
                        </button>
                        <button onClick={() => setTier('patron')} className={`p-4 text-left border-2 rounded-xl flex justify-between items-center transition-all relative overflow-hidden ${tier === 'patron' ? 'border-brick-clay bg-brick-clay/10' : 'border-ink-navy/10 hover:border-ink-navy/30'}`}>
                          {tier === 'patron' && <div className="absolute top-0 right-0 bg-brick-clay text-white text-[10px] font-bold px-2 py-1 uppercase rounded-bl">Recommended</div>}
                          <div>
                            <div className="font-serif text-xl text-ink-navy font-semibold">Patron</div>
                            <div className="text-ink-navy/70 text-sm">Enhanced annual support</div>
                          </div>
                          <div className="font-mono text-xl text-ink-navy font-bold">₦50,000<span className="text-sm font-sans font-normal text-ink-navy/60">/yr</span></div>
                        </button>
                        <button onClick={() => setTier('life')} className={`p-4 text-left border-2 rounded-xl flex justify-between items-center transition-all ${tier === 'life' ? 'border-adire-indigo bg-adire-indigo/10' : 'border-ink-navy/10 hover:border-ink-navy/30'}`}>
                          <div>
                            <div className="font-serif text-xl text-ink-navy font-semibold">Life Member</div>
                            <div className="text-ink-navy/70 text-sm">One-time payment</div>
                          </div>
                          <div className="font-mono text-xl text-ink-navy font-bold">₦500,000</div>
                        </button>
                     </div>
                  </div>
                )}

                <Button 
                  onClick={() => setStep(2)} 
                  variant="primary" 
                  size="lg" 
                  className="w-full h-14 text-lg"
                  disabled={type === 'donation' && (!amount || amount < 100)}
                >
                  Continue
                </Button>
              </div>
            ) : (
              <div className="space-y-8 relative z-10">
                <button onClick={() => setStep(1)} className="text-ink-navy/60 hover:text-ink-navy text-sm font-medium mb-4 flex items-center">
                  ← Back
                </button>
                <h3 className="font-serif text-2xl text-ink-navy text-center mb-8">Choose how you'd like to pay</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <button 
                    onClick={() => handleCheckout('paystack')}
                    disabled={loading}
                    className="p-6 border-2 border-ink-navy/10 rounded-xl hover:border-palm-green hover:bg-palm-green/5 transition-all text-left flex flex-col h-full group disabled:opacity-50"
                  >
                    <div className="text-xl font-bold text-ink-navy mb-2 group-hover:text-palm-green transition-colors">Paystack</div>
                    <p className="text-sm text-ink-navy/70 leading-relaxed mb-4 flex-grow">
                      Pay via Cards, Bank Transfer, or USSD.
                      <br/><span className="text-palm-green font-medium">Recommended for Nigerian donors.</span>
                    </p>
                    <div className="mt-auto w-full py-2 bg-ink-navy text-white text-center rounded text-sm font-medium group-hover:bg-palm-green transition-colors">
                      {loading ? 'Processing...' : 'Pay with Paystack'}
                    </div>
                  </button>

                  <button 
                    onClick={() => handleCheckout('stripe')}
                    disabled={loading}
                    className="p-6 border-2 border-ink-navy/10 rounded-xl hover:border-adire-indigo hover:bg-adire-indigo/5 transition-all text-left flex flex-col h-full group disabled:opacity-50"
                  >
                    <div className="text-xl font-bold text-ink-navy mb-2 group-hover:text-adire-indigo transition-colors">Stripe</div>
                    <p className="text-sm text-ink-navy/70 leading-relaxed mb-4 flex-grow">
                      Pay via International Credit & Debit Cards.
                    </p>
                    <div className="mt-auto w-full py-2 bg-ink-navy text-white text-center rounded text-sm font-medium group-hover:bg-adire-indigo transition-colors">
                      {loading ? 'Processing...' : 'Pay with Stripe'}
                    </div>
                  </button>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
