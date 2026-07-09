import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function GetInvolved() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="font-serif italic text-4xl md:text-5xl text-ink-navy mb-6">Get Involved</h1>
        <p className="text-ink-navy/70 max-w-2xl mx-auto">Your contributions fund our programs. Earn your seal by subscribing to a membership tier or making a one-time donation.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="p-8 text-center flex flex-col">
          <div className="w-16 h-16 mx-auto rounded-full bg-harmattan-gold/20 flex items-center justify-center mb-6">
            <span className="font-serif font-bold text-harmattan-gold">B</span>
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-2">Basic</h3>
          <p className="text-ink-navy/60 text-sm mb-6 flex-grow">Standard alumni membership with directory access and newsletter.</p>
          <div className="text-3xl font-mono font-bold mb-6">₦10,000<span className="text-sm font-sans font-normal text-ink-navy/50">/yr</span></div>
          <Button className="w-full">Select Basic</Button>
        </Card>
        
        <Card className="p-8 text-center flex flex-col border-harmattan-gold/50 shadow-lg relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-harmattan-gold text-ink-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Recommended</div>
          <div className="w-16 h-16 mx-auto rounded-full bg-slate-300 flex items-center justify-center mb-6 shadow-inner">
            <span className="font-serif font-bold text-slate-700">P</span>
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-2">Patron</h3>
          <p className="text-ink-navy/60 text-sm mb-6 flex-grow">Enhanced support with early event access and governance voting rights.</p>
          <div className="text-3xl font-mono font-bold mb-6">₦50,000<span className="text-sm font-sans font-normal text-ink-navy/50">/yr</span></div>
          <Button className="w-full">Select Patron</Button>
        </Card>

        <Card className="p-8 text-center flex flex-col">
          <div className="w-16 h-16 mx-auto rounded-full bg-harmattan-gold flex items-center justify-center mb-6 shadow-md">
            <span className="font-serif font-bold text-white">L</span>
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-2">Life Member</h3>
          <p className="text-ink-navy/60 text-sm mb-6 flex-grow">Ultimate commitment. Lifetime recognition on the honors ledger.</p>
          <div className="text-3xl font-mono font-bold mb-6">₦500,000<span className="text-sm font-sans font-normal text-ink-navy/50">one-time</span></div>
          <Button className="w-full">Select Life</Button>
        </Card>
      </div>
    </div>
  );
}
