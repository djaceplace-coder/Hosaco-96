import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Programs() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="font-serif italic text-4xl md:text-5xl text-ink-navy mb-6">Programs & Impact</h1>
        <p className="text-ink-navy/70 max-w-2xl mx-auto">Track our ongoing initiatives and see the tangible difference your contributions make.</p>
        <div className="w-px h-16 bg-harmattan-gold/50 mx-auto mt-8" />
      </div>
      
      <div className="space-y-12">
        {/* Placeholder for detailed program list */}
        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-palm-green/10 text-palm-green text-xs font-bold tracking-wider uppercase mb-4">Healthcare</div>
              <h2 className="font-serif text-3xl text-ink-navy mb-4">Vision for All</h2>
              <p className="text-ink-navy/80 mb-6 leading-relaxed">
                Comprehensive eye screening and distribution of corrective lenses to underserved communities. To date, we have screened over 5,000 individuals and provided 1,200 free glasses.
              </p>
              <Button variant="donate">Donate to this program</Button>
            </div>
            <div className="h-64 bg-ink-navy/5 rounded-lg flex items-center justify-center">
              <span className="text-ink-navy/40 font-mono text-sm">Interactive Map / Media Placeholder</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
